import Timer from './components/Timer';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4 transition-colors">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <ThemeToggle isDark={isDark} onToggle={toggle} />
      </div>
      <Timer />
    </div>
  );
}

export default App;
