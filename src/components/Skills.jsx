import { skillGroups } from '../data.js';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2 className="heading">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="glass skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
