import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import Certificate from "./Certificates";

export default function MainBody() {
  return (
    <div className="w-7/12 flex flex-col gap-3">
      <Experience />
      <Projects />
      <Certificate />
    </div>
  )
}