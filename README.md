# Web Openai

This is a basic React project template using Next.js with TypeScript and Tailwind CSS.

## Features

- 🚀 Based on Next.js 15+ App Router
- 🎨 Integrated Tailwind CSS 4.x
- 📱 Responsive Design
- 🎯 TypeScript Support
- 🔧 Modern Development Toolchain
- ⚡ Turbopack for faster development

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm

## Getting Started

1. Install dependencies:

```bash
pnpm install
# or
npm install
```

### Development

Run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## Project Structure

```
web-openai/
├── app/                 # Next.js App Router pages
│   ├── favicon.ico
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page
├── public/              # Static assets
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.mjs   # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Package Manager**: pnpm (recommended)
- **Linting**: ESLint with standard config
- **Code Formatting**: Prettier
- **Development**: Turbopack for faster builds

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [React Documentation](https://react.dev/) - learn about React
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
