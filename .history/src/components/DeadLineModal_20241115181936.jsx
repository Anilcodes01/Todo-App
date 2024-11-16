import { useState, useEffect } from "react";

export default function DeadLineModal(props) {
    const [isVisible, setIsVisible] = useState(false);
    const cards = props.info || [];  // Fallback to an empty array if no cards are passed

    useEffect(() => {
        if (props.Show) {
            // Trigger animation when modal is shown
            setIsVisible(true);
        } else {
            // Reset visibility state when modal is hidden
            setIsVisible(false);
        }
    }, [props.Show]);

    if (!props.Show) return null;

    const hide = (e) => {
        if (e.target.id === "wrapper") props.hide();
    };

    return (
        <div className="fixed w-full h-full inset-0 z-10" id="wrapper" onClick={hide}>
            <div className={`fixed top-[81px] left-[50%] transform -translate-x-[50%] w-[200px] p-2 h-[200px] bg-white text-black overflow-auto rounded transition-all duration-100 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
                <div className="flex flex-wrap gap-2">
                    {props.children}
                    {cards.length > 0 ? (
                        cards.map((card, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <p>{card.deadLineTime}</p>
                                <p>{card.deadLineDate}</p>
                            </div>
                        ))
                    ) : (
                        <p>No deadlines available</p> // Fallback message if no cards are found
                    )}
                </div>
            </div>
        </div>
    );
}
