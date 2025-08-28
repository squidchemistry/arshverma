# EmailJS Setup Guide

## What You've Accomplished ✅

1. ✅ Installed `@emailjs/browser` package
2. ✅ Updated Contact component with EmailJS integration
3. ✅ Added error handling and success messages
4. ✅ Created configuration file structure
5. ✅ Set up environment variable support

## Next Steps to Complete Setup 🔧

### 1. Get Your EmailJS Credentials

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up or log in to your account
3. Navigate to **Email Services** and create a new service:
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps
   - Copy your **Service ID**

4. Go to **Email Templates** and create a new template:
   - Use this template content:
   ```
   Subject: New Contact Form Message from {{from_name}}
   
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   Message: {{message}}
   
   This message was sent from your portfolio contact form.
   ```
   - Copy your **Template ID**

5. Go to **Account** → **API Keys** and copy your **Public Key**

### 2. Configure Your Credentials

**Option A: Environment Variables (Recommended)**
Create a `.env` file in your project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Option B: Direct Configuration**
Edit `src/config/emailjs.js` and replace the placeholder values:
```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'actual_service_id',
  TEMPLATE_ID: 'actual_template_id',
  PUBLIC_KEY: 'actual_public_key',
  TO_EMAIL: 'arshvermaimm@gmail.com'
}
```

### 3. Test Your Setup

1. Start your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email (arshvermaimm@gmail.com) for the message
5. Check browser console for any errors

## Troubleshooting 🔍

### Common Issues:

1. **"Service ID not found"**
   - Verify your Service ID in EmailJS dashboard
   - Make sure the service is active

2. **"Template ID not found"**
   - Verify your Template ID in EmailJS dashboard
   - Check that the template variables match your code

3. **"Public Key invalid"**
   - Verify your Public Key in EmailJS dashboard
   - Make sure you're using the correct key type

4. **Emails not sending**
   - Check browser console for errors
   - Verify EmailJS service is properly configured
   - Check spam folder

### Debug Mode:
Add this to your Contact component for debugging:
```javascript
console.log('EmailJS Config:', EMAILJS_CONFIG)
console.log('Form Data:', formData)
```

## Security Notes 🔒

- Never commit your `.env` file to version control
- Add `.env` to your `.gitignore` file
- Your public key is safe to expose (it's designed for client-side use)
- Service and Template IDs are also safe to expose

## Support 📧

If you encounter issues:
1. Check EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Verify your EmailJS dashboard settings
3. Check browser console for detailed error messages

---

**Your contact form is now ready to send real emails! 🎉**
