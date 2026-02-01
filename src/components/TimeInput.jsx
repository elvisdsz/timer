function TimeInput({ hours, minutes, seconds, onChange }) {
  const handleChange = (field, value) => {
    const num = parseInt(value) || 0;
    const clamped = field === 'hours'
      ? Math.min(99, Math.max(0, num))
      : Math.min(59, Math.max(0, num));
    onChange({ hours, minutes, seconds, [field]: clamped });
  };

  const inputClass = "h-[1em] p-0 leading-none bg-transparent text-center focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-700 rounded";

  return (
    <div className="font-mono text-4xl sm:text-6xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight leading-none">
      <input
        type="number"
        value={String(hours).padStart(2, '0')}
        onChange={(e) => handleChange('hours', e.target.value)}
        min="0"
        max="99"
        className={inputClass}
      />
      :
      <input
        type="number"
        value={String(minutes).padStart(2, '0')}
        onChange={(e) => handleChange('minutes', e.target.value)}
        min="0"
        max="59"
        className={inputClass}
      />
      :
      <input
        type="number"
        value={String(seconds).padStart(2, '0')}
        onChange={(e) => handleChange('seconds', e.target.value)}
        min="0"
        max="59"
        className={inputClass}
      />
      <span className="text-xl sm:text-3xl text-slate-400 dark:text-slate-500">.00</span>
    </div>
  );
}

export default TimeInput;
