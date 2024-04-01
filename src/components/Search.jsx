export function Search({
  onSearchButtonClick,
  inputRef,
  searchInputValue,
  onSetSearchInputValue,
}) {
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={searchInputValue}
        onChange={(e) => onSetSearchInputValue(e.target.value)}
        placeholder="Search for any word..."
      />
      <button onClick={() => onSearchButtonClick()}>Search</button>
    </div>
  );
}
