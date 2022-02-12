import { useAtom } from "jotai";
import { useState } from "react";
import startBinarySearch from "./algorithms/binarySearch";
import {
  array,
  endAtom,
  middleAtom,
  resultAtom,
  searchItemAtom,
  startAtom,
} from "./Visualizer";

export default function Navbar() {
  const [searchItem, setSearchItem] = useState(0);

  const handleClick = () => {
    startBinarySearch({
      array,
      start,
      setStart,
      end,
      setEnd,
      middle,
      setMiddle,
      searchItem,
      setResult,
    });
  };

  return (
    <div className="sticky top-0 w-full flex justify-center py-4 px-8">
      <div className="max-w-3xl">
        <button className="rounded-md bg-blue-700 px-4 text-white py-2 mx-4 hover:bg-blue-600">
          sort
        </button>

        <button
          onClick={handleClick}
          className="rounded-md bg-blue-700 px-4 text-white py-2 mx-4 hover:bg-blue-600">
          binary search
        </button>

        <input
          value={searchItem}
          onChange={(e) => setSearchItem(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
