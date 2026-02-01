function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="relative w-12 h-6 sm:w-14 sm:h-7 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute top-1 left-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white dark:bg-slate-300 shadow-sm transition-transform ${
          isDark ? 'translate-x-6 sm:translate-x-7' : 'translate-x-0'
        }`}
      />
    </button>
  );
}

export default ThemeToggle;
