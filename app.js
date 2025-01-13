const express = require('express');

const app = express();

// Route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Middleware JSON
app.use(express.json());

// Datos simulados (como si fueran elementos en una base de datos)
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// Get, all ítems
app.get('/items', (req, res) => {
    res.status(200).json(items);
});

// Post: Create new ítem
app.post('/items', (req, res) => {
    const { name } = req.body;  // Tomamos el nombre del nuevo item desde el cuerpo de la solicitud
    const newItem = { id: items.length + 1, name };
    items.push(newItem);
    res.status(201).json(newItem);  // Devuelve el nuevo item con un código de estado 201
});

// Delete , ID
app.delete('/items/:id', (req, res) => {
    const { id } = req.params;  // Obtenemos el id del item desde los parámetros de la URL
    items = items.filter(item => item.id != id);  // Filtramos el item con el id proporcionado
    res.status(200).json({ message: `Item con id ${id} eliminado` });
});


//Port
const PORT = 3000;

// Server
app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
});
