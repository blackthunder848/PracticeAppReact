import { NextRequest,  NextResponse } from "next/server";

function ping(){
    return NextResponse.json({
        messge:"hello Next JS"
    })
}

async function pingwith(req:NextRequest){
    const body = await req.json();
    const {email,password}= body;

    return NextResponse.json({
        email,
        password,
        messge:"Another API request",
    })
}




export {ping as GET, pingwith as POST} 