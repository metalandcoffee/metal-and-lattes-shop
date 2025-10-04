const Coffee = () => {
  return React.createElement('div', {}, []);
};

const App = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Metal & Lattes')
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
