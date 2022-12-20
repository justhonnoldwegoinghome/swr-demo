import useSWR from "swr";

export function usePlanningAreas() {
  const { data: planningAreas, mutate: mutatePlanningAreas } = useSWR(
    "planningAreas",
    () => fetch("http://localhost:5000/1/planning-areas")
    // { revalidateOnMount: false }
    // { revalidateIfStale: false }
    // { refreshInterval: 1000 }
  );
  return { planningAreas, mutatePlanningAreas };
}
