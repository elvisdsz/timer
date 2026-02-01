import { useState, useRef, useCallback } from 'react';

export function useTimer(mode = 'stopwatch', duration = 0) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  const updateTimer = useCallback(() => {
    if (startTimeRef.current !== null) {
      const now = performance.now();
      const elapsed = now - startTimeRef.current;

      if (mode === 'countdown') {
        const remaining = duration - elapsed;
        if (remaining <= 0) {
          setElapsedTime(duration);
          setIsRunning(false);
          setIsComplete(true);
          cancelAnimationFrame(animationFrameRef.current);
          return;
        }
      }

      setElapsedTime(elapsed);
      animationFrameRef.current = requestAnimationFrame(updateTimer);
    }
  }, [mode, duration]);

  const start = useCallback(() => {
    if (!isRunning && !(mode === 'countdown' && isComplete)) {
      startTimeRef.current = performance.now() - elapsedTime;
      setIsRunning(true);
      setIsComplete(false);
      animationFrameRef.current = requestAnimationFrame(updateTimer);
    }
  }, [isRunning, elapsedTime, updateTimer, mode, isComplete]);

  const pause = useCallback(() => {
    if (isRunning) {
      cancelAnimationFrame(animationFrameRef.current);
      setIsRunning(false);
    }
  }, [isRunning]);

  const reset = useCallback(() => {
    cancelAnimationFrame(animationFrameRef.current);
    setElapsedTime(0);
    setIsRunning(false);
    setIsComplete(false);
    startTimeRef.current = null;
  }, []);

  const displayTime = mode === 'countdown'
    ? Math.max(0, duration - elapsedTime)
    : elapsedTime;

  return {
    displayTime,
    elapsedTime,
    isRunning,
    isComplete,
    start,
    pause,
    reset,
  };
}
