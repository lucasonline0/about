import { InteractiveTerminal } from './components/interactive-terminal';

const features = [
  'Networking inteligente para eventos e comunidades tech',
  'Projetos open source com colaboração prática',
  'Stack moderna com foco em experiência real de produto'
];

const projects = [
  {
    name: 'TaskFlow',
    desc: 'Gestão de tarefas e estoque para times que precisam de operação clara e previsível.',
    href: 'https://github.com/amazonext/TaskFlow',
    tags: ['Java', 'JavaFX', 'SQL']
  },
  {
    name: 'LogFlux',
    desc: 'Leitura de syslog em linguagem humana: menos ruído, mais decisão técnica.',
    href: 'https://github.com/amazonext/LogFlux',
    tags: ['Python', 'Flask', 'Web']
  },
  {
    name: 'BR Connect',
    desc: 'Conexões reais entre devs, designers e builders em eventos da comunidade.',
    href: 'https://github.com/amazonext/br-connect',
    tags: ['React Native', 'Supabase', 'Mobile']
  }
];

export default function Home() {
  return (
    <main className="paper">
      <div className="noise" aria-hidden="true" />

      <header className="shell topbar">
        <div className="brand-wrap">
          <div className="leaf-mark" aria-hidden="true">🌱</div>
          <p className="brand-text">Amazo<span>Next</span></p>
        </div>
        <nav className="menu-links">
          <a href="#manifesto">Manifesto</a>
          <a href="#projetos">Projetos</a>
          <a href="#brc">BRC</a>
          <a href="https://github.com/amazonext" target="_blank">GitHub</a>
        </nav>
      </header>

      <section className="shell hero" id="manifesto">
        <div>
          <p className="micro">REALITY, BY CODE.</p>
          <h1>
            Construindo <br />
            produtos que conectam <br />
            <span>pessoas + tecnologia.</span>
          </h1>
          <p className="lead">
            A AmazoNext nasceu como The Heapsters e evoluiu para um coletivo open source que transforma estudo em entrega real.
            A estética é autêntica, mas o foco continua prático: comunidade, produto e impacto.
          </p>

          <div className="signal-box">
            <p>[ CORE THREADS OF OUR WORK ]</p>
            <ul>
              {features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-side">
          <div className="floating-rock">
            <p className="badge">AMAZONEXT / HUB</p>
            <p className="rock-title">Comunidade em movimento</p>
            <p className="rock-txt">Do estudo ao deploy, da ideia ao produto.</p>
          </div>
          <InteractiveTerminal />
        </div>
      </section>

      <section className="shell quote-block">
        <h2>
          Não é sobre “só codar”. <br />
          É sobre <span>desenhar experiências</span> que fazem sentido para quem usa.
        </h2>
        <p>
          Por isso nossos projetos nascem de problema real: organizar operações internas (TaskFlow), simplificar análise técnica
          (LogFlux) e criar networking útil em eventos (BR Connect).
        </p>
      </section>

      <section className="shell projects" id="projetos">
        <h3>Some Project Examples</h3>
        <p className="mini">(repos reais da organização)</p>

        <div className="project-grid">
          {projects.map((project, index) => (
            <a key={project.name} href={project.href} target="_blank" className="project-card">
              <small>{String(index + 1).padStart(2, '0')}.</small>
              <h4>{project.name}</h4>
              <p>{project.desc}</p>
              <div>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="shell brc-special" id="brc">
        <div>
          <p className="micro">SESSÃO ESPECIAL / BR CONNECT</p>
          <h3>Networking real, sem fronteiras.</h3>
          <p>
            O BR Connect é nosso projeto dedicado para eventos e ecossistema tech: descoberta de pessoas por interesse,
            chat em tempo real e conexões com contexto de carreira.
          </p>
          <a href="https://github.com/amazonext/br-connect" target="_blank">Abrir repositório do BR Connect</a>
        </div>

        <figure className="brc-print">
          <figcaption>print dedicado do BRC (estilo conceitual do produto)</figcaption>
          <div className="mobile-shot">
            <p>BR Connect</p>
            <span>Conectando o ecossistema tech 🌱</span>
            <div className="bars">
              <i />
              <i />
              <i />
            </div>
            <div className="chips">
              <b>Match 98%</b>
              <b>Chat real-time</b>
              <b>Eventos</b>
            </div>
          </div>
        </figure>
      </section>

      <footer className="shell footer">
        <p>© 2026 AmazoNext — Open Source Community.</p>
        <p>Contato: amazonext0@gmail.com</p>
      </footer>
    </main>
  );
}
