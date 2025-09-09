# DesignSight - AI-Powered Design Feedback Platform

### Project Overview

[cite_start]DesignSight is a full-stack, AI-powered design feedback platform built to provide structured and actionable feedback on visual designs[cite: 7]. [cite_start]It addresses the problem of inconsistent feedback by integrating a real AI vision model to analyze uploaded screen designs and generate systematic analysis with coordinate-anchored feedback[cite: 7]. [cite_start]The platform is designed to test full-stack capabilities, AI integration skills, and product thinking within a MERN stack environment[cite: 9, 10, 11].

***

### Core Technology Stack

* **Frontend**: React
* **Backend**: Node.js & Express.js
* **Database**: MongoDB
* [cite_start]**AI Integration**: Google Gemini API (using `axios` for HTTP requests) [cite: 23, 34]
* [cite_start]**Deployment**: Docker Compose [cite: 19]

***

### Key Features (MVP)

The current prototype demonstrates the core functionality required by the assignment brief:

* [cite_start]**Image Upload**: Users can upload screen design images (PNG/JPG) which are stored on the server[cite: 30].
* [cite_start]**AI-Powered Analysis**: The backend integrates with the Google Gemini API to analyze the uploaded designs[cite: 34].
* [cite_start]**Structured Feedback**: The AI generates feedback that includes coordinates, severity (high, medium, low), and relevant team roles (Designer, Developer, etc.)[cite: 41, 42, 44].
* [cite_start]**Coordinate-Anchored Feedback**: The frontend displays this feedback as an interactive overlay on the uploaded image[cite: 54].
* [cite_start]**Role-Based Filtering**: The user can switch roles and filter feedback based on their perspective, allowing them to see only the information relevant to their role[cite: 51].
* [cite_start]**Error Handling**: The application is designed to handle potential API failures and other errors gracefully[cite: 99].

***

### Local Setup & Installation

[cite_start]This project is configured to run entirely with Docker Compose[cite: 19].

**Prerequisites**
* Docker and Docker Compose installed on your system.

**Step-by-step Installation**

1.  **Clone the Repository**:
    ```bash
    git clone [your-github-repo-link]
    cd designsight-prototype
    ```

2.  **Set up AI API Key**:
    [cite_start]The backend uses a real AI vision model, which requires a Gemini API key[cite: 22, 23]. You can obtain a key for free from Google AI Studio.
    * Create a file named `.env` in the `server` directory and add your API key:
        ```
        GEMINI_API_KEY=AIzaSyBkV6k0lsS6FTsJ7CBbQhuS9MOrDSoL12A
        ```

3.  **Run the Application**:
    From the root directory of the project, run the following command. [cite_start]The `--build` flag is crucial to ensure that Docker creates images with the latest code and dependencies[cite: 19].
    ```bash
    docker-compose up --build
    ```
4.  **Access the Application**:
    Once the command is complete and all services are running, open your web browser and navigate to:
    ```
    http://localhost:3000
    ```

***

### AI Integration & Cost Analysis

* [cite_start]**Provider**: The prototype uses the **Google Gemini API** (`gemini-1.5-flash` model) for its AI vision capabilities[cite: 23].
* [cite_start]**Cost**: The Gemini API offers a free tier with a generous rate limit[cite: 130, 133]. [cite_start]For a prototype with minimal usage, there are no expected costs[cite: 122].
* **Rate Limits**: The API has specific rate limits (e.g., requests per minute). [cite_start]The application handles these failures gracefully by logging errors and providing a user-friendly message[cite: 148].
* [cite_start]**Documentation**: The project includes guidance on the AI provider setup, addressing a requirement of the assignment[cite: 121].

***

### Architectural Decisions

* [cite_start]**MERN Stack**: The MERN stack was chosen for its efficiency in building full-stack applications with a unified language[cite: 16].
* **Docker Compose**: The entire application is containerized using Docker Compose for portability and ease of setup. [cite_start]This allows the application to run consistently in any environment without complex dependency management[cite: 19, 120].
* [cite_start]**Centralized AI Logic**: All AI integration logic is handled on the backend to keep the API key secure and to offload heavy processing from the frontend[cite: 124, 70].

***

### TODO.md (Future Enhancements)

* [cite_start][ ] Implement a threaded discussion system for collaborative feedback[cite: 58].
* [cite_start][ ] Add export features (PDF reports, JSON data) for development handoff[cite: 64, 65].
* [cite_start][ ] Develop comprehensive unit and integration tests[cite: 97, 98].
* [cite_start][ ] Implement user authentication and role management[cite: 46].
* [cite_start][ ] Optimize image processing for large files to improve performance and manage costs[cite: 78, 79].
