// import libraries
import React from "react";

import eom from "../assets/img/resume/eom.pdf";

function Resume() {
    return (
        <section className="container">
        <div id="summary" className="box m-3 lilly-light-background lilly-dark-text">
            <h2 className="subtitle is-3 has-text-centered lilly-dark-text">
                Summary
            </h2>
            <div className="p-3">
                <p className="mb-2">
                    Full Stack Web Developer with a background in logistics and IT support and an education in coding, english, and psychology. Clear communicator who wants to understand the big picture to produce work that can solve user’s problems in an elegant and intuitive way. Known among coworkers as smart, knowledgeable, flexible, reliable, willing, helpful, and eager to tackle new tasks as an opportunity to learn and understand more.
                </p>

                <h3 className="is-size-5 lilly-dark-text mt-4">
                    <b>Technical Skills</b>
                </h3>
                <ul className="is-size-6 mb-2">
                    <li>
                        <i>Languages</i>: HTML5, CSS3, JavaScript, ES6, Markdown, SQL
                    </li>
                    <li>
                        <i>Frameworks</i>: JQuery, Bootstrap, Bulma, Inquirer, File System
                    </li>
                    <li>
                        <i>Technologies</i>: Github, Web API, Third-Party API, Server-Side API, Moment.js, Node.js, Express.js, MySQL
                    </li>
                    <li>
                        <i>Web Development Concepts</i>: Mobile-First Development, Responsive Design, Dynamic Development, Test Driven Development, Object-Oriented Programming, Object-Relational Mapping, Model-View-Controller, Progressive Web Applications
                    </li>
                </ul>
            </div>
        </div>

        <div id="work-history" className="box m-3 lilly-light-background lilly-dark-text">
            <h2 className="subtitle is-3 has-text-centered lilly-dark-text">
                Work History
            </h2>

            <div  className="box lilly-dark-background">
                <h3 className="subtitle is-4 lilly-light-text">
                    Outbound Specialist  |  
                    <a href="https://ssamarine.com" target="_blank" className="lilly-light-text">
                        SSA Marine, A Carrix Enterprise
                    </a>

                </h3>
                <h4 className="subtitle is-5 lilly-light-text">
                    April 2016 - Present
                </h4>
                <p className="lilly-light-text mb-1">
                    SSA Marine is the last American-owned stevedoring company
                    operating terminals along the West Coast of the U.S. in Long Beach (CA), Oakland (CA), and Seattle (WA). 
                    An Outbound Specialist works with SSA's customers to put together accurate numbers and information 
                    for exports coming into the terminal and loading out on vessels. This information gets sent to other 
                    departments within SSA, to the vessel operators, to billing, and to port and government agencies.
                </p>
                <p className="lilly-light-text mb-1 mt-2">
                    Required Skills:
                </p>
                <ul className="lilly-light-text mb-1">
                    <li className="work-list">
                        Excellent multi-tasking skills
                    </li>
                    <li className="work-list">
                        Ability to prioritize tasks
                    </li>
                    <li className="work-list">
                        Problem solving while considering everyone and everything your solution may affect
                    </li>
                    <li className="work-list">
                        Flexibility, the ability to adapt as the situation changes both within the job and your schedule
                    </li>
                    <li className="work-list">
                        Creating and maintaining good professional relationships
                    </li>
                </ul>
                <h4 className="subtitle is-5 mt-4 mb-2 lilly-light-text">
                    <a href={ eom } target="_blank" className="subtitle is-5 lilly-light-text">
                        Employee of the Month
                    </a>
                </h4>
            </div>

            <div  className="box lilly-dark-background">
                <h3 className="subtitle is-4 lilly-light-text">
                    Writing Tutor (CRLA Level 1 Certified)  |  <a href="https://www.uvu.edu/writingcenter/" target="_blank" className="lilly-light-text">UVU Writing Center</a>
                </h3>
                <h4 className="subtitle is-5 lilly-light-text">
                    August 2016 - May 2017
                </h4>
                <p className="lilly-light-text mb-1">  
                    Writing Tutors at the Utah Valley University Writing Center work with students for a half hour or an hour at a time to help them 
                    meet all assignment guidelines and citation style criteria for their assignments from multiple disciplines. 
                    They may join the student at any part in the process from brainstorming topics to searching for sources 
                    to structuring their paper to writing to fine-tuning grammar and sentence structure.
                </p>
                <p className="lilly-light-text mb-1 mt-2">
                    Required Skills:
                </p>
                <ul className="lilly-light-text mb-1">
                    <li className="work-list">
                        Excellent time-management skills
                    </li>
                    <li className="work-list">
                        A desire to listen and follow the student's lead
                    </li>
                    <li className="work-list">
                        Develop the skill of being a quick and realistic diagnostician
                    </li>
                    <li className="work-list">
                        Ability to keep others on task
                    </li>
                    <li className="work-list">
                        Willingness to ask for support
                    </li>
                </ul>
            </div>

            <div  className="box lilly-dark-background">
                <h3 className="subtitle is-4 lilly-light-text">
                    Cashier  |  <a href="https://harmonsgrocery.com" target="_blank" className="lilly-light-text">Harmons Grocery</a>
                </h3>
                <h4 className="subtitle is-5 lilly-light-text">
                    March 2016 - May 2016
                </h4>
            </div>

            <div  className="box lilly-dark-background">
                <h3 className="subtitle is-4 lilly-light-text">
                    Box Office Attendant  |  <a href="https://www.megaplextheatres.com/jordancommons" target="_blank" className="lilly-light-text">Megaplex Theaters at Jordan Commons</a>
                </h3>
                <h4 className="subtitle is-5 lilly-light-text">
                    November 2015 - March 2016
                </h4>
            </div>

            <div  className="box lilly-dark-background">
                <h3 className="subtitle is-4 lilly-light-text">
                    Media Services Technician II  |  <a href="https://www.uvu.edu/media/" target="_blank" className="lilly-light-text">UVU IT Media Services</a>
                </h3>
                <h4 className="subtitle is-5 lilly-light-text">
                    August 2014 - November 2015
                </h4>
                <p className="lilly-light-text mb-1">  
                    Media Services is the section of the IT Services department at Utah Valley University which is responsible for installing, maintaining, 
                    repairing, upgrading, and providing training on classNameroom, conference room, and event space technology systems across campus as well as digital signage.
                    Media Services Technicians install, maintain, repair, upgrade, and provide training to faculty and staff via service calls. 
                    Additionally, technicians often set up and run events across campus.
                </p>
                <p className="lilly-light-text mb-1 mt-2">
                    Required Skills:
                </p>
                <ul className="lilly-light-text mb-1">
                    <li className="work-list">
                        Excellent communication skills, both listening and explaining
                    </li>
                    <li className="work-list">
                        Troubleshooting technology (computers, projectors, TVs, sound systems, and technology interfaces)
                    </li>
                    <li className="work-list">
                        Desire to learn (technology, troubleshooting, communicating, power tools, wiring, soldering, and more)
                    </li>
                    <li className="work-list">
                        Ability to work well in a team
                    </li>
                </ul>
            </div>

            <div  className="box lilly-dark-background">
                <h3 className="subtitle is-4 lilly-light-text">
                    Digital Projectionist  |  <a href="https://www.megaplextheatres.com/thedistrict" target="_blank" className="lilly-light-text">Megaplex Theaters at The District</a>
                </h3>
                <h4 className="subtitle is-5 lilly-light-text">
                    August 2016 - May 2017
                </h4>
                <p className="lilly-light-text mb-1">  
                    Digital projectionists are responsible for starting up/shutting down projectors, testing and maintaining projectors, downloading films and trailers, 
                    creating movie builds with commercials, trailers, and lighting, sound, and projection transitions, setting up for and running audio/visual for events, 
                    and quickly troubleshooting or fixing any problems that arise throughout the day.
                </p>
                <p className="lilly-light-text mb-1 mt-2">
                    Required Skills:
                </p>
                <ul className="lilly-light-text mb-1">
                    <li className="work-list">
                        Ability to keep a level head and perform difficult tasks under pressure
                    </li>
                    <li className="work-list">
                        Perform tasks carefully, methodically, and efficiently with high cost stakes
                    </li>
                    <li className="work-list">
                        Ability to manage your own time and accomplish tasks without direct oversight
                    </li>
                </ul>
            </div>
        </div>

        <div id="education" className="box m-3 lilly-light-background lilly-dark-text">
            <h2 className="subtitle is-3 has-text-centered lilly-dark-text">
                Education
            </h2>

            <div className="box lilly-dark-background">
                <h3 className="subtitle is-4 lilly-light-text">
                    Full Stack Web Development Bootcamp  |
                    <a href="https://bootcamps.continue.utah.edu/coding/curriculum/" target="_blank" className="lilly-light-text">
                        University of Utah: Professional Education
                    </a>
                </h3>
                <h4 className="subtitle is-5 lilly-light-text">
                    Graduation May 2022
                </h4>
            </div> 

            <div className="box lilly-dark-background">
                <h3 className="subtitle is-4 lilly-light-text">
                    BS⁠⁠ in English with an Emphasis in Writing Studies  |  
                    <a href="https://www.uvu.edu/english/degrees/writing-studies.html" target="_blank" className="lilly-light-text">
                        Utah Valley University
                    </a>       
                </h3>
                <div className="box lilly-light-background">
                    <h4 className="subtitle is-5 lilly-dark-text">
                        Fall 2016 | Internship as Editor-In-Chief of <a href="https://www.uvu.edu/is/intersections.html" className="lilly-dark-text"><i>Intersections: A Student Journal of Integrated Studies</i></a>
                    </h4>
                    <a href="assets/images/letter-rec.pdf" target="_blank" className="subtitle is-5 lilly-dark-text">
                        Advisor's Letter of Reccomendation
                    </a>
                </div>
                <h4 className="subtitle is-5 lilly-light-text">
                    Graduated May 2017
                </h4>
            </div>

            <div  className="box lilly-dark-background">
                <h3 className="subtitle is-4 lilly-light-text">
                    AS in Psychology  |  
                    <a href="http://www.slcc.edu/psychology/index.aspx" target="_blank" className="lilly-light-text">
                        Salt Lake Community College
                    </a>
                </h3>
                <h4 className="subtitle is-5 lilly-light-text">
                    Graduated May 2014
                </h4>
            </div>
        </div>
    </section>

    )
}

export default Resume;