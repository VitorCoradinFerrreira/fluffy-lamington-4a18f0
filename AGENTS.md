# AGENTS.md

## Visão geral do projeto

Landing page de vendas de um ebook fitness ("Guia de Treinos"). É uma página única de conversão que direciona o visitante para o checkout externo na Kiwify — não há carrinho, autenticação ou banco de dados neste projeto.

### Stack

| Camada | Tecnologia |
|---|---|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Estilo | Tailwind CSS 4 |
| Ícones | lucide-react |
| Deploy | Netlify |

## Estrutura de diretórios

```
src/
├── data/
│   └── checkout.ts       # URL de checkout da Kiwify (KIWIFY_CHECKOUT_URL)
├── routes/
│   ├── __root.tsx        # Layout raiz e metadados de SEO
│   └── index.tsx         # Página única de vendas (hero, benefícios, oferta, FAQ, CTA)
├── router.tsx            # Setup do TanStack Router
└── styles.css            # Tailwind + estilos globais
```

## Decisões não óbvias

- Todo o conteúdo comercial vive em `src/routes/index.tsx` como uma única página de rolagem — é o padrão para páginas de vendas de infoproduto (long-form landing page).
- O link real de checkout deve ser configurado em `src/data/checkout.ts` (`KIWIFY_CHECKOUT_URL`). Todos os botões de CTA importam essa constante, então basta trocar em um único lugar.
- Não há backend, formulário ou banco de dados: o pagamento e a entrega do ebook são responsabilidade da Kiwify.
- A imagem de capa usa `public/placeholder.png`; substitua pela arte real da capa do ebook.

## Convenções

- Componentes em PascalCase, rotas em kebab-case, imports usando o alias `@/*`.
- TypeScript em modo estrito.

## Comandos

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
```
