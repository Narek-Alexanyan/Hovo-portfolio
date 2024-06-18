import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });


  const experiences = [
    {
      company: 'Sharp Ant',
      role: 'Web Developer & UI/UX Designer',
      duration: 'Jan 2019 - Dec 2020',
      address: 'Armenia Yerevan',
      description: 'Developed and designed user-friendly web interfaces, collaborated with cross-functional teams to deliver high-quality digital solutions, and enhanced website performance and usability.'
    },
    {
      company: 'OTT Stream',
      role: 'Senior Web Developer',
      duration: 'Jan 2021 - Jun 2022',
      address: 'Armenia Yerevan',
      description: 'Led the development of streaming platforms, optimized user experiences for video content, and implemented responsive design practices to ensure accessibility across devices.'
    },
    {
      company: 'Nordfinex',
      role: 'UI/UX Designer',
      duration: 'Jul 2022 - Dec 2022',
      address: 'Armenia Yerevan',
      description: 'Designed intuitive user interfaces for financial applications, conducted user research to inform design decisions, and created prototypes to test and iterate on new features.'
    },
    {
      company: 'ApogeeMinds',
      role: 'Full Stack Developer',
      duration: 'Jan 2023 - Present',
      address: 'Armenia Yerevan',
      description: 'Developed full-stack web applications, integrated front-end and back-end systems, and collaborated with designers to create cohesive and engaging user experiences.'
    },
    {
      company: 'Upwork',
      role: 'Freelance Web Developer & UI/UX Designer',
      duration: 'Throughout 5 years',
      address: 'Armenia Yerevan',
      description: 'Worked with various clients on diverse projects, delivering custom web solutions, and designing user-centric interfaces to meet client needs and project specifications.'
    }
  ]

  return (

    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {experiences.map((details, indexedDB) => {
            return <Details
              key={indexedDB.key}
              position={details.position}
              company={details.company}
              time={details.duration}
              address={details.address}
              work={details.description}
            />
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
