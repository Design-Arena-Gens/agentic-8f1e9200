import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary-600 text-white">P</span>
          <span className="font-semibold">Phycomania</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#produits" className="text-sm text-neutral-700 hover:text-primary-700">Produits</a>
          <a href="#science" className="text-sm text-neutral-700 hover:text-primary-700">Science</a>
          <a href="#impact" className="text-sm text-neutral-700 hover:text-primary-700">Impact</a>
          <a href="#contact" className="text-sm text-neutral-700 hover:text-primary-700">Contact</a>
          <a href="#contact" className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700">Nous ?crire</a>
        </nav>
      </div>
    </header>
  );
}
