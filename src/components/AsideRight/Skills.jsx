export default function Skills() {
  return (
    <div id="skills">
      <h1 className="text-2xl border-b-2 border-black font-semibold">Skills</h1>
      <div
        className="pt-2 border-b-2 border-dotted border-gray-400 pb-3"
        id="client-side-skills"
      >
        <h2 className="font-medium text-gray-500">Client-Side</h2>
        <div className=" flex gap-6 pt-3 flex-wrap">
          <p className="border-2 p-1 rounded-md font-medium">HTML</p>
          <p className="border-2 p-1 rounded-md font-medium">CSS3</p>
          <p className="border-2 p-1 rounded-md font-medium">JavaScript</p>
          <p className="border-2 p-1 rounded-md font-medium">Tailwind CSS</p>
          <p className="border-2 p-1 rounded-md font-medium">React JS</p>
          <p className="border-2 p-1 rounded-md font-medium">Framer Motion</p>
        </div>
      </div>
      <div
        className="pt-2 border-b-2 border-dotted border-gray-400 pb-3"
        id="client-side-skills"
      >
        <h2 className="font-medium text-gray-500">Server-Side</h2>
        <div className=" flex gap-6 pt-3 flex-wrap">
          <p className="border-2 p-1 rounded-md font-medium">
            Azure Fundamentals
          </p>
          <p className="border-2 p-1 rounded-md font-medium">Firebase</p>
          <p className="border-2 p-1 rounded-md font-medium">NoSQL</p>
          <p className="border-2 p-1 rounded-md font-medium">SQL</p>
          <p className="border-2 p-1 rounded-md font-medium">REST API</p>
          <p className="border-2 p-1 rounded-md font-medium">Python</p>
          <p className="border-2 p-1 rounded-md font-medium">Node JS</p>
          <p className="border-2 p-1 rounded-md font-medium">NPM</p>
        </div>
      </div>
    </div>
  )
}