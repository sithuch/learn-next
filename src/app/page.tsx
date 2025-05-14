import { DotPattern } from "@/components/magicui/dot-pattern";
import { AuroraText } from "@/components/magicui/aurora-text";
import { MorphingText } from "@/components/magicui/morphing-text";
import React from 'react'

export default function getRoute() {
    // Calling useRouter() hook
    return (
        <div className="flex h-screen w-full items-center justify-center m-auto gap-4 bg-none">
          
                <div className="flex flex-col items-center justify-center">
                        <MorphingText className="text-blue-500 font-mono text-sm" texts={["CHHEM-SITHUCH", "BACKEND-DEV"]} />
                    <p className="mt-4 text-lg text-gray-600">This is a simple example of a page using the Magic UI.</p>
                    <p className="mt-4 text-lg text-gray-600">You can use the Magic UI to create beautiful and responsive UIs.</p>
                    <p className="mt-4 text-lg text-gray-600">This is a simple example of a page using the Magic UI.</p>
                
                </div>
                  
                {/* <div className="flex flex-col items-center justify-center w-90 h-90">
                    <img src="/profile.png" alt="Profile" className="object-cover w-full h-auto rounded-full border-4 border-blue-400 transition-all duration-500 aspect-square group-hover:border-blue-500" />  
                </div> */}
                <div className="flex items-center gap-4 w-90 h-90">
                <img className="mask-[url(/profile.png)] bg-[url(/sas.png)] object-cover w-full h-auto rounded-full border-4 border-blue-400 transition-all duration-500 aspect-square group-hover:border-blue-500" src="url(/profile.png)" />
                    
                </div>
            <DotPattern className="flex inset-0 z-[-1] h-screen backdrop-blur-2xl w-full items-center justify-center m-auto bg-gray-300 "/>
        </div>
    ) 
}