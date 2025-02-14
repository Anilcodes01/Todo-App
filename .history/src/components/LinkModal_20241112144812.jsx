import { useState, useEffect } from "react"

export default function LinkModal(props) {
    const [isVisible, setIsVisible] = useState()

    useEffect(() => {
        if (props.Show) {
            // Trigger animation when modal is shown
            setIsVisible(true);
        } else {
            // Reset visibility state when modal is hidden
            setIsVisible(false);
        }
    }, [props.Show]);

    if (!props.Show) return null

    const hide = (e) => {
        if (e.target.id === "wrapper") props.hide();
    };
    return (
        <div className="fixed w-full h-full inset-0 bg-blue-transparent z-10" id="wrapper"
        onClick={hide}>
            <div className={`fixed top-60 left-[480px] w-[200px] p-2 h-fit backdrop-blur-sm bg-white/5 transform transition-all duration-100 text-black flex gap-2 flex-wrap overflow-auto rounded ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
            <h4>Link to</h4>
                {props.children}
            </div>
        </div>
    )
}