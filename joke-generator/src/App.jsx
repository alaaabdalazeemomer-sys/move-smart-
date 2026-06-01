import React, { useState } from 'react';
import JokeCard from './components/JokeCard';
import CategorySelector from './components/CategorySelector';
import jokeApi from './services/jokeApi';
import './index.css';

function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Any');
  const [copiedMessage, setCopiedMessage] = useState('');

  const categories = ['Any', 'General', 'Programming', 'Knock-Knock', 'Dark', 'Spooky', 'Christmas'];

  const fetchJoke = async () => {
    setLoading(true);
    setCopiedMessage('');
    try {
      const data = await jokeApi.getRandomJoke(selectedCategory);
      setJoke(data);
    } catch (error) {
      console.error('Failed to fetch joke:', error);
      setJoke(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    const jokeText =
      joke?.type === 'twopart'
        ? `${joke.setup}\n\n${joke.delivery}`
        : joke?.joke || '';

    navigator.clipboard.writeText(jokeText).then(() => {
      setCopiedMessage('✓ Copied to clipboard!');
      setTimeout(() => setCopiedMessage(''), 2000);
    });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 py-12 px-4">
      {/* Container */}
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
            😂 Random Joke Generator
          </h1>
          <p className="text-xl text-white/90">Get a laugh in seconds!</p>
        </div>

        {/* Category Selector */}
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
          loading={loading}
        />

        {/* Joke Card */}
        <JokeCard
          joke={joke}
          loading={loading}
          onCopy={handleCopy}
          onRefresh={fetchJoke}
        />

        {/* Copy Message */}
        {copiedMessage && (
          <div className="text-center mt-4 text-white text-lg font-semibold animate-bounce">
            {copiedMessage}
          </div>
        )}

        {/* Stats */}
        {joke && (
          <div className="text-center mt-8 text-white/80 text-sm">
            <p>
              Joke #{joke.id} • {joke.safe ? '✓ Family Friendly' : '⚠️ Not Safe For Work'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
