import { MdWbSunny } from "react-icons/md";
export default function NavBar() {
    return (
      <div className='rounded-xl col-span-4 border bg-transparent border-gray-500'>
        <button className="w-10 h-10 border rounded-full"><MdWbSunny size={20} /></button>
      </div>
    )
}