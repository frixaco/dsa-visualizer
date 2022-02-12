import {
  setEnd,
  setMiddle,
  setResult,
  setStart,
} from "../redux/binarySearchReducer";

type BinarySearchParams = {
  array: number[];
  searchItem: any;
  dispatch: any;
};

const wait = async (s: number) => {
  return new Promise<void>((res) => setTimeout(res, s * 1000));
};

export const getMiddle = (start: number, end: number) => {
  return Math.floor((start + end) / 2);
};

export default async function binarySearch({
  array,
  searchItem,
  dispatch,
}: BinarySearchParams) {
  let start = 0,
    end = array.length - 1;

  dispatch(setStart(start));
  dispatch(setEnd(end));
  dispatch(setResult(null));

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    dispatch(setMiddle(middle));
    await wait(0.9);

    const guess = array[middle];

    if (guess === searchItem) {
      dispatch(setResult(middle));
      return middle;
    }

    if (guess < searchItem) {
      start = middle + 1;

      dispatch(setStart(middle + 1));
    } else {
      end = middle - 1;

      dispatch(setEnd(middle - 1));
    }
  }

  return null;
}
