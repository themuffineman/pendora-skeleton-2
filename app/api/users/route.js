import User from "@/models/userSchema";
import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(req){
    const {name, email} = await req.json()
    await connectMongoDB()
    await User.create({name, email})
    return NextResponse.json({message:"User Created Successfully"}, {status: 201})
}