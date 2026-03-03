import React from 'react';

export default function App() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-16">
              <Experience />
              <Projects />
              <Hospitality />
            </div>
            <div className="lg:col-span-4 space-y-12">
              <Education />
              <Skills />
              <Languages />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 border-b border-lab-border dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 w-8 h-8 flex items-center justify-center font-mono font-bold text-sm">MS</div>
            <h2 className="text-sm font-semibold tracking-tight uppercase text-slate-900 dark:text-white">Maciej ROBERT Szczesny</h2>
          </div>
          <nav className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-wider">
            <a className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary" href="#experience">Experience</a>
            <a className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary" href="#projects">Projects</a>
            <a className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary" href="#education">Education</a>
            <a className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary" href="#skills">Skills</a>
          </nav>
          <button className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold py-2 px-4 border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-2 uppercase tracking-wide group">
            <span className="material-symbols-outlined text-sm group-hover:text-primary transition-colors">download</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-20 pb-16 border-b border-lab-border dark:border-slate-800 bg-bio-pattern overflow-hidden">
      <div className="bio-overlay">
        <div className="bio-shape w-64 h-64 -top-10 -right-10 rotate-12"></div>
        <div className="bio-shape w-96 h-96 top-1/2 left-10 -translate-y-1/2 rotate-45 border-slate-200 dark:border-slate-800"></div>
        <div className="bio-shape w-32 h-32 bottom-10 right-1/4 -rotate-12 border-primary/20"></div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-slate-900 dark:text-white">
              Maciej <br/>
              <span className="text-slate-400 dark:text-slate-600">Robert</span> Szczesny
            </h1>
            <div className="max-w-3xl border-l-4 border-primary pl-6 py-2">
              <p className="text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                Third-year Biotechnology student at the University of Edinburgh. My personal aspiration is to help people using science, maths, and coding.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary/70">location_on</span>
                <span className="text-sm font-mono">Warsaw, PL / Edinburgh, UK</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary/70">mail</span>
                <span className="text-sm font-mono">mszczesny101@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm col-span-1 md:col-span-2">
                <div className="flex items-center gap-4 w-full">
                  <span className="material-symbols-outlined text-primary/70">share</span>
                  <div className="flex gap-4">
                    <a className="text-sm font-mono hover:text-primary transition-colors flex items-center gap-2 group" href="https://x.com/szczessny" target="_blank" rel="noreferrer">
                      <svg aria-hidden="true" className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                      Twitter
                    </a>
                    <a className="text-sm font-mono hover:text-primary transition-colors flex items-center gap-2 group" href="https://www.instagram.com/szczessny" target="_blank" rel="noreferrer">
                      <svg aria-hidden="true" className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path></svg>
                      Instagram
                    </a>
                    <a className="text-sm font-mono hover:text-primary transition-colors flex items-center gap-2 group" href="https://www.linkedin.com/in/maciej-szczesny-b861701a0/" target="_blank" rel="noreferrer">
                      <svg aria-hidden="true" className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 relative">
            <div className="aspect-[3/4] w-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 relative p-2">
              <div className="absolute top-0 right-0 p-2 z-10">
                <span className="material-symbols-outlined text-primary opacity-30 text-6xl">biotech</span>
              </div>
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-slate-900 dark:border-white"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-slate-900 dark:border-white"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-slate-900 dark:border-white"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-900 dark:border-white"></div>
              <div className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCJYqTKQJMCnZSUiZ7EBx1A-cdQTtAngNcmqthfCmfn5Itf5g58965ZOJHnh_ZTN7BfJ1erJbmIG8nqKgUAO9RxMIVdbjl1sRQw_ORQwN_Bt5STJxeTfJT4Jqn9PTFyoFWP6BAwcmWw-jrzhA-KNC0P1AWo1dRM1Q2iOqcLol5SX4me_3cxdlV-62skPv7AobrR9Ec1LfQZm94KZq__0lPQlWODAgo3mCpdlVsDQdKtJP3ZS__sVRQfZWsuXHlWVOw2hVJ--Iw6k0")' }}></div>
            </div>
            <div className="flex justify-between mt-2 font-mono text-xs text-slate-400">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <div className="border-b border-lab-border dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 dark:divide-slate-800 text-center">
        <div className="p-4">
          <div className="text-sm font-mono text-slate-500 uppercase mb-1">Year</div>
          <div className="text-2xl font-bold">3rd</div>
        </div>
        <div className="p-4">
          <div className="text-sm font-mono text-slate-500 uppercase mb-1">Lab Exp</div>
          <div className="text-2xl font-bold">2+ Yrs</div>
        </div>
        <div className="p-4">
          <div className="text-sm font-mono text-slate-500 uppercase mb-1">Languages</div>
          <div className="text-2xl font-bold">4</div>
        </div>
        <div className="p-4">
          <div className="text-sm font-mono text-slate-500 uppercase mb-1">Honours</div>
          <div className="text-2xl font-bold">Biotechnology</div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section className="scroll-mt-24" id="experience">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-3">
          <span className="w-3 h-3 bg-primary"></span>
          Biotechnology Experience
        </h2>
      </div>
      <div className="space-y-8">
        <div className="grid md:grid-cols-12 gap-6 group">
          <div className="md:col-span-3">
            <div className="text-sm font-mono text-slate-500 mb-1">JUN 2024 - AUG 2024</div>
            <div className="font-bold text-slate-900 dark:text-white">Intern</div>
            <div className="text-xs text-primary uppercase mt-2 font-semibold">Centre of New Technologies</div>
          </div>
          <div className="md:col-span-9 border-l border-slate-200 dark:border-slate-800 pl-6 md:pl-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Centre of New Technologies, Warsaw</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
              Learned basics of 5' cap synthesis (solid state, HPLC, TLC, MS). Modified mRNA (linearisation, IVT, cleanup, etc.) and performed protein purification (E. Coli expression, FPLC, MST, Dialysis, etc.). Gained insights into R&D, financing, and scientific networking.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              <li className="flex items-center gap-2 text-xs font-mono bg-slate-50 dark:bg-slate-900 p-2 border border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-[16px] text-primary">check_small</span>
                5' Cap Synthesis
              </li>
              <li className="flex items-center gap-2 text-xs font-mono bg-slate-50 dark:bg-slate-900 p-2 border border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-[16px] text-primary">check_small</span>
                mRNA Modification
              </li>
              <li className="flex items-center gap-2 text-xs font-mono bg-slate-50 dark:bg-slate-900 p-2 border border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-[16px] text-primary">check_small</span>
                Protein Purification
              </li>
              <li className="flex items-center gap-2 text-xs font-mono bg-slate-50 dark:bg-slate-900 p-2 border border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-[16px] text-primary">check_small</span>
                R&D Insights
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-6 group">
          <div className="md:col-span-3">
            <div className="text-sm font-mono text-slate-500 mb-1">JAN 2020 - NOW</div>
            <div className="font-bold text-slate-900 dark:text-white">Data Manager</div>
            <div className="text-xs text-primary uppercase mt-2 font-semibold">Pharmaceutical Companies</div>
          </div>
          <div className="md:col-span-9 border-l border-slate-200 dark:border-slate-800 pl-6 md:pl-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Pharmaceutical Companies (Remote)</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
              Managing for Regeneron, Roche, and others. Learned thoroughness and how to use specialised tools for work, and how to work with sensitive data.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-6 group">
          <div className="md:col-span-3">
            <div className="text-sm font-mono text-slate-500 mb-1">JUL 2022 - SEP 2022</div>
            <div className="font-bold text-slate-900 dark:text-white">Intern</div>
            <div className="text-xs text-primary uppercase mt-2 font-semibold">Warsaw Genomics</div>
          </div>
          <div className="md:col-span-9 border-l border-slate-200 dark:border-slate-800 pl-6 md:pl-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Warsaw Genomics, Warsaw, Poland</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
              Witnessed every step of the PCR technique, including designing primers, pipetting, and using specialised machines in a laboratory. Learned how to follow laboratory protocol.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              <li className="flex items-center gap-2 text-xs font-mono bg-slate-50 dark:bg-slate-900 p-2 border border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-[16px] text-primary">check_small</span>
                PCR Technique
              </li>
              <li className="flex items-center gap-2 text-xs font-mono bg-slate-50 dark:bg-slate-900 p-2 border border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-[16px] text-primary">check_small</span>
                Lab Protocol
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-6 group">
          <div className="md:col-span-3">
            <div className="text-sm font-mono text-slate-500 mb-1">AUG 2021</div>
            <div className="font-bold text-slate-900 dark:text-white">Intern</div>
            <div className="text-xs text-primary uppercase mt-2 font-semibold">Dept. of Pathology</div>
          </div>
          <div className="md:col-span-9 border-l border-slate-200 dark:border-slate-800 pl-6 md:pl-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Department of Pathology and Laboratory Diagnostics, Warsaw</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
              Learned how to work in a pathology lab, use scientific microscopes, section paraffin-embedded tissues, and follow a lab protocol.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="scroll-mt-24" id="projects">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-3">
          <span className="w-3 h-3 bg-primary"></span>
          Projects & Extracurricular
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-subtle hover:border-primary/50 transition-all flex flex-col h-full group">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-primary/10 text-primary px-2 py-1 text-xs font-bold uppercase tracking-wider">Research</div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">science</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">Student Researcher</h3>
          <p className="text-xs text-slate-500 font-mono mb-4 uppercase">ESRA (OCT 2024 - MAY 2025)</p>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-grow leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
            Planned a research project to study the degradation of common plastics by the fungus Aspergillus niger. Drafted a scientific proposal to secure funding for the project. Outlined methods for assessing the fungus's role in plastic biodegradation.
          </p>
        </div>
        <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-subtle hover:border-primary/50 transition-all flex flex-col h-full group">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 text-xs font-bold uppercase tracking-wider">Finance / Tech</div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">candlestick_chart</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">Junior Analyst</h3>
          <p className="text-xs text-slate-500 font-mono mb-4 uppercase">EUTIC (JAN 2025 - MAR 2025)</p>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-grow leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
            Created and submitted proposals as part of the "Healthcare" sector and presented proposals to the EUTIC board. Showcased strategic vision and secured investments by effectively communicating company's value proposition.
          </p>
        </div>
        <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-subtle hover:border-primary/50 transition-all flex flex-col h-full group md:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 text-xs font-bold uppercase tracking-wider">Volunteer</div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">volunteer_activism</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">Volunteer</h3>
          <p className="text-xs text-slate-500 font-mono mb-4 uppercase">Hospicjum Stacjonarne im. św. Patryka, Poland (SEP 2019 - FEB 2020)</p>
        </div>
      </div>
    </section>
  );
}

function Hospitality() {
  return (
    <section>
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
        <h2 className="text-xl font-bold uppercase tracking-tight flex items-center gap-3 text-slate-700 dark:text-slate-300">
          <span className="w-2 h-2 bg-slate-400"></span>
          Hospitality Experience
        </h2>
      </div>
      <div className="grid grid-cols-1 border border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800">
        <div className="p-4 flex flex-col md:flex-row md:items-center justify-between bg-slate-50 dark:bg-slate-900/50 gap-2">
          <div>
            <h4 className="font-bold text-sm">Splendid Hospitality, Edinburgh</h4>
            <p className="text-xs text-slate-500 mt-1">MAY 2024 - NOW</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Team Leader training, Bar training. Dinner services, drinks receptions under high time pressure.</p>
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-xs font-mono text-slate-400">Leadership</span>
          </div>
        </div>
        <div className="p-4 flex flex-col md:flex-row md:items-center justify-between bg-slate-50 dark:bg-slate-900/50 gap-2">
          <div>
            <h4 className="font-bold text-sm">Joe and The Juice, London</h4>
            <p className="text-xs text-slate-500 mt-1">OCT 2022 - APR 2023</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Worked full-time during gap year. Enhanced customer service and multitasking skills.</p>
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-xs font-mono text-slate-400">Multitasking</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
        <h3 className="text-lg font-bold uppercase tracking-tight">Education</h3>
        <span className="material-symbols-outlined text-slate-400">school</span>
      </div>
      <div className="space-y-8 relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-slate-200 dark:bg-slate-800"></div>
        <div className="relative pl-6">
          <div className="absolute left-0 top-2 w-[15px] h-[15px] border-2 border-primary bg-white dark:bg-slate-900 rounded-full"></div>
          <h4 className="font-bold text-slate-900 dark:text-white">University of Edinburgh</h4>
          <p className="text-primary text-sm font-medium mb-1">BSc Biotechnology</p>
          <p className="text-xs font-mono text-slate-500 mb-2">2023 - NOW</p>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
            Undergraduate Biological Sciences Student, Current Avg. ~75%.
          </p>
        </div>
        <div className="relative pl-6">
          <div className="absolute left-0 top-2 w-[15px] h-[15px] border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-full"></div>
          <h4 className="font-bold text-slate-900 dark:text-white">St. Edward's, Poole</h4>
          <p className="text-slate-500 text-sm font-medium mb-1">A-Levels</p>
          <p className="text-xs font-mono text-slate-500 mb-2">2020 - 2022</p>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
            Biology, Chemistry and Maths.
          </p>
        </div>
        <div className="relative pl-6">
          <div className="absolute left-0 top-2 w-[15px] h-[15px] border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-full"></div>
          <h4 className="font-bold text-slate-900 dark:text-white">Copernicus High School</h4>
          <p className="text-slate-500 text-sm font-medium mb-1">Warsaw</p>
          <p className="text-xs font-mono text-slate-500 mb-2">2019 - 2020</p>
        </div>
        <div className="relative pl-6">
          <div className="absolute left-0 top-2 w-[15px] h-[15px] border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-full"></div>
          <h4 className="font-bold text-slate-900 dark:text-white">Taipei Jingwen Bilingual School</h4>
          <p className="text-slate-500 text-sm font-medium mb-1">Taipei (臺北市景文高級中學)</p>
          <p className="text-xs font-mono text-slate-500 mb-2">2018 - 2019</p>
        </div>
        <div className="relative pl-6">
          <div className="absolute left-0 top-2 w-[15px] h-[15px] border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-full"></div>
          <h4 className="font-bold text-slate-900 dark:text-white">Staszic Middle School</h4>
          <p className="text-slate-500 text-sm font-medium mb-1">Warsaw</p>
          <p className="text-xs font-mono text-slate-500 mb-2">2016 - 2018</p>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
            Mathematics Middle School. Individualised Mathematics Classes.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
        <h3 className="text-lg font-bold uppercase tracking-tight">Skills</h3>
        <span className="material-symbols-outlined text-slate-400">code</span>
      </div>
      <div className="space-y-6">
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Programming & Tools</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-300">Python</span>
            <span className="px-3 py-1 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-300">Markdown</span>
            <span className="px-3 py-1 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-300">Latex</span>
            <span className="px-3 py-1 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-300">Fusion360</span>
            <span className="px-3 py-1 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-300">MS Office</span>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Status</h4>
          <div className="flex items-center gap-2 p-2 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-xs font-medium">UK Settled Status - Indefinite Leave to Remain (ILR)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Languages() {
  return (
    <section>
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
        <h3 className="text-lg font-bold uppercase tracking-tight">Languages</h3>
        <span className="material-symbols-outlined text-slate-400">translate</span>
      </div>
      <table className="w-full text-sm">
        <tbody>
          <tr className="border-b border-slate-100 dark:border-slate-800">
            <td className="py-2 font-medium">Polish</td>
            <td className="py-2 text-right text-slate-500 font-mono text-xs">NATIVE</td>
          </tr>
          <tr className="border-b border-slate-100 dark:border-slate-800">
            <td className="py-2 font-medium">English</td>
            <td className="py-2 text-right text-slate-500 font-mono text-xs">FLUENT</td>
          </tr>
          <tr className="border-b border-slate-100 dark:border-slate-800">
            <td className="py-2 font-medium">Chinese</td>
            <td className="py-2 text-right text-slate-500 font-mono text-xs">UPPER-INTERMEDIATE</td>
          </tr>
          <tr>
            <td className="py-2 font-medium">Russian</td>
            <td className="py-2 text-right text-slate-500 font-mono text-xs">EMERGING</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-lab-border dark:border-slate-800 py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-wider">Maciej Szczesny</h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-mono">Biotechnology Student @ University of Edinburgh</p>
        </div>
        <div className="flex gap-4">
          <a aria-label="X / Twitter" className="p-2 border border-slate-200 dark:border-slate-700 hover:bg-white hover:border-primary transition-all text-slate-600 dark:text-slate-400 group" href="https://x.com/szczessny" target="_blank" rel="noreferrer">
            <svg aria-hidden="true" className="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          </a>
          <a aria-label="Instagram" className="p-2 border border-slate-200 dark:border-slate-700 hover:bg-white hover:border-primary transition-all text-slate-600 dark:text-slate-400 group" href="https://www.instagram.com/szchesny" target="_blank" rel="noreferrer">
            <svg aria-hidden="true" className="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path></svg>
          </a>
          <a aria-label="LinkedIn" className="p-2 border border-slate-200 dark:border-slate-700 hover:bg-white hover:border-primary transition-all text-slate-600 dark:text-slate-400 group" href="https://www.linkedin.com/in/maciej-szczesny-b861701a0/" target="_blank" rel="noreferrer">
            <svg aria-hidden="true" className="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
          </a>
          <a className="p-2 border border-slate-200 dark:border-slate-700 hover:bg-white hover:border-primary transition-all text-slate-600 dark:text-slate-400" href="#">
            <span className="material-symbols-outlined text-xl">mail</span>
          </a>
          <a className="p-2 border border-slate-200 dark:border-slate-700 hover:bg-white hover:border-primary transition-all text-slate-600 dark:text-slate-400" href="#">
            <span className="material-symbols-outlined text-xl">link</span>
          </a>
        </div>
      </div>
      <div className="text-center mt-8 text-[10px] text-slate-400 font-mono uppercase">
        © 2024 Maciej Szczesny. Designed for Science.
      </div>
    </footer>
  );
}
