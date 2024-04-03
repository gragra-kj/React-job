import React from 'react'
import { useState,useEffect } from 'react';
import JobListin from './JobListin'

const JobListing = ({isHome=false}) => {
    // const jobListings= isHome ? jobs.slice(0, 3): jobs;
    const [jobs,setJobs]=useState([]);
    const [loading,setLoading]=useState(true)
    

  return (
    <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome  ? 'Recent Jobs' :'All Jobs'}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobListings.map((job)=>(
            <JobListin key={job.id} job={job}/>

        ))}
      </div>
    </div>
  </section>

  )
}

export default JobListing