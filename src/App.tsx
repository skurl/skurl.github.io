/// <reference types="vite/client" />
import { useEffect, useState } from 'react';

const BASE = import.meta.env.BASE_URL;

const links = [
  { label: 'Email', href: 'mailto:mszczesny101@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/skurl' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/maciej-robert-szczesny-b861701a0' },
  { label: 'X', href: 'https://x.com/szczessny' },
  { label: 'Instagram', href: 'https://www.instagram.com/szczessny' },
];

const experience = [
  {
    when: 'Mar 2026 – now',
    title: 'Student Researcher, Condensense (iGEM)',
    where: 'Edinburgh',
    text: 'Biomolecular condensate-based biosensors for the iGEM competition, on the Funding and Dry Lab teams. Molecular dynamics in AMBER and OpenMM to test construct variants in silico.',
  },
  {
    when: 'May – Aug 2026',
    title: 'Student Researcher, University of Edinburgh',
    where: 'Edinburgh',
    href: 'https://github.com/skurl/flashEE',
    text: 'Built flashEE from scratch in PyTorch: a 4.94M-parameter protein language model trained on eukaryotic UniProt sequences, designed to study the impacts of quantisation. Funded by CCPBioSim and EPSRC.',
  },
  {
    when: 'Jun – Aug 2024',
    title: 'Intern, Centre of New Technologies',
    where: 'Warsaw',
    text: "Performed 5' cap synthesis by solid-state methods, verified by HPLC, TLC and mass spectrometry. Modified mRNA (plasmid linearisation, IVT, cleanup, electrophoresis) and purified proteins (E. coli expression, FPLC, MST, dialysis).",
  },
  {
    when: 'Jan 2020 – now',
    title: 'Data Manager, pharmaceutical companies',
    where: 'Remote',
    text: 'Clinical data entry for Regeneron, Roche and others, as a part-time job; Good Clinical Practice (GCP) certification completed.',
  },
  {
    when: 'Jul – Sep 2022',
    title: 'Intern, Warsaw Genomics',
    where: 'Warsaw',
    text: 'Designed primers and ran COVID-19 PCR assays following standard laboratory protocol.',
  },
  {
    when: 'Aug 2021',
    title: 'Intern, Department of Pathology and Laboratory Diagnostics',
    where: 'Warsaw',
    text: 'Shadowing professors and learning about the diagnosis and treatment of diseases through microscopy and sectioning of paraffin-embedded tissues.',
  },
];

const projects = [
  {
    when: 'Oct 2024 – May 2025',
    title: 'Student Researcher, Edinburgh Scientific Research Association',
    text: [
      'Designed a project on plastic degradation by ',
      <i key="species">Aspergillus niger</i>,
      ' and outlined the assessment methods. Wrote the proposal and secured the funding.'
    ],
  },
  {
    when: 'Jan – Mar 2025',
    title: 'Junior Analyst, Edinburgh University Trading and Investment Club',
    text: 'Researched and pitched healthcare-sector investment proposals to the club board.',
  },
  {
    when: 'Sep 2019 – Feb 2020',
    title: 'Volunteer, Hospicjum Stacjonarne im. św. Patryka',
    text: '',
  },
];

const education = [
  { when: '2023 – now', title: 'University of Edinburgh', text: 'BSc (Hons) Biotechnology, 4th year. Current average ~74%.' },
  { when: '2020 – 2022', title: "St. Edward's, Poole", text: 'A-Levels: Biology, Chemistry, Maths.' },
  { when: '2019 – 2020', title: 'Copernicus High School, Warsaw', text: '' },
  { when: '2018 – 2019', title: 'Taipei Jingwen Bilingual School, Taipei', text: '' },
  { when: '2016 – 2018', title: 'Staszic Middle School, Warsaw', text: 'Mathematics-focused middle school with tailored advanced mathematics curriculum.' },
];

const skills = 'Python (PyTorch, NumPy, pandas), Bash, LaTeX. Molecular dynamics in AMBER and OpenMM. Linux, Git, Microsoft Office, Fusion 360.';
const languages = 'Polish (native), English (fluent), Chinese (upper-intermediate), Russian (emerging).';
const status = 'Polish citizen with UK Settled Status (Indefinite Leave to Remain).';

export default function App() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-16 text-[15px] leading-relaxed text-slate-700">
      <Hero />
      <Section title="Experience" id="experience" items={experience} />
      <Section title="Projects" id="projects" items={projects} />
      <Recent />
      <Section title="Education" id="education" items={education} />
      <section>
        <H2>Skills</H2>
        <p>{skills}</p>
      </section>
      <section>
        <H2>Languages</H2>
        <p>{languages}</p>
      </section>
      <section>
        <H2>Status</H2>
        <p>{status}</p>
      </section>
      <footer className="pt-8 border-t border-slate-200 text-xs text-slate-400">© {new Date().getFullYear()} Maciej Szczesny</footer>
    </main>
  );
}

function Hero() {
  return (
    <header className="flex flex-col-reverse sm:flex-row gap-8 sm:items-center">
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Maciej Robert Szczesny</h1>
        <p>
          Fourth-year Biotechnology student at the University of Edinburgh. I want to help people using science, maths and code.
          Based in Edinburgh and Warsaw.
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="text-primary hover:underline">{l.label}</a>
          ))}
          <a href={`${BASE}CV_final.pdf`} download className="text-primary hover:underline">CV (PDF)</a>
        </p>
      </div>
      <img src={`${BASE}HEADSHOT.PNG`} alt="Maciej Szczesny" className="w-28 h-28 rounded-full object-cover object-[58%_center] shrink-0" />
    </header>
  );
}

function H2({ children }: { children: string }) {
  return <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">{children}</h2>;
}

type Item = { when: string; title: string; where?: string; href?: string; text: string };

function Section({ title, id, items }: { title: string; id?: string; items: Item[] }) {
  return (
    <section id={id} className="scroll-mt-16">
      <H2>{title}</H2>
      <ul className="space-y-6">
        {items.map((it) => (
          <li key={it.title} className="grid sm:grid-cols-[9rem_1fr] gap-x-6 gap-y-1">
            <div className="text-sm text-slate-400">{it.when}</div>
            <div>
              <div className="font-medium text-slate-900">
                {it.href ? <a href={it.href} target="_blank" rel="noreferrer" className="hover:underline">{it.title}</a> : it.title}
                {it.where && <span className="text-slate-400 font-normal"> · {it.where}</span>}
              </div>
              {it.text && <p className="mt-1">{it.text}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Recent() {
  // ponytail: unauthenticated GitHub API, 60 req/hr per IP. Fine for a portfolio.
  const [repos, setRepos] = useState<any[]>([]);
  useEffect(() => {
    fetch('https://api.github.com/users/skurl/repos?sort=pushed&per_page=12')
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => setRepos(data.filter((r: any) => !r.fork).slice(0, 4)))
      .catch(() => {});
  }, []);
  if (!repos.length) return null;
  return (
    <Section
      title="Recent on GitHub"
      id="github"
      items={repos.map((r) => ({
        when: new Date(r.pushed_at).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }),
        title: r.name,
        href: r.html_url,
        where: r.language,
        text: r.description || '',
      }))}
    />
  );
}
