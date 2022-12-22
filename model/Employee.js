import mongoose from "mongoose";
import { jobSchema } from "./Job.js";

const employeeSchema = mongoose.Schema({
  employee_name: { type: String, required: true },
  job: jobSchema,
});

export const employeeModel = mongoose.model("Employee", employeeSchema);
