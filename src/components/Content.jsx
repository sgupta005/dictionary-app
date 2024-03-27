import { Meaning } from './Meaning';
import { AudioBtn } from './AudioBtn';

export function Content({ data }) {
  if (data.length === 0) return;
  return (
    <>
      <div>
        <h1>{data[0].word}</h1>
        <h2>{data[0].phonetic}</h2>
      </div>
      <AudioBtn data={data} />
      {data.map((obj, index) => (
        <>
          {obj.meanings.map((meaning, idx) => (
            <Meaning key={index + '-' + idx} meaning={meaning} />
          ))}
          <h2>Source</h2>
          {obj.sourceUrls.map((url, idx) => (
            <div key={idx}>
              <a href={url}>{url}</a>
            </div>
          ))}
        </>
      ))}
    </>
  );
}
