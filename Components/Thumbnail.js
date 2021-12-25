/* eslint-disable react/display-name */
import { ThumbUpIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { forwardRef } from "react"

const Thumbnail=forwardRef(({result},ref)=> {
    console.log(result)
    const Base_Url = "https://image.tmdb.org/t/p/original/"
    return (
        <div ref={ref} className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image 
            layout="responsive"
             src={ `${Base_Url}${result.backdrop_path || result.poster_path}` || `${Base_Url}${result.poster_path}`       }
            height={1080}
            width={1920}
            alt={result.title} 
            />
            <div className="p-2">
                <p className="truncate">{result.overview}</p>
                <h2 className="mt-2 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_title}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">{result.release_date} . {" "} 
                <ThumbUpIcon className="h-5 mx-2"/> {result.vote_count}
                </p>
            </div>
        </div>
    )
})

export default Thumbnail
