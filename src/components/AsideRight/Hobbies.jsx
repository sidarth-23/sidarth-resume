export default function Hobbies() {
  return (
    <div id="hobbies">
      <h1
        className="text-2xl border-b-2 border-black font-semibold "
        id="hobbies"
      >
        Hobbies
      </h1>
      <div className="flex gap-6 pt-3 flex-wrap">
        <p className="border-2 p-1 rounded-md font-medium">Cycling</p>
        <p className="border-2 p-1 rounded-md font-medium">Chess</p>
        <p className="border-2 p-1 rounded-md font-medium">
          Reading World History
        </p>
        <p className="border-2 p-1 rounded-md font-medium">
          Exploring Programming
        </p>
        <p className="border-2 p-1 rounded-md font-medium">Video Games</p>
        <p className="border-2 p-1 rounded-md font-medium">Music</p>
      </div>
    </div>
  )
}
