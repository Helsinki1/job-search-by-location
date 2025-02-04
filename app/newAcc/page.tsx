'use client'
import { addDoc, collection } from "firebase/firestore"; 
import { database } from "../firebase-config"
import { useState } from 'react'
import React from 'react'
import Link from "next/link";

const NewAccPage = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [college, setCollege] = useState("");
    const [major, setMajor] = useState("");
    const [address, setAddress] = useState("");

    const collectionRef = collection(database, "users");

    const addUser = async (firstName, lastName, password, college, major, address) => {
        await addDoc(collectionRef, {
            firstName: firstName,
            lastName: lastName,
            password: password,
            college: college,
            major: major,
            address: address
        })
        localStorage.setItem("isAuth", "true");
        localStorage.setItem("firstName",firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("college", college);
        localStorage.setItem("major", major);
        localStorage.setItem("address", address);
    }

    return (
        <div className="w-screen h-screen bg-gradient-to-r from-orange-300 via-red-300 to-violet-300 flex flex-col items-center justify-center">
          <div className="flex flex-col w-2/3 h-2/3 bg-gradient-to-tl from-blue-300 via-rose-400 to-orange-400 rounded-3xl shadow-2xl justify-center items-center">
            
            <div className="flex flex-col w-11/12 h-32 mt-10 items-center justify-center">
                <h1 className="text-white font-bold mb-10 text-5xl text-center">Make a New Account</h1>
                <input
                    placeholder="First Name"
                    onChange={(event)=>{setFirstName(event.target.value);}}
                    className="block w-1/2 h-32 p-4 mb-8 text-2xl border border-gray-300 rounded-lg text-black"
                />
                <input
                    placeholder="Last Name"
                    onChange={(event)=>{setLastName(event.target.value);}}
                    className="block w-1/2 h-32 p-4 mb-8 text-2xl border border-gray-300 rounded-lg text-black"
                />
                <input
                    placeholder="Your College"
                    onChange={(event)=>{setCollege(event.target.value);}}
                    className="block w-1/2 h-32 p-4 mb-8 text-2xl border border-gray-300 rounded-lg text-black"
                />
                <input
                    placeholder="Your Address"
                    onChange={(event)=>{setAddress(event.target.value);}}
                    className="block w-1/2 h-32 p-4 mb-8 text-2xl border border-gray-300 rounded-lg text-black"
                />
                <input
                    placeholder="Password"
                    onChange={(event)=>{setPassword(event.target.value);}}
                    className="block w-1/2 h-32 p-4 mb-8 text-2xl border border-gray-300 rounded-lg text-black"
                />
                <Link href="/profile">
                    <button 
                        onClick={() => addUser(firstName, lastName, password, college, major, address)}
                        className="w-64 p-3 text-xl mb-5 font-bold text-white bg-orange-500 rounded-3xl hover:border hover:border-white shadow-2xl">
                        Create Account
                    </button>
                </Link>
            </div>

          </div>
        </div>
      );
}

export default NewAccPage