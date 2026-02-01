import { useState, useRef, useCallback } from 'react';

export function useTimer() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  const updateTimer = useCallback(() => {
    if (startTimeRef.current !== null) {
      const now = performance.now();
      setElapsedTime(now - startTimeRef.current);
      animationFrameRef.current = requestAnimationFrame(updateTimer);
    }
  }, []);

  const start = useCallback(() => {
    if (!isRunning) {
      startTimeRef.current = performance.now() - elapsedTime;
      setIsRunning(true);
      animationFrameRef.current = requestAnimationFrame(updateTimer);
    }
  }, [isRunning, elapsedTime, updateTimer]);

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
    startTimeRef.current = null;
  }, []);

  return {
    elapsedTime,
    isRunning,
    start,
    pause,
    reset,
  };
}
