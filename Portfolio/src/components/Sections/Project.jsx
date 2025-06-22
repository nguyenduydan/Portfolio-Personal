import React, { useEffect, useState, memo } from 'react';
import FadeIn from '@components/FadeIn';
import ZoomIn from '@components/ZoomIn'; // Nếu không có, thay bằng SlideIn hoặc FadeIn
import { FiExternalLink as ExternalLink } from 'react-icons/fi';

const ProjectCard = memo(({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ZoomIn delay={index * 150}>
            <div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {project.name}
                        </h3>
                        <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {project.description || 'No description provided.'}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                            {(project.topics?.length > 0
                                ? project.topics.slice(0, 3)
                                : [project.language || 'General']
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
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {project.language}
                            </span>
                        )}
                    </div>
                </div>

                <div className={`h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform origin-left transition-transform duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}></div>
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
                const response = await fetch(
                    'https://api.github.com/users/nguyenduydan/repos?sort=updated&per_page=8',
                    {
                        headers: {
                            Accept: 'application/vnd.github.mercy-preview+json', // cần để lấy "topics"
                        },
                    }
                );

                const data = await response.json();

                const filtered = data
                    .filter((repo) => !repo.private && repo.description)
                    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

                console.log('Fetched Repositories:', filtered);
                setRepos(filtered);
            } catch (error) {
                console.error('Error fetching GitHub repositories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-800">
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {repos.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
