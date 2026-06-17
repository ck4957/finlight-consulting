import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { articles, getArticle } from './articles.js';
import './styles.css';

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const navItems = [
  ['Home', pagePath()],
  ['Services', `${pagePath()}#services`],
  ['About', `${pagePath()}#about`],
  ['Contact', `${pagePath()}#contact`],
  ['My Take', pagePath('my-take')],
];

const services = [
  {
    image: 'assets/service-leadership.png',
    title: 'Interim Finance Leadership',
    lead: 'Hands-on finance leadership.',
    body:
      'From day-to-day accounting to FP&A, I manage the full finance function and the team while putting the right controls and processes in place. So you can focus on running the business.',
  },
  {
    image: 'assets/service-dashboard.jpg',
    title: 'Data Cleanup & Financial Reporting',
    lead: 'Visible, reliable data you can trust to drive decisions.',
    body:
      'I cut down your reporting time to (or better than) industry standards and clean-up messy, unorganized data into clear, audit-ready insights.',
  },
  {
    image: 'assets/service-costing.png',
    title: 'Costing & Margin Fix',
    lead: 'Improve profits without sacrificing volume.',
    body:
      'I dive into your costing, align it to pricing, and roll out margin strategies that hold up as you scale. I build processes that keep them in sync as you move forward.',
  },
  {
    image: 'assets/service-ai.jpg',
    title: 'ERP, Automation, & AI Implementation',
    lead: 'Automation that makes sense for your business.',
    body:
      'I help pick and roll-out the right system, provide training, and put in AI workflows, so you and your team can spend less time doing manual work and more time driving growth.',
  },
];

const achievements = [
  'Built finance department from the ground up: Established day-to-day accounting, month-end and year-end close, audit readiness, budgeting, internal controls, fixed past data and reconciliations, and led and trained individuals into high-performing finance team.',
  'Boosted profitability: Improved gross margins from 10 % to over 20 % through new costing models, pricing strategy implementation with sales and full A-Z involvement in a product launch.',
  'Built sustainable processes: Reduced month-end close from 20 days to 5 days; recovered over CAD 250 K from the CRA; and cut audit fees by 61 % by reducing the audit cycle from 8+ months to 8 days.',
  'Been a go-to leader: Recruited, led and mentored cross-functional teams across finance, operations, supply chain, and production.',
  'Scaled for growth: Drove 99 % company growth, launched a new product line at 25-30 % margin, and re-implemented ERP and reporting to future-proof operations.',
];

const expertise = [
  'Fractional Financial Leadership',
  'Cost Optimization & Inventory Management',
  'Pricing Strategy and Implementation --> Margin Growth',
  'ERP Implementation & Process Automation',
  'KPI Dashboards & Performance Reporting',
  'FP&A, Forecasting & Budgeting',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handleRoute = () => setRoute(getRoute());
    window.addEventListener('popstate', handleRoute);
    return () => {
      window.removeEventListener('popstate', handleRoute);
    };
  }, []);

  useScrollReveal(route.type);

  function closeMenu() {
    setMenuOpen(false);
  }

  function submitForm(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Finlight inquiry from ${form.get('firstName') || ''} ${form.get('lastName') || ''}`.trim());
    const body = encodeURIComponent(
      `Name: ${form.get('firstName')} ${form.get('lastName')}\nEmail: ${form.get('email')}\nCompany: ${form.get('company') || ''}\n\n${form.get('message')}`
    );
    window.location.href = `mailto:partner@finlightconsulting.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const activeArticle = route.type === 'article' ? getArticle(route.slug) : null;

  return (
    <>
      <header className="site-header">
        <a className="logo-link" href="#home" aria-label="Finlight Consulting home">
          <img src={asset('assets/logo.png')} alt="Finlight Consulting" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
          <a className="button small" href={`${pagePath()}#contact`}>Let's Connect</a>
        </nav>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
          <span />
          <span />
          <span />
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="button" href={`${pagePath()}#contact`} onClick={closeMenu}>Let's Connect</a>
        </nav>
      )}

      <main id="home">
        {route.type === 'blog' && <BlogPage />}
        {route.type === 'article' && <ArticlePage article={activeArticle} />}
        {route.type === 'home' && (
        <>
        <section className="hero image-band" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.48)), url(${asset('assets/hero-1.png')})` }}>
          <div className="hero-copy reveal grow-copy is-visible">
            <h1>Clean Data, Real-Time Dashboards, &amp; Margin Lift of 4 pts in 90 Days.</h1>
            <p>Finance-led ERP Implementation, Automated Reporting, &amp; Tailored Processes.</p>
            <p>Specializing in small and mid-sized Manufacturing &amp; CPG Clients.</p>
            <a className="button" href="#services">Learn more</a>
          </div>
        </section>

        <section id="services" className="section services zigzag-section" style={{ '--section-bg': `url(${asset('assets/hero-2.png')})` }}>
          <h2 className="reveal grow-copy">What I Offer</h2>
          <div className="service-grid reveal-group">
            {services.map((service) => (
              <article className="service reveal" key={service.title}>
                <img src={asset(service.image)} alt="" />
                <p className="service-lead">{service.lead}</p>
                <p>{service.body}</p>
                <h3>{service.title}</h3>
              </article>
            ))}
          </div>
          <div className="statement reveal grow-copy">
            <p>I don't just advise.</p>
            <p>I dive in, build, fix, and deliver results.</p>
          </div>
        </section>

        <section className="wave-photo wave-photo-top" aria-hidden="true" style={{ '--wave-bg': `url(${asset('assets/divider-1.png')})` }} />

        <section id="about" className="section about zigzag-section about-blend" style={{ '--section-bg': `url(${asset('assets/divider-2.png')})` }}>
          <div className="about-media reveal image-grow">
            <img className="headshot" src={asset('assets/headshot.jpg')} alt="Grusha headshot" />
            <div className="credential-row">
              <img src={asset('assets/cpa.png')} alt="CPA" />
              <img src={asset('assets/mmpa.png')} alt="MMPA" />
              <img src={asset('assets/d365.png')} alt="Microsoft Dynamics 365" />
              <img src={asset('assets/powerbi.png')} alt="Power BI" />
              <img src={asset('assets/adp.png')} alt="ADP" />
            </div>
          </div>
          <div className="about-copy reveal grow-copy">
            <h2>Who I am</h2>
            <p>Hi, I'm Grusha. A CPA, former auditor, and a manufacturing finance expert.</p>
            <p>I'm a hands-on finance leader that delivers results by rolling up my sleeves, getting into the details, while serving the bigger picture through partnering with cross-functional teams.</p>
            <p>In my time from a Consultant to a Director of Finance at a 135-year old food manufacturing company, I've:</p>
            <ul>
              {achievements.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>My Core Expertise:</p>
            <ul>
              {expertise.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>If you want hands-on finance leadership that moves the needle without a full-time hire and cost, I'm your partner. I'll build the systems and insights you need while training your team, so you can focus on scaling your business.</p>
            <p>Less talk, more action. That's how I work.</p>
          </div>
        </section>

        <section id="connect" className="connect-band image-band zigzag-connect" style={{ backgroundImage: `linear-gradient(90deg, rgba(245, 245, 245, 0.88), rgba(245, 245, 245, 0.25)), url(${asset('assets/connect-bg.jpg')})` }}>
          <div className="connect-copy reveal grow-copy">
            <h2>Let's Connect!</h2>
            <p>Just 15 minutes of your time.</p>
          </div>
          <div className="booking-panel reveal image-grow">
            <h2>Book a 15 Minute Call</h2>
            <CalendlyWidget />
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2 className="reveal grow-copy">Ask Me Anything</h2>
          <form className="reveal" onSubmit={submitForm}>
            <label>Name</label>
            <div className="two-col">
              <input name="firstName" placeholder="First Name" required />
              <input name="lastName" placeholder="Last Name" required />
            </div>
            <label>Email</label>
            <input type="email" name="email" required />
            <label>Company</label>
            <input name="company" />
            <label>Message</label>
            <textarea name="message" required rows="5" />
            <button className="button" type="submit">SEND</button>
            {sent && <p className="form-note">Your email app should open with the message ready to send.</p>}
          </form>
        </section>

        </>
        )}
      </main>

      <footer>
        <p>© 2025 Finlight Consulting. All Rights Reserved.<br />Email: <a href="mailto:partner@finlightconsulting.com">partner@finlightconsulting.com</a><br />LinkedIn: <a href="https://linkedin.com/in/gbutala">linkedin.com/in/gbutala</a></p>
        <a className="button" href={route.type === 'home' ? '#home' : pagePath()}>BACK TO TOP</a>
        <p>Based in Vaughan, Serving GTA, Ontario, &amp; Canada-Wide.</p>
      </footer>
    </>
  );
}

function getRoute() {
  const base = new URL(import.meta.env.BASE_URL, window.location.origin).pathname.replace(/\/$/, '');
  let path = window.location.pathname;
  if (base && path.startsWith(base)) path = path.slice(base.length) || '/';
  path = path.replace(/\/$/, '') || '/';
  if (path === '/my-take') return { type: 'blog' };
  if (path.startsWith('/my-take/')) return { type: 'article', slug: path.replace('/my-take/', '') };
  return { type: 'home' };
}

function pagePath(path = '') {
  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return `${base}${normalized}`.replace(/\/{2,}/g, '/');
}

function CalendlyWidget() {
  useEffect(() => {
    if (document.querySelector('script[data-calendly-script]')) return;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.dataset.calendlyScript = 'true';
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/finlightconsulting?hide_gdpr_banner=1"
      title="Schedule a meeting with Finlight Consulting"
    />
  );
}

function useScrollReveal(routeType) {
  useEffect(() => {
    const elements = [...document.querySelectorAll('.reveal')];
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.18 }
    );

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 90}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [routeType]);
}

function BlogPage() {
  return (
    <section className="section blog blog-page">
      <a className="back-link" href={pagePath()}>Home</a>
      <h1>Finance Insights for Real Business Problems</h1>
      <p className="blog-intro">Practical finance, costing, and ERP insights for small and mid-sized businesses. Built for leaders tired of guesswork and ready for clarity.</p>
      <div className="post-list">
        {articles.map((post) => (
          <article className="post" key={post.slug}>
            <img src={asset(post.image)} alt={post.title} />
            <div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a href={pagePath(`my-take/${post.slug}`)}>Read more &rarr;</a>
              <time>{post.date}</time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ArticlePage({ article }) {
  if (!article) {
    return (
      <section className="section article-page">
        <a className="back-link" href={pagePath('my-take')}>Back to My Take</a>
        <h1>Article not found</h1>
      </section>
    );
  }

  return (
    <article className="section article-page">
      <div className="article-meta">
        <time>{article.date}</time>
        <span>Written By <a href={pagePath('my-take')}>{article.author || 'Grusha Butala'}</a></span>
      </div>
      <h1>{article.title}</h1>
      <div className="article-content">
        {(article.content || article.body || []).map((block, index) => <ArticleBlock block={block} key={index} />)}
      </div>
      <a className="article-next" href={pagePath('my-take/why-choose-finlight')}>
        <span>Next</span>
        <strong>Why Finlight</strong>
      </a>
    </article>
  );
}

function ArticleBlock({ block }) {
  if (typeof block === 'string') return <p>{block}</p>;

  if (block.type === 'ordered-list' || block.type === 'unordered-list') {
    const ListTag = block.type === 'ordered-list' ? 'ol' : 'ul';
    return (
      <ListTag>
        {block.items.map((item, index) => (
          <li key={index}>
            <p>{renderRichText(item)}</p>
          </li>
        ))}
      </ListTag>
    );
  }

  return <p className={block.strong ? 'strong-paragraph' : undefined}>{renderRichText(block.content || block.text)}</p>;
}

function renderRichText(content) {
  if (typeof content === 'string') return content;
  if (!Array.isArray(content)) return null;

  return content.map((part, index) => {
    let value = part.text;
    if (part.em) value = <em>{value}</em>;
    if (part.strong) value = <strong>{value}</strong>;
    return <React.Fragment key={index}>{value}</React.Fragment>;
  });
}

createRoot(document.getElementById('root')).render(<App />);
