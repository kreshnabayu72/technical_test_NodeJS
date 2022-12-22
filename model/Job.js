import mongoose from "mongoose";

export const jobSchema = mongoose.Schema({
  job_name: { type: String, required: true },
});

export const jobModel = mongoose.model("Job", jobSchema);
