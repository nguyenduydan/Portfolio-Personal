import React, { useState } from 'react';
import FadeIn from '@components/FadeIn';
import SlideIn from '@components/Slide';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = () => {
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            alert('Please fill in all fields');
            return;
        }

        console.log('Form submitted:', formData);
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="max-w-4xl mx-auto px-6">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
                        Get In Touch
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-12">
                    <SlideIn >
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                                    Let's work together
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    I'm always interested in new opportunities and exciting projects.
                                    Whether you have a question or just want to say hi, feel free to reach out!
                                </p>
                            </div>

                            <div className="space-y-4">
                                <a href="mailto:contact@example.com" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                                    <FaEnvelope className="w-5 h-5" />
                                    <span>contact@example.com</span>
                                </a>
                                <a href="https://github.com/nguyenduydan" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                                    <FaGithub className="w-5 h-5" />
                                    <span>github.com/nguyenduydan</span>
                                </a>
                                <a href="https://linkedin.com" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                                    <FaLinkedin className="w-5 h-5" />
                                    <span>LinkedIn Profile</span>
                                </a>
                            </div>
                        </div>
                    </SlideIn>

                    <SlideIn >
                        <div className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                            ></textarea>
                            <button
                                onClick={handleSubmit}
                                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </div>
                    </SlideIn>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
