export function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>? {new Date().getFullYear()} Phycomania. Tous droits r?serv?s.</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-primary-700">Mentions l?gales</a>
            <a href="#" className="hover:text-primary-700">Confidentialit?</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
