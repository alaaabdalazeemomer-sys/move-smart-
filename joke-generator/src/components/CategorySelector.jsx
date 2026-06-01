import React from 'react';

function CategorySelector({ categories, selectedCategory, onSelectCategory, loading }) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">📂 Choose Category</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              disabled={loading}
              className={`py-2 px-4 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySelector;
