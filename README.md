## Summary

SWR (stale-while-revalidate) is a data-fetching pattern/strategy. Vercel's SWR [vSWR] is an implementation of it.

When a request needs to be made, vSWR checks whether there is a cache for that specified url. This cache is maintained by the vSWR, not the browser. If cache exists, it is used first. In the meantime, a new request to made to the url. If the new response differs from the cache, `data` is updated and the new response is cached.

<br/>

### Fetching

```
function Profile() {
  const { data, error } = useSWR(key, key => fetch(key))

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```

<br/>

### Triggering re-fetch

```
function Profile() {
  const { data, error, mutate } = useSWR(key, key => fetch(key))

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div onClick={()=>mutate()}>hello {data.name}!</div>
}
```

<br/>

### Inspecting cache (only for the curious)

```
function Profile() {
  const { cache } = useSWRConfig()

  console.log(cache)

  ...
}
```

<br/>
