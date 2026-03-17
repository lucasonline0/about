'use client';

import { useMemo, useState } from 'react';

type Repo = {
  name: string;
  url: string;
  stack: string;
  summary: string;
  output: string[];
};

const repos: Repo[] = [
  {
    name: 'TaskFlow',
    url: 'https://github.com/amazonext/TaskFlow',
    stack: 'Java • JavaFX • SQL',
    summary: 'Desktop para gestão operacional e tarefas.',
    output: [
      'Organiza fluxo diário de execução para times.',
      'Integra cadastro, visualização e atualização de dados.',
      'Pensado para rotina com controle de estoque e tarefas.'
    ]
  },
  {
    name: 'LogFlux',
    url: 'https://github.com/amazonext/LogFlux',
    stack: 'Python • Flask • Web',
    summary: 'Syslog para insight útil, sem leitura sofrida.',
    output: [
      'Transforma logs técnicos em visão acionável.',
      'Ajuda diagnóstico rápido em troubleshooting.',
      'Foco em clareza para decisões de engenharia.'
    ]
  },
  {
    name: 'BR Connect',
    url: 'https://github.com/amazonext/br-connect',
    stack: 'React Native • Supabase',
    summary: 'Rede para conexões relevantes em eventos tech.',
    output: [
      'Matching por interesses e objetivos profissionais.',
      'Chat em tempo real durante o evento.',
      'Conexões que continuam depois do evento.'
    ]
  }
];

export function InteractiveTerminal() {
  const [active, setActive] = useState<Repo>(repos[2]);

  const lines = useMemo(
    () => [
      '$ amazonext repos --resumo-rapido',
      `> ${active.name} | ${active.stack}`,
      `> ${active.summary}`,
      ...active.output.map((line) => `> ${line}`),
      `$ open ${active.url}`
    ],
    [active]
  );

  return (
    <section className="terminal-wrap">
      <div className="terminal-head">
        {repos.map((repo) => (
          <button key={repo.name} onClick={() => setActive(repo)} className={active.name === repo.name ? 'is-active' : ''}>
            {repo.name}
          </button>
        ))}
      </div>
      <div className="terminal-body">
        {lines.map((line, index) => (
          <p key={`${line}-${index}`}>{line}</p>
        ))}
      </div>
    </section>
  );
}
