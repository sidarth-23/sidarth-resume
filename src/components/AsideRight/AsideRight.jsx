import Education from "./Education";
import Skills from "./Skills";

export default function AsideRight() {
  return <div className="w-5/12 flex flex-col gap-3">
    <Education />
    <Skills />
  </div>
}