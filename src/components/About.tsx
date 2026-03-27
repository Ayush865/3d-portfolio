import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Software Engineer at Mobilewalla, specializing in large-scale
          data engineering and distributed systems. I build and optimize Spark
          pipelines processing petabytes of data, architect cost-efficient AWS
          infrastructure, and engineer full-stack applications. I'm passionate
          about high-impact engineering—from 90% pipeline speedups to $10K+/month
          in cloud savings—and love turning complex problems into elegant,
          production-ready solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
