import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} Morgan Gasser. All rights reserved.</p>
    </footer>
  );
}
