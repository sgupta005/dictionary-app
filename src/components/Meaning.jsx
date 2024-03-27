import { Words } from './Words';

export function Meaning({ meaning }) {
  return (
    <div>
      <p>{meaning.partOfSpeech}</p>
      <p>Meaning</p>
      <ul>
        {meaning.definitions.map((definitionObj) => (
          <Definition
            key={definitionObj.definition}
            definitionObj={definitionObj}
          />
        ))}
      </ul>
      {meaning.synonyms.length > 0 && (
        <Words words={meaning.synonyms} type={'Synonyms'} />
      )}
      {meaning.antonyms.length > 0 && (
        <Words words={meaning.antonyms} type={'Antonyms'} />
      )}
    </div>
  );
}

function Definition({ definitionObj }) {
  return (
    <>
      <li>{definitionObj.definition}</li>
      {definitionObj.example && <p>{definitionObj.example}</p>}
    </>
  );
}
