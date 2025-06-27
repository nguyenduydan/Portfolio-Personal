import React, { useEffect, useState, memo } from "react";
import FadeIn from "@components/FadeIn";
import ZoomIn from "@components/ZoomIn";
import { FiExternalLink as ExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";


const ProjectCard = memo(({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ZoomIn delay={index * 150}>
            <div
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 dark:border-gray-700"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.name}
                        </h3>
                        <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {project.description || "No description provided."}
                    </p>

                    {/* Tags & Language */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex flex-wrap gap-2">
                            {(project.topics?.length > 0
                                ? project.topics.slice(0, 3)
                                : [project.language || "General"]
                            ).map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {project.language && (
                            <span className="text-sm text-gray-500 dark:text-gray-400 italic">
                                {project.language}
                            </span>
                        )}
                    </div>
                </div>

                {/* Hover underline effect */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 origin-left"
                />
            </div>
        </ZoomIn>
    );
});

const ProjectsSection = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const res = await fetch(
                    "https://api.github.com/users/nguyenduydan/repos?sort=updated&per_page=8",
                    {
                        headers: {
                            Accept: "application/vnd.github.mercy-preview+json",
                        },
                    }
                );
                const data = await res.json();
                const filtered = data
                    .filter((repo) => !repo.private && repo.description)
                    .sort(
                        (a, b) =>
                            new Date(b.created_at) - new Date(a.created_at)
                    );

                setRepos(filtered);
            } catch (err) {
                console.error("Failed to fetch repos:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
                        Featured Projects
                    </h2>
                </FadeIn>

                {loading ? (
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                        {repos.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
