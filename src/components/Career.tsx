import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Mobilewalla · Kolkata</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Aug 2024 – Present. Migrated 25TB+ Spark pipelines to DataFrame API
              (90% speedup), reduced pipeline runtime by 74%, architected EMR spot
              and Graviton strategies saving $4,500/month, migrated to Apache
              Iceberg eliminating 80GB+ daily rewrites, and engineered Python/FastAPI
              middleware with AWS Bedrock multi-agent orchestration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Information Technology</h4>
                <h5>Jadavpur University · Kolkata</h5>
              </div>
              <h3>2020–24</h3>
            </div>
            <p>
              Jul 2020 – May 2024. Built a strong foundation in data structures,
              algorithms, DBMS, and operating systems. Active competitive programmer—
              Knight on LeetCode (max rating 1886), 1500+ problems solved with a
              1000+ day streak.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
