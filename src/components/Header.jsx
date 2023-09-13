import { useEffect } from "react"
import { useState } from "react"

import { AiOutlinePhone } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import { AiOutlineGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import {IoLocationSharp} from 'react-icons/io5'


export default function Header() {
  const [clicked, setClicked] = useState(false)
  const copyText = (event) => {
    event.preventDefault()
    navigator.clipboard.writeText(event.target.text)
    setClicked(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setClicked(false)
    }, 400)
  }, [clicked])

  return (
      <div className="flex flex-col gap-1 relative" id="header">
        {clicked && (
          <div className="absolute right-1/2 bg-green-400 bg-opacity-50 p-2 font-medium rounded-md border-2 uppercase animate-ping duration-100 text-gray-600">
            copied
          </div>
        )}
        <h1 className="font-semibold text-4xl uppercase" id="name">
          Sidarth G
        </h1>
        <h2 className="text-lg text-gray-500" id="role">
          Full Stack Developer
        </h2>
        <div
          className="grid grid-cols-3 text-sm font-bold gap-1"
          id="contact-info"
        >
          <div id="phone-number" className="flex items-center gap-2">
            <AiOutlinePhone style={{ display: "inline" }} />
            <a className="hover:underline" onClick={copyText}>
              +918098230245
            </a>
          </div>
          <div id="email-id" className="flex items-center gap-2">
            <AiOutlineMail />
            <a className="hover:underline" onClick={copyText}>
              g.sidarth23@gmail.com
            </a>
          </div>
          <div id="github" className="flex items-center gap-2">
            <AiOutlineGithub />
            <a
              href="https://github.com/sidarth-23"
              rel="noreferrer"
              target="_blank"
              className="hover:underline"
            >
              github.com/sidarth-23
            </a>
          </div>
          <div id="linkedIn" className="flex items-center gap-2">
            <BsLinkedin />
            <a
              href="https://www.linkedin.com/in/sidarth-g/"
              rel="noreferrer"
              target="_blank"
              className="hover:underline"
            >
              linkedIn.com/in/sidarth-g
            </a>
          </div>
          <div id="location" className="flex items-center gap-2">
            <IoLocationSharp />
            <a className="hover:underline">Coimbatore, Tamilnadu</a>
          </div>
        </div>
      </div>
  )
}
