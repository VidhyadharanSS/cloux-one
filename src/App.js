// App.js
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="central-content">
        <h1 className="main-title">CLOUDX</h1>
        <p className="main-subtitle">
          CloudX is the future of decentralized cloud storage and AI-powered image processing. Our platform brings together the best of blockchain technology and machine learning, providing unparalleled security and performance for your data and images.
        </p>
        <p className="main-subtitle-extended">
          Whether you're looking for a safe, scalable cloud storage solution, or need a cutting-edge tool for image compression and tagging, CloudX is your go-to platform. Explore our CloudX Drive, which uses IPFS and blockchain for secure storage, or leverage the power of AI with our imagerML tool for image processing.
        </p>
      </div>
      
      <div className="cards-container">
        <div className="card">
          <div className="card-content">
            <h2 className="card-title">CloudX Drive by Pinata</h2>
            <p className="card-description">
              CloudX Drive offers decentralized, blockchain-powered file storage for images, videos, audio, and documents. Using IPFS technology, your files are stored securely across multiple nodes, ensuring privacy, redundancy, and accessibility from anywhere in the world.
            </p>
            <p className="card-features">
              <strong>Key Features:</strong>
              <ul>
                <li>Blockchain-backed data security for privacy and reliability.</li>
                <li>InterPlanetary File System (IPFS) for decentralized file hosting.</li>
                <li>Global accessibility with low-latency storage.</li>
                <li>Unlimited storage with lifetime file retention.</li>
                <li>User-friendly interface with simple file management tools.</li>
              </ul>
            </p>
            <button className="card-button" onClick={() => window.open('https://pinata-drive.vercel.app', '_blank')}>
              Go to CloudX Drive
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2 className="card-title">CloudX - imagerML</h2>
            <p className="card-description">
              ImagerML combines AI and machine learning to deliver advanced image processing, compression, and tagging. Whether you need to compress images for web performance or apply intelligent tags for better organization, imagerML has the tools you need.
            </p>
            <p className="card-features">
              <strong>Key Features:</strong>
              <ul>
                <li>AI-driven image compression for faster loading times.</li>
                <li>Smart tagging system to enhance image searchability.</li>
                <li>Advanced editing tools for resizing, filtering, and enhancing images.</li>
                <li>Serialized image management for better categorization and processing.</li>
                <li>Ideal for web developers, designers, and digital marketers.</li>
              </ul>
            </p>
            <button className="card-button" onClick={() => window.open('https://imager-mlc.vercel.app', '_blank')}>
              Go to imagerML
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
