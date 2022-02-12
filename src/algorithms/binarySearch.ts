type StartBinarySearchParams = {
  array: number[];
  start: number;
  setStart: any;
  end: number;
  setEnd: any;
  middle: number;
  setMiddle: any;
  searchItem: any;
  setResult: any;
};

const wait = async () => {
  return new Promise<void>((res) => setTimeout(res, 5000));
};

const getMiddle = (start: number, end: number) => {
  return Math.floor((start + end) / 2);
};

export default async function startBinarySearch({
  array,
  start,
  setStart,
  end,
  setEnd,
  middle,
  setMiddle,
  searchItem,
  setResult,
}: StartBinarySearchParams) {
  console.log("binary search start");

  for (; start <= end; ) {
    //   while (start <= end) {
    let middle = getMiddle(start, end);
    setMiddle(getMiddle(start, end));
    await wait();

    const guess = array[middle];
    console.log(
      `current guess=${guess} middle=${middle} start=${start} end=${end}`
    );

    if (guess === searchItem) {
      setResult(middle);
      await wait();
      console.log(`result found. middle=${middle} start=${start} end=${end}`);
      return;
    }

    if (guess < searchItem) {
      setStart(middle + 1);
      await wait();
      console.log(
        `removed left half, middle=${middle} start=${start} end=${end}`
      );
    } else {
      setEnd(middle - 1);
      await wait();
      console.log(
        `removed right half, middle=${middle} start=${start} end=${end}`
      );
      setMiddle();
    }
    // })();
  }

  console.log("not found");
  return null;
}
