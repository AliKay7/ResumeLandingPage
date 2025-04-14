# Resume Landing Page with Visit Counter

This project is a personal resume website enhanced with Cloudflare Workers and D1 for tracking visits in real-time.

## Features
- Static resume site built with HTML, CSS, and JavaScript
- Visit counter using Cloudflare Workers
- Persistent visit tracking using Cloudflare D1 (SQLite edge database)
- Fully deployed on Cloudflare Pages with custom domain

## Technologies Used
- Cloudflare Pages
- Cloudflare Workers
- Cloudflare D1 (SQLite)
- HTML5 / CSS3 / JavaScript

## How to Run Locally
1. Clone the repo  
2. Navigate to the project directory  
3. Run `npx wrangler d1 execute resume_visits --file=./schema.sql --remote` to set up the database  
4. Run `npx wrangler deploy` to deploy the Worker  
5. Run `npx wrangler pages deploy ./dist --project-name=resumelandingpage` to deploy the site

## Project Structure
CS254Project/
├── dist/
│   ├── index.html
│   └── styles.css
├── worker/
│   └── index.js
├── schema.sql
├── wrangler.toml
├── README.md
└── research.md

## Live Demo
- Site: [https://aliresume.xyz](https://aliresume.xyz)  
- Worker API: [https://resumelandingpage.alielhadi7.workers.dev](https://resumelandingpage.alielhadi7.workers.dev)