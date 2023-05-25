import mongoose from "mongoose";

const connection = {};

async function connect() {
  if (connect.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGODB_URI);

  connection.isConnected = db.connections[0].readyState;
}

export default connect;
