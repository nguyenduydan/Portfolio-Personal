import React from 'react';
import FadeIn from '@components/FadeIn';
import ZoomIn from '@components/ZoomIn';

const SkillsSection = () => {
    const skills = [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
        { name: 'Node.js', level: 80, color: 'bg-green-500' },

        { name: 'TailwindCSS', level: 90, color: 'bg-cyan-500' }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
                        Skills & Technologies
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <ZoomIn key={skill.name} delay={index * 100}>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                    <div
                                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        </ZoomIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
