import React from 'react'
import JobMap from '../../components/JobMap';

const JobsPage = () => {
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Company',
      location: 'San Francisco',
      latitude: 37.7749,
      longitude: -122.4194
    },
    // More job objects...
  ];

  return ( 
    <div className="flex w-screen h-screen">
      <JobMap jobs={jobs} />
      <div className="bg-gradient-to-b from-purple-400 via-rose-400 to-orange-400 flex flex-col w-1/4 h-full">
        <div className="w-full bg-slate-300 h-1"></div>
      </div>
    </div>
  );
};
export default JobsPage