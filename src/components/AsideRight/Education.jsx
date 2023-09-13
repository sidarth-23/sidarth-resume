import {IoLocationOutline} from 'react-icons/io5'

export default function Education() {
  return (
    <div>
      <h1 className="text-2xl border-b-2 border-black font-semibold ">
        Education
      </h1>
      <h2 className="text-base pt-2 font-semibold" id="ug-degree">
        B.Tech (EEE) -{""}{" "}
        <span className="text-sm text-gray-600 font-medium" id="year-ug-passed">
          2022
        </span>
      </h2>
      <h3 id="ug-college">Amrita Vishwa Vidhyapeetham</h3>
      <div className="pt-2 flex gap-1" id="ug-location">
        <div className="flex content-center items-center">
          <IoLocationOutline />
        </div>
        <p className='text-xs'>Coimbatore, Tamilnadu</p>
      </div>
    </div>
  )
}