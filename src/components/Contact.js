import React from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp
} from 'react-icons/fa';
import '../App.css';

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container text-center text-white">
        <h2 className="section-title text-warning mb-4">Contact Me</h2>
        <p className="mb-5 text-light">
          I'm always open to new opportunities and collaborations. Feel free to get in touch via email or social media.
        </p>


        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card contact-card p-4 shadow border-0 bg-dark bg-opacity-75">
              <div className="card-body text-start">
                <p className="contact-info mb-3">
                  <FaEnvelope className="me-2 icon-warning" />
                  <a href="mailto:viveksolanki1704@gmail.com">viveksolanki1704@gmail.com</a>
                </p>
                <p className="contact-info mb-3">
                  <FaPhoneAlt className="me-2 icon-warning" />
                  <a href="tel:+9399506176">+9399506176</a>
                </p>
                <p className="contact-info mb-3">
                  <FaMapMarkerAlt className="me-2 icon-warning"  />
                  Indore, India
                </p>
                <p className="contact-info mb-3">
                  <FaLinkedin className="me-2 icon-warning" />
                  <a
                    href="https://www.linkedin.com/in/vivek-solanki-8a2828247"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/vivek-solanki-8a2828247
                  </a>
                </p>
                <p className="contact-info mb-3">
                  <FaGithub className="me-2 icon-warning" />
                  <a
                    href="https://github.com/vivek476"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/vivek476
                  </a>
                </p>
                <p className="contact-info">
                  <FaWhatsapp className="me-2 icon-warning" />
                  <a
                    href="https://wa.me/919399506176"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
