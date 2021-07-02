import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [mood, setMood] =
    useState("confused");

  const handleMoodChangeToHappy = () => {
   
    setMood("happy");
  };

  const handleMoodChangeToConfused = () => {
    
    setMood("confused");
  };

  const handleMoodChangeToSad = () => {
    
    setMood("sad");
  };

  const handleMoodChangeToAngry = () => {
    setMood("angry")
  };

  const handleMoodChangeToSick = () => {
    setMood("sick")
  };

  const handleMoodChangeToLoveStruch = () => {
    setMood("love struck")
  };

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {mood.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToAngry}>😡</button>
      <button onClick={handleMoodChangeToSick}>🤮</button>
      <button onClick={handleMoodChangeToLoveStruch}>😍</button>

    </>
  );
}

export default MoodPickerDemo;
