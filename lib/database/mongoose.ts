import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null, promise: null
  }
}

export const connectToDatabase = async () => {
  // 检查是否存在已缓存的连接
  if (cached.conn) return cached.conn

  if(!MONGODB_URL) throw new Error('Missing MONGODB_URL')

  // 新建连接
  cached.promise = cached.promise || mongoose.connect(
    MONGODB_URL, 
    { dbName: 'Imaginify', bufferCommands: false }
  )

  cached.conn = await cached.promise

  return cached.conn;
}