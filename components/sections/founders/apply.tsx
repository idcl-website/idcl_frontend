import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FoundersApply() {
    return (
        <section className="w-full px-16 pb-16 flex justify-center gap-24">
            <div className="w-[40%]">
                <h1 className="text-4xl mb-4">Ready to Join the Founders Development Program?</h1>
                <p className="text-base mb-5 text-[rgb(100,116,139)]">
                    Embark on a transformative 5-stage journey designed to turn your entrepreneurial vision into a thriving global business. 
                </p>
                <Link href="/founders-development-program/apply" className="bg-[rgb(0,93,255)] text-white px-5 py-3 rounded-md hover:bg-[rgb(0,93,255)]/80 transition-all shadow-lg active:scale-95 ease-in-out duration-200">Apply Now</Link>
            </div>
            <div className="flex items-center gap-4">
                <img src="/images/founders/usmac.jpeg" alt="" width={150}/>
                <X size={50} className="font-light"/>
                <img src="/images/logo2.png" alt="" width={150}/>
            </div>
            {/* <div className="w-[60%]">
                <Image src="/images/founders/apply.png" alt="Founders Development Program" />
            </div> */}
        </section>
    );
}
