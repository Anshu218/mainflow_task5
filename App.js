import { useState } from 'react';
import AddItem from './components/AddItem';
import ListItems from './components/ListItems';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleAdd = () => {
    setRefresh(!refresh);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task 5 - Add & Delete Products/Buyers</h1>
      <AddItem onAdd={handleAdd} />
      <ListItems key={refresh} />
    </div>
  );
}

export default App;
