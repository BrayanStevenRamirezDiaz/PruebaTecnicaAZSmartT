from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from data import devices
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Device(BaseModel):
    id: int
    name: str
    status: str

@app.get("/devices", response_model=List[Device])
def get_devices():
    return devices

@app.post("/devices", response_model=Device)
def add_device(device: Device):
    devices.append(device.dict())
    return device