import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/items/')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const handleItemClick = (id) => {
    fetch(`http://127.0.0.1:8000/api/items/${id}/`)
      .then(response => response.json())
      .then(data => setSelectedItem(data))
      .catch(error => console.error('Error fetching item:', error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch('http://127.0.0.1:8000/api/items/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then(response => response.json())
      .then(data => {
        setItems([...items, data]);
        setNewItem({ name: '', description: '' });
      })
      .catch(error => console.error('Error adding item:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="description"
            value={newItem.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
          />
          <button type="submit">Add Item</button>
        </form>
        <ul>
          {items.map(item => (
            <li key={item.id} onClick={() => handleItemClick(item.id)}>
              {item.name}
            </li>
          ))}
        </ul>
        {selectedItem && (
          <div>
            <h2>{selectedItem.name}</h2>
            <p>{selectedItem.description}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;