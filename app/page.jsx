import Image from "next/image";
import React from "react";

export default function Home() {
  const body = {
    name: "Shigwedha",
    email: "petrusheyashigwedha@gmail.com"
  }
  console.log("hello")

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/api/users', {method: "POST", body: JSON.stringify(body)});
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data.hello); 
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the function to fetch data
  fetchData();
  


  return (
      <>
      <h1 className="text-5xl font-bold tracking-tighter">Home Page</h1>
      <p>Enjoy</p>
      </>
  );
}
