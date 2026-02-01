import { useTimer } from '../hooks/useTimer';
import { formatTime } from '../utils/formatTime';

function Timer() {
  const { elapsedTime, isRunning, start, pause, reset } = useTimer();
  const formattedTime = formatTime(elapsedTime);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sm:p-12 w-full max-w-md transition-colors">
      <div className="text-center mb-6 sm:mb-10">
        <h1 className="text-slate-400 dark:text-slate-500 text-sm font-medium uppercase tracking-wider mb-6">
          Timer
        </h1>
        <div className="font-mono text-4xl sm:text-6xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
          {formattedTime.hours}:{formattedTime.minutes}:{formattedTime.seconds}
          <span className="text-xl sm:text-3xl text-slate-400 dark:text-slate-500">.{formattedTime.milliseconds}</span>
        </div>
      </div>

      <div className="flex gap-3 justify-center">
        {!isRunning ? (
          <button
            onClick={start}
            className="px-6 sm:px-8 py-3 bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-800 rounded-lg font-medium hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors"
          >
            {elapsedTime === 0 ? 'Start' : 'Resume'}
          </button>
        ) : (
          <button
            onClick={pause}
            className="px-6 sm:px-8 py-3 bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-800 rounded-lg font-medium hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors"
          >
            Pause
          </button>
        )}
        <button
          onClick={reset}
          className="px-6 sm:px-8 py-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
