export function Words({ words, type }) {
  return (
    <p>
      <span>{type} </span>
      {words.map((word, index) =>
        index === words.length - 1 ? (
          <Word value={word} key={index} />
        ) : (
          <Word value={word + ', '} key={index} />
        )
      )}
    </p>
  );
}

function Word({ value }) {
  return <span>{value}</span>;
}
