import mongoose from "mongoose";
const Schema = mongoose.Schema;

const inboundDataSchema = new Schema({}, { strict: false });

export default  mongoose.model("ExcelInbound", inboundDataSchema);