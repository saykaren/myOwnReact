<script src="https://unpkg.com/react@16.7.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.7.0/umd/react-dom.development.js"></script>

ReactDom.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root');
  
);

ReactDom.render(
  React.createElement("h1", null, "Hello World"),
  document.getElementById("root");
);