const sections = [
  {
    id: "trabajo",
    title: "Trabajo",
    text: "Los proyectos se añadirán aquí.",
  },
  {
    id: "informacion",
    title: "Información",
    text: "Aquí irá una presentación.",
  },
  {
    id: "contacto",
    title: "Contacto",
    text: "Aquí irán los datos de contacto.",
  },
] as const;

function App() {
  return (
    <div className="page">
      <header>
        <p className="kicker">Portfolio</p>
        <h1>Paula Guerrin</h1>
        <nav aria-label="Secciones">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.title}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {sections.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
            <h2 id={`${section.id}-title`}>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </main>

      <footer>
        <p>paulaguerrin.com</p>
      </footer>
    </div>
  );
}

export default App;
