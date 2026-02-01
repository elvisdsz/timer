function ModeToggle({ mode, onModeChange, disabled }) {
  return (
    <div className={`inline-flex rounded-lg p-1 bg-slate-200 dark:bg-slate-700 ${disabled ? 'opacity-50' : ''}`}>
      <button
        onClick={() => !disabled && onModeChange('stopwatch')}
        disabled={disabled}
        className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
          mode === 'stopwatch'
            ? 'bg-white dark:bg-slate-600 text-slate-800 dark:text-slate-100 shadow-sm'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
        } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        Stopwatch
      </button>
      <button
        onClick={() => !disabled && onModeChange('countdown')}
        disabled={disabled}
        className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
          mode === 'countdown'
            ? 'bg-white dark:bg-slate-600 text-slate-800 dark:text-slate-100 shadow-sm'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
        } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        Countdown
      </button>
    </div>
  );
}

export default ModeToggle;
