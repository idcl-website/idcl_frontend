"use client";

import GeneralEllipse from "@/components/general/ellipse";
import HeroSection from "@/components/sections/events/hero";
import EventsHub from "@/components/sections/events/hub";
import EventsInnovation from "@/components/sections/events/innovation";
import EventsTech from "@/components/sections/events/tech";
import EventsWhyUs from "@/components/sections/events/whyus";
import { names } from "@/data/elllipse";
import UpcomingEventCom from "@/components/general/upcoming";

export default function EventsPage() {
    return (
        <section className="w-full h-[88vh]">
            <iframe src="https://office.imodigitalcity.com/event" frameBorder="0" width="100%" height="100%" className="w-full h-[88vh]">
            </iframe>
        </section>
        // <>
        //     <HeroSection />
        //     <EventsInnovation />
        //     <UpcomingEventCom />
        //     <EventsTech />
        //     <EventsHub />
        //     <EventsWhyUs />
        //     <GeneralEllipse name={names.events} />
        // </>
    )
}
