import React from "react";
import { Button } from "semantic-ui-react";
export function ChangeJokeButton({
  change,
}: {
  change: React.MouseEventHandler;
}) {
  return (
    <Button onClick={change} primary style={{ width: "300px" }}>
      That was funny, one more!
    </Button>
  );
}
