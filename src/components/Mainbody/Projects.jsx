
import { IoLogoJavascript } from 'react-icons/io'
import { BiLogoCss3 } from 'react-icons/bi'
import { TbBrandReact } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'
import { AiOutlineApi } from 'react-icons/ai'
import {LiaPython} from 'react-icons/lia'

export default function Projects() {
  return (
    <div className="text-sm" id="projects">
      <h1
        className="text-2xl border-b-2 border-black font-semibold "
        id="section-title"
      >
        Projects
      </h1>
      <div id="propject-1">
        <div className="pt-2 flex gap-2">
          <div className="flex content-center items-center">
            <IoLogoJavascript />
          </div>
          <div className="flex content-center items-center">
            <BiLogoCss3 />
          </div>
          <h2 className=" font-medium text-lg pb-1">
            Rock Paper Scissors Website
          </h2>
        </div>
        <p className="pb-1">
          A frontend site built with vanilla JavaScript and CSS to play the game
          with the computer and store the score in localStorage
        </p>
        <ul className="list-disc list-inside text-base border-b-2 border-dotted border-gray-400">
          <li>
            Made it a SPA with only JS to challenge myself and learn moer about
            the fundamentals of frameworks like React
          </li>
          <li>
            It is more of conditional rendering and less of DOM manipulation
          </li>
          <li className="pb-1">
            Added exception handling to prevent undesirable results
          </li>
        </ul>
      </div>
      <div id="project-2">
        <div className="pt-2 flex gap-2">
          <div className="flex content-center items-center">
            <TbBrandReact />
          </div>
          <div className="flex content-center items-center">
            <SiTailwindcss />
          </div>
          <div className="flex content-center items-center">
            <AiOutlineApi />
          </div>
          <h2 className=" font-medium text-lg pb-1">Movie Search</h2>
        </div>
        <p className="pb-1">
          My first attempted React and Tailwind frontend application which has a
          login page and stores the favourite movies of the user in localStorage
        </p>
        <ul className="list-disc list-inside text-base border-b-2 border-dotted border-gray-400">
          <li>
            Used Open Movie Db API to retrieve the movies for which the user
            searches
          </li>
          <li>
            Then onClick on the cards received, the selected movie is stored
            with respect to the user in the local storage
          </li>
          <li className="pb-1">
            Signup page is there where new users can register{" "}
          </li>
        </ul>
      </div>
      <div id="project-3">
        <div className="pt-2 flex gap-2">
          <div className="flex content-center items-center">
            <LiaPython />
          </div>
          <h2 className=" font-medium text-lg pb-1">Flight Price Tracker</h2>
        </div>
        <p className="pb-1">
          A CLI based app which if set running in cloud functions will provide a
          SMS to the user if the flight price for a destination is lower than
          the price set by the user in the excel sheet
        </p>
        <ul className="list-disc list-inside text-base border-b-2 border-dotted border-gray-400">
          <li>
            Implemented OPPS to segregate the sections of code such as
            <ul className="list-disc list-inside text-base pl-6">
              <li>Flight price database</li>
              <li>
                User Information containing the route and the break even price
                point
              </li>
              <li>
                A template class to define the structure to store flight data
              </li>
              <li>Sending SMS on demand</li>
            </ul>
          </li>
          <li className="pb-1">
            Implemented 3 API&#39;s in this single codebase with conditional
            statements to engage the API&#39;s on use to prevent overuse of API.
          </li>
        </ul>
      </div>
      <div id="project-4">
        <div className="pt-2 flex gap-2">
          <div className="flex content-center items-center">
            <TbBrandReact />
          </div>
          <div className="flex content-center items-center">
            <SiTailwindcss />
          </div>
          <h2 className=" font-medium text-lg pb-1">This Resume...</h2>
        </div>
      </div>
    </div>
  )
}
