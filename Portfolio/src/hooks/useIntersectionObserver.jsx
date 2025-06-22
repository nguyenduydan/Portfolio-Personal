import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            { threshold: 0.1, ...options }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return [ref, isIntersecting];
};

export default useIntersectionObserver;
