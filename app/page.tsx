import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="flex flex-col bg-slate-200 h-screen w-full">
      <div className="relative w-full h-3/5">
        <img src="/mapbg.png" className="object-cover w-full h-full"></img>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60">
          <h1 className="text-white text-7xl">
            <span className="font-bold">Helping Students Find Local Jobs</span>
          </h1>
          <h1 className="text-white text-6xl mt-8 font-bold">Welcome to Unibui</h1>
          <button className="bg-orange-500 rounded-lg w-40 h-14 mt-16 hover:border hover:border-white">
            <Link href="/start" className="text-white text-2xl font-bold">
              Find Jobs
            </Link>
          </button>
        </div>

        <div className="w-screen h-0.5 bg-slate-300"></div>

        <div className="bg-gradient-to-b from-orange-400 via-rose-400 to-orange-500 flex flex-col w-screen h-screen justify-start items-center">
          <h1 className="text-white text-4xl mb-3 mt-14 font-bold">Who Are We?</h1>
          <p className="text-white text-center text-2xl w-1/2 h-auto">Unibui is a map-based job board platform designed to attract students to local businesses and community. AI-powered capabilities across hiring, retail, and maps. For the first time, students have an easy way to see jobs around them. The most important demographic for conveniently-anchored businesses is college students, so our users can now apply to their favorite local businesses with just one tap, all streamlined within the app.</p>
        
          <div className="flex w-screen h-1/3 mt-10 justify-center items-center space-x-40">
            <div className="flex flex-col w-96 h-auto justify-center items-center">
              <h1 className="text-white text-7xl mb-2 font-bold">4000+</h1>
              <p className="text-white text-2xl mb-20">Local Businesses</p>
              <h1 className="text-white text-7xl mb-2 font-bold">9000+</h1>
              <p className="text-white text-2xl">Employed Students</p>
            </div>
            <div className="flex flex-col w-96 h-auto justify-center items-center">
              <h1 className="text-white text-7xl mb-2 font-bold">$50000+</h1>
              <p className="text-white text-2xl mb-20">In Rewards</p>
              <h1 className="text-white text-7xl mb-2 font-bold">60+</h1>
              <p className="text-white text-2xl">Partner Universities</p>
            </div>
          </div>

          <div className="w-screen h-2 bg-slate-300 mt-36"></div>

          <div className="flex w-screen h-1/2 p-8 bg-gradient-to-b from-rose-400 to-purple-400">
            <div className="justify-start flex flex-col ml-64 w-1/2">
              <Image
                src="/unibui_logo.png"
                alt="Unibui Logo"
                width={237}
                height={77} 
                className="w-32 h-auto"
              />
              <p className="text-white text-lg ml-2 mt-2">Located in San Jose, CA</p>
            </div>
            <div className="flex flex-col mr-80 justify-start items-right w-1/2 space-y-1">
              <h1 className="text-white font-bold text-2xl text-right">Social Media</h1>
              <Link href="http://instagram.com/unibui" className="text-white text-xl text-right">Instagram</Link>
              <Link href="http://facebook.com/unibuiusa" className="text-white text-xl text-right">Facebook</Link>
              <Link href="https://www.linkedin.com/company/unibui-inc/" className="text-white text-xl text-right">LinkedIn</Link>
              <Link href="https://x.com/UnibuiInc" className="text-white text-xl text-right">Twitter</Link>
            </div>
          </div>
        
        </div>
      </div>

    </div>
  );
}