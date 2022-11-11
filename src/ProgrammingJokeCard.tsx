import useSwr, { useSWRConfig } from "swr";
import { Card } from "semantic-ui-react";
import { ChangeJokeButton } from "./ChangeJokeButton";

export function ProgrammingJokeCard() {
  const { cache } = useSWRConfig();
  const { data, error, mutate } = useSwr(
    "https://v2.jokeapi.dev/joke/Programming?type=single",
    (url) => fetch(url).then((res) => res.json())
  );

  console.log("[ProgrammingJokeCard] Cache is: ", cache);

  if (!data) return <div style={{ height: "300px" }}>Loading</div>;

  return (
    <>
      <Card style={{ minHeight: "300px", width: "300px" }} color="red">
        <Card.Content>
          <Card.Header>Joke</Card.Header>
          <Card.Meta>
            <span className="date">Category: {data.category}</span>
          </Card.Meta>
          <Card.Description style={{ wordBreak: "break-word" }}>
            {data.joke}
          </Card.Description>
        </Card.Content>
      </Card>
      <ChangeJokeButton change={() => mutate()} />
    </>
  );
}
