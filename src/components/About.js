import React from 'react';
import '../App.css';
import profileImg from '../assets/Office.jpg';

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-circle shadow"
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card shadow p-4 border-0 bg-white bg-opacity-75">
              <h4 className="text-dark mb-3">.NET Developer | Full Stack Developer (React & .NET)</h4>
              <p className="text-muted">
                I’m an Fullstack Developer at <strong>Shiwansh Solutions</strong>, where I focus on designing and developing web applications using <strong>.NET Core</strong>, <strong>React.js</strong>, <strong>Bootstrap</strong>, and <strong>SQL</strong>. My work involves building scalable, modular solutions for key features such as Admin, Employee, and Employer modules.
              </p>
              <p className="text-muted">
                I'm also proficient with tools like <strong>Git</strong>, <strong>Amazon EC2</strong>, <strong>LINQ</strong> and have strong foundations in C#, JavaScript, HTML5, and CSS3.
              </p>
              <p className="text-muted mb-0">
                My goal is to develop efficient, secure, and maintainable software that delivers real value to users. I’m committed to continuous learning, exploring emerging technologies, and growing both technically and professionally as a developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
