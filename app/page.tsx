import Navbar from "@/components/navbar";
import Reveal from "@/components/reveal";
import ThemeProvider from "@/components/theme-provider";

const portfolioMarkup = `<!-- ================= HERO ================= -->

<section id="home" class="hero">

    <div class="container hero-container">

        <div class="hero-content">

            <div class="status">
                <span class="status-dot"></span>
                Available for opportunities
            </div>

            <p class="hero-small">
                HELLO, I'M
            </p>

            <h1>
                Mohamed
                <span>Azroug</span>
            </h1>

            <h2>
                Senior Software Engineer
            </h2>

            <p class="hero-description">
                I design and deliver dependable backend platforms, modernize
                business-critical systems, and help teams move from architecture
                through production with Java, Spring Boot, .NET, and cloud-native tooling.
            </p>

            <div class="hero-tags">

                <span>Java</span>
                <span>Spring Boot</span>
                <span>.NET</span>
                <span>Docker</span>
                <span>Kubernetes</span>

            </div>

            <div class="hero-buttons">

                <a href="#projects" class="btn btn-primary">
                    View my work
                    <i class="fa-solid fa-arrow-right"></i>
                </a>

                <a href="#contact" class="btn btn-secondary">
                    Contact me
                </a>

            </div>

            <div class="social-links">

                <a href="mailto:azrougmohamedabdelali@gmail.com"
                   aria-label="Email">
                    <i class="fa-solid fa-envelope"></i>
                </a>

            </div>

        </div>


        <div class="hero-visual">

            <div class="code-window">

                <div class="window-header">

                    <div class="window-buttons">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <span class="window-title">
                        developer.java
                    </span>

                </div>

                <div class="code-content">

<pre><code><span class="keyword">public class</span> <span class="class-name">Developer</span> {

    <span class="keyword">private</span> String name =
        <span class="string">"Mohamed Azroug"</span>;

    <span class="keyword">private</span> String role =
        <span class="string">"Senior Software Engineer"</span>;

    <span class="keyword">private</span> String[] skills = {
        <span class="string">"Java"</span>,
        <span class="string">"Spring Boot"</span>,
        <span class="string">".NET"</span>,
        <span class="string">"Docker"</span>,
        <span class="string">"Kubernetes"</span>
    };

    <span class="keyword">public</span> String build() {
        <span class="keyword">return</span>
            <span class="string">"Great software"</span>;
    }
}</code></pre>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- ================= ABOUT ================= -->

<section id="about" class="section">

    <div class="container">

        <div class="section-heading">

            <span class="section-number">01</span>

            <div>
                <p class="section-label">ABOUT ME</p>
                <h2>Engineering reliable systems for real-world use.</h2>
            </div>

        </div>


        <div class="about-grid">

            <div class="about-text">

                <p>
                    I am a senior software engineer focused on backend platforms,
                    distributed systems, and full-stack product delivery. I have worked
                    across industry and research teams in Algeria and Finland.
                </p>

                <p>
                    I take on work across the software lifecycle: shaping backend
                    architecture, building services with Spring Boot and .NET, improving
                    data layers, and automating delivery with containers and CI/CD.
                </p>

                <p>
                    I have also led backend work on a cloud-edge project, administered
                    GitLab, and supported source control and deployment migrations. I
                    value clear technical decisions, maintainable systems, and steady
                    delivery in production environments.
                </p>

                <a href="#contact" class="text-link">
                    Let's work together
                    <i class="fa-solid fa-arrow-right"></i>
                </a>

            </div>


            <div class="about-stats">

                <div class="stat-card">

                    <strong>5</strong>
                    <span>Roles across product,<br>platform & research</span>

                </div>

                <div class="stat-card">

                    <strong>15+</strong>
                    <span>Technologies across<br>the stack</span>

                </div>

                <div class="stat-card">

                    <strong>1</strong>
                    <span>Engineering<br>Degree</span>

                </div>

                <div class="stat-card">

                    <strong>∞</strong>
                    <span>Things to<br>Learn</span>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- ================= EXPERIENCE ================= -->

<section id="experience" class="section section-dark">

    <div class="container">

        <div class="section-heading">

            <span class="section-number">02</span>

            <div>
                <p class="section-label">EXPERIENCE</p>
                <h2>Technical ownership across product and platform teams.</h2>
            </div>

        </div>


        <div class="timeline">


            <!-- AXA -->

            <article class="timeline-item">

                <div class="timeline-dot"></div>

                <div class="timeline-date">
                    Jun 2024 — Present
                </div>

                <div class="timeline-content">

                    <h3>Senior IT Developer</h3>

                    <h4>AXA Assurance Algérie</h4>

                    <p>
                        Develop and improve AXA's core system with Spring Boot, with a
                        focus on maintainability, performance, and dependable delivery.
                    </p>

                    <ul>

                        <li>
                            Administer GitLab and support source-code migration from Bitbucket.
                        </li>

                        <li>
                            Automate application deployment with Docker and Kubernetes.
                        </li>

                        <li>
                            Create and maintain MSSQL database migration scripts.
                        </li>

                        <li>
                            Refactor existing core-system code for
                            maintainability and performance.
                        </li>

                    </ul>

                    <div class="tech-list">

                        <span>Spring Boot</span>
                        <span>Java</span>
                        <span>Docker</span>
                        <span>Kubernetes</span>
                        <span>GitLab</span>
                        <span>MSSQL</span>

                    </div>

                </div>

            </article>


            <!-- FINGLETEK -->

            <article class="timeline-item">

                <div class="timeline-dot"></div>

                <div class="timeline-date">
                    Oct 2023 — Jun 2023
                </div>

                <div class="timeline-content">

                    <h3>Full Stack Mobile Developer</h3>

                    <h4>Fingletek · Finland · Remote</h4>

                    <p>
                        Developed and launched FiksuStore, a mobile
                        application designed to improve food shopping
                        experiences in Finland.
                    </p>

                    <ul>

                        <li>
                            Dynamic shopping lists and real-time price
                            tracking.
                        </li>

                        <li>
                            Java and Kotlin frontend development.
                        </li>

                        <li>
                            .NET backend development.
                        </li>

                        <li>
                            Backend project leadership for the AC3
                            Cloud-Edge project.
                        </li>

                        <li>
                            Docker, Kubernetes and GitLab CI/CD.
                        </li>

                    </ul>

                    <div class="tech-list">

                        <span>Java</span>
                        <span>Kotlin</span>
                        <span>.NET</span>
                        <span>Docker</span>
                        <span>Kubernetes</span>
                        <span>GitLab CI/CD</span>

                    </div>

                </div>

            </article>


            <!-- SEFRONE -->

            <article class="timeline-item">

                <div class="timeline-dot"></div>

                <div class="timeline-date">
                    Feb 2023 — Nov 2023
                </div>

                <div class="timeline-content">

                    <h3>Backend Developer</h3>

                    <h4>Sefrone · Mostaganem, Algeria</h4>

                    <p>
                        Backend development for multiple web applications
                        covering employee management, delivery and
                        e-commerce.
                    </p>

                    <ul>

                        <li>
                            Designed the backend architecture for HMMO.
                        </li>

                        <li>
                            Developed Oriex using .NET Web API and SignalR.
                        </li>

                        <li>
                            Developed the Mirabelle Style e-commerce
                            backend.
                        </li>

                        <li>
                            Jira, Bitbucket and CI/CD pipelines.
                        </li>

                    </ul>

                    <div class="tech-list">

                        <span>.NET</span>
                        <span>SignalR</span>
                        <span>Web API</span>
                        <span>Jira</span>
                        <span>Bitbucket</span>

                    </div>

                </div>

            </article>


            <!-- AALTO -->

            <article class="timeline-item">

                <div class="timeline-dot"></div>

                <div class="timeline-date">
                    Sep 2022 — Sep 2023
                </div>

                <div class="timeline-content">

                    <h3>Research Intern</h3>

                    <h4>Aalto University · Finland</h4>

                    <p>
                        Research project focused on intelligent video
                        surveillance and distributed streaming using IoT
                        and Edge Computing.
                    </p>

                    <ul>

                        <li>
                            Cloud-Edge Computing Continuum research.
                        </li>

                        <li>
                            IoT, cameras and UAV technologies.
                        </li>

                        <li>
                            Cognitive network architecture.
                        </li>

                        <li>
                            Microservice architecture.
                        </li>

                    </ul>

                    <div class="tech-list">

                        <span>.NET</span>
                        <span>IoT</span>
                        <span>Edge Computing</span>
                        <span>Microservices</span>

                    </div>

                </div>

            </article>


            <!-- VALLEY COM -->

            <article class="timeline-item">

                <div class="timeline-dot"></div>

                <div class="timeline-date">
                    May 2022 — Jan 2023
                </div>

                <div class="timeline-content">

                    <h3>Full Stack Developer</h3>

                    <h4>Valley Com · Freelance</h4>

                    <p>
                        Development of projects focused on
                        e-commerce platforms.
                    </p>

                    <div class="tech-list">

                        <span>Node.js</span>
                        <span>React.js</span>
                        <span>DigitalOcean</span>

                    </div>

                </div>

            </article>

        </div>

    </div>

</section>


<!-- ================= SKILLS ================= -->

<section id="skills" class="section">

    <div class="container">

        <div class="section-heading">

            <span class="section-number">03</span>

            <div>
                <p class="section-label">TECH STACK</p>
                <h2>Tools I work with.</h2>
            </div>

        </div>


        <div class="skills-grid">


            <div class="skill-category">

                <div class="skill-icon">
                    <i class="fa-solid fa-code"></i>
                </div>

                <h3>Languages</h3>

                <div class="skill-items">

                    <span>Java</span>
                    <span>C</span>
                    <span>C++</span>
                    <span>Dart</span>
                    <span>Kotlin</span>
                    <span>Python</span>

                </div>

            </div>


            <div class="skill-category">

                <div class="skill-icon">
                    <i class="fa-solid fa-layer-group"></i>
                </div>

                <h3>Frameworks</h3>

                <div class="skill-items">

                    <span>Spring Boot</span>
                    <span>ASP.NET</span>
                    <span>Django</span>
                    <span>React.js</span>
                    <span>Node.js</span>

                </div>

            </div>


            <div class="skill-category">

                <div class="skill-icon">
                    <i class="fa-solid fa-database"></i>
                </div>

                <h3>Databases</h3>

                <div class="skill-items">

                    <span>PostgreSQL</span>
                    <span>Oracle</span>
                    <span>MySQL</span>
                    <span>MongoDB</span>
                    <span>MSSQL</span>
                    <span>NoSQL</span>

                </div>

            </div>


            <div class="skill-category">

                <div class="skill-icon">
                    <i class="fa-solid fa-server"></i>
                </div>

                <h3>DevOps</h3>

                <div class="skill-items">

                    <span>Docker</span>
                    <span>Kubernetes</span>
                    <span>GitLab CI/CD</span>
                    <span>Bitbucket</span>
                    <span>Git</span>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- ================= PROJECTS ================= -->

<section id="projects" class="section section-dark">

    <div class="container">

        <div class="section-heading">

            <span class="section-number">04</span>

            <div>
                <p class="section-label">PROJECTS</p>
                <h2>Selected work.</h2>
            </div>

        </div>


        <div class="projects-grid">


            <article class="project-card featured">

                <div class="project-top">

                    <div class="project-icon">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>

                </div>

                <p class="project-type">
                    MOBILE APPLICATION
                </p>

                <h3>FiksuStore</h3>

                <p>
                    Mobile shopping application designed to improve food
                    shopping experiences in Finland with dynamic shopping
                    lists and real-time price tracking.
                </p>

                <div class="project-tech">

                    <span>Java</span>
                    <span>Kotlin</span>
                    <span>.NET</span>

                </div>

            </article>


            <article class="project-card">

                <div class="project-top">

                    <div class="project-icon">
                        <i class="fa-solid fa-truck"></i>
                    </div>

                </div>

                <p class="project-type">
                    WEB APPLICATION
                </p>

                <h3>Oriex</h3>

                <p>
                    Delivery management backend with real-time
                    communication capabilities using .NET Web API
                    and SignalR.
                </p>

                <div class="project-tech">

                    <span>.NET</span>
                    <span>Web API</span>
                    <span>SignalR</span>

                </div>

            </article>


            <article class="project-card">

                <div class="project-top">

                    <div class="project-icon">
                        <i class="fa-solid fa-store"></i>
                    </div>

                </div>

                <p class="project-type">
                    E-COMMERCE
                </p>

                <h3>Mirabelle Style</h3>

                <p>
                    E-commerce platform backend supporting online sales
                    and customer interactions.
                </p>

                <div class="project-tech">

                    <span>.NET</span>
                    <span>Web API</span>
                    <span>SQL</span>

                </div>

            </article>


            <article class="project-card">

                <div class="project-top">

                    <div class="project-icon">
                        <i class="fa-solid fa-cloud"></i>
                    </div>

                </div>

                <p class="project-type">
                    RESEARCH / CLOUD EDGE
                </p>

                <h3>AC3 Cloud-Edge</h3>

                <p>
                    Research and backend work around scalable Cloud-Edge
                    systems and distributed intelligent video streaming.
                </p>

                <div class="project-tech">

                    <span>Cloud</span>
                    <span>Edge</span>
                    <span>IoT</span>
                    <span>.NET</span>

                </div>

            </article>


        </div>

    </div>

</section>


<!-- ================= EDUCATION ================= -->

<section class="section">

    <div class="container">

        <div class="section-heading">

            <span class="section-number">05</span>

            <div>
                <p class="section-label">EDUCATION</p>
                <h2>Academic background.</h2>
            </div>

        </div>


        <div class="education-card">

            <div class="education-icon">
                <i class="fa-solid fa-graduation-cap"></i>
            </div>

            <div>

                <span class="education-date">
                    2017 — 2023
                </span>

                <h3>
                    Engineering Degree in Computer Science
                </h3>

                <p>
                    École Nationale Supérieure d'Informatique
                </p>

                <span class="education-location">
                    Algiers, Algeria
                </span>

            </div>

        </div>

    </div>

</section>


<!-- ================= CONTACT ================= -->

<section id="contact" class="section contact-section">

    <div class="container">

        <div class="contact-box">

            <div class="contact-content">

                <span class="section-label">
                    HAVE A PROJECT?
                </span>

                <h2>
                    Let's build something
                    <span>great.</span>
                </h2>

                <p>
                    I am open to senior engineering opportunities focused on backend
                    platforms, distributed systems, cloud technologies, and technical
                    leadership through hands-on delivery.
                </p>

                <a href="mailto:azrougmohamedabdelali@gmail.com"
                   class="btn btn-primary">

                    Get in touch

                    <i class="fa-solid fa-arrow-right"></i>

                </a>

            </div>


            <div class="contact-details">

                <a href="mailto:azrougmohamedabdelali@gmail.com">

                    <i class="fa-solid fa-envelope"></i>

                    <div>
                        <small>Email</small>
                        <strong>
                            azrougmohamedabdelali@gmail.com
                        </strong>
                    </div>

                </a>


                <a href="tel:+213542654185">

                    <i class="fa-solid fa-phone"></i>

                    <div>
                        <small>Phone</small>
                        <strong>
                            +213 542 654 185
                        </strong>
                    </div>

                </a>


                <div>

                    <i class="fa-solid fa-location-dot"></i>

                    <div>
                        <small>Location</small>
                        <strong>
                            Algiers, Algeria
                        </strong>
                    </div>

                </div>

            </div>

        </div>

    </div>

</section>`;

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <main dangerouslySetInnerHTML={{ __html: portfolioMarkup }} />
      <footer className="site-footer">
        <div className="container footer-container">
          <div className="logo">MA<span>.</span></div>
          <p>© <span>{new Date().getFullYear()}</span> Mohamed Azroug.</p>
        </div>
      </footer>
      <Reveal />
    </ThemeProvider>
  );
}
