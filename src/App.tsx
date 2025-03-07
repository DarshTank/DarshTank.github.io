import { useState } from "react";
import { Mail, Github, Linkedin, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "@formspree/react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, handleSubmit] = useForm("your-formspree-id");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sections = ["About", "Experience", "Projects", "Skills", "Contact"];

  const [aboutRef, aboutInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [expRef, expInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [projRef, projInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
            >
              Darsh Tank
            </motion.h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {section}
                </a>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-900 border-b border-gray-800"
          >
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {section}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          >
            Software Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-8"
          >
            Building beautiful, functional, and scalable web applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="mailto:darshtank05@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              target="blank"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/DarshTank"
              className="text-gray-400 hover:text-white transition-colors"
              target="blank"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/darsh-tank-8a4677292/"
              className="text-gray-400 hover:text-white transition-colors"
              target="blank"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/9429912644?text=Hello%20Darsh,%0A%0AI%20hope%20this%20message%20finds%20you%20well.%0A%0AI%20came%20across%20your%20profile%20and%20was%20impressed%20by%20your%20expertise%20in%20web%20development.%20I%20am%20reaching%20out%20to%20discuss%20a%20potential%20project%20that%20requires%20a%20skilled%20developer%20like%20you."
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/303147/whatsapp-icon-logo.svg"
                alt="WhatsApp"
                className="h-6 w-6"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800" ref={aboutRef}>
        <motion.div
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="bg-gray-700 rounded-lg p-6 shadow-xl space-y-2">
            <p className="text-gray-300 leading-relaxed">
              I am a passionate and dedicated software developer with a strong
              foundation in web development. My journey in technology has been
              driven by a deep curiosity and a relentless pursuit of excellence.
              With expertise in JavaScript, PHP, React, Next.js, and Express, I
              have honed my skills to create intuitive, efficient, and scalable
              web applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My passion for problem-solving and continuous learning fuels my
              ability to tackle complex challenges and deliver innovative
              solutions. I am committed to staying at the forefront of emerging
              technologies, ensuring that my skills are always aligned with
              industry trends and best practices.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond technical proficiency, I value collaboration and effective
              communication, which are essential for successful project
              outcomes. I am excited about the opportunity to contribute to
              impactful projects and make a meaningful difference in the digital
              landscape.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4" ref={expRef}>
        <motion.div
          initial="hidden"
          animate={expInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400">
                    Web Development Intern
                  </h3>
                  <p className="text-gray-400">InfiniteAI</p>
                  <p className="text-gray-400">Dec 2023 - Jan 2024</p>
                </div>
                <span className="text-gray-500">Rajkot, India</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Developed a full-stack website with a seamless and
                  user-friendly front end using JavaScript, HTML, and CSS.
                </li>
                <li>Implemented a robust backend system powered by PHP.</li>
                <li>
                  Designed and integrated an OTP email verification system to
                  enhance security and user trust.
                </li>
                <li>
                  Gained hands-on experience in full-stack development,
                  improving problem-solving skills.
                </li>
                <li>
                  Deepened understanding of building secure and efficient web
                  applications.
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400">
                    Web Development Intern
                  </h3>
                  <p className="text-gray-400">Technosoft</p>
                  <p className="text-gray-400">April 2022 - June 2022</p>
                </div>
                <span className="text-gray-500">Rajkot, India</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Contributed to data gathering and uploading for the company
                  website, ensuring smooth functionality of the admin side.
                </li>
                <li>
                  Gained hands-on experience with PHP, enhancing backend
                  development skills and improving website efficiency.
                </li>
                <li>
                  Assisted in optimizing website data management, reducing
                  processing time by improving data structuring methods.
                </li>
                <li>
                  Strengthened problem-solving abilities by troubleshooting and
                  resolving backend issues.
                </li>
                <li>
                  Deepened technical knowledge of web infrastructure, preparing
                  for future development challenges.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800" ref={projRef}>
        <motion.div
          initial="hidden"
          animate={projInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 rounded-lg p-6 shadow-xl border border-gray-600 hover:border-purple-500 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                Mystery Message: Anonymous Messaging Platform
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>
                  Developed an anonymous messaging platform using Next.js.
                </li>
                <li>Supported AI-generated messages with Mistral AI.</li>
                <li>Enabled users to send messages anonymously.</li>
                <li>
                  Utilized Tailwind CSS and Shadcn for modern, responsive
                  styling.
                </li>
                <li>
                  Implemented OTP verification using Resend Email for secure
                  user registration and authentication.
                </li>
                <li>
                  Integrated NextAuth for robust and secure authentication
                  management.
                </li>
                <li>
                  Utilized Zod for schema validation, ensuring data integrity
                  and security.
                </li>
              </ul>
              <div className="mt-5">
                <a
                  href="https://github.com/DarshTank/Mystry-Message"
                  className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-1" />
                  View Code
                </a>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 shadow-xl border border-gray-600 hover:border-purple-500 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                Music Academy: Scalable and Responsive Web Application
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>
                  Developed a web application using Next.js, ensuring
                  scalability and responsiveness across multiple devices.
                </li>
                <li>
                  Implemented Tailwind CSS for modern, responsive styling,
                  enhancing user experience and accessibility.
                </li>
                <li>
                  Integrated Aceternity UI, an open-source library, to refine
                  UI/UX design for a smooth and intuitive interface.
                </li>
                <li>
                  Focused on optimizing performance, ensuring fast load times
                  and seamless navigation.
                </li>
                <li>
                  Applied best practices in frontend development, improving
                  accessibility and responsiveness.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com/DarshTank/MusicAcademy-NextJS-Project"
                  className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-1" />
                  View Code
                </a>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 shadow-xl border border-gray-600 hover:border-purple-500 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                Train Reservation System: Comprehensive Core Java Application
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>
                  Developed a command-line-based train reservation system using
                  pure core Java.
                </li>
                <li>
                  Covered fundamental Java concepts and implemented OOP
                  principles such as encapsulation, inheritance, and
                  polymorphism for modular and maintainable code.
                </li>
                <li>
                  Utilized the Java Collections Framework to efficiently manage
                  reservations, cancellations, and seat availability.
                </li>
                <li>
                  Integrated multithreading to handle concurrent user bookings,
                  ensuring smooth system performance.
                </li>
                <li>
                  Implemented file handling for data persistence, enabling users
                  to retrieve and manage booking history seamlessly.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com/DarshTank/Train-Reservation-System"
                  className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-1" />
                  View Code
                </a>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 shadow-xl border border-gray-600 hover:border-purple-500 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                InfiniteAI Website: Full-Stack Job Application Platform
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>
                  Developed a dynamic job application platform with client-side
                  and admin-side panels for efficient job postings and
                  management.
                </li>
                <li>
                  Engineered a seamless and user-friendly front end using HTML,
                  CSS, and JavaScript to improve usability.
                </li>
                <li>
                  Built a robust backend system with PHP, automating job
                  application tracking and task assignments.
                </li>
                <li>
                  Implemented an OTP email verification system via Gmail to
                  enhance security and user trust.
                </li>
                <li>
                  Designed an admin panel with task management features,
                  allowing administrators to add, remove, and assign tasks
                  efficiently.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com/DarshTank/InfiniteAI"
                  className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-1" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4" ref={skillsRef}>
        <motion.div
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Next.Js",
              "React.Js",
              "Express.Js",
              "TypeScript",
              "Tailwind CSS",
              "Database Management",
              "MongoDB",
              "MySQL",
              "Java",
              "PHP",
              "HTML",
              "CSS",
              "JavaScript",
              "Git/GitHub",
              "Problem Solving",
              "Communication",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700 hover:border-purple-500 transition-all transform hover:-translate-y-1"
              >
                <span className="text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
            <p className="text-sm">
              *The form is not working as it is just a demo form.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Darsh Tank. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
