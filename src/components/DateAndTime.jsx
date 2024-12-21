import React, { useState, useEffect } from 'react';
function getBanglaDate() {
    // Use the global `buetDateConverter` object
    const converter = new buetDateConverter();
    const date = converter.convert('j F, Y বঙ্গাব্দ');
    return date
};
export default function DateAndTime() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [banglaDate, setBanglaDate] = useState('');
  const [hijriDate, setHijriDate] = useState('');

  const updateTime = () => {
    const now = new Date();

    // Time
    const timeString = now.toLocaleTimeString('bn-BD', { hour12: true });
    setTime(timeString);

    // Gregorian date
    const dateString = now.toLocaleDateString('bn-BD', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    setDate(dateString);

    // Bangla date
    setBanglaDate(getBanglaDate());

    // Hijri date
    const hijriFormatter = new Intl.DateTimeFormat('bn-BD-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    setHijriDate(hijriFormatter.format(now));
  };

  useEffect(() => {
    updateTime();
    const timer = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <div className="time-box">
      <div className="time-header">সময় এবং তারিখ</div>
      <div className="time-content">
        <h2>{time}</h2>
        <p>{date}</p>
        <p>{banglaDate}</p>
        <p>{hijriDate}</p>
      </div>
    </div>
  );
}
