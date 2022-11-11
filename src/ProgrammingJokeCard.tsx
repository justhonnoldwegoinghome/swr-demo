import * as React from "react";
import { Card } from "semantic-ui-react";

export function ProgrammingJokeCard({ random }: { random: number }) {
  const [joke, setJoke] = React.useState<{
    category: string;
    joke: string;
  } | null>(null);

  React.useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data));
  }, [random]);

  if (joke === null) return <div style={{ height: "300px" }}>Loading</div>;

  return (
    <Card style={{ minHeight: "300px", width: "300px" }} color="red">
      <Card.Content>
        <Card.Header>Joke</Card.Header>
        <Card.Meta>
          <span className="date">Category: {joke.category}</span>
        </Card.Meta>
        <Card.Description style={{ wordBreak: "break-word" }}>
          {joke.joke}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
