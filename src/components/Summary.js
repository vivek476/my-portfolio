import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

function Summary() {
  return (
    <motion.section
      id="summary"
      className="container summary-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-4">Summary</h2>
      <p className="summary-text lead">
        Completed a 1 Year of practical experience in full-stack development at <strong>Shiwansh Solutions</strong>. Skilled in building and deploying scalable web applications using <strong>.NET Core</strong> and <strong>React</strong>, with a focus on core modules such as Admin, Employee, and Employer. Dedicated to leveraging modern frameworks, clean code principles, and best practices to create efficient, maintainable, and user-centric software solutions.
      </p>

    </motion.section>
  );
}

export default Summary;
