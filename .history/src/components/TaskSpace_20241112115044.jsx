import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function TaskSpace(props) {
  // Assuming `props.cards` is the array of card data from the DB
  const cards = props.cards;
  const [showCardOptionModal, setShowCardOptionModal] = useState({})

  const toggleCardOptions = (index) => {
    setShowCardOptionModal((prevState) => ({
      ...prevState,
      [index]: !prevState[index] // Toggle visibility for the specific card
    }));
  };


  // Function to organize cards into 3 columns
  const columns = [[], [], []];

  // Distribute cards into the three columns
  cards.forEach((card, index) => {
    columns[index % 3].push(card);
    console.log(card)
    console.log(index)
    console.log(columns)
  });

  return (
    <div className={`rounded-xl grid grid-cols-3 gap-2 p-2 hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 ${props.bgColor}`}>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[0].map((card, index) => (
          <div className='w-full h-fit border-[1px] border-gray-500 flex flex-col gap-2 p-4 rounded-xl card-animation transition-all duration-300' key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button onClick={() => toggleCardOptions(index)} className="absolute bottom-0">
                <BsThreeDotsVertical />
            </button>
            {showCardOptionModal[index] && (
                <div className="w-10 h-10 fixed inset-0 bg-white">
                  <button onClick={() => props.deleteCard(index)}>delete</button>
                </div>
              )}
            </div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[1].map((card, index) => (
          <div className='w-full h-fit border-[1px] border-gray-500 flex flex-col gap-2 p-4 rounded-xl card-animation transition-all duration-300' key={index}><h3>{card.title}</h3><p>{card.description}</p><button onClick={() => props.deleteCard(index)}>delete</button></div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[2].map((card, index) => (
          <div className='w-full h-fit border-[1px] border-gray-500 flex flex-col gap-2 p-4 rounded-xl card-animation transition-all duration-300' key={index}><h3>{card.title}</h3><p>{card.description}</p><button onClick={() => props.deleteCard(index)}>delete</button></div>
        ))}
      </div>
    </div>
  );
}
