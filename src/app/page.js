"use client"

import { useState } from "react";

export default function Home() {
  const [file,setFile] = useState()
  const uploadImage = async (e) => {
    e.preventDefault()
    console.log(file); 
    const data = new FormData() 
    data.set('file',file)
    let result = await fetch(`api/upload`,{
      method:"POST",
      body:data
    })
    result = await result.json()
    console.log(result);  
    if(result.success){
      alert("file uploaded")
    }  
  }
  return (
    <main>
      <h1>Upload Image</h1>
      <form onSubmit={uploadImage}>
        <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} />
        <button type="submit" className="border px-3 py-2 bg-gray-500 text-white">Upload Image</button>
      </form>
    </main>
  );
}
