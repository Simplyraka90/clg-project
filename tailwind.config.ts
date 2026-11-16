import type { Config } from 'tailwindcss';
const config: Config = {content:['./src/**/*.{js,ts,jsx,tsx,mdx}'],theme:{extend:{colors:{ink:'#201044',panel:'#ffffff',brandPurple:'#7021cc',muted:'#726484'},fontFamily:{sans:['Arial','Helvetica','sans-serif']},boxShadow:{purple:'0 12px 30px rgba(102,31,199,.17)'}}},plugins:[]};
export default config;
