// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  TO_EMAIL: 'arshvermaimm@gmail.com' // Your email address where messages will be sent
}

// How to get these values:
// 1. Go to https://www.emailjs.com/
// 2. Sign up/Login to your account
// 3. Go to Email Services and create a new service (Gmail, Outlook, etc.)
// 4. Go to Email Templates and create a new template
// 5. Copy the IDs from your dashboard
