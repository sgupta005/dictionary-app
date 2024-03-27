export function Search({ word, onSetWord, onSearchButtonClick }) {
  return (
    <div>
      <input
        type="text"
        value={word}
        onChange={(e) => onSetWord(e.target.value)}
        placeholder="Search for any word..."
      />
      <button onClick={onSearchButtonClick}>Search</button>
    </div>
  );
}
