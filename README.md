# YouTube Trend Spotter

A modern React frontend for comparing the popularity of YouTube search terms.
Built with React, Vite, TailwindCSS, ShadCN UI, and Recharts.

# Setup & Run

1. Clone and install

```
git clone https://github.com/yourusername/youtube-trend-spotter.git
cd youtube-trend-spotter/frontend
npm install
```

2. Start the dev server

```
npm run dev
```

Open in your browser `http://localhost:5173`


# Environment Variables
Create a .env file in the frontend/ folder if you need to configure backend URL:
``` 
VITE_API_URL=http://localhost:8000 
```
Then use it inside fetch calls:
```
fetch(`${import.meta.env.VITE_API_URL}/api/v1/compare`)
```