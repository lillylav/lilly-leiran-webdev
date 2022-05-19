// import libraries
import React from "react";

// import image
import coverImage from "../assets/img/lilly.jpg";

function About() {
    return (
        <section id="about" className="my-5">
            <img src={ coverImage } id="lilly-img" className="my-2" style={{ width: "33%" }} alt="A late twenties white woman with a shoulder length straight blonde hair and brown eyes smiling" />
            <h1>Hi, I'm Lilly Leiran</h1>
            <p class="">
                My name’s Lilly Leiran and I’m a full stack web developer. I’ve known for a couple years that I wanted to make a career change so I spent a lot of time thinking about what I’ve enjoyed in the past and what I want in my future career and all of that thinking led me to coding.
            </p>
            <p class="">
                In the past I’ve found myself drawn to technology-focused jobs and classes. From becoming a projectionist at a movie theater and getting a job as a media support and installation technician for classrooms, conference rooms, and event spaces at Utah Valley University. To taking a digital document design class (which taught basic HTML and CSS) while getting my English degree. I’ve always enjoyed working with technology and have felt excited when I had the opportunity to work with it and understand it on a deeper level.
            </p>
            <p class="">
                And when I think about my future, what I want most is a career that challenges me to constantly learn and which provides me with opportunities to gain more and more skills which will deepen my usefulness and provide job security. I also want something that will allow me more freedom and independence. I looked at many options of careers to go after and I ultimately chose coding because it can provide me with all of the things I most want and I’m interested in it and excited by the thought of learning it.
            </p>
            <p class="">
                Over the last 6 months I’ve learned HTML, CSS, JavaScript, API, Node.js, Express.js, React.js, SQL and NoSQL databases, and more. And, while it hasn’t always been easy or even fun, I’m so glad I chose to learn coding. I love front end development because I find it fun to tweak the look and functionality of a site to get it JUST right, I enjoy thinking about the user and trying to make their experience as beautiful and intuitive as possible, and I love helping to solve problems for clients and users. And I enjoy creating the depth of the back end, providing the context that makes the front end work, and building a structure that is efficient. And I can already tell that coding will be a lifelong learning opportunity and I know I will get better and better and be able to rely on those skills.
            </p>
        </section>
    );
};

export default About;