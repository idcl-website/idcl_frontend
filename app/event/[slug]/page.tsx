"use client"
import { eventsService } from "@/services/event"
import { useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { EventItem } from "@/types/event"
import { document } from "postcss"
export default function EventPage({params}: {params: {slug: string}}) {
    const searchParams = useSearchParams()
    const url = searchParams.get('embedUrl')
    // const [event, setEvent] = useState<EventItem>()

    const iframeRef = useRef<HTMLIFrameElement>(null)

    // const getEvent = async () => {
    //     try {
    //         const response = await eventsService.getOneEvent(id as string);
    //         setEvent(response)
    //         return response
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(()=>{
    //     getEvent()
    // },[])

    // useEffect(()=>{
    //     const iframe = iframeRef.current
    //     if (!iframe) return;

    //     iframe.onload = () => {
    //         const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    //         if (!iframeDoc) return;
            
    //         const  style = iframeDoc.createElement('style');
    //         style.textContent = `
    //             body {
    //                 margin: 0;
    //                 padding: 0;
    //                 background-color: red !important;
    //             }
    //             `
    //         iframeDoc.head.appendChild(style)
    //     }
    // },[iframeRef])

    return (
        <div className="w-full h-screen watch">
            <iframe 
                src={`${url}`} 
                frameBorder="0" 
                width="100%" 
                height="100%"
                className="has-[.container]:pr-[20px]"
                ref={iframeRef}
            ></iframe>
        </div>
    )
}