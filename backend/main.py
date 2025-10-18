from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

class AccountRequest(BaseModel):
    username: str
    password: str

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # or ["*"] to allow all origins (not for production)
    allow_credentials=True,
    allow_methods=["*"],        # e.g. ["GET", "POST"]
    allow_headers=["*"],        # e.g. ["Content-Type", "Authorization"]
)

@app.post("/createaccount")
async def createaccount(data: AccountRequest):
    print(f"Got username={data.username}, password={data.password}")
    return {"message": f"Welcome, {data.username}!"}

@app.post("/login")
async def login(data: AccountRequest):
    print(f"Got username={data.username}, password={data.password}")
    return {"message": f"Welcome, {data.username}!"}
