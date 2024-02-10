import mongoose from "mongoose";

const connectMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database Connected Successfully")
    }catch(error){
        console.error(error)
    }
}
export default connectMongoDB;
