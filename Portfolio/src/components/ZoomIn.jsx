import React from 'react';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

const ZoomIn = ({ children, delay = 0, className = '' }) => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default ZoomIn;
