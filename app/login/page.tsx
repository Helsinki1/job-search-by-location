'use client'
import { doc, getDoc, getDocs, collection, query, where, DocumentData } from "firebase/firestore"; 
import { database } from "../firebase-config"
import { useState } from 'react'
import React from 'react'
import Link from "next/link";

const LoginPage = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");

    const collectionRef = collection(database, "users");


    const getUser = async (firstName, lastName, password) => {
        const q = query(
            collectionRef,
            where("firstName", "==", firstName),
            where("lastName", "==", lastName),
            where("password", "==", password)
        );
        const querySnapshot = await getDocs(q);

        let docID = "";

        if(!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                docID = doc.id;
            })
        }

        const docRef = doc(database, "users", docID);
        const docObj = await getDoc(docRef);
        const docData = docObj.data();

        localStorage.setItem("isAuth", "true");
        localStorage.setItem("firstName", docData.firstName);
        localStorage.setItem("lastName", docData.lastName);
        localStorage.setItem("college", docData.college);
        localStorage.setItem("major", docData.major);
        localStorage.setItem("address", docData.address);
    }


    return (
        <div className="w-screen h-screen bg-gradient-to-r from-orange-300 via-red-300 to-violet-300 flex flex-col items-center justify-center">
          <div className="flex flex-col w-2/3 h-2/3 bg-gradient-to-tl from-blue-300 via-rose-400 to-orange-400 rounded-3xl shadow-2xl justify-center items-center">
            
            <div className="flex flex-col w-11/12 h-32 mt-10 items-center justify-center">
                <h1 className="text-white font-bold mb-10 text-5xl text-center">Log Into Your Account</h1>
                <input
                    placeholder="First Name"
                    onChange={(event)=>{setFirstName(event.target.value);}}
                    className="block w-1/2 h-40 p-4 mb-8 text-2xl border border-gray-300 rounded-lg text-black"
                />
                <input
                    placeholder="Last Name"
                    onChange={(event)=>{setLastName(event.target.value);}}
                    className="block w-1/2 h-40 p-4 mb-8 text-2xl border border-gray-300 rounded-lg text-black"
                />
                <input
                    placeholder="Password"
                    onChange={(event)=>{setPassword(event.target.value);}}
                    className="block w-1/2 h-40 p-4 mb-8 text-2xl border border-gray-300 rounded-lg text-black"
                />
                <Link href="/profile">
                    <button 
                        onClick={() => getUser(firstName, lastName, password)}
                        className="w-40 p-3 text-xl mb-5 font-bold text-white bg-orange-500 rounded-3xl hover:border hover:border-white shadow-2xl">
                        Log In
                    </button>
                </Link>
                <Link href="/newAcc">
                    <button 
                        className="w-52 p-3 text-xl font-bold text-white bg-orange-500 rounded-3xl hover:border hover:border-white shadow-2xl">
                        New Account
                    </button>
                </Link>
            </div>

          </div>
        </div>
      );
}

export default LoginPage