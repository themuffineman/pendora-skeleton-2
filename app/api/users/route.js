import User from "@/models/userSchema";
import connectMongoDB from "@/utils/mongodb";
import { NextResponse } from 'next/server'



export async function POST(req){
    const {name, email} = await req.json()
    // await connectMongoDB();
    // await User.create({name, email})
    // console.log(name, email)
    return NextResponse.json({ message: 'User Created', hello: "world-baby!!!" }, { status: 200 })
}