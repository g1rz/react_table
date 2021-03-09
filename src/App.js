import React from 'react';
import './App.sass';
import Table from './components/Table/Table';
import Loader from './components/Loader/Loader';

const App = () => {
    const [data, setData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos?_expand=user')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="app">
            <div className="container">
                {isLoading && <Loader/>}
                {!isLoading && data && <Table data={data} />}
            </div>
        </div>
    );
};

export default App;
