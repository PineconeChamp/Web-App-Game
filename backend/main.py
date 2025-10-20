from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from sqlalchemy.orm import Session
from backend import models, schemas, crud
from .db import engine, SessionLocal

app = FastAPI()

class AccountRequest(BaseModel):
    username: str
    password: str

origins = [
    "http://localhost:5173",
    "http://localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],    # or ["*"] to allow all origins (not for production)
    allow_credentials=True,
    allow_methods=["*"],        # e.g. ["GET", "POST"]
    allow_headers=["*"],        # e.g. ["Content-Type", "Authorization"]
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/createaccount")
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    print(f"Creating user with username={user.username}, password={user.password}")
    return crud.create_user(db, user)


#@app.post("/createaccount")
#async def createaccount(data: AccountRequest):
    #print(f"Got username={data.username}, password={data.password}")
    #return {"message": f"Welcome, {data.username}!"}

@app.post("/login")
async def login(data: AccountRequest):
    print(f"Got username={data.username}, password={data.password}")
    return {"message": f"Welcome, {data.username}!"}
