import React from 'react'
import { getSession } from '@auth0/nextjs-auth0';
import Link from "next/link";

const Dashboard = async () => {
  return (
    <div className='flex flex-col gap-5 items-start justify-between'>
      <span>
        <h1 className="text-5xl font-bold tracking-tighter">Welcome to your dashboard</h1>
        <p>Browse around and enjoy🧁</p>
      </span>
      <div>
          <button className='p-2 bg-slate-300 text-black mt-5 rounded shadow-lg active:translate-y-2 transition-transform'>Submit Files</button>
      </div>
    </div>
  )
}

export default Dashboard