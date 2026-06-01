# 😂 Random Joke Generator

A simple web application that fetches and displays random jokes from an external API.

## Features

✨ **Random Joke Generation** - Fetch jokes on demand  
✨ **Multiple Categories** - Choose from different joke types  
✨ **Clean UI** - Built with React & Tailwind CSS  
✨ **Responsive Design** - Works on all devices  
✨ **Copy to Clipboard** - Share jokes easily  
✨ **Loading States** - Visual feedback while fetching  

## Tech Stack

- **Frontend**: React 18, Tailwind CSS, Vite
- **API**: JokeAPI (https://jokeapi.dev)
- **HTTP Client**: Axios

## Getting Started

### Installation

```bash
git clone https://github.com/alaaabdalazeemomer-sys/joke-generator.git
cd joke-generator
npm install
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser

### Build for Production

```bash
npm run build
```

## How to Use

1. Click "Get Random Joke" button
2. Wait for the joke to load
3. Read and enjoy the joke
4. Click "Copy Joke" to copy to clipboard
5. Click "Share" to share on social media

## Supported Joke Categories

- **General** - General jokes
- **Programming** - Programming and tech jokes
- **Knock-Knock** - Classic knock-knock jokes
- **Dark** - Dark humor
- **Spooky** - Spooky jokes
- **Christmas** - Holiday jokes

## API Reference

### Get Random Joke

```
GET https://jokeapi.dev/joke/Any
```

### Get Joke by Category

```
GET https://jokeapi.dev/joke/{category}
```

Categories: `General`, `Programming`, `Knock-Knock`, `Dark`, `Spooky`, `Christmas`

## Project Structure

```
joke-generator/
├── src/
│   ├── components/
│   │   ├── JokeCard.jsx
│   │   ├── CategorySelector.jsx
│   │   └── ShareButtons.jsx
│   ├── services/
│   │   └── jokeApi.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Alaa Abdalazeemomer
