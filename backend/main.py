from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List



app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return{'Ping':'Pong'}


class Node(BaseModel):
    id:str

class Edge(BaseModel):
    source:str
    target:str

class Pipeline(BaseModel):
    nodes:List[Node]
    edges:List[Edge]


def is_dag(nodes, edges):
    
    graph = {node.id: [] for node in nodes}
    for edge in edges:
        graph[edge.source].append(edge.target)

    state = {node.id: 0 for node in nodes}

    def dfs(node_id):
        state[node_id] = 1  # visiting
        for neighbor in graph[node_id]:
            if state[neighbor] == 1:  # cycle 
                return False
            if state[neighbor] == 0:
                if not dfs(neighbor):
                    return False
        state[node_id] = 2  # done
        return True

    for node in nodes:
        if state[node.id] == 0:
            if not dfs(node.id):
                return False
    return True

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    dag = is_dag(pipeline.nodes, pipeline.edges)
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': dag
    }