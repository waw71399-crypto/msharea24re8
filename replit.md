# Student Projects Showcase Website

## Overview

This is a Student Projects Showcase website designed to display creative projects by female students in an Arabic right-to-left (RTL) layout. The platform features a feminine, educational aesthetic inspired by Behance and Etsy, allowing students to showcase their work through images, videos, and descriptions. Teachers can manage projects through a password-protected admin interface.

The application is built as a full-stack web application with a React frontend and Express backend, featuring a clean separation between client and server code.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool

**UI Component Library**: Shadcn/ui components built on Radix UI primitives, providing accessible and customizable components

**Styling**: 
- Tailwind CSS for utility-first styling with custom RTL (right-to-left) Arabic layout support
- Custom theme configuration supporting light/dark modes
- Feminine color palette with primary/accent colors
- Custom fonts: Tajawal and Cairo for Arabic text, Poppins for English fallback

**Routing**: Wouter for lightweight client-side routing

**State Management**: 
- TanStack Query (React Query) for server state management and caching
- React Hook Form with Zod for form validation
- Local storage for teacher-added projects (browser-based persistence)

**Key Pages**:
- Home: Landing page with featured projects and call-to-action
- Projects: Grid view of all student projects
- Project Detail: Individual project showcase with image gallery and videos
- Contact: Contact information and project submission encouragement
- Teacher: Password-protected admin panel for project management

### Backend Architecture

**Framework**: Express.js with TypeScript

**Server Features**:
- RESTful API endpoints for project CRUD operations
- In-memory storage implementation for projects
- Teacher authentication via password validation
- Development server with Vite integration for HMR (Hot Module Replacement)

**API Endpoints**:
- `GET /api/projects` - Retrieve all projects
- `GET /api/projects/:id` - Retrieve specific project
- `POST /api/teacher/validate` - Validate teacher password
- `POST /api/projects` - Create new project (teacher only)
- `DELETE /api/projects/:id` - Delete project (teacher only)

**Data Storage Strategy**:
- In-memory storage (MemStorage class) for base projects during development
- Teacher-added projects stored in browser localStorage
- Designed to be easily migrated to PostgreSQL with Drizzle ORM

### Data Schema

**Project Model**:
- `id`: Unique identifier
- `title`: Project title (Arabic)
- `student`: Student name
- `grade`: Student grade/class (optional)
- `contact`: Contact information (optional)
- `description`: Project description (optional)
- `cover`: Cover image URL
- `images`: Array of additional image URLs
- `videos`: Array of video URLs

**Validation**: Zod schemas for type-safe data validation

### External Dependencies

**Database**: 
- Currently using in-memory storage
- Configured for PostgreSQL via Drizzle ORM (ready for future migration)
- Neon serverless database driver included for production deployment

**Media Storage**:
- Images and videos stored as URLs (supports Google Drive links with proper sharing settings)
- Base64 encoding support for file uploads
- Local asset storage in development via `attached_assets` directory

**Third-party Services**:
- Google Fonts API: Tajawal, Cairo, and Poppins font families
- Potential Google Drive integration for media hosting

**Development Tools**:
- Replit integration plugins (cartographer, dev-banner, runtime error modal)
- TSX for TypeScript execution in development
- ESBuild for production bundling

**Authentication**:
- Simple password-based authentication for teacher access (password: "oman2025w")
- No external authentication service currently integrated

**Key NPM Packages**:
- `@tanstack/react-query` - Server state management
- `drizzle-orm` & `@neondatabase/serverless` - Database ORM and driver
- `wouter` - Routing
- `react-hook-form` & `@hookform/resolvers` - Form handling
- `zod` - Schema validation
- `date-fns` - Date formatting
- Multiple `@radix-ui/*` packages - Accessible UI primitives
- `tailwindcss` - Utility-first CSS framework