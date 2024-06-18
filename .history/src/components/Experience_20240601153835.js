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


  function ExperienceDetails() {
    const experiences = [
      {
        company: 'Sharp Ant',
        role: 'Web Developer & UI/UX Designer',
        duration: 'Jan 2019 - Dec 2020',
        description: 'Developed and designed user-friendly web interfaces, collaborated with cross-functional teams to deliver high-quality digital solutions, and enhanced website performance and usability.'
      },
      {
        company: 'OTT Stream',
        role: 'Senior Web Developer',
        duration: 'Jan 2021 - Jun 2022',
        description: 'Led the development of streaming platforms, optimized user experiences for video content, and implemented responsive design practices to ensure accessibility across devices.'
      },
      {
        company: 'Nordfinex',
        role: 'UI/UX Designer',
        duration: 'Jul 2022 - Dec 2022',
        description: 'Designed intuitive user interfaces for financial applications, conducted user research to inform design decisions, and created prototypes to test and iterate on new features.'
      },
      {
        company: 'ApogeeMinds',
        role: 'Full Stack Developer',
        duration: 'Jan 2023 - Present',
        description: 'Developed full-stack web applications, integrated front-end and back-end systems, and collaborated with designers to create cohesive and engaging user experiences.'
      },
      {
        company: 'Upwork',
        role: 'Freelance Web Developer & UI/UX Designer',
        duration: 'Throughout 5 years',
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
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="https://google.com"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            />

            <Details
              position="Intern"
              company="Facebook"
              companyLink="https://facebook.com"
              time="Summer 2021"
              address="Menlo Park, CA."
              work="Worked on a team responsible for developing a new mobile app
              feature that allowed users to create and share short-form video
              content, including designing and implementing a new user interface
              and developing the backend infrastructure to support the feature."
            />

            <Details
              position="Software Developer"
              company="Amazon"
              companyLink="https://amazon.com"
              time="2020-2021"
              address="Seattle, WA."
              work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."
            />

            <Details
              position="Software Developer Intern"
              company="Microsoft"
              companyLink="https://microsoft.com"
              time="Summer 2019"
              address="Redmond, WA."
              work="Worked on a team responsible for developing new features for
              Microsoft's Windows operating system, including implementing a new
              user interface for a system settings panel and optimizing the
              performance of a core system component."
            />

            <Details
              position="Teaching Assistant"
              company="MIT"
              companyLink="https://mit.edu"
              time="Fall 2018"
              address="Massachusetts Ave, Cambridge, MA."
              work="Assisted in teaching a course on computer programming, held office
              hours to help students with assignments, and graded exams and
              assignments."
            />
          </ul>
        </div>
      </div>
    );
  };

  export default Experience;
