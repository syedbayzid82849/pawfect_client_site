import React, { useState, useContext } from 'react'
import { ArrowRight, Users, MessageSquare, TrendingUp, Plus } from "lucide-react";
import heroImage from "../../../assets/hero-img.jpg"
import { useNavigate } from 'react-router';
import { AuthContext } from '../../../context/AuthContext';
import GetStartModal from '../../../components/GetStartModal/GetStartModal';

export default function Hero() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNewPost = () => {
        if (user) {
            navigate('/dashboard/add-post');
        } else {
            setIsModalOpen(true); // ✅ Modal open হবে
        }
    };

    const handleGetStarted = () => {
        alert("Welcome! 🎉 Connect Supabase to enable full functionality");
    };

    return (
        <section className='py-20 relative min-h-screen flex items-center justify-center overflow-hidden'>
            <div className="container mx-auto">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Community Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <div className="mx-auto space-y-4">
                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Connect
                            </span>
                            <br />
                            <span className="text-white">Share & Learn</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Join our vibrant community of developers, share your knowledge, and
                            discover amazing insights from peers worldwide.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={handleGetStarted}
                                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition"
                            >
                                Get Started
                                <ArrowRight className="ml-2 inline-block w-5 h-5" />
                            </button>

                            <button
                                onClick={handleNewPost}
                                className="flex items-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-lg px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition"
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                New Post
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                            <div className="text-center space-y-2 p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-md">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">10K+</h3>
                                <p className="text-gray-300">Active Members</p>
                            </div>

                            <div className="text-center space-y-2 p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-md">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                                    <MessageSquare className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">50K+</h3>
                                <p className="text-gray-300">Discussions</p>
                            </div>

                            <div className="text-center space-y-2 p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-md">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">99%</h3>
                                <p className="text-gray-300">Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-2xl hidden lg:block" />
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl hidden lg:block" />
            </div>

            {/* ✅ Render Modal */}
            {isModalOpen && <GetStartModal closeModal={() => setIsModalOpen(false)} />}
        </section>
    )
}
