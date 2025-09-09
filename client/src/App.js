import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import ProjectView from './components/ProjectView';

function App() {
  const [file, setFile] = useState(null);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5001';

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      alert('No file selected.');
      return;
    }
    if (!selectedFile.type.startsWith('image/')) {
      alert('Please select a valid image file.');
      return;
    }
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post(`${apiBaseUrl}/api/projects/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setProject(res.data);
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>DesignSight</h1>
      </header>
      <main>
        {!project ? (
          <form onSubmit={handleSubmit} className="upload-form">
            <h2>Upload a Design for Analysis</h2>
            <input type="file" onChange={handleFileChange} />
            <button type="submit" disabled={loading}>
              {loading ? 'Analyzing...' : 'Upload & Analyze'}
            </button>
          </form>
        ) : (
          <ProjectView project={project} />
        )}
      </main>
    </div>
  );
}

export default App;
