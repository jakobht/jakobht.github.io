import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout title="Home" description="Jakob Taankvist Portfolio">
      {/* Hero Section */}
      <header style={{ backgroundColor: '#0f172a', padding: '4rem 0', color: '#f8fafc' }}>
        <div className="container text--center">
          <h1 style={{ fontSize: '3rem', margin: '0' }}>Jakob Haahr Taankvist</h1>
          <p style={{ fontSize: '1rem', color: '#94a3b8', marginTop: '0.5rem' }}>
            PhD, Senior Software Engineer
          </p>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginTop: '0.0rem' }}>
            Distributed Systems, Verification & Systems Engineering
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="https://github.com/jakobht" style={{ color: '#38bdf8', margin: '0 1rem', textDecoration: 'none' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/jakob-taankvist" style={{ color: '#38bdf8', margin: '0 1rem', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ backgroundColor: '#f8fafc', padding: '4rem 0' }}>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">

              {/* About Section */}
              <div style={{ backgroundColor: 'white', padding: '2rem', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}>About Me</h2>
                <p style={{ lineHeight: '1.6', color: '#334155' }}>
                  Senior Software Engineer at Uber, working on the <strong><a href="https://github.com/cadence-workflow/cadence">Cadence</a></strong> workflow engine.
                  My work focuses on distributed systems at scale. PhD in Computer Science with a
                  background in formal verification and strategy synthesis for cyber-physical systems.
                </p>
              </div>

              {/* Two Column Layout */}
              <div className="row">
                <div className="col col--6">
                  <div style={{ backgroundColor: 'white', padding: '2rem', height: '100%' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#0f172a' }}>Experience</h3>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#475569' }}>
                      <li style={{ marginBottom: '1rem' }}><strong><a href="https://cadenceworkflow.io/blog/authors/jakobht">Uber</a></strong><br/>Senior Software Engineer (2023–Present)</li>
                      <li style={{ marginBottom: '1rem' }}><strong><a href="https://www.intelli-go.dk">IntelliGo</a></strong><br/>Co-founder, CEO/CTO (2018–2023)</li>
                      <li><strong><a href="https://vbn.aau.dk/da/searchAll/?search=jakob%20taankvist&searchBy=PartOfNameOrTitle">Aalborg University</a></strong>
                      <br/>PhD Researcher (2014–2020)
                      <br/><b>Thesis:</b> <a href="https://vbn.aau.dk/en/publications/safe-optimal-and-compact-strategies-for-cyber-physical-systems/">Safe, Optimal and Compact Strategies for Cyber Physical Systems</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col col--6">
                  <div style={{ backgroundColor: 'white', padding: '2rem', height: '100%' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#0f172a' }}>Open Source</h3>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#475569' }}>
                      <li style={{ marginBottom: '1rem' }}><strong><a href="https://github.com/cadence-workflow/cadence">Cadence Workflow</a></strong><br/>Core contributor (Go)</li>
                      <li style={{ marginBottom: '1rem' }}><strong><a href="https://github.com/cadence-workflow/shard-manager">Cadence Shard Manager</a></strong><br/>Lead on the Cadence Shard manager (Go)</li>
                      <li style={{ marginBottom: '1rem' }}><strong><a href="https://github.com/jakobht/jhtensor">JHTensor</a> & <a href="https://github.com/jakobht/sudoku">Sudoku</a></strong><br/>Performance and Optimization (Rust)</li>
                      <li><strong><a href="https://github.com/jakobht/azurex">AzureX</a></strong><br/>Azure Blob Storage REST API (Elixir)</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
