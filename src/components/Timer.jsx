import { useTimer } from '../hooks/useTimer';
import { formatTime } from '../utils/formatTime';

function Timer() {
  const { elapsedTime, isRunning, start, pause, reset } = useTimer();
  const formattedTime = formatTime(elapsedTime);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 w-full max-w-md">
      <div className="text-center mb-10">
        <h1 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-6">
          Timer
        </h1>
        <div className="font-mono text-6xl font-semibold text-slate-800 tracking-tight">
          {formattedTime.hours}:{formattedTime.minutes}:{formattedTime.seconds}
          <span className="text-3xl text-slate-400">.{formattedTime.milliseconds}</span>
        </div>
      </div>

      <div className="flex gap-3 justify-center">
        {!isRunning ? (
          <button
            onClick={start}
            className="px-8 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors"
          >
            {elapsedTime === 0 ? 'Start' : 'Resume'}
          </button>
        ) : (
          <button
            onClick={pause}
            className="px-8 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors"
          >
            Pause
          </button>
        )}
        <button
          onClick={reset}
          className="px-8 py-3 bg-slate-100 text-slate-600 rounded-lg font-medium hover:bg-slate-200 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
