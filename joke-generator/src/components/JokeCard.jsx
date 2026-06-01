import React from 'react';
import { Copy, Share2, Laugh } from 'lucide-react';

function JokeCard({ joke, loading, onCopy, onRefresh }) {
  const jokeText =
    joke?.type === 'twopart'
      ? `${joke.setup}\n\n${joke.delivery}`
      : joke?.joke || 'No joke available';

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Joke Card */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6 hover:shadow-3xl transition-shadow">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Laugh size={32} className="text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-800">Random Joke</h2>
        </div>

        {/* Joke Content */}
        <div className="min-h-32 mb-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="inline-block animate-spin">
                  <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full"></div>
                </div>
                <p className="text-gray-600 mt-4">Loading joke...</p>
              </div>
            </div>
          ) : joke ? (
            <div>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                {jokeText}
              </p>
              {joke.category && (
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    📁 {joke.category}
                  </span>
                  {joke.type === 'twopart' && (
                    <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                      🎭 Two-Part
                    </span>
                  )}
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-12">Click "Get Random Joke" to start</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={onRefresh}
            disabled={loading}
            className="btn-primary flex-1 flex items-center justify-center gap-2"
          >
            <span>😂</span> Get Random Joke
          </button>

          {joke && (
            <>
              <button
                onClick={onCopy}
                className="btn-secondary flex-1 flex items-center justify-center gap-2"
              >
                <Copy size={20} /> Copy
              </button>

              <button className="btn-secondary flex-1 flex items-center justify-center gap-2">
                <Share2 size={20} /> Share
              </button>
            </>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="text-center text-gray-600 text-sm">
        <p>Powered by JokeAPI 😄</p>
      </div>
    </div>
  );
}

export default JokeCard;
