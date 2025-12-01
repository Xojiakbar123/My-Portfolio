import "./Education.css";

export default function Education() {
  const timeline = [
    {
      years: "2013 — 2017",
      title: "1st – 4th Grades",
      place: "Primary School",
      desc: "Foundational learning in math, logic, language, and general sciences.",
    },
    {
      years: "2018 — 2022",
      title: "5th – 9th Grades",
      place: "Secondary School (Specialized Boarding School)",
      desc: "Strengthened analytical thinking, mathematics, and problem-solving skills.",
    },
    {
      years: "2023 — 2024",
      title: "10th – 11th Grades",
      place: "High School (Presidential Boarding Scholl No 1)",
      desc: "Focused on STEM subjects, advanced mathematics, and digital literacy.",
    },
    {
      years: "2025 — 2028",
      title: "New Uzbekistan University",
      place: "School of Humanities, Natural & Social Sciences",
      desc: "STEM Pedagogy & Computer Science.",
    },
  ];

  return (
    <section className="edu container">
      <h1 className="edu-title">
        My <span className="accent">Education</span> Journey
      </h1>

      <div className="edu-timeline">
        {timeline.map((item, i) => (
          <div className="edu-card" key={i}>
            <div className="edu-left">
              <span className="edu-years">{item.years}</span>
              <div className="edu-line"></div>
            </div>

            <div className="edu-right">
              <h2 className="edu-stage">{item.title}</h2>
              <h3 className="edu-place">{item.place}</h3>
              <p className="edu-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
