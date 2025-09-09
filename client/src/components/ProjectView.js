import React, { useState } from 'react';
import './ProjectView.css';

const ProjectView = ({ project }) => {
  const [roleFilter, setRoleFilter] = useState('All');
  const apiBaseUrl = 'http://localhost:5001';

  const filteredFeedback = project.feedback.filter(item => 
    roleFilter === 'All' || item.roles.includes(roleFilter)
  );

  return (
    <div className="project-container">
      <div className="controls-panel">
        <label>Filter by Role:</label>
        <select onChange={(e) => setRoleFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Designer">Designer</option>
          <option value="Developer">Developer</option>
          <option value="Reviewer">Reviewer</option>
          <option value="Product Manager">Product Manager</option>
        </select>
      </div>
      <div className="image-wrapper">
        <img src={`${apiBaseUrl}/uploads/${project.imagePath}`} alt={project.name} />
        {filteredFeedback.map((item, index) => (
          <div 
            key={index}
            className={`feedback-box severity-${item.severity}`}
            style={{
              position: 'absolute',
              left: `${item.coordinates.x}px`,
              top: `${item.coordinates.y}px`,
              width: `${item.coordinates.width}px`,
              height: `${item.coordinates.height}px`,
            }}
            title={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectView;
