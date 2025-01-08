# Flavor Forge

**Flavor Forge** is a modern, AI-powered recipe management web application designed for food enthusiasts. It helps users store, organize, and discover recipes, offering personalized suggestions based on available ingredients and taste preferences. Built with a sleek, responsive UI and tech-savvy features, Flavor Forge is perfect for those who love experimenting in the kitchen and sharing their culinary creations.

## Features

### MVP Features

- **Personal Recipe Management**: Create, edit, delete, and categorize personal recipes.
- **Search & Filters**: Full-text search and advanced filtering (e.g., cuisine, prep time, dietary restrictions).
- **AI Integration**: Get recipe suggestions based on pantry/fridge contents and personal tastes.
- **Authentication**: Secure user login with admin capabilities for user management.
- **Mobile-First Design**: Fully responsive layout with light/dark mode.

### Post-MVP Features

- **API Integrations**: Pull recipes from external sources.
- **Social Sharing**: Share recipes via social media and email.
- **Analytics Dashboard**: Track recipe popularity and user behavior.
- **Data Export**: Export recipes as PDFs.
- **Meal Planning & Grocery Lists**: Plan meals and generate shopping lists.

## Tech Stack

### Core Technologies

- **Framework**: [Next.js](https://nextjs.org/) with TypeScript
- **UI Components**: ShadCN for core UI, MagicUI or AceternityUI for 3D effects
- **Database**: Xata or Neon PostgreSQL, with MongoDB for specific use cases
- **ORM**: Drizzle ORM (Prisma if needed)
- **Form Handling**: Conform
- **Validations**: Zod

### Supporting Tools

- **Environment Variables Safety**: T3Env
- **Authentication**: Clerk, Kinde, or Auth.js
- **Server Actions**: next-safe-action
- **Error Tracking**: Sentry
- **Linting/Formatting**: Biome (with ESLint & Prettier if needed)
- **Commit Linting**: Commitlint with custom Git Hooks
- **Data Display**: Tanstack Table integrated with ShadCN tables

### Deployment Options

- Vercel
- AWS
- DigitalOcean
- Heroku
- Hostinger
- Google Cloud Platform

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/flavor-forge.git
   ```

2. Navigate to the project directory:

   ```bash
   cd flavor-forge
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables in a `.env` file using [T3Env](https://t3-env.vercel.app/).
5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add your feature description"
   ```

4. Push to the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Flavor Forge** - Crafting culinary experiences with technology!
