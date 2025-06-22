import React from 'react';
import FadeIn from '@components/FadeIn';
import SlideIn from '@components/Slide';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const HeroSection = () => {
    return (
        <section id='home' className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="max-w-6xl mx-auto px-6 py-0 text-center">
                <FadeIn>
                    <div className="mb-8">
                        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                                <span className="text-4xl font-bold text-gray-800 dark:text-white">ND</span>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <SlideIn
                    direction="vertical"
                    reverse={true}
                    duration={1.2}
                    ease="power3.out"
                    animateOpacity
                    scale={1}
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                        Nguyễn Thiết Duy Đan
                    </h1>
                </SlideIn>

                <SlideIn
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1}
                >
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Full-Stack Developer passionate about creating beautiful, functional web applications
                    </p>
                </SlideIn>

                <SlideIn
                    direction="vartical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1}
                >
                    <div className="flex justify-center space-x-6 mb-12">
                        <a
                            href="https://github.com/nguyenduydan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 cursor-pointer"
                        >
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 cursor-pointer"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:contact@example.com"
                            className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-110 cursor-pointer"
                        >
                            <FaEnvelope className="w-6 h-6" />
                        </a>
                    </div>
                </SlideIn>

                <FadeIn>
                    <FiChevronDown className="w-8 h-8 mx-auto text-gray-400 animate-bounce" />
                </FadeIn>
            </div>
        </section>
    );
};

export default HeroSection;
