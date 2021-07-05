import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    records: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((records) => {
        setAppState({ loading: false, records: records });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='record-container'>
        <ListLoading isLoading={appState.loading} records={appState.records} />
      </div>
    </div>
  );
}
export default App;
