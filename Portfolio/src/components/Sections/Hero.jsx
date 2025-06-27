import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import Avatar from '../../assets/avatar.jpg';
import SplashCursor from '../SplashCursor';

const FadeIn = ({ children, delay = 0 }) => {
    return (
        <div
            className="opacity-0 animate-fadeIn"
            style={{
                animationDelay: `${delay}s`,
                animationFillMode: 'forwards'
            }}
        >
            {children}
        </div>
    );
};

const SlideIn = ({ children, direction = "vertical", reverse = false, duration = 1.2, delay = 0 }) => {
    const getTransform = () => {
        if (direction === "vertical") {
            return reverse ? "translateY(-20px)" : "translateY(20px)";
        }
        return "translateX(0)";
    };

    return (
        <div
            className="opacity-0 animate-slideIn"
            style={{
                transform: getTransform(),
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                animationFillMode: 'forwards'
            }}
        >
            {children}
        </div>
    );
};

const FloatingBubble = ({ size, delay, duration, left, top, color }) => {
    return (
        <div
            className="absolute rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                animation: `float ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
                backgroundColor: color || 'rgb(255, 4, 4)',
                boxShadow: `0 4px 20px ${color || 'rgb(255, 4, 4)'}`
            }}
        />
    );
};

const HeroSection = () => {
    return (
        <>
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-20px) rotate(90deg); }
                    50% { transform: translateY(-10px) rotate(180deg); }
                    75% { transform: translateY(-30px) rotate(270deg); }
                }

                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }

                @keyframes glow {
                    0%, 100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(147, 51, 234, 0.2); }
                    50% { text-shadow: 0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(147, 51, 234, 0.4); }
                }

                .animate-fadeIn {
                    animation: fadeIn 1s ease-out;
                }

                .animate-slideIn {
                    animation: slideIn 1s ease-out;
                }

                .shimmer-text {
                    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6, #1e40af);
                    background-size: 200% 100%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 3s ease-in-out infinite;
                }

                .glow-text {
                    animation: glow 2s ease-in-out infinite;
                }
            `}</style>

            <section id='home' className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                {/* <SplashCursor /> */}
                <div className="max-w-6xl mx-auto px-6 py-0 text-center">
                    <FadeIn>
                        <div className="mb-12 relative">
                            {/* Avatar với bong bóng bay */}
                            <div className="relative w-32 h-32 mx-auto mb-8">
                                {/* Bong bóng 1 */}
                                <FloatingBubble
                                    size={50}
                                    delay={0}
                                    duration={4}
                                    left={-40}
                                    top={10}
                                    color="rgb(59, 130, 246)"
                                />

                                {/* Bong bóng 2 */}
                                <FloatingBubble
                                    size={30}
                                    delay={1}
                                    duration={5}
                                    left={130}
                                    top={100}
                                    color="rgb(108, 5, 204)"
                                />

                                {/* Bong bóng 3 */}
                                <FloatingBubble
                                    size={20}
                                    delay={2}
                                    duration={4.5}
                                    left={50}
                                    top={-25}
                                    color="rgb(30, 64, 175)"
                                />

                                {/* Avatar chính */}
                                <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 hover:scale-110 relative z-10">
                                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={Avatar}
                                            alt="ND"
                                            className="object-cover w-full h-full rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <SlideIn direction="vertical" reverse={true} duration={1.2} delay={0.3}>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 shimmer-text glow-text">
                            Nguyễn Thiết Duy Đan
                        </h1>
                    </SlideIn>

                    <SlideIn direction="vertical" reverse={false} duration={1.2} delay={0.6}>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                            Full-Stack Developer passionate about creating beautiful, functional web applications
                        </p>
                    </SlideIn>

                    <SlideIn direction="vertical" reverse={false} duration={1.2} delay={0.9}>
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

                    <FadeIn delay={1.2}>
                        <FiChevronDown className="w-8 h-8 mx-auto text-gray-400 animate-bounce" />
                    </FadeIn>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
