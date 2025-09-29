import React, { } from 'react';
import AllPosts from './AllPosts/AllPosts';
import AnnouncementSection from './AnnouncementSection/AnnouncementSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import Hero from './Hero/Hero';

const Home = () => {


    return (
        <div className='min-h-screen  flex flex-col'>
            <Hero />
            <AllPosts></AllPosts>
            <AboutSection></AboutSection>
            <AnnouncementSection></AnnouncementSection>
        </div>
    );
};

export default Home;
