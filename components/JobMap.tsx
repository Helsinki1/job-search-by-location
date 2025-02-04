'use client';
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// Map container style
const mapContainerStyle = {
  width: '75%',
  height: '100%'
};

// Default map center (can be dynamically set)
const defaultCenter = {
  lat: 37.7749, 
  lng: -122.4194 // San Francisco coordinates as example
};

const JobMap = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={defaultCenter}
      >
        {jobs.map((job) => (
          <Marker
            key={job.id}
            position={{ lat: job.latitude, lng: job.longitude }}
            onClick={() => setSelectedJob(job)}
          />
        ))}

        {selectedJob && (
          <InfoWindow
            position={{ lat: selectedJob.latitude, lng: selectedJob.longitude }}
            onCloseClick={() => setSelectedJob(null)}
          >
            <div className="p-2">
              <h3 className="font-bold">{selectedJob.title}</h3>
              <p>{selectedJob.company}</p>
              <p>{selectedJob.location}</p>
              <button 
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
                onClick={() => {/* Handle job application */}}
              >
                Apply Now
              </button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default JobMap;
