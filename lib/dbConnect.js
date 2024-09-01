
import mongoose from 'mongoose';
const mongodb_uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster.moyruxt.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster`;

const connection = {};

async function dbConnect() {
  // Check if we have a connection to the database or if it's currently connecting
  if (connection.isConnected) {
    console.log('Already connected to the database');
    return;
  }

  try {
    // Attempt to connect to the database
    const db = await mongoose.connect(mongodb_uri || '', {});
    connection.isConnected = db.connections[0].readyState;

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);

    // Graceful exit in case of a connection error
    process.exit(1);
  }
}

export default dbConnect;