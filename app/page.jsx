import Image from "next/image";
import React from "react";

export default function Home() {
  const body = {
    "name": "Petrus",
    "email": "petrusheya@gmail.com"
  }
  console.log("hello")

  fetch('http://localhost:3000/api/users', { method: 'POST', body: body })
  .then((res) => {
    console.log(res); // Response object received from the server
  })
  .catch((error) => {
    console.error('Error:', error);
  });


  return (
      <>
      <h1 className="text-5xl font-bold tracking-tighter">Home Page</h1>
      <p>Enjoy</p>
      </>
  );
}
