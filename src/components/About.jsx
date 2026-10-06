import { profile } from '../data.js';

export default function About() {
  const statsLines = profile.aboutStats.split('\n');
  return (
    <section id="about">
      <div className="wrap">
        <h2 className="heading">About Me</h2>
        <div className="glass about-card">
          <div className="about-grid">
            <div className="about-stats">
              {statsLines.map((line, i) => {
                const parts = line.split(' ');
                const firstPart = parts.shift();
                const rest = parts.join(' ');
                return (
                  <div key={i} className="stat-item">
                    <span>{firstPart}</span>
                    <span>{rest}</span>
                  </div>
                );
              })}
            </div>
            <div className="about-text">
              {profile.aboutParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
