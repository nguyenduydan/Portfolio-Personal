import { useState, useEffect } from 'react';

const useDarkMode = () => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedPreference = localStorage.getItem('darkMode');
            if (storedPreference !== null) {
                return storedPreference === 'true';
            } else {
                return window.matchMedia('(prefers-color-scheme: dark)').matches;
            }
        }
        return false;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }, [isDark]);

    return [isDark, setIsDark];
};

export default useDarkMode;
