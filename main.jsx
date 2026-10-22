import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Code2, Smartphone,
  Gauge, PanelsTopLeft, Github, Instagram, Mail, MessageCircle, Check,
  Sparkles, MousePointer2, Layers3, Globe2
} from 'lucide-react';
import './styles.css';

// CUSTOMIZE THESE DETAILS BEFORE PUBLISHING.
const CONTACT = {
  whatsapp: '919999999999', // Replace with your WhatsApp number, including country code.
  email: 'hello@example.com', // Replace with your email address.
  instagram: 'https://instagram.com/', // Replace with your Instagram profile URL.
  github: 'https://github.com/onkarvagare'
};

const projects = [
  {
    number: '01',
    name: 'Crumb & Co.',
    category: 'Bakery website concept',
    description: 'A warm, welcoming online storefront for a neighborhood bakery.',
    type: 'bakery',
    tags: ['Brand-led design', 'Responsive'],
    link: ''
  },
  {
    number: '02',
    name: 'FORM / FITNESS',
    category: 'Fitness website concept',
    description: 'A bold digital home for a gym that puts its community first.',
    type: 'fitness',
    tags: ['Landing page', 'Conversion focused'],
    link: ''
  },
  {
    number: '03',
    name: 'Northline Studio',
    category: 'Creative business concept',
    description: 'A clean, editorial-style site for a modern creative studio.',
    type: 'studio',
    tags: ['Minimal design', 'Portfolio'],
    link: ''
  }
];

const services = [
  { icon: PanelsTopLeft, number: '01', title: 'Business websites', text: 'A professional online home that helps customers understand your business and get in touch.' },
  { icon: Smartphone, number: '02', title: 'Responsive design', text: 'A smooth, easy-to-use experience across phones, tablets, laptops, and desktops.' },
  { icon: Layers3, number: '03', title: 'Landing pages', text: 'Focused pages for a product, service, launch, or campaign—with a clear next step.' },
  { icon: Gauge, number: '04', title: 'Website refresh', text: 'Give an existing website a cleaner look, clearer content, and a more modern feel.' }
];

function ProjectPreview({ type }) {
  if (type === 'bakery') return (
    <div className="preview bakery-preview">
      <div className="preview-nav"><span>crumb<span className="tiny-dot">.</span></span><span>MENU&nbsp;&nbsp; OUR STORY&nbsp;&nbsp; VISIT</span></div>
      <div className="bakery-body">
        <div><span className="preview-eyebrow">FRESH FROM THE OVEN</span><h3>A little<br/>piece of<br/><em>happiness.</em></h3><span className="preview-pill">EXPLORE THE MENU ↗</span></div>
        <div className="bread-art" aria-hidden="true"><div className="bread bread-one"/><div className="bread bread-two"/><div className="bread bread-three"/><div className="plate"/></div>
      </div>
      <div className="preview-foot">SLOW MORNINGS. GOOD BREAD. GREAT COFFEE.</div>
    </div>
  );
  if (type === 'fitness') return (
    <div className="preview fitness-preview">
      <div className="preview-nav"><span>FORM<span className="fitness-dot">/</span></span><span>TRAIN&nbsp;&nbsp; CLASSES&nbsp;&nbsp; ABOUT</span></div>
      <div className="fitness-body"><span className="preview-eyebrow">YOUR WORK. YOUR PACE.</span><h3>BUILT<br/>BY <i>YOU.</i></h3><div className="fitness-bottom"><span>TRAIN WITH INTENTION.</span><span className="round-arrow">↗</span></div></div>
      <div className="fitness-shape shape-one"/><div className="fitness-shape shape-two"/>
    </div>
  );
  return (
    <div className="preview studio-preview">
      <div className="preview-nav"><span>northline®</span><span>WORK&nbsp;&nbsp; STUDIO&nbsp;&nbsp; CONTACT</span></div>
      <div className="studio-body"><span className="preview-eyebrow">INDEPENDENT CREATIVE STUDIO</span><h3>Ideas made<br/><em>visible.</em></h3><div className="studio-orbit"><span>NL</span></div><div className="studio-caption">STRATEGY · DESIGN · DIGITAL</div></div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Onkar! I'd like to discuss a website for my business.")}`;
  const mailUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Website project enquiry')}`;
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="header">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Onkar Dev home">ONKAR<span>.DEV</span><i>®</i></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#services" onClick={closeMenu}>Services <span>02</span></a>
          <a href="#about" onClick={closeMenu}>About <span>03</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>04</span></a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Let's talk <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-topline"><span><span className="status-dot"/> INDEPENDENT WEB DEVELOPER</span><span>BASED IN INDIA · WORKING WORLDWIDE</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line"/> DESIGN-MINDED. CODE-DRIVEN.</p>
              <h1>Good websites<br/>make people <span className="accent-word">look.</span><br/><span className="outline-word">Great ones</span><br/>make them <span className="accent-word">stay.</span></h1>
              <p className="hero-description">I build thoughtful, modern websites that help businesses show up with confidence and turn visitors into customers.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
                <a className="button button-quiet" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Start a project</a>
              </div>
              <div className="hero-note"><span className="note-line"/><span>From first idea to launch day.<br/><b>Let's build something useful.</b></span></div>
            </div>
            <div className="hero-visual" aria-label="Decorative website design preview">
              <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
              <div className="floating-tag tag-top"><span className="tag-icon"><Code2 size={15}/></span><span><b>Clean code</b><small>Built with care</small></span></div>
              <div className="visual-card">
                <div className="visual-card-head"><div className="window-dots"><i/><i/><i/></div><span>ONKAR_STUDIO / 001</span><span className="live-label"><span/> LIVE CONCEPT</span></div>
                <div className="visual-card-body">
                  <div className="visual-mini-brand">O<span>.</span> / DIGITAL STUDIO</div>
                  <p className="visual-big">Make your<br/><em>next move</em><br/>matter.</p>
                  <div className="visual-card-bottom"><span>DESIGN · DEVELOPMENT · DIGITAL</span><span className="visual-arrow"><ArrowUpRight size={18}/></span></div>
                  <div className="visual-grid-lines"/>
                </div>
              </div>
              <div className="floating-tag tag-bottom"><span className="tag-icon purple"><MousePointer2 size={15}/></span><span><b>Made for people</b><small>Responsive by design</small></span></div>
              <div className="visual-index">FIG. 001 — A BETTER WEB</div>
            </div>
          </div>
          <div className="hero-bottomline"><span>SCROLL TO EXPLORE <ArrowDownRight size={13}/></span><span>DESIGNING THE DETAILS THAT MATTER</span><span>01 — 04</span></div>
        </section>

        <section className="ticker" aria-label="Services summary"><div className="ticker-track">{Array.from({length: 4}).map((_, i) => <span key={i}>WEB DESIGN <i>✳</i> DEVELOPMENT <i>✳</i> DIGITAL EXPERIENCES <i>✳</i> BUILT FOR YOUR BUSINESS <i>✳</i></span>)}</div></section>

        <section className="work-section section-wrap section-pad" id="work">
          <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line"/> SELECTED CONCEPTS / 001—003</p><h2>Work that speaks<br/><span className="muted-heading">for itself.</span></h2></div><p className="section-intro">A few directions I can take a project. These are concept projects created to demonstrate design and development skills.</p></div>
          <div className="project-grid">
            {projects.map(project => <article className="project-card" key={project.number}>
              <a className={`project-visual ${project.type}`} href={project.link || '#contact'} aria-label={`Discuss a website like ${project.name}`}>
                <ProjectPreview type={project.type}/>
                <span className="project-open"><ArrowUpRight size={19}/></span>
              </a>
              <div className="project-meta"><span>{project.number} / {project.category}</span><span className="project-status"><i/> CONCEPT</span></div>
              <div className="project-title-row"><h3>{project.name}</h3><ArrowUpRight size={18}/></div>
              <p>{project.description}</p>
              <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>)}
          </div>
          <div className="work-footnote"><Sparkles size={15}/><span>Concept work, built to show what's possible. Want something made for your business?</span><a href="#contact">Let's talk <ArrowRight size={14}/></a></div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="section-wrap">
            <div className="section-heading services-heading"><div><p className="eyebrow"><span className="eyebrow-line"/> WHAT I CAN DO FOR YOU</p><h2>Your goals.<br/><span className="muted-heading">My next build.</span></h2></div><p className="section-intro">Whether you're starting from scratch or ready for a refresh, let's make your online presence work harder.</p></div>
            <div className="services-list">{services.map(service => <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span><span className="service-icon"><service.icon size={22} strokeWidth={1.5}/></span><div className="service-copy"><h3>{service.title}</h3><p>{service.text}</p></div><ArrowUpRight className="service-arrow" size={22}/>
            </article>)}</div>
            <div className="services-note"><div className="note-star">✳</div><p><b>Good work, fair pricing.</b><br/>Every project is different. Tell me what you need and I'll suggest a practical option that fits your goals and budget.</p><a className="button button-outline" href={whatsappUrl} target="_blank" rel="noreferrer">Get a quote <ArrowUpRight size={16}/></a></div>
          </div>
        </section>

        <section className="about-section section-wrap section-pad" id="about">
          <div className="about-left"><p className="eyebrow"><span className="eyebrow-line"/> A LITTLE ABOUT ME</p><h2>Small details.<br/> <span className="accent-word">Big difference.</span></h2><div className="about-mark">O<span>.</span></div></div>
          <div className="about-right"><p className="about-lead">Hey, I'm Onkar — a web developer who believes a good website should look sharp, feel simple, and do a real job for the people using it.</p><p>I work with businesses and individuals to turn ideas into clean, responsive web experiences. I care about the details, communicate clearly, and build with the people on the other side of the screen in mind.</p><div className="about-facts"><div><span className="fact-icon"><Check size={15}/></span><span>Responsive-first approach</span></div><div><span className="fact-icon"><Check size={15}/></span><span>Clear, direct communication</span></div><div><span className="fact-icon"><Check size={15}/></span><span>Practical, budget-aware solutions</span></div></div><a className="text-link" href={CONTACT.github} target="_blank" rel="noreferrer">See my GitHub <ArrowUpRight size={16}/></a></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-top"><p className="eyebrow"><span className="eyebrow-line"/> HAVE A PROJECT IN MIND?</p><span className="contact-coordinate">LET'S MAKE IT REAL / 2026</span></div>
            <h2>Have a business?<br/>Let's get you <span className="accent-word">online.</span></h2>
            <div className="contact-bottom"><p>Tell me a little about your business and what you'd like to build. I'll get back to you and we'll take it from there.</p><div className="contact-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Chat on WhatsApp <ArrowUpRight size={16}/></a><a className="button button-quiet" href={mailUrl}><Mail size={17}/> Send an email</a></div></div>
            <div className="contact-stamp"><Globe2 size={18}/><span>OPEN TO PROJECTS<br/><b>INDIA + WORLDWIDE</b></span></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a href="#home" className="brand">ONKAR<span>.DEV</span><i>®</i></a>
        <p>Designed with intention. Built with care.</p>
        <div className="social-links"><a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17}/></a><a href={mailUrl} aria-label="Email"><Mail size={17}/></a></div>
        <span className="copyright">© {new Date().getFullYear()} ONKAR.DEV</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
