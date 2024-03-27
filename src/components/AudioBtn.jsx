import { useRef } from 'react';

export function AudioBtn({ data }) {
  const audioRef = useRef(null);
  const src = data[0].phonetics[data[0].phonetics.length - 1].audio;
  function handlePlayAudio() {
    audioRef.current.play();
  }
  return (
    <div>
      <button className="bg-purple-500" onClick={handlePlayAudio}>
        PLay Audio
      </button>
      <audio ref={audioRef}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
