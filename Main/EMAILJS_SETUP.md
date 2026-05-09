# EmailJS Setup — Get the contact form sending real emails

The contact form is already wired up. You just need to plug in your free EmailJS account so emails actually go out. Takes about 5–10 minutes.

## 1. Create a free EmailJS account

1. Go to **https://www.emailjs.com/** and sign up (free tier = 200 emails/month).
2. Verify your email.

## 2. Connect your email service (where the messages will be sent FROM)

1. In the EmailJS dashboard, click **Email Services** → **Add New Service**.
2. Pick **Gmail** (recommended for `oxinur22@gmail.com`).
3. Click **Connect Account** and authorise EmailJS to send via your Gmail.
4. Copy the **Service ID** (looks like `service_abc1234`). You'll need it.

## 3. Create the two email templates

You need **two** templates: one that emails YOU, and one that auto-replies to the visitor.

### Template A — "New contact form enquiry" (the one that emails YOU)

1. **Templates** → **Create New Template**.
2. Set:
   - **To Email**: `oxinur22@gmail.com`
   - **From Name**: `{{from_name}}`
   - **Reply To**: `{{reply_to}}`
   - **Subject**: `New enquiry from {{from_name}} — {{service}}`
3. Paste this into the body:

   ```
   You have a new enquiry from your website:

   Name:    {{from_name}}
   Email:   {{from_email}}
   Phone:   {{phone}}
   Service: {{service}}

   Message:
   {{message}}
   ```

4. **Save** the template and copy the **Template ID** (looks like `template_xyz789`).

### Template B — "Confirmation auto-reply" (the one that emails the VISITOR)

1. **Templates** → **Create New Template**.
2. Set:
   - **To Email**: `{{from_email}}`
   - **From Name**: `Oxinur`
   - **Reply To**: `oxinur22@gmail.com`
   - **Subject**: `Thanks for getting in touch with Oxinur, {{first_name}}!`
3. Paste this into the body:

   ```
   Hi {{first_name}},

   Thanks for reaching out to Oxinur — we've got your enquiry about
   "{{service}}" and will get back to you within 24 hours.

   Here's a copy of your message for your records:

   ----
   {{message}}
   ----

   In the meantime, feel free to browse our portfolio at
   https://oxinur.com/portfolio.html

   Speak soon,
   The Oxinur Team
   📧 oxinur22@gmail.com
   📞 +44 7466 272238
   ```

4. **Save** the template and copy the **Template ID**.

## 4. Get your Public Key

1. **Account** → **General**.
2. Copy the **Public Key**.

## 5. Plug the keys into the website

Open `Main/assets/js/email-config.js` and replace the four placeholder values:

```js
window.EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY',           // from step 4
  serviceId: 'YOUR_SERVICE_ID',           // from step 2
  adminTemplateId: 'YOUR_ADMIN_TEMPLATE', // Template A ID from step 3
  autoReplyTemplateId: 'YOUR_AUTOREPLY_TEMPLATE' // Template B ID from step 3
};
```

Save the file. **That's it** — the contact form will now send real emails.

## 6. Test it

1. Open `contact.html` in your browser.
2. Fill in the form with **your own** email address.
3. Click **Send Message**.
4. You should:
   - See a green success message on the page.
   - Receive the enquiry email at `oxinur22@gmail.com`.
   - Receive the confirmation auto-reply at the email you typed in.

## Troubleshooting

- **"Email service is not configured yet"** message → you haven't filled in `email-config.js` yet, or one of the values is still `YOUR_...`.
- **Form submits but nothing arrives** → check the EmailJS dashboard's **History** tab — it will show what failed (e.g. wrong template ID, Gmail not authorised, etc.).
- **Auto-reply lands in spam** → that's normal at first; mark one as "not spam" and Gmail will learn.

## Free-tier limits

- **200 emails/month** total (so 100 enquiries, since each enquiry sends 2 emails).
- More than enough for a small business; if you outgrow it, EmailJS paid tiers start at ~$7/month.
