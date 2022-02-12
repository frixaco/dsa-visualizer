const generateArrayOfNums = (from: number, to: number) => {
  const array = [];
  for (let i = from; i <= to; i++) {
    array.push(i);
  }
  return array;
};

export default function Visualizer() {
  return (
    <div className="max-w-3xl flex-grow w-full flex flex-col items-stretch justify-center">
      <div className="flex text-white">
        {array.map((element, index) => (
          <div
            key={element}
            className={`${
              index === start || index === end
                ? "bg-red-500"
                : index === middle
                ? "bg-blue-900"
                : index === result
                ? "bg-green-700"
                : "bg-blue-400"
            } flex-1 h-10 rounded-md mx-1 flex items-center justify-center text-sm`}>
            <span>{element}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
