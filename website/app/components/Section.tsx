import { ReactNode } from "react";

export function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 text-neutral-600">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
