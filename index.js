import express from "express";
import mongoose from "mongoose";
import { contractModel } from "./model/Contract.js";
import { employeeModel } from "./model/Employee.js";
import { jobModel } from "./model/Job.js";
import multer from "multer";

const app = express();
const upload = multer();

mongoose.connect("mongodb://127.0.0.1:27017/folarium", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/api/contract", async (req, res) => {
  try {
    const newContract = new contractModel({ contract_name: "Tes123" });
    const result = await newContract.save();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get("/api/job", async (req, res) => {
  try {
    const result = await jobModel.find();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
app.post("/api/job", async (req, res) => {
  try {
    const newJob = new jobModel({ job_name: "Tes123" });
    const result = await newJob.save();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get("/api/employee", async (req, res) => {
  try {
    const result = await employeeModel.find();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});
app.post("/api/employee", upload.single(), async (req, res) => {
  try {
    const job = await jobModel.findOne({ _id: req.body.job });
    const newEmployee = new employeeModel({
      employee_name: req.body.employee_name,
      job: job,
    });
    const result = await newEmployee.save();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.put("/api/employee/:id", upload.single(), async (req, res) => {
  try {
    const employee = employeeModel.findOne({ _id: req.params.id });
    const updatedEmployee = req.body;

    const result = await userModel.updateOne(employee, updatedEmployee);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});
app.delete("/api/employee/:id", async (req, res) => {
  try {
    const employee = employeeModel.findOne({ _id: req.params.id });
    const result = await employee.deleteOne();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.listen(5000, (req, res) => {
  console.log("app in 5000");
});
