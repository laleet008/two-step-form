# 2-Step User Setup Form

A clean, simple React implementation of a multi-step form using Shadcn UI and Tailwind CSS.

## Setup Instructions

1.  **Clone the repository** (if applicable)
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
4.  **Build for production**:
    ```bash
    npm run build
    ```

## Trade-offs and Decisions

-   **State Management**: Used local component state (`useState`) in the parent container (`UserSetupForm`) instead of Context or Redux. This keeps the data flow simple and explicit for a small form, avoiding boilerplate.
-   **Validation**: Implemented manual validation logic instead of using a library like Zod or React Hook Form. This reduces bundle size and dependencies but might become cumbersome for very complex forms.
-   **Components**: Shadcn/ui components were manually integrated (or simulated) to provide a polished look without the overhead of a full component library installation process if CLI is not used.
-   **Persistence**: Data persists between steps because the parent component holds the state. It does not persist on page refresh (localStorage would be needed for that), keeping the implementation simple as requested.

## Netlify Deployment

This project is configured for Netlify deployment.
-   `public/_redirects` ensures proper SPA routing behavior (rewriting all requests to index.html).
