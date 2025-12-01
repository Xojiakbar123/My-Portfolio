// src/pages/Skills.jsx
import React, { useRef, useState, useEffect } from "react";
import "./Skills.css";

/*
Place these files in your project's public/ folder (or rename and update paths):
  - /ai%20project.pdf
  - /Assignment%20for%20AI.pptx
  - /Article%20citation%20(1).pdf
(Use URL-encoded names or rename files without spaces.)
*/

/* ---------------- AiEducationContent component ---------------- */
function AiEducationContent() {
  const preziLink =
    "https://prezi.com/view/HZv2BZpYzKWAqqxuPVTT/?referral_token=CjF7oBlnB3FN";
  const citationlink = "https://drive.google.com/file/d/1L9N33AXL_cUVJN2vQiywNVA5rEWao_nl/view?usp=drive_link";
  const capstone = "https://docs.google.com/presentation/d/1WAujX2dGtBCzTJHn-X4uyeYg8_VmdKLg/edit?usp=drive_link&ouid=104006993261082441261&rtpof=true&sd=true"

  const open = (url) => window.open(url, "https://prezi.com/view/HZv2BZpYzKWAqqxuPVTT/?referral_token=CjF7oBlnB3FN");

  return (
    <div className="ai-education expanded">
      <h3 className="ex-title">AI in Education — Assignments & Reflections</h3>

      {/* Assignment 1 */}
      <section className="ai-assignment">
        <h4>Assignment 1 — Mini-Lesson on AI & the Future of Work</h4>

        <div className="ai-actions" style={{ marginBottom: 12 }}>
          <button className="action-btn" onClick={() => open(preziLink)}>
            Open Prezi mini-lesson
          </button>
        </div>

        <div className="ai-block">
          <strong>Summary</strong>
          <p>
            My mini-lesson introduced students to how AI is reshaping the modern
            workforce by blending routine automation with new forms of digital
            collaboration. The real-world example chosen was AI-assisted logistics
            and routing, where human decision-making is supported, not replaced,
            by intelligent systems. Automation handles repetitive tasks like
            inventory prediction and route optimization while humans focus on
            supervision, communication, and resolving exceptions. During the
            lesson students compared AI predictions with human judgment and
            discussed which tasks require creativity and ethical reasoning. I
            guided the discussion with prompts such as “Which jobs will change or
            disappear?” and “Which skills will make workers resilient?” Students
            examined roles strengthened by AI—data analysts, system supervisors,
            and educators who use AI tools—and identified skills to develop:
            adaptability, digital literacy, and ethical reasoning. The core
            message emphasized that AI redefines work rather than fully
            replacing human contributions.
          </p>

          <strong>Key Insights (Reflection)</strong>
          <ul>
            <li>
              AI automates low-level tasks and elevates strategic human roles;
              teaching should focus on hybrid human–AI workflows.
            </li>
            <li>
              The assumption that AI simply "kills jobs" was challenged—AI
              creates new roles and requires different, often higher-order
              skills.
            </li>
            <li>
              Preparing students for the future means developing critical
              thinking, ethical judgment, and the ability to work with AI tools.
            </li>
          </ul>
        </div>
      </section>

      {/* Assignment 2 */}
      <section className="ai-assignment">
        <h4>Assignment 2 — Critical Analysis of AI-Generated Content</h4>

        <div className="ai-block">
          <strong>Task summary</strong>
          <p>
            I critically reviewed AI-generated articles about AI in education,
            comparing each generated summary to original academic sources (see
            the uploaded Article citation PDF). For each AI output I created a
            side-by-side comparison: screenshot of the AI text, a table of
            claims, and a corrected version with source citations. The gallery
            view on the site should display each screenshot with the corrected
            text directly below it.
          </p>

          <strong>Reflection</strong>
          <p>
            This assignment transformed my approach to AI-generated content. I
            found that models frequently produce plausible-sounding claims that
            blend accurate facts with invented details or omitted caveats. For
            example, when summarizing academic work the AI sometimes overstated
            claims or omitted key ethical considerations present in the source
            text. That taught me to treat AI outputs as drafts requiring
            verification. My new workflow is: read the original sources,
            cross-check claims, and correct errors before using AI text
            academically. This practice improved my ability to spot subtle
            hallucinations and to verify statistical or contextual claims. I now
            emphasize transparency—marking where AI contributed and documenting
            verification steps—so readers can evaluate the reliability of the
            final product.
          </p>

          <button className="action-btn" onClick={() => open(citationlink)}>
            Article Citation PDF
          </button>
        </div>
      </section>

      {/* Assignment 3 */}
      <section className="ai-assignment">
        <h4>Assignment 3 — Capstone: Designing Responsible AI Literacy for Schools</h4>

        <div className="ai-block">
          <strong>Capstone summary</strong>
          <p>
            The capstone develops a Responsible AI Literacy mini-curriculum for
            upper-secondary students. Lessons include testing AI limits with
            hands-on tasks, auditing datasets for bias, and designing
            privacy-safe classroom implementations. Each lesson pairs active
            tasks with teacher-facing guides and short assessments so instructors
            can adapt the materials to local contexts.
          </p>

          <strong>Reflection</strong>
          <ol>
            <li>
              <strong>Problem & learning goal:</strong> The curriculum clarifies
              how AI supports learning objectives—e.g., using AI for data
              exploration while preserving critical thinking.
            </li>
            <li>
              <strong>Data & privacy:</strong> Activities use synthetic or
              anonymized datasets; students practice consent and minimal-data
              design in classroom projects.
            </li>
            <li>
              <strong>Method & baseline:</strong> Lessons explain the simple
              models or APIs used and include baseline comparisons so students
              see failure cases.
            </li>
            <li>
              <strong>Evaluation:</strong> Rubrics measure student reasoning, not
              just prediction accuracy; teacher observations are built into
              assessments.
            </li>
            <li>
              <strong>Ethics & safety:</strong> Each activity prompts students to
              identify potential harms and propose mitigations.
            </li>
            <li>
              <strong>Deployment & maintenance:</strong> Teacher guides describe
              hosting options, fallback plans, and how to monitor model drift.
            </li>
            <li>
              <strong>Reflection & pedagogy:</strong> Students reflect on how
              the tool changes instruction, teacher roles, and the classroom
              power dynamics that AI introduces.
            </li>
          </ol>

          <div style={{ marginTop: 12 }}>
            <button className="action-btn" onClick={() => open(capstone)}>
            Open Capstone PPTX
          </button>
          </div>
        </div>
      </section>

      {/* Final Reflection / Synthesis */}
      <section className="ai-assignment">
        <h4>Final Reflection — Course Synthesis</h4>

        <div className="ai-block">
          <p>
            Across all three assignments my practice evolved from naïve trust to
            critical partnership with AI. Assignment 1 showed how AI augments
            work and foregrounded the need for hybrid skills. Assignment 2
            exposed how confident-sounding AI outputs can mislead without
            verification; the practical habit of “Compare, Correct, Clarify”
            became central. Assignment 3 made me focus on designing instruction
            that foregrounds ethics, privacy, and human oversight. Together they
            shaped a teaching approach where AI tools are used to amplify student
            inquiry while maintaining rigorous checks and student agency.
          </p>

          <p>
            Practically, my classroom-ready changes are:
            <ul>
              <li>Require source-checking steps when students use AI-generated summaries.</li>
              <li>Include consent and minimal-data principles for any student data used in class projects.</li>
              <li>Teach students how to document and present limitations of AI tools alongside their results.</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

/* ---------------- Main Skills component ---------------- */
const SECTIONS = [
  {
    id: "programming",
    title: "Programming",
    tech: [
      "HTML / CSS",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React.js",
      "Zustand",
      "Next.js",
      "APIs / REST",
      "Trello / GitHub",
      "C++",
    ],
    note:
      "Programming services include building responsive web apps, REST APIs, telegram bot integrations and developer tooling. I prefer React and modern JS patterns for frontend work.",
  },
  {
    id: "pedagogy",
    title: "Pedagogy",
    items: [
      "Designing inquiry-based STEM lessons",
      "Classroom management & engagement",
      "Curriculum module development",
      "Formative assessment & rubrics",
      "Game-based learning & simulations",
      "AI in education (criteria & projects)",
    ],
    note:
      "Pedagogy services include lesson design, teacher training, inquiry-based activities, and support for deploying tech responsibly in classrooms.",
  },
  {
    id: "soft",
    title: "Soft Skills",
    list: [
      "English (C1)",
      "Russian (B2)",
      "Uzbek (native)",
      "Teamwork / Leadership",
      "Communication / Presentation",
    ],
    note: "Languages and interpersonal skills that support teaching and collaboration.",
  },
];

const PEDAGOGY_EXPLANATIONS = {
  "Designing inquiry-based STEM lessons":
    "Hands-on inquiry lessons and labs that let students discover principles through guided experiments, reflection, and scaffolded questioning.",
  "Classroom management & engagement":
    "Techniques to increase student engagement: clear routines, active questioning, and formative checks that support diverse learners.",
  "Curriculum module development":
    "Full module design covering outcomes, materials, assessments, and scaffolded tasks for multi-week implementation.",
  "Formative assessment & rubrics":
    "Quick checks for learning and transparent rubrics to give students actionable feedback and teachers reliable grading.",
  "Game-based learning & simulations":
    "Designing low-cost games and simulations to teach problem solving, modelling, and experimentation.",
  "AI in education (criteria & projects)":
    `Use the Assignments panels (Assignment 1: Prezi, Assignment 2: Article analysis, Assignment 3: Capstone PPT) to design classroom activities and capstone projects. Open the PDF/PPT to see rubrics and full deliverables.`,
};

export default function Skills() {
  const sectionRefs = useRef({});
  const [activeTab, setActiveTab] = useState("programming");
  const [openPedagogyItem, setOpenPedagogyItem] = useState(null);

  useEffect(() => {
    const el = sectionRefs.current[activeTab];
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
    }
  }, [activeTab]);

  function handleTabClick(id) {
    setActiveTab(id);
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function togglePedagogy(item) {
    setOpenPedagogyItem((prev) => (prev === item ? null : item));
    const detailsEl = document.getElementById("pedagogy-details");
    if (detailsEl) detailsEl.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function openFile(path) {
    window.open(path, "_blank");
  }

  return (
    <main className="skills-page container">
      <div className="skills-topbox" role="tablist" aria-label="Skills sections">
        {SECTIONS.map((sec) => (
          <button
            key={sec.id}
            className={`skills-tab ${activeTab === sec.id ? "active" : ""}`}
            onClick={() => handleTabClick(sec.id)}
            role="tab"
            aria-selected={activeTab === sec.id}
            aria-controls={`section-${sec.id}`}
          >
            <span className="tab-title">{sec.title}</span>
          </button>
        ))}
      </div>

      <section className="skills-sections">
        {/* Programming */}
        <article
          id="section-programming"
          ref={(el) => (sectionRefs.current["programming"] = el)}
          className="skills-section"
        >
          <h2 className="section-heading">Programming</h2>

          <div className="section-body centered-box">
            <div className="tech-grid">
              {SECTIONS[0].tech.map((t, i) => (
                <div key={i} className="tech-item" title={t}>
                  <span className="tech-text">{t}</span>
                </div>
              ))}
            </div>

            <div className="section-note centered-text">{SECTIONS[0].note}</div>

            
          </div>
        </article>

        {/* Pedagogy */}
        <article
          id="section-pedagogy"
          ref={(el) => (sectionRefs.current["pedagogy"] = el)}
          className="skills-section"
        >
          <h2 className="section-heading">Pedagogy</h2>

          <div className="section-body pedagogy-layout">
            <div className="pedagogy-list centered-box">
              {SECTIONS[1].items.map((it, i) => (
                <button
                  key={i}
                  className={`ped-item ${openPedagogyItem === it ? "open" : ""}`}
                  onClick={() => togglePedagogy(it)}
                >
                  <span className="ped-text" style={{ textAlign: "center" }}>{it}</span>
                </button>
              ))}
            </div>

            <div id="pedagogy-details" className="pedagogy-details centered-box">
              <p className="section-note centered-text">{SECTIONS[1].note}</p>

              <div className="ped-explainer centered-text">
                {openPedagogyItem ? (
                  <>
                    <h3 className="ex-title">{openPedagogyItem}</h3>

                    {openPedagogyItem === "AI in education (criteria & projects)" ? (
                      <AiEducationContent />
                    ) : (
                      <div className="explain-pre">
                        <p>{PEDAGOGY_EXPLANATIONS[openPedagogyItem]}</p>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="hint">Click a pedagogical skill to read a short explanation.</p>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Soft skills */}
        <article
          id="section-soft"
          ref={(el) => (sectionRefs.current["soft"] = el)}
          className="skills-section"
        >
          <h2 className="section-heading">Soft skills & languages</h2>

          <div className="section-body centered-box">
            <div className="soft-list">
              {SECTIONS[2].list.map((s, i) => (
                <div key={i} className="soft-item">
                  <span className="soft-text">{s}</span>
                </div>
              ))}
            </div>

            <div className="section-note centered-text">{SECTIONS[2].note}</div>
          </div>
        </article>

        
      </section>
    </main>
  );
}
