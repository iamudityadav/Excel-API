import mongoose from "mongoose";
const Schema = mongoose.Schema;

const outboundDataSchema = new Schema({}, { strict: false });

export default mongoose.model("ExcelOutbound", outboundDataSchema);