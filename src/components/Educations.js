import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import '../App.css';

const educationList = [
  {
    title: "MASTER OF COMPUTER APPLICATION",
    institution: "RGPV UNIVERSITY • BHOPAL, MADHYA PRADESH",
    year: "2024",
    description: "Successfully completed Master's degree with outstanding academic performance and a strong overall grade."
  },
  {
    title: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
    institution: "DAVV UNIVERSITY • INDORE, MADHYA PRADESHL",
    year: "2022",
    description: "Graduated with a CGPA of 8.07."
  },
  {
    title: "HIGHER SECONDARY EDUCATION",
    institution: "JAYSIS CONVENT HIGHER SECONDARY SCHOOL • MANAWAR, MADHYA PRADESH",
    year: "2019",
    description: "Completed with a strong academic focus in the Science stream, emphasizing core scientific principles and analytical skills."
  },
  {
    title: "SECONDARY EDUCATION",
    institution: "PERFECT ACADEMY • MANAWAR, MADHYA PRADESH",
    year: "2017",
    description: "Completed secondary education through CBSE with strong academic performance."
  }
];

export default function Educations() {
  return (
    <motion.section
      id="education"
      className="container education-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Education</h2>
      <div className="row justify-content-center">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="col-md-5 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="education-card p-4 text-start h-100">
              <h5 className="fw-bold d-flex align-items-center">
                <FaGraduationCap className="me-2 text-warning" />
                {edu.title}
              </h5>
              <h6 className="text-light fst-italic">{edu.institution}</h6>
              <p className="mb-1">
                <small className="text-muted fst-italic">{edu.year}</small>
              </p>
              <p className="education-desc mt-2">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
