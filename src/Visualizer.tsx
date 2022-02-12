import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const generateArrayOfNums = (from: number, to: number) => {
  const array = [];
  for (let i = from; i <= to; i++) {
    array.push(i);
  }
  return array;
};

export const array = generateArrayOfNums(1, 20);

export default function Visualizer() {
  const { start, end, middle, result } = useSelector(
    (state: RootState) => state.binarySearch
  );

  return (
    <div className="max-w-3xl flex-grow w-full flex flex-col items-stretch justify-center">
      <div className="flex text-white font-bold">
        {array.map((element, index) => (
          <div
            key={element}
            className={`${
              index === result
                ? "bg-green-700"
                : index === start || index === end
                ? "bg-red-700"
                : index === middle
                ? "bg-purple-900"
                : "bg-pink-500"
            } element flex-1 h-10 rounded-sm mx-1 flex items-center justify-center text-sm`}
          >
            <div>
              <span>{element}</span>
            </div>
            <div
              className={`${
                index === result
                  ? "tooltip tooltip-result"
                  : index === start || index === end
                  ? "tooltip tooltip-boundary"
                  : index === middle
                  ? "tooltip tooltip-middle"
                  : "tooltip tooltip-invisible"
              }`}
            >
              {index === result ? (
                <p>Result</p>
              ) : index === start ? (
                <p>Lower boundary</p>
              ) : index === end ? (
                <p>Upper boundary</p>
              ) : index === middle ? (
                <p>Middle</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
