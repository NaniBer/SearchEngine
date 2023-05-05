import { useState } from "react"
import TopComponent from "../Components/TopComponent"


let BookTitile=['title 1','title 2']
let BookAuthor=['author 1', 'author 2']


const FirstPage=()=>{
    const [query,setQuery]= useState('')
    const handleClick=(e)=>{
        
        e.preventDefault()
        const formData= new FormData(e.target)
        const data= Object.fromEntries(formData)
        console.log(data)
    }
    return(
        <div>
            <TopComponent/>
            <p>This is Home</p>
            <div>
                <div>
                    <div className="inline-flex items-center justify-center">
                        <div className="flex space-x-1">
                            <form onSubmit={handleClick}>
                                <input
                                type="text"
                                name='query'
                                className="block ml-10 w-200 px-10 py-2 text-yellow-700 bg-white border rounded-full focus:
                                border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Search..."
                        />

                                <button className="px-4 text-white bg-yellow-600 rounded-full "
                                    
                                >
                                    <svg
                            
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button > 
                            </form>
                        </div>
                    </div>

            </div>

        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                    <div className="px-1 py-2 mt-8 rounded shadow-sm">
                        <p className="text-xl">
                            <span className="font-light">My </span>
                            <span className="text-orange">Books</span>
                        </p>
                        <table className="w-full mt-1">
                            <thead>
                                <tr className="flex justify-between">
                                    <th className="font-medium text-orange">Title Name</th>
                                    <th className="font-medium text-orange">Author</th>
                                </tr>
                            </thead>
                            <tbody>
                                {BookTitile.map(() => (
                                    <tr
                                    key={Math.random()}
                                    className="flex justify-between px-1 py-2 mb-3 even:bg-dark_light"
                                    >
                                    <td>{BookTitile}</td>
                                    <td>{BookAuthor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
        </div>
    )


}
export default FirstPage