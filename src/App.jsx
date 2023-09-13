import AsideRight from "./components/AsideRight/AsideRight"
import Header from "./components/Header"
import MainBody from "./components/Mainbody/MainBody"
import { IconContext } from "react-icons"


function App() {
  return (
    <IconContext.Provider value={{ display: "inline" }}>
      <div className="w-a3-potrait h-a3-potrait p-10 flex flex-col gap-3 bg-hero-pattern">
        <Header />
        <div className="flex gap-8">
          <MainBody />
          <AsideRight />
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default App
