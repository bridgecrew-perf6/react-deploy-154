import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ul>
        <li>
          <p>Create GitHub Repo</p>
        </li>
        <li>
          <p>Create React App</p>
        </li>
        <li>
          <p>Install gh-pages</p>
          <code>npm install gh-pages --save-dev</code>
        </li>
        <li>
          <p>Make changes in package.json</p>
          <p>On top</p>
          <code>"hompage": "https://username.github.io/repo"</code>
          <p>In scripts</p>
          <code>"predeploy": "npm run build"</code>
          <code>"deploy": "gh-pages -d build"</code>
        </li>
        <li>
          <p>Initialize git</p>
          <code>git init</code>
        </li>
        <li>
          <p>Add Remote</p>
          <code>git remote add origin git@github.com:username/repo.git</code>
        </li>
        <li>
          <p>Add all to staging area</p>
          <code>git add .</code>
        </li>
        <li>
          <p>Commit</p>
          <code>git commit -m "Commit message"</code>
        </li>
        <li>
          <p>Deploy</p>
          <code>npm deploy</code>
        </li>
      </ul>
    </div>
  );
};

export default App;
