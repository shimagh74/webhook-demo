# Webhook Demo (Next.js)

This is a simple Next.js demo app that shows how to send user input to an API route, process it on the server, and display the processed result on the UI. It also demonstrates how to forward the data to an external webhook endpoint.

## Features

- Collects user input (name, message, user ID) via a form.
- Sends the input to a Next.js API route (`/api`).
- The API processes the data and returns:
  - The original name, message, and user ID.
  - The current date/time.
- The processed data is displayed back to the user after submission.
- The API also forwards the raw data to a [webhook.site](https://webhook.site/) endpoint for demonstration.

## Folder Structure

```
src/app/
  ├── api/
  │   └── route.ts      # API route for processing and forwarding data
  ├── dashboard/
  │   └── page.tsx      # Dashboard page with the form and result display
  ├── globals.css       # Global styles (Tailwind CSS)
  ├── layout.tsx        # Root layout
  └── page.tsx          # Home page with link to dashboard
```

## How It Works

1. **User visits `/dashboard`** and fills out the form.
2. **On submit**, the form data is sent to `/api` via a POST request.
3. **The API route**:
    - Reads the JSON body.
    - Adds the current date/time.
    - Forwards the original data to a webhook endpoint.
    - Returns the processed data (name, message, userId, time) as JSON.
4. **The dashboard page** receives the response and displays the processed data.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000) and click "Open Dashboard" to try the demo.

## Customization

- **Webhook Endpoint:**  
  The webhook URL in `src/app/api/route.ts` can be changed to any endpoint you want to test with.

- **Styling:**  
  Uses Tailwind CSS for quick and easy styling. You can adjust styles in `globals.css` or directly in the components.

## Example

1. Go to `/dashboard`.
2. Enter a name, message, and user ID.
3. Submit the form.
4. See your input and the generated date/time displayed below the form.

---

**This project is for demonstration and learning purposes. It is not intended for production use.**
