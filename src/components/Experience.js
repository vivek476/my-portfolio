import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import '../App.css';

const experiences = [
  {
    role: 'Software Testing',
    company: 'PHN Technology Pvt. Ltd.',
    duration: 'Jun 2023 - July 2023',
    description: "Skilled Software Manual Tester with hands-on experience testing Android and iOS applications. Proficient in creating and executing test cases, reporting bugs, and ensuring app functionality, usability, and compatibility across mobile platforms. Experienced in regression, functional, and UI testing to ensure high-quality user experiences."
  },
  {
    role: 'Junior .NET Developer',
    company: 'Shiwansh Solutions',
    duration: 'Jan 2025 - Present',
    description:
      'Working as a Full-Stack Developer using .NET Core and React. Responsible for designing and developing modules with React, Bootstrap, Entity Framework, and SQL. Involved in debugging, testing, and deployment. Contributed to the development of Admin, Employee, and Employer modules.'
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="experience-section section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container text-center">
        <h2 className="section-title mb-5">Experience</h2>
        <div className="row justify-content-center">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="col-md-5 mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 180 }}
            >
              <div className="experience-card p-4 h-100 text-start">
                <div className="icon-wrapper mb-3">
                  <FaBriefcase className="experience-icon" />
                </div>
                <h5 className="experience-role">{exp.role}</h5>
                <h6 className="experience-company">{exp.company}</h6>
                <p className="experience-duration">{exp.duration}</p>
                <p className="experience-desc">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
