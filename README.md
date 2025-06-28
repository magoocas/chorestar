# Chorestar

Chorestar is a simple app to track household chores and allowance. The project uses **Next.js** with **shadcn/ui** for the UI components and **PostgreSQL** via Prisma. It is optimized for mobile and tablet layouts and ready to deploy on [Vercel](https://vercel.com).

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to see the app.

### Database

A sample `.env.example` file is included. Copy it to `.env` and provide a valid `DATABASE_URL` pointing to a PostgreSQL instance.

Prisma is used as the ORM. Run the following after updating the schema:

```bash
npx prisma generate
npx prisma migrate dev
```

### shadcn/ui

UI components are provided by [shadcn/ui](https://ui.shadcn.com/). If components are missing run the CLI locally to install them:

```bash
npx shadcn@latest init
```

The CLI download is blocked in this environment so components were not generated here.

## Deployment

Deploy the app to Vercel by connecting this repository and setting the `DATABASE_URL` environment variable in the Vercel dashboard. The default build command (`npm run build`) and output directory (`.next`) work out of the box.

## License

This project is licensed under the MIT License.

## Admin Dashboard

Visit `/admin/users` to view and manage Supabase users. Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in your environment to enable user management.
