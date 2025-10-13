import React, { useState } from "react";
import { Copy, Check } from 'lucide-react'
import './ShareButton.css'


const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // navigator.clipboard.writeText(window.location.href)
    navigator.clipboard.writeText(window.location.href)
    setCopied(true);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <button onClick={handleCopy}
        className={`
        ${copied
            ? 'big-green'
            : 'big-blue'}
      `}
      >
        {copied ? (
          <>
            <span>Copied!</span>
          </>
        ) : (
          <>
            <span>Copy URL</span>
          </>
        )}

      </button>

      {copied && (
        <div className="welcome-container">
          <p className="alert-message">
            The room URL has been pasted to your clipboard! Please share it with your family and friends.
          </p>
        </div>
      )}
      {/* OLD CODE */}
      {/* <button
        onClick={handleCopy}
        className={`
          flex items-center space-x-2 px-6 py-3 rounded-lg font-medium
          transition-transform duration-200 transform hover:scale-105
          ${copied 
            ? 'bg-green-500 text-white' 
            : 'bg-blue-500 text-white'}
        `}
      >
        {copied ? (
          <>
            <Check size={20} />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy size={20} />
            <span>Copy URL</span>
          </>
        )}
      </button> */}

      {/* {copied && (
        <div className="bg-purple-500 text-white px-6 py-4 rounded-lg shadow-lg transition-opacity duration-300">
          <h3 className="text-lg font-semibold mb-1">🎉 Welcome!</h3>
          <p className="text-sm opacity-90 text-center">
            URL copied! You can now share this page.
          </p>
        </div>
      )} */}
      {/* 
      <div className="mt-4 p-3 bg-gray-100 rounded-lg max-w-md">
        <p className="text-xs text-gray-600 mb-1">Current URL:</p>
        <p className="text-sm font-mono text-gray-800 break-all">
          {typeof window !== 'undefined' ? window.location.href : 'URL will appear here'}
        </p>
      </div> */}
    </div>
  );
};
export default ShareButton






// import React from 'react'
// import { useState } from 'react';

// const ShareButton = () => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(window.location.href)
//       .then(() => {
//         setCopied(true);
//         setTimeout(() => setCopied(false), 3000); // resets after 3s
//       })
//       .catch(err => console.error('Failed to copy URL: ', err));
//   };

//   return (
//     <div className="flex flex-col items-center space-y-4 p-6">
//       <button
//         onClick={handleCopy}
//         className={`
//           flex items-center space-x-2 px-6 py-3 rounded-lg font-medium
//           transition-transform duration-200 transform hover:scale-105
//           ${copied 
//             ? 'bg-green-500 text-white' 
//             : 'bg-blue-500 text-white'}
//         `}
//       >
//         {copied ? (
//           <>
//             {/* <Check size={20} /> */}
//             <span>Copied!</span>
//           </>
//         ) : (
//           <>
{/* <Copy size={20} /> */ }
//             <span>Copy URL</span>
//           </>
//         )}
//       </button>

//       {copied && (
//         <div className="bg-purple-500 text-white px-6 py-4 rounded-lg shadow-lg transition-opacity duration-300">
//           <h3 className="text-lg font-semibold mb-1">🎉 Welcome!</h3>
//           <p className="text-sm opacity-90 text-center">
//             URL copied! You can now share this page.
//           </p>
//         </div>
//       )}

//       <div className="mt-4 p-3 bg-gray-100 rounded-lg max-w-md">
//         <p className="text-xs text-gray-600 mb-1">Current URL:</p>
//         <p className="text-sm font-mono text-gray-800 break-all">
//           {typeof window !== 'undefined' ? window.location.href : 'URL will appear here'}
//         </p>
//       </div>
//     </div>
//   );
// };
// export default ShareButton