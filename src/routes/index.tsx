import { createFileRoute } from '@tanstack/react-router'
import {
  CheckCircle2,
  Dumbbell,
  Flame,
  ShieldCheck,
  Star,
  Timer,
  Utensils,
} from 'lucide-react'
import { KIWIFY_CHECKOUT_URL } from '@/data/checkout'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function CtaButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={KIWIFY_CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 hover:shadow-orange-500/50 ${className}`}
    >
      Quero garantir meu ebook agora
    </a>
  )
}

function LandingPage() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2 font-black text-lg tracking-tight">
            <Dumbbell className="h-6 w-6 text-orange-500" />
            <span>
              FORJA<span className="text-orange-500">FIT</span>
            </span>
          </div>
          <a
            href={KIWIFY_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Comprar agora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(249,115,22,0.12),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm font-semibold text-orange-400">
              <Flame className="h-4 w-4" /> Mais de 8.400 alunos transformados
            </span>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              O guia definitivo de treinos para você construir o corpo que
              sempre quis
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-zinc-400">
              Um ebook direto ao ponto: treinos, periodização e nutrição
              explicados em linguagem simples, para você sair do zero (ou do
              platô) e ver resultado real em até 90 dias — treinando em casa
              ou na academia.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CtaButton />
              <div className="flex items-center gap-1 text-sm text-zinc-400">
                <div className="flex text-orange-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                4.9/5 em mais de 1.200 avaliações
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-orange-500/20 blur-2xl" />
              <img
                src="/placeholder.png"
                alt="Capa do ebook Guia de Treinos Fitness"
                className="aspect-[3/4] w-full rounded-2xl border border-zinc-800 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem / pains */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
          Isso já aconteceu com você?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            'Começa a treinar animado, mas em duas semanas perde o foco e não vê resultado.',
            'Já testou treinos prontos da internet que não fazem sentido para o seu objetivo.',
            'Não sabe se está treinando errado, comendo errado, ou as duas coisas.',
          ].map((text, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <p className="text-zinc-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's inside */}
      <section className="border-y border-zinc-800 bg-zinc-900/30 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            O que você encontra dentro do ebook
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-zinc-400">
            Um passo a passo completo, sem enrolação, para você aplicar hoje
            mesmo — não importa seu nível atual.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Dumbbell,
                title: 'Treinos por objetivo',
                desc: 'Fichas de treino para hipertrofia, definição e condicionamento, em casa ou na academia.',
              },
              {
                icon: Timer,
                title: 'Periodização de 12 semanas',
                desc: 'Progressão semana a semana para você nunca estagnar no mesmo treino.',
              },
              {
                icon: Utensils,
                title: 'Guia de nutrição',
                desc: 'Como montar suas refeições e ajustar calorias sem depender de dieta restritiva.',
              },
              {
                icon: ShieldCheck,
                title: 'Execução correta',
                desc: 'Explicação de cada exercício para treinar com segurança e evitar lesões.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
                >
                  <Icon className="mb-4 h-8 w-8 text-orange-500" />
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
          Quem seguiu o guia, viu o resultado
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: 'Rafael M.',
              text: 'Em 3 meses ganhei mais massa muscular do que em 2 anos treinando sem direção. O ebook é direto ao ponto.',
            },
            {
              name: 'Camila S.',
              text: 'Finalmente entendi como montar minha dieta sem passar fome. Perdi 6kg e me sinto muito mais disposta.',
            },
            {
              name: 'Diego A.',
              text: 'Treino em casa e achei que não teria resultado. Me enganei — o plano de 12 semanas funciona de verdade.',
            },
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="mb-3 flex text-orange-400">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mb-4 text-zinc-300">"{t.text}"</p>
              <p className="text-sm font-semibold text-zinc-500">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offer */}
      <section className="border-y border-zinc-800 bg-gradient-to-b from-orange-500/10 to-transparent py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Garanta seu ebook com condição especial
          </h2>
          <p className="mb-8 text-zinc-400">
            Acesso imediato após a compra, direto no seu e-mail. Leia no
            celular, tablet ou computador.
          </p>
          <div className="rounded-3xl border border-orange-500/30 bg-zinc-950 p-8 shadow-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-400">
              Oferta de lançamento
            </p>
            <div className="mb-2 flex items-end justify-center gap-3">
              <span className="text-xl text-zinc-500 line-through">
                R$ 97
              </span>
              <span className="text-5xl font-black">R$ 47</span>
            </div>
            <p className="mb-6 text-sm text-zinc-500">
              Pagamento único · sem mensalidade
            </p>
            <ul className="mb-8 space-y-3 text-left">
              {[
                'Ebook completo em PDF (acesso imediato)',
                'Fichas de treino para casa e academia',
                'Guia de nutrição e montagem de dieta',
                'Plano de progressão de 12 semanas',
                'Garantia incondicional de 7 dias',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
            <CtaButton className="w-full" />
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
              <ShieldCheck className="h-4 w-4" /> Compra 100% segura processada
              pela Kiwify
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
          Perguntas frequentes
        </h2>
        <div className="space-y-4">
          {[
            {
              q: 'Preciso ter equipamentos ou academia?',
              a: 'Não. O ebook traz treinos adaptados para casa (com peso do corpo ou halteres) e para academia, você escolhe o que combina com sua rotina.',
            },
            {
              q: 'Sou totalmente sedentário, funciona para mim?',
              a: 'Sim. O guia começa do básico e evolui em progressão, então serve tanto para quem está começando quanto para quem já treina.',
            },
            {
              q: 'Como recebo o ebook depois da compra?',
              a: 'O acesso é liberado automaticamente por e-mail assim que o pagamento é confirmado na Kiwify.',
            },
            {
              q: 'E se eu não gostar?',
              a: 'Você tem 7 dias de garantia. Se não for para você, basta solicitar o reembolso, sem burocracia.',
            },
          ].map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5"
            >
              <summary className="cursor-pointer list-none font-semibold">
                {item.q}
              </summary>
              <p className="mt-3 text-zinc-400">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Sua transformação começa com uma decisão
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-zinc-400">
          Chega de treinar sem direção. Comece hoje com um guia completo feito
          para gerar resultado real.
        </p>
        <CtaButton />
      </section>

      <footer className="border-t border-zinc-800 px-5 py-8 text-center text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()} FORJAFIT. Todos os direitos
          reservados.
        </p>
        <p className="mt-1">
          Este produto não garante resultados específicos, que variam de
          pessoa para pessoa.
        </p>
      </footer>
    </div>
  )
}
