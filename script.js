const projects = {
  sendpulse: {
    tags:['Automation','Telegram','API Integration'],
    title:'Telegram → SendPulse Automation',
    role:'Python Developer — Telegram Automation & API Integration',
    summary:'Built an always-on pipeline that collected email addresses from Telegram, processed and filtered the data, and synchronized eligible contacts into SendPulse.',
    challenge:'The client needed to replace a manual contact-transfer workflow with a server-side process that could run continuously and remain maintainable when Telegram or SendPulse credentials changed.',
    work:[
      'Integrated Telegram through Telethon, including api_id, api_hash and persistent session handling.',
      'Implemented user-data collection, email extraction, normalization, validation and configurable filters such as Gmail-only selection.',
      'Integrated SendPulse API synchronization and token refresh/maintenance flow.',
      'Deployed the Python process on RunPod for continuous execution.',
      'Added logging, process-state visibility and operating instructions for restart, token updates and log inspection.'
    ],
    result:'Manual transfer of Telegram contacts into the email-marketing system was replaced with a repeatable automated workflow that could run continuously on the server and be operated using documented procedures.',
    stack:['Python','Telethon','Telegram API','SendPulse API','REST API','RunPod','Logging','Server Deployment']
  },
  confidential: {
    tags:['Backend','Production Systems','NDA-safe'],
    title:'Confidential Python SaaS — Reliability & Data Pipelines',
    role:'Python Software Engineer — Confidential Commercial Product | Contract | 2026',
    summary:'Developed and maintained a production Python system built around asynchronous backend services, persistent/transient state, external API integrations and data-processing workflows.',
    challenge:'The work required correctness across component boundaries: multi-user isolation, transactional consistency, concurrent operations, external dependencies and failure recovery — without exposing confidential product details.',
    work:[
      'Worked with multi-user data isolation, transactional consistency, asynchronous orchestration, caching, concurrency control and idempotency.',
      'Improved pipelines combining structured/unstructured external data with validation, normalization, trust controls and downstream persistence.',
      'Integrated third-party AI and data services using structured outputs, retries, validation and graceful failure handling.',
      'Built safeguards around database transactions, concurrent operations and cross-component consistency.',
      'Expanded regression coverage and performed root-cause analysis of production defects crossing service/module boundaries.',
      'Worked with Linux production environments, service management, schema evolution and operational troubleshooting.'
    ],
    result:'A more reliable and diagnosable backend foundation for production workflows, with stronger boundaries around state, external services, transactions and failure handling.',
    stack:['Python','FastAPI','SQLAlchemy','PostgreSQL','Redis','Async I/O','REST APIs','Migrations','Linux']
  },
  magento: {
    tags:['Legacy Recovery','DevOps','Magento 1.9'],
    title:'Magento 1.9 — DEV Environment & Legacy Stabilization',
    role:'Legacy Environment & Recovery Engineer',
    summary:'Rebuilt a reproducible DEV environment synchronized with production and replaced manual SFTP updates with a GitHub-based deployment workflow.',
    challenge:'The original scope was environment setup. Once DEV was running, the legacy application exposed unrelated HTTP 500 failures, damaged core/media behavior and infrastructure issues that made the environment unusable for testing.',
    work:[
      'Deployed Magento 1.9 on the DEV server with PHP 7.1, nginx, MariaDB and the EDELWEISS_test database.',
      'Configured the DEV domain, no-index protection and GitHub-based release/deployment process.',
      'Stabilized PHP-FPM/nginx and fixed critical OPcache double-loading configuration.',
      'Diagnosed legacy failures across categories, product pages, configurator and admin.',
      'Detected and neutralized malicious code in legacy modules.',
      'Recovered Varnish/nginx/PHP/HTTPS behavior, circular redirects, base_url configuration and URL rewrites.',
      'Restored admin usability and implemented a safe workaround around the damaged Magento image/media layer so category/product pages stopped returning HTTP 500.'
    ],
    result:'A reproducible DEV environment with working GitHub deployment and a sufficiently stabilized legacy application for continued testing and remediation. Environment setup and application-level recovery were clearly separated as different scopes.',
    stack:['Magento 1.9','PHP 7.1','nginx','MariaDB','Varnish','GitHub','SSH','Linux','Legacy Debugging']
  },
  google: {
    tags:['Google APIs','OAuth 2.0','API Approval'],
    title:'Google Business Profile API — Approval & OAuth',
    role:'Google API / OAuth Integration Specialist',
    summary:'Helped a SaaS platform prepare a renewed Google Business Profile API application after a previous rejection.',
    challenge:'The platform did not manage a large portfolio of active Google Business Profile accounts, so the task required both technical implementation and careful interpretation of Google’s SaaS/agency access and verification requirements.',
    work:[
      'Audited the SaaS platform and the previous GBP API access attempt.',
      'Reviewed Google Business Profile API constraints and SaaS/agency scenarios.',
      'Prepared a re-application approach appropriate to the client’s actual account footprint.',
      'Configured and validated Google Cloud components, OAuth credentials and application authorization flow.',
      'Prepared review materials and a polished product demonstration scenario.',
      'Produced detailed technical documentation and supported the client through the extended Google review process.'
    ],
    result:'The client received a review-ready integration, corrected OAuth flow, demo and documentation required to continue the Google API approval process. Client feedback specifically highlighted Google API/OAuth knowledge, proactive communication, documentation quality and the polished demo.',
    stack:['Google Business Profile API','Google Cloud Console','OAuth 2.0','Google APIs','SaaS Integration','Authentication','API Compliance']
  },
  freshhouse: {
    tags:['Document AI','OCR','Vision / LLM'],
    title:'Fresh House — AI Document Ingestion & OCR',
    role:'AI / Document Processing Engineer',
    summary:'Built a multi-modal ingestion workflow for property-management documents received from plumbing and sewer-inspection contractors in inconsistent formats.',
    challenge:'The corpus mixed clean text PDFs, image-heavy scans and phone photos of handwritten paper forms. A single OCR-only strategy would waste cost on digital PDFs and still struggle with the hardest handwritten inputs.',
    work:[
      'Separated direct text extraction from true OCR cases so digital PDFs could be parsed without unnecessary vision processing.',
      'Handled sewer-inspection reports from multiple vendors with different document structures and data density.',
      'Defined structured extraction for inspector/company details, property address, customer, inspection date, service type, pipe material, problem type, recommendations, estimates and video links.',
      'Handled plumbing invoices with line-item and total extraction.',
      'Designed the difficult path for phone photos of handwritten Drain Clean USA forms: image-based OCR/vision plus LLM-assisted normalization/classification.',
      'Used fallback-oriented processing rather than treating every document as the same input type.'
    ],
    result:'A document-processing approach capable of routing clean digital documents through lightweight extraction while reserving OCR/vision for scans and handwritten photos, with normalized structured fields for downstream use.',
    stack:['Python','PDF text extraction','OCR','Vision AI','LLM Classification','Structured Extraction','Multi-modal Processing']
  },
  ktrack: {
    tags:['Legacy Recovery','Xamarin.Forms','iOS / Azure'],
    title:'KTrack Mobile — iOS Recovery & Production Audit',
    role:'Legacy Mobile Recovery / Technical Assessment',
    summary:'Recovered and validated the iOS build path of a legacy Xamarin.Forms application, deployed the matching API backend to an Azure test slot and performed Work Order functional/offline analysis.',
    challenge:'The project combined repository uncertainty, old Xamarin tooling, Windows/Mac build dependencies, backend environment differences and production crashes that were not reproducible in the dev dataset.',
    work:[
      'Validated the OfflineSync branch and successfully compiled/launched the iOS simulator build.',
      'Deployed the branch API backend to Azure App Service slot2 and validated live data loading.',
      'Ran Work Order scenarios including listing, detail views, attachments, creation flow, persistence and submission paths.',
      'Isolated a Work Order submit InvalidCastException to navigation parameter type mismatch.',
      'Traced production crashes to null Assets/Locations/Status collections combined with unhandled async-void exceptions.',
      'Validated that Work Order offline mode was not actually implemented through the local sync store and documented the required refactor direction.',
      'Produced a severity-ranked recovery report and concrete next-step recommendations.'
    ],
    result:'iOS simulator build and Azure API path were validated; core Work Order browsing worked against slot2; three production-critical failure classes and the non-functional offline path were isolated with actionable remediation guidance.',
    stack:['Xamarin.Forms','C#','iOS','Xcode','MSBuild','Azure App Service','Visual Studio','Offline Sync','Root-cause Analysis']
  }
};

const drawer = document.getElementById('projectDrawer');
const content = document.getElementById('drawerContent');
const backdrop = document.getElementById('drawerBackdrop');
const close = document.getElementById('drawerClose');

function renderProject(key){
  const p=projects[key];
  content.innerHTML=`
    <div class="drawer-hero">
      <div class="drawer-tags">${p.tags.map(x=>`<span>${x}</span>`).join('')}</div>
      <h2>${p.title}</h2>
      <div class="drawer-role">${p.role}</div>
    </div>
    <div class="drawer-section"><h4>Overview</h4><p>${p.summary}</p></div>
    <div class="drawer-section"><h4>Engineering challenge</h4><p>${p.challenge}</p></div>
    <div class="drawer-section"><h4>What I worked on</h4><ul>${p.work.map(x=>`<li>${x}</li>`).join('')}</ul></div>
    <div class="drawer-section"><h4>Result</h4><div class="result-box">${p.result}</div></div>
    <div class="drawer-section"><h4>Stack</h4><div class="stack-list">${p.stack.map(x=>`<span>${x}</span>`).join('')}</div><div class="note">Descriptions are written to stay technically accurate and avoid disclosing confidential implementation details.</div></div>`;
  backdrop.hidden=false;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeDrawer(){drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');backdrop.hidden=true;document.body.style.overflow=''}

document.querySelectorAll('.project-card').forEach(card=>card.addEventListener('click',e=>{
  if(e.target.closest('button')||e.currentTarget===e.target||e.target){renderProject(card.dataset.project)}
}));
close.addEventListener('click',closeDrawer);backdrop.addEventListener('click',closeDrawer);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer()});

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
  const f=btn.dataset.filter;
  document.querySelectorAll('.project-card').forEach(card=>card.classList.toggle('is-hidden',f!=='all'&&!card.dataset.tags.includes(f)));
}));

// ----- Motion / interaction layer -----
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.site-header');
  const progress = document.getElementById('scrollProgress');
  const glow = document.getElementById('cursorGlow');

  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    if (progress) progress.style.transform = `scaleX(${ratio})`;
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 14);
  };
  updateScroll();
  window.addEventListener('scroll', updateScroll, { passive: true });

  if (!reduceMotion && glow && window.matchMedia('(pointer:fine)').matches) {
    let gx = innerWidth * .5, gy = innerHeight * .35, tx = gx, ty = gy;
    window.addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; }, { passive:true });
    const follow = () => {
      gx += (tx - gx) * .09; gy += (ty - gy) * .09;
      glow.style.transform = `translate3d(${gx - 210}px,${gy - 210}px,0)`;
      requestAnimationFrame(follow);
    };
    requestAnimationFrame(follow);
  }

  // Scroll reveal, staged automatically so markup stays clean.
  const revealTargets = [
    ...document.querySelectorAll('.work-intro, .filters, .project-card, .cap, .about > *, .contact > *, .footer')
  ];
  revealTargets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min((i % 4) * 70, 210)}ms`;
  });
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    revealTargets.forEach(el => io.observe(el));
  } else revealTargets.forEach(el => el.classList.add('in-view'));

  // Gentle 3D tilt on cards, desktop only.
  if (!reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.setProperty('--ry', `${x * 3.2}deg`);
        card.style.setProperty('--rx', `${y * -2.6}deg`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--ry','0deg'); card.style.setProperty('--rx','0deg');
      });
    });

    const panel = document.querySelector('.hero-panel');
    if (panel) {
      panel.addEventListener('pointermove', e => {
        const r = panel.getBoundingClientRect();
        const x = (e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
        panel.style.transform = `perspective(1000px) rotateX(${y*-2.2}deg) rotateY(${x*3}deg)`;
      });
      panel.addEventListener('pointerleave', () => panel.style.transform = '');
    }
  }

  // Lightweight animated ambient field; no dependency / no WebGL.
  const canvas = document.getElementById('ambientCanvas');
  if (!reduceMotion && canvas) {
    const ctx = canvas.getContext('2d');
    let dpr = Math.min(devicePixelRatio || 1, 2), w=0, h=0, particles=[];
    const resize = () => {
      w = innerWidth; h = innerHeight;
      canvas.width = Math.floor(w*dpr); canvas.height = Math.floor(h*dpr);
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const n = Math.max(18, Math.min(44, Math.floor(w/35)));
      particles = Array.from({length:n}, (_,i)=>({
        x: Math.random()*w, y: Math.random()*h,
        r: .6+Math.random()*1.7, vx:(Math.random()-.5)*.08, vy:(Math.random()-.5)*.08,
        a:.08+Math.random()*.18, phase:Math.random()*Math.PI*2
      }));
    };
    resize(); window.addEventListener('resize', resize, {passive:true});
    let t=0;
    const draw = () => {
      t += .008; ctx.clearRect(0,0,w,h);
      const g=ctx.createRadialGradient(w*.73,h*.1,0,w*.73,h*.1,Math.max(w,h)*.55);
      g.addColorStop(0,'rgba(105,82,255,.09)'); g.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
      for(const p of particles){
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<-10)p.x=w+10;if(p.x>w+10)p.x=-10;if(p.y<-10)p.y=h+10;if(p.y>h+10)p.y=-10;
        const alpha=p.a*(.65+.35*Math.sin(t*2+p.phase));
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(150,139,255,${alpha})`;ctx.fill();
      }
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  }
})();

// Make drawer backdrop fade instead of appearing abruptly.
const _renderProject = renderProject;
renderProject = function(key){
  _renderProject(key);
  requestAnimationFrame(() => backdrop.classList.add('visible'));
};
const _closeDrawer = closeDrawer;
closeDrawer = function(){
  backdrop.classList.remove('visible');
  drawer.classList.remove('open'); drawer.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  setTimeout(()=>{ backdrop.hidden=true; }, 300);
};
