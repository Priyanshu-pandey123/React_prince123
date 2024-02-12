
const parent=React.createElement(
    'div',
    {id:'parent'},
React.createElement('div',{id:'child'}
,[React.createElement('h1',{},"i an h1")
,React.createElement('h2',{},'i am h2'),
]));


// const heading=React.createElement('h1',{id:'heading'},"priyansu pandey");
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent );