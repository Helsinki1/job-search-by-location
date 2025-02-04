'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const ProfilePage = () => {

  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const college = localStorage.getItem("college");
  const major = localStorage.getItem("major");

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-orange-300 to-red-300 flex flex-col items-center justify-center">
      <div className="flex w-2/3 h-96 bg-gradient-to-tl from-blue-300 via-rose-400 to-orange-400 rounded-3xl shadow-2xl justify-center items-center">
        <div className="rounded-full h-72 w-72 bg-slate-400 shadow-xl">
          {/*<Image 
            src="/sample_pfp.png"
            alt="User Profile Picture"
            width={1543}
            height={2048}
            className="w-72 h-full rounded-full"
          ></Image>
          */}
        </div>
        <div className="flex flex-col items-start justify-center w-1/2 h-full ml-20">
          <h1 className="text-left text-white text-6xl font-bold">{firstName} {lastName}</h1>
          <h1 className="text-left text-white text-4xl mt-10">🏫 {college}</h1>
          <h1 className="text-left text-white text-4xl mt-3">🎯 {major}</h1>
        </div>
      </div>
      <button className="w-64 p-3 mt-10 text-xl mb-5 font-bold text-white bg-orange-500 rounded-3xl hover:border hover:border-white shadow-2xl">
        <Link href="/login">Log Out</Link>
      </button>
    </div>
  );
}

export default ProfilePage