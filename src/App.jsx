import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCard from './components/HomeCard';
import JobListing from './components/JobListing';
import ViewAllJobs from './components/ViewAllJobs';

function App() {
 return (
  <div>
    <Navbar/>
    <Hero />
    <HomeCard/>
    <JobListing/>
    <ViewAllJobs/>

  </div>
 )
};

export default App
