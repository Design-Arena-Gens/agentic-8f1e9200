import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-28">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary-50 via-white to-white" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                Inspir? par les microalgues
              </span>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-neutral-900 md:text-6xl">
                Solutions naturelles ? base d'algues pour le bien-?tre et la plan?te
              </h1>
              <p className="mt-6 max-w-xl text-lg text-neutral-700">
                Chez Phycomania, nous transformons le pouvoir des microalgues en produits innovants et durables ?
                pour votre sant?, votre nutrition et un avenir plus responsable.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#produits" className="rounded-md bg-primary-600 px-5 py-3 text-white hover:bg-primary-700">D?couvrir nos produits</a>
                <a href="#contact" className="rounded-md border border-neutral-200 px-5 py-3 text-neutral-800 hover:bg-neutral-50">Nous contacter</a>
              </div>
            </div>
          </div>
        </section>

        {/* Produits */}
        <Section id="produits" title="Des produits sains, efficaces et responsables" subtitle="Con?us avec des microalgues rigoureusement s?lectionn?es et contr?l?es.">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Compl?ments nutritionnels",
                desc: "Spiruline, phycocyanine et autres extraits pour l'?nergie et l'immunit?.",
              },
              {
                title: "Bien-?tre & performance",
                desc: "Formules cibl?es pour la r?cup?ration, l'antioxydation et la vitalit?.",
              },
              {
                title: "Nutrition durable",
                desc: "Ingr?dients fonctionnels ? faible empreinte carbone pour l'alimentation.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="h-12 w-12 rounded-md bg-primary-100" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
                <a href="#contact" className="mt-4 inline-block text-sm font-medium text-primary-700 hover:text-primary-800">En savoir plus ?</a>
              </div>
            ))}
          </div>
        </Section>

        {/* Science */}
        <Section id="science" title="Une science exigeante, une tra?abilit? totale" subtitle="De la culture des microalgues ? l'extraction des principes actifs, chaque ?tape est ma?tris?e.">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Recherche & D?veloppement</h3>
              <p className="mt-2 text-neutral-600">
                Nous collaborons avec des laboratoires et des partenaires industriels pour valider scientifiquement
                l'efficacit? et la s?curit? de nos extraits et formulations.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                <li>Analyses microbiologiques et physico-chimiques</li>
                <li>Standardisation des lots et stabilit?</li>
                <li>Conformit? r?glementaire UE</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Production responsable</h3>
              <p className="mt-2 text-neutral-600">
                Processus sobres en ressources, valorisation des co-produits et circuits courts lorsque c'est possible.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                <li>Faible empreinte eau et carbone</li>
                <li>Approvisionnement s?curis? et tra?able</li>
                <li>Qualit? constante</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Impact */}
        <Section id="impact" title="Impact positif et mesurable" subtitle="L'innovation peut ?tre ? la fois performante et vertueuse.">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { kpi: "-60%", label: "?missions vs alternatives animales" },
              { kpi: ">90%", label: "Taux de valorisation de la biomasse" },
              { kpi: "100%", label: "Origine contr?l?e et tra?able" },
            ].map((x) => (
              <div key={x.label} className="rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
                <div className="text-4xl font-extrabold text-primary-700">{x.kpi}</div>
                <div className="mt-2 text-sm text-neutral-600">{x.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Parlons de votre projet" subtitle="Discutons de vos besoins produits, ingr?dients ou partenariats.">
          <div className="grid gap-8 md:grid-cols-2">
            <form className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div>
                <label className="text-sm">Nom</label>
                <input required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:border-primary-500 focus:outline-none" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:border-primary-500 focus:outline-none" />
              </div>
              <div>
                <label className="text-sm">Message</label>
                <textarea required rows={5} className="mt-1 w-full resize-none rounded-md border border-neutral-300 px-3 py-2 focus:border-primary-500 focus:outline-none" />
              </div>
              <button type="submit" className="w-full rounded-md bg-primary-600 px-4 py-2 font-semibold text-white hover:bg-primary-700">Envoyer</button>
              <p className="text-xs text-neutral-500">Ce formulaire est une d?monstration visuelle (aucun envoi).</p>
            </form>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Pourquoi les microalgues ?</h3>
              <p className="mt-2 text-neutral-600">
                Riches en prot?ines, acides amin?s, pigments et antioxydants, les microalgues ouvrent la voie ? des
                produits efficaces, naturels et durables.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-primary-50 p-4">Densit? nutritionnelle</div>
                <div className="rounded-lg bg-primary-50 p-4">Faible empreinte</div>
                <div className="rounded-lg bg-primary-50 p-4">Tra?abilit?</div>
                <div className="rounded-lg bg-primary-50 p-4">Innovation</div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
