import { useState, useEffect } from 'react';
import { useTimer } from '../hooks/useTimer';
import { formatTime } from '../utils/formatTime';
import ModeToggle from './ModeToggle';
import TimeInput from './TimeInput';

function Timer() {
  const [mode, setMode] = useState('stopwatch');
  const [countdownInput, setCountdownInput] = useState({ hours: 0, minutes: 5, seconds: 0 });

  const duration = (countdownInput.hours * 3600 + countdownInput.minutes * 60 + countdownInput.seconds) * 1000;
  const { displayTime, elapsedTime, isRunning, isComplete, start, pause, reset } = useTimer(mode, duration);

  const formattedTime = formatTime(displayTime);
  const isAtStart = elapsedTime === 0 && !isRunning;
  const canStart = mode === 'stopwatch' || duration > 0;

  const handleModeChange = (newMode) => {
    if (isAtStart) {
      setMode(newMode);
    }
  };

  const handleTimeInputChange = (newTime) => {
    setCountdownInput(newTime);
  };

  useEffect(() => {
    reset();
  }, [mode]);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sm:p-12 w-full max-w-md transition-colors">
      <div className="text-center mb-6 sm:mb-8">
        <ModeToggle
          mode={mode}
          onModeChange={handleModeChange}
          disabled={!isAtStart}
        />
      </div>

      <div className="text-center mb-6 sm:mb-10">
        {mode === 'countdown' && isAtStart && !isComplete ? (
          <TimeInput
            hours={countdownInput.hours}
            minutes={countdownInput.minutes}
            seconds={countdownInput.seconds}
            onChange={handleTimeInputChange}
          />
        ) : (
          <div className="font-mono text-4xl sm:text-6xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight leading-none">
            {formattedTime.hours}:{formattedTime.minutes}:{formattedTime.seconds}
            <span className="text-xl sm:text-3xl text-slate-400 dark:text-slate-500">.{formattedTime.milliseconds}</span>
          </div>
        )}

        {isComplete && (
          <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            Time is up
          </p>
        )}
      </div>

      <div className="flex gap-3 justify-center">
        {!isRunning ? (
          <button
            onClick={start}
            disabled={!canStart || isComplete}
            className={`px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors ${
              canStart && !isComplete
                ? 'bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-800 hover:bg-slate-700 dark:hover:bg-slate-200'
                : 'bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400 cursor-not-allowed'
            }`}
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
          className="px-6 sm:px-8 py-3 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
