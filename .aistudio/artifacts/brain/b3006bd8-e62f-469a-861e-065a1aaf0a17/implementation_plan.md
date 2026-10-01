# Implementation Plan - HH Publisher (EmDash CMS Edition)

We will build a professional, minimalist journal publishing website using **EmDash CMS** on **Astro**, optimized for Cloudflare deployment. This setup provides a powerful admin panel for content editing while maintaining a high-performance, SEO-friendly frontend.

## 1. Technical Stack & CMS Integration
*   **Framework**: Astro (migrating from the initial React/Vite setup to support EmDash natively).
*   **CMS**: EmDash CMS (`@emdash-cms/core`) integrated into Astro.
*   **Deployment**: Optimized for Cloudflare Workers + D1 (Database) + R2 (Storage).
*   **Admin Panel**: Accessible at `/_emdash/admin` for real-time content editing of journals, policies, and team members.

## 2. Content Architecture (EmDash Collections)
We will define the following collections in EmDash to make the site fully editable:
*   **Journals**: Fields for title, indexing status (Scopus/MyJournal), cover image, and external link.
*   **Policies**: A collection to manage the 35+ editorial policy points, allowing for easy updates.
*   **Team**: Organizational chart data including names, roles, and departments.
*   **Global Settings**: For managing the Introduction text and Contact Information.

## 3. Multi-Language & SEO
*   **i18n**: Implementation of Astro's native internationalization for English (EN) and Malay (BM).
*   **Localization**: EmDash content fields will support multi-language strings or separate entries per locale.
*   **SEO**: Automatic meta tag generation using the `applet-seo` skill patterns, integrated with EmDash-managed metadata.

## 4. Aesthetic & UI
*   **Design**: "Contemporary Gallery Stark" aesthetic.
*   **Typography**: Cormorant Garamond (Headings) + Plus Jakarta Sans (Body).
*   **Components**: Clean, typographic layouts with hairline dividers and generous whitespace.

## 5. Next Steps
1.  **Project Migration**: Convert the React/Vite structure to an Astro project.
2.  **CMS Setup**: Install and configure EmDash CMS with local SQLite (dev) and D1 (prod) support.
3.  **Collection Seeding**: Create the initial database schema and seed the content from the provided document.
4.  **Frontend Implementation**: Build the Astro components and layouts with the minimalist editorial aesthetic.
