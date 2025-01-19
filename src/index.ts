import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/tasks", async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
});

app.post("/tasks", async (req, res) => {
    const { title, color } = req.body;
    const newTask = await prisma.task.create({ data: { title, color } });
    res.status(201).json(newTask);
});

app.put("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    const updatedTask = await prisma.task.update({
        where: { id: Number(id) },
        data: { title, color, completed },
    });
    res.json(updatedTask);
});

app.delete("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    await prisma.task.delete({ where: { id: Number(id) } });
    res.status(204).send();
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
