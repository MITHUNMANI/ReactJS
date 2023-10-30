import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect('mongodb+srv://Mithun:Mithun@mithunreact.tqt8q.mongodb.net/test?retryWrites=true&w=majority',{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            UseCreateIndex:true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error){
        console.log(`Error:${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB