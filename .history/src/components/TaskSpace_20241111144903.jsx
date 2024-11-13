export default function TaskSpace(props) {
    return (
      <div className={`rounded-xl flex p-2 gap-4 flex-wrap hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 border ${props.bgColor} border-gray-500`} style={{
        scrollbarWidth: 'none',       /* Firefox */
        msOverflowStyle: 'none'       /* IE and Edge */
      }}>
        <style>{`
        .TaskSpace::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
        }
      `}</style>
        <div className="w-[200px] border rounded-lg h-fit flex flex-col gap-2 p-2">
          <div className="flex items-center p-2 justify-start w-full text-4xl"><strong>Title</strong></div>
          <div className="relative w-full border rounded h-2"><div className="absolute bg-blue-500 h-full rounded w-[100px]"></div></div>
          <div className=" p-2 text-left h-60 overflow-auto hide-scrollbar"><p>lorem*100</p></div>
        </div>
      </div>
    )
}