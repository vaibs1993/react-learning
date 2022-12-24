const child1 = React.createElement('h1', {
    id: 'title'
}, "Hello React.......")
const parentElem = React.createElement(
    'div',{
        id: 'parent'
    },
    [child1]
);

const root = ReactDOM.createRoot(container);
root.render(parentElem);
console.log(React);