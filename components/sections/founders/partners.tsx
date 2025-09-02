"use client"

import {motion} from "framer-motion";
import Image from "next/image";

const partners = [
    {
        image: '/images/partners/chris-burry-headshot.jpeg',
        name: "Christ Burry",
        desc: 'USMAC CEO'
    },
    {
        image: '/images/partners/ken-singer.jpeg',
        name:"Ken Singer",
        desc: 'Chief Learning Officer of the UC Berkeley Sutardja Center for Entrepreneurship and Technology'
    },
    {
        image: '/images/partners/David-Law-Leadership-1.jpg',
        name: "David Law",
        desc: 'Director of Global Programs, UC Berkeley Sutardja Center for Entrepreneurship and Technology'
    },
    {
        image: '/images/partners/steve-adelman.jpeg',
        name:"Steve Adelman",
        desc: 'USMAC Lead Mentor'
    },
]

const FoundersPartners = () => {
    return (
        <motion.section
            className="bg-[#F9F9FB] w-full py-12 sm:py-16 md:py-20 lg:py-[112px] px-4 sm:px-6 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                    opacity: 1, y: 0,
                    transition: { duration: 0.8, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.15 }
                }
            }}
        >
            <div className="w-full max-w-[900px] mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-[31px] items-center justify-center">
                <motion.h1
                    className="font-satoshi text-2xl sm:text-3xl lg:text-[32px] font-bold leading-[110%] capitalize text-center"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                    }}
                >
                    Meet our Partners
                </motion.h1>
                <div className="w-full flex gap-6">
                    {partners.map((item, index) => (
                        <div key={index} className="flex flex-col items-start gap-2 w-[400px] h-[400px]">
                            <div className="w-full">
                                <Image
                                    src={item.image}
                                    alt={item.desc}
                                    width={500}
                                    height={500}
                                    priority
                                    className="object-cover rounded-[10px] w-full h-ful border border-black/20"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[#222] text-lg font-semibold">{item.name}</p>
                                <p className="text-base text-slate-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default FoundersPartners