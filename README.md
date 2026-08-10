# Guia de Treinos Fitness — Landing Page

Página de vendas para um ebook de guia de treinos e nutrição, com botões de compra que direcionam ao checkout hospedado na Kiwify.

## Tecnologias

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router)
- Vite 7
- Tailwind CSS 4
- lucide-react (ícones)
- Deploy na Netlify

## Configurando o link de checkout

Antes de publicar, edite `src/data/checkout.ts` e substitua `KIWIFY_CHECKOUT_URL` pelo link real do produto na Kiwify. Todos os botões "Comprar" da página usam essa constante.

## Rodando localmente

```bash
npm install
npm run dev
```

A aplicação fica disponível em `http://localhost:3000`.

## Build de produção

```bash
npm run build
```
