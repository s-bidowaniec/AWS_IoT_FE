"use client";
/* pages/index.js */
import { useState, useEffect } from "react";
//import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

//type Breeds = []


export default function TestFetch({ breeds = [] }) {
  let initialState: string[] = []
  const [breedList, setBreedList] = useState(initialState);
  
  useEffect(() => {
    (async () => {
      setBreedList((await getData()).props.breeds);
    })();
  }, []);

  return (
        <div>
          <h2>Test Fetch</h2>
            {breedList.length === 0 && <h2>Loading...</h2>}
            {breedList.length > 0 && <h2>loaded</h2>}
            <form action="#">
            <select>
            {breedList.length > 0 &&  breedList.map((breed) => (
                <option key={breed} value={breed}>
                {breed}
                </option>
            ))}
            </select>
            </form>
        </div>
  );
}

async function getData(): Promise<{ props: { breeds: string[] } }> {
  const url = "https://dog.ceo/api/breeds/list/all";
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  console.log(data.message);
  const breeds = data.message;
  return {
    props: { breeds: [...Object.keys(breeds)] },
  };
}
