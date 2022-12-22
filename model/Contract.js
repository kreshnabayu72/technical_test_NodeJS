import mongoose from "mongoose";

const contractSchema = mongoose.Schema({
  contract_name: { type: String, required: true },
});

export const contractModel = mongoose.model("Contract", contractSchema);
