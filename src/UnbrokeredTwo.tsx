import { useState } from "react";
import { Link } from "react-router-dom";
import { useProjects } from "./useProjects";
import { usePlanningAreas } from "./usePlanningAreas";

export function UnbrokeredTwo() {
  const [count, setCount] = useState(0);
  const { projects, mutateProjects } = useProjects();
  const { planningAreas, mutatePlanningAreas } = usePlanningAreas();

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <button onClick={() => mutateProjects()}>Mutate projects</button>
      <button onClick={() => mutatePlanningAreas()}>
        Mutate planning areas
      </button>

      <Link to="/unbrokered">Unbrokered</Link>
    </div>
  );
}
