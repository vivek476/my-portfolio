import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const projectList = [
  {
    title: 'Employee Management System',
    duration: 'Jan 2024 – May 2024',
    college: 'MRSC',
    description:
      'A system to manage employee records, roles, and performance efficiently through a centralized web interface. Employees can be added, updated, and deleted, with role-based access control for Admin and Employee modules.',
    responsibilities:
      'Frontend development, backend development, and database design using Android Studio, Java, and XML.'
  },
  {
    title: 'JOB PORTAL SYSTEM',
    duration: 'July 2024 – Sept 2024',
    company: 'Shiwansh Solutions',
    description:
      'An online platform that connects job seekers with employers. Job seekers can register, search, and apply for jobs. Employers post job openings and manage hiring. Built for efficient two-way interaction.',
    responsibilities:
      'Frontend development, backend development, and database design.'
  }
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="container-fluid projects-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Projects</h2>
      <div className="row justify-content-center px-3">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="project-card p-4 text-start w-100 bg-dark bg-opacity-75 border border-light-subtle rounded-4 shadow-lg">
              <h4 className="project-title text-info mb-2">{project.title}</h4>
              <p className="text-muted mb-1">
                <small>{project.company} • {project.duration}</small>
              </p>
              <p className="project-desc mb-2 text-light">{project.description}</p>
              <p className="project-responsibilities text-white-50">
                <strong>Responsibilities:</strong> {project.responsibilities}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
