"use client";

import InfoCard from "@src/components/whatWeDo/InfoCard";
import { WWeDoMetaData } from "@/schemas/WWeDoMetaData";
import Image from "next/image";
import Link from "next/link";

const sampleWWeDoData: WWeDoMetaData[] = [
    {
        slug: "community-events",
        title: "Community Events",
        imgPath: "/images/community-events.jpg",
        buttonHref: "/events",
        publishDate: new Date().toISOString(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, mauris et egestas tristique, risus nunc tincidunt libero, in varius justo elit ac metus.",
    },
    {
        slug: "projects",
        title: "Projects",
        imgPath: "/images/projects.jpg",
        buttonHref: "/projects",
        publishDate: new Date().toISOString(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, mauris et egestas tristique, risus nunc tincidunt libero, in varius justo elit ac metus.",
    },
    {
        slug: "academic-programs",
        title: "Academic and Career Programs",
        imgPath: "/images/academic-career.jpg",
        buttonHref: "/programs",
        publishDate: new Date().toISOString(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, mauris et egestas tristique, risus nunc tincidunt libero, in varius justo elit ac metus.",
    },
    {
        slug: "milestone-events",
        title: "Annual Milestone Events",
        imgPath: "/images/milestone-events.jpg",
        buttonHref: "/milestone",
        publishDate: new Date().toISOString(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, mauris et egestas tristique, risus nunc tincidunt libero, in varius justo elit ac metus.",
    },
    {
        slug: "demistify",
        title: "deMISTify",
        imgPath: "/images/demistify.jpg",
        buttonHref: "/demistify",
        publishDate: new Date().toISOString(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, mauris et egestas tristique, risus nunc tincidunt libero, in varius justo elit ac metus.",
    },
    {
        slug: "competition",
        title: "International Competition",
        imgPath: "/images/competition.jpg",
        buttonHref: "/competition",
        publishDate: new Date().toISOString(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, mauris et egestas tristique, risus nunc tincidunt libero, in varius justo elit ac metus.",
    },
    {
        slug: "campus-engagement",
        title: "Campus Engagement",
        imgPath: "/images/campus-engagement.jpg",
        buttonHref: "/engagement",
        publishDate: new Date().toISOString(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, mauris et egestas tristique, risus nunc tincidunt libero, in varius justo elit ac metus.",
    }
];

const WhatWeDo = () => {
    const infoCards = sampleWWeDoData.map((item) => {
        return (
            <div key={item.slug} className="mb-[10vh]">
                <InfoCard
                    title={item.title}
                    imgPath={item.imgPath}
                    buttonHref={item.buttonHref}
                ></InfoCard>
            </div>
        );
    });

    return (
        <>
            <div className="relative w-screen h-auto bg-gradient-to-b from-[#131B6B] via-[#00349F] to-[#4B3EE0]">

            <div className="w-screen h-[40vh] bg-cover relative bg-[#3749E4]">
            <Image 
                src="/imgs/headers/header1.png" 
                alt="Header Image" 
                fill
                sizes="100vw"
                style={{ 
                objectFit: "cover", 
                objectPosition: "center 0%", 
                filter: "contrast(1.3) brightness(1.1)",
                }}
            />
            </div>
            <div className="absolute left-[8.7vw] top-[15.7vh] text-white text-[5.2vh] font-roboto-mono">
                <div className="font-bold">What We Do</div>
                <div className="bg-[#DA92F6] w-[11.1vw] h-[6px]"></div>
            </div>

                <div className="flex flex-col justify-around items-center text-white mt-[10vh]">
                    {infoCards}
                </div>
            </div>
        </>
    );
};

export default WhatWeDo;
