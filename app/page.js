"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
  <body>
    <header>
      <a href="#" className="logo-holder">
			<div className="logo-text">My Portfolio Website</div>
		</a>
        <nav>
			<ul id="menu" className={menuOpen ? "active" : ""}>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="mailto:hello@adriantwarog.com" class="button">Contact Me</a>
				</li>
			</ul>
			<a href="#" class="mobile-toggle" onClick= {toggleMobileMenu}>
				<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
					<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
				</svg>
			</a>
		</nav>
	</header>
    <main>
		<section class="hero container">
			<div class="hero-blue">
				<div>
					<h1><small>Hi I'm</small>
						Imani Hill
					</h1>
					<p>
                        An ethical and driven information technology professional with a passion for software engineering and expertise in software applications, computer essentials, and programming fundamentals. Proficient in a range of programming languages, including Java, JavaScript, Python, HTML, CSS, SQL, and frameworks like React and node.js, with a strong focus on creating efficient and effective software solutions. 
                        Skilled in front-end development, leveraging tools like Bootstrap and Git to build responsive, visually appealing user interfaces. 
                        A self-taught front-end developer with a dedication to continuous learning and skill development, successfully completing and publishing personal projects on GitHub that showcase creativity and problem-solving in web development. 
                        Committed to advancing expertise in software engineering while driving innovation within the IT field.
					</p>
                </div>
                <div class="call-to-action">
                    <a href="/myResume.pdf" class="button black">
                        View Resume
                    </a>
                    <a href="mailto:manihill2003@gmail.com" class="button white">
                        Contact Me
                    </a>
                </div>
                <div class="social-links">
                    <a href="#">
                        <img src="./images/github.png" alt="GitHub" width="48" />
                    </a>
                    <a href="#">
                        <img src="./images/linkedin.png" alt="LinkedIn" width="48" />
                    </a>
                </div>
            </div>
                <div class="hero-yellow">
                    <img src="./images/photo.png" alt="Imani Hill" width="100%" />
                </div>
            </section>
            <section class="logos container">
                <div class="marquee">
                    <div class="track">
                        <img src="./images/html.png" alt="HTML" width="128" />
                        <img src="./images/css.png" alt="CSS" width="128" />
                        <img src="./images/javascript.png" alt="JS" width="128" />
                        <img src="./images/react.png" width="128" alt="React" />
                        <img src="./images/vscode.png" width="128" alt="VS Code" />
                        <img src="./images/python.png" width="128" alt="Python" />
                        <img src="./images/nextjs.png" alt="nextjs" width="128" />
                        <img src="./images/html.png" alt="HTML" width="128" />
                        <img src="./images/css.png" alt="CSS" width="128" />
                        <img src="./images/javascript.png" alt="JS" width="128" />
                        <img src="./images/git.png" alt="JS" width="128" />
                        <img src="./images/bootstrap.png" alt="JS" width="128" />
                        <img src="./images/sql.png" alt="JS" width="128" />
                        <img src="./images/nextjs.png" alt="nextjs" width="128" />
                        <img src="./images/html.png" alt="HTML" width="128" />
                        <img src="./images/css.png" alt="CSS" width="128" />
                        <img src="./images/javascript.png" alt="JS" width="128" />
                        <img src="./images/react.png" width="128" alt="React" />
                        <img src="./images/vscode.png" width="128" alt="VS Code" />
                        <img src="./images/python.png" width="128" alt="Python" />
                        <img src="./images/nextjs.png" alt="nextjs" width="128" />
                        <img src="./images/html.png" alt="HTML" width="128" />
                        <img src="./images/css.png" alt="CSS" width="128" />
                        <img src="./images/javascript.png" alt="JS" width="128" />
                        <img src="./images/git.png" alt="JS" width="128" />
                        <img src="./images/bootstrap.png" alt="JS" width="128" />
                        <img src="./images/sql.png" alt="JS" width="128" />
                    </div>
                </div>
            </section>
            <section id="skills" class="skills container">
                <h2>
                    <small>About Me</small>
                    Skills
                </h2>
                <div class="holder-blue">
                    <div class="left-column">
                        <h3>Frontend</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Angular</li>
                            <li>Vue</li>
                        </ul>
                        <h3>Backend</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>PHP</li>
                            <li>Ruby</li>
                        </ul>
                    </div>
                    <div class="right-column">
                        <h3>A Bit About Me</h3>
                        <p>
                            An ethical and driven information technology professional with a passion for software engineering and expertise in software applications, computer essentials, and programming fundamentals. 
                            Proficient in a range of programming languages, including Java, JavaScript, Python, HTML, CSS, SQL, and frameworks like React and node.js, with a strong focus on creating efficient and effective software solutions. 
                        </p>
                        <p>
                            I'm currently working on a project that uses Azure AI to create a chatbot that can help answer questions about my resume. 
                        </p>
                    </div>
                </div>
            </section>
            <section class="work-experience container">
                <h2>
                    <small>Recent</small>
                    Work Experience
                </h2>
                <div class="jobs">
                    <article>
                        <figure>
                            <div>
                                <img src="./images/ram.png" alt="helpdesk" width="100%" />
                                <figcaption>
                                    Winston Salem State University
                                </figcaption>
                            </div>
                        </figure>
                        <h3>Help Desk Technician</h3>
                        <div>2024-current</div>
                        <p>As an IT Support Work-Study student in the IT department, I play a vital role in providing technical assistance and support to users across the campus or organization. 
                            My responsibilities focus on ensuring the seamless operation of IT systems and resolving issues for faculty, staff, and students. 
                            Key tasks include providing phone support, managing user accounts, assisting with walk-in requests, and creating support tickets.</p>
                    </article>
                    <article>
                        <figure>
                            <div>
                                <img src="./images/nationwide.png" alt="nationwide" width="100%" />
                                <figcaption>
                                    Nationwide
                                </figcaption>
                            </div>
                        </figure>
                        <h3>Software Engineer Intern</h3>
                        <div>May 2024-August 2024</div>
                        <p>Experienced in streamlining software development processes through technical documentation, automation, and quality assurance. 
                            Transformed SharePoint documents into a structured GitHub Wiki for improved accessibility and integrated technical diagrams. Proficient in developing and maintaining automated CI/CD pipelines using tools like AWX, Jenkins, and Urban Code Deploy (UCD) for seamless application deployment. 
                            Skilled in version control and code review with GitHub, vulnerability analysis using Contrast Security, and API validation with Postman. 
                            Coordinated end-to-end testing with Tosca and Jenkins to enhance quality assurance, and effectively managed deployments in microservices architectures while upholding best practices for security and code integrity.</p>
                    </article>
                    </div>
            </section>
            <section id="projects" className="bento container">
                <h2>
                    <small>
                        Previous
                    </small>
                    Completed Projects
                </h2>
                <div class="bento-grid">
                    <a href="#" className="bento-item">
                        <img src="./images/bento-1.jpg" alt="BGCCI" width="100%" />
                    </a>
                    <a href="#" className="bento-item">
                        <img src="./images/bento-2.jpg" alt="Churhview" width="100%" />
                    </a>
                    <a href="#" className="bento-item">
                        <img src="./images/bento-3.jpg" alt="Harley" width="100%" />
                    </a>
                    <a href="#" class="bento-item">
                        <img src="./images/bento-5.jpg" alt="Bunbury" width="100%" />
                    </a>
                    <a href="#" class="bento-item">
                        <img src="./images/bento-6.jpg" alt="Running" width="100%" />
                    </a>
                    <a href="#" class="bento-item">
                        <img src="./images/bento-7.jpg" alt="School" width="100%" />
                    </a>
                </div>
            </section>
            <section class="chatbot container">
                <h2>
                    <small>
                        Talk to me
                    </small>
                    Chatbot
                </h2>
                <div class="chatbot-blue">
                    <div class="chat-info">
                        <h3>Azure AI Chatbot</h3>
                        <p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
                        <p>You can also download my resume here if you want to take a look at it.  I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
                        <a href="/myResume.pdf" class="button black">Download Resume</a>
                    </div>
                    <div class="chat-box">
                        <div class="scroll-area">
                            <ul id="chat-log">
                                <li>
                                    <span class="avatar bot">AI</span>
                                    <div class="message">
                                        Hi, I'm a friendly chatbot that lets you interactive with this portfolio and CV. How can I help?
                                    </div>
                                </li>
                                <li>
                                    <span class="avatar user">User</span>
                                    <div class="message">
                                        I have a question to ask you about this resume
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="chat-message">
                            <input type="text" placeholder="Hey Imani, what skills are you best at?"/>
                            <button class="button black">Send</button>
                        </div>
                    </div>
                </div>
                </section>
                </main>
    </body>
  
  );
}
