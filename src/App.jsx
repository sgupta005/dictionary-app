import { useCallback, useEffect, useRef, useState } from 'react';
import { Search } from './components/Search';
import { Content } from './components/Content';

function App() {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [word, setWord] = useState(localStorage.getItem('word') || 'keyboard');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const inputRef = useRef(null);

  const handleSearchButtonClick = useCallback(
    function handleSearchButtonClick() {
      setWord(searchInputValue);
      localStorage.setItem('word', searchInputValue);
    },
    [searchInputValue]
  );

  useEffect(
    function () {
      async function callAPI() {
        try {
          setIsLoading(true);
          setError('');

          const res = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
          );
          const data = await res.json();
          if (res.status === 404)
            throw new Error(data.title + '. ' + data.message);

          setData(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (word.length === 0) return;
      callAPI();
    },
    [word]
  );

  useEffect(
    function () {
      function callback(e) {
        if (e.code === 'Enter') {
          if (inputRef.current === document.activeElement)
            handleSearchButtonClick();
          inputRef.current.focus();
        }
      }
      document.addEventListener('keypress', callback);
      return () => document.removeEventListener('keypress', callback);
    },
    [searchInputValue, handleSearchButtonClick]
  );

  return (
    <>
      <Search
        inputRef={inputRef}
        searchInputValue={searchInputValue}
        onSetSearchInputValue={setSearchInputValue}
        onSearchButtonClick={handleSearchButtonClick}
      />
      {isLoading && 'loading...'}
      {error && error}
      {!isLoading && !error && <Content data={data} />}
    </>
  );
}

export default App;
