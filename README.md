# React Context: Binary Theme Starter

[Demo](https://d3csj2qyo9e6ux.cloudfront.net/)


This repository is a small React 18 app, originally cloned from https://github.com/zolomohan/react-context-dark-mode. It uses a single `Context` object called ThemeContext, for exposing a `darkMode` flag to all components in the component tree.  

What differentiates this from the originally cloned repo is 
- An upgrade to React 18
- The approach for toggling the light or dark (binary), which uses the ternary conditional only at the top level of the component tree. CSS is leveraged to perform the rest of the work.
- Use of CSS transitions for natural color shifting

To clone the repository, run

```bash
git clone https://github.com/dkemper01/react-context-binary-theme-starter.git
```

To install the dependencies, run

```bash
npm install
```

Once you've installed the dependencies, it's time to run the application. with,

```bash
npm start
```

This will start the application in port 3000. Visit [localhost:3000](https://localhost:3000) from your browser to view the application.
