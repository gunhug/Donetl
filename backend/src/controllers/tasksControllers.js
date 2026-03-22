import Task from "../models/Task"


export const getAllTasks = (req, res) => {
    res.status(200).send("ban co 10 viec can lam")
}

export const createTask = (req, res) => {
    res.status(201).json({message: "nhiem vu da duoc tao thanh cong"})
}

export const updateTask = (req, res) => {
    res.status(200).json({message: "nhiem vu da duoc cap nhat thanh cong"})
}

export const deleteTask = (req, res) => {
    res.status(200).json({message: "nhiem vu da duoc xoa thanh cong"})
}