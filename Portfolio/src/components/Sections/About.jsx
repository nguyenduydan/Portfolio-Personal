import React from 'react';
import FadeIn from '@components/FadeIn';
import Slide from '@components/Slide';

const AboutSection = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
                        About Me
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <Slide
                        distance={150}
                        direction="horizontal"
                        reverse={true}
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1}
                        threshold={0.2}
                        delay={0.3}
                    >
                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                            <p>
                                I'm a passionate full-stack developer with over 3 years of experience
                                building web applications. I love turning complex problems into simple,
                                beautiful designs.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies,
                                contributing to open source projects, or enjoying a good cup of coffee
                                while reading about the latest in web development.
                            </p>
                            <p>
                                I believe in writing clean, maintainable code and creating user
                                experiences that make a difference.
                            </p>
                        </div>
                    </Slide>

                    <Slide
                        distance={150}
                        direction="horizontal"
                        reverse={false}
                        duration={1.2}
                        ease="bounce.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={0.3}
                    >
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
                            <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <span>3+ years of development experience</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span>Based in Ho Chi Minh City, Vietnam</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span>Mobile-first approach enthusiast</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span>Full-stack development specialist</span>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
