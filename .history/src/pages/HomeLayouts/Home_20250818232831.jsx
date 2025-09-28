import React, { } from 'react';
import AllPosts from './AllPosts/AllPosts';
import AnnouncementSection from './AnnouncementSection/AnnouncementSection';
import HeroAndSearchSection from './heroAndSearchSection/heroAndSearchSection';
import AboutSection from '../../components/AboutSection/AboutSection';

const Home = () => {


    return (
        <div className='min-h-screen  flex flex-col'>
            <HeroAndSearchSection></HeroAndSearchSection>
            <AllPosts></AllPosts>
            <AboutSection></AboutSection>
            <AnnouncementSection></AnnouncementSection>
        </div>
    );
};

export default Home;
