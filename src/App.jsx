import { useEffect, useState } from 'react';
import { Search } from './components/Search';
import { Content } from './components/Content';

function App() {
  const [word, setWord] = useState('sex');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearchButtonClick() {
    if (word.length < 2) return;
    callAPI();
  }

  async function callAPI() {
    setIsLoading(true);
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await res.json();
    console.log(data);
    setIsLoading(false);
    setData(data);
  }

  useEffect(function () {
    callAPI();
  }, []);

  return (
    <>
      <Search
        word={word}
        onSetWord={setWord}
        onSearchButtonClick={handleSearchButtonClick}
      />
      {isLoading ? <h1>Loading</h1> : <Content data={data} />}
    </>
  );
}

export default App;
