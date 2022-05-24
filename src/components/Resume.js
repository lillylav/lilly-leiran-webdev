// import libraries
import React from "react";

// import PDFs
import resume from "../assets/img/resume/resume.pdf";
import ssa from "../assets/img/resume/ssa-rec-letter.pdf";
import eom from "../assets/img/resume/eom.pdf";
import intern from "../assets/img/resume/intern-rec-letter.pdf";

function Resume() {
    return (
        <section id="resume" className="box m-3 mt-5 pink-background dark-font">
            <h2 className="subtitle is-3 has-text-centered dark-font">
                Resume
            </h2>
            <div className="p-3">
            <h3 className="is-size-5 dark-font mt-4">
                    Summary
                </h3>
                <p className="mb-2">
                    Full Stack Web Developer with a background in logistics and IT support and an education in coding, english, and psychology. Clear communicator who wants to understand the big picture to produce work that can solve user’s problems in an elegant and intuitive way. Known among coworkers as smart, knowledgeable, flexible, reliable, willing, helpful, and eager to tackle new tasks as an opportunity to learn and understand more.
                </p>

                <h3 className="is-size-5 dark-font mt-4">
                    Technical Skills
                </h3>
                <ul className="is-size-6 mb-2">
                    <li>
                        <i>Languages</i>: HTML5, CSS3, JavaScript, ES6, Markdown, SQL
                    </li>
                    <li>
                        <i>Frameworks</i>: JQuery, Bootstrap, Bulma, Inquirer, File System
                    </li>
                    <li>
                        <i>Technologies</i>: Github, Web API, Third-Party API, Server-Side API, Moment.js, Node.js, Express.js, MySQL, MongoDB, React.js
                    </li>
                    <li>
                        <i>Web Development Concepts</i>: Mobile-First Development, Responsive Design, Dynamic Development, Test Driven Development, Object-Oriented Programming, Object-Relational Mapping, Model-View-Controller, Progressive Web Applications, MERN Stack
                    </li>
                </ul>
                <a href={ resume } target="_blank" className="link dark-font">
                    Full Resume
                </a>
                <br />
                <a href={ ssa } target="_blank" className="link dark-font">
                    Letter of Reccomendation (Current Job, SSA Marine)
                </a>
                <br />
                <a href={ eom } target="_blank" className="link dark-font">
                    Employee of the Month
                </a>
                <br />
                <a href={ intern } target="_blank" className="link dark-font">
                    Letter of Reccomendation (Editor-in-Chief of a Student Journal Internship)
                </a>
            </div>
        </section>
    )
}

export default Resume;