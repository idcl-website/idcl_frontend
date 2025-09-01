"use client"

import {motion} from "framer-motion";
import Image from "next/image";

const partners = [
    {
        image: '/images/partners/us.jpeg',
        body: 'USMAC'
    },
    {
        image: '/images/partners/imo.png',
        body: 'Imo State Government'
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
                    Meet our Experts
                </motion.h1>
                <div className="flex gap-2">
                    {partners.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Image
                                src={item.image}
                                alt={item.body}
                                width={120}
                                height={120}
                                priority
                                className="object-contain"
                            />
                            {/* <p className="text-base sm:text-lg md:text-xl text-[#222]">{item.body}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default FoundersPartners