import useSWR from "swr";

export function useProjects() {
  const { data: projects, mutate: mutateProjects } = useSWR(
    "projects",
    () => fetch("http://localhost:5000/1/projects")
    // { revalidateIfStale: false }
  );
  return { projects, mutateProjects };
}
