export default function AddTodo(props) {
    return (
        <>
            <input type="text" placeholder="Title here..." className=" rounded-xl border border-gray-500 p-2 focus:outline-none row-span-1 col-span-8" />
            <textarea name="" id="" placeholder="Task here..." className=" rounded-xl border border-gray-500 p-2 focus:outline-none col-start-2 col-span-7 row-span-3 row-start-2"></textarea>
            <div className="h-[60px] w-[60px] rounded-lg bg-black col-start-1 col-span-1 row-start-2 row-end-3"></div>
            <div className=" rounded-lg bg-black col-start-1 border col-span-1 row-start-4 row-end-5"></div>
        </>

    )
}