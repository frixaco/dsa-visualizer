import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BinarySearchState {
  start: number | null;
  end: number | null;
  middle: number | null;
  result: number | null;
}

const initialState: BinarySearchState = {
  start: null,
  end: null,
  middle: null,
  result: null,
};

export const getMiddle = (start: number, end: number) => {
  return Math.floor((start + end) / 2);
};

const binarySearchSlice = createSlice({
  name: "binarySearch",
  initialState,
  reducers: {
    setStart: (state, action: PayloadAction<BinarySearchState["start"]>) => {
      state.start = action.payload;
    },
    setEnd: (state, action: PayloadAction<BinarySearchState["end"]>) => {
      state.end = action.payload;
    },
    setMiddle: (state, action: PayloadAction<BinarySearchState["middle"]>) => {
      state.middle = action.payload;
    },
    setResult: (state, action: PayloadAction<BinarySearchState["result"]>) => {
      state.result = action.payload;
    },
  },
});

export const { setStart, setEnd, setResult, setMiddle } =
  binarySearchSlice.actions;

export default binarySearchSlice.reducer;
