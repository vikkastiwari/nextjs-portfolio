import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState('dark');
	const activeTheme = 'dark';

	return [activeTheme, setTheme];
};

export default useThemeSwitcher;
