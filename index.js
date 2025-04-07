
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send('Welcome to the Sample Node-Mongo API');
});

app.get('/api/items', (req, res) => {
    res.json([{ name: 'Item 1' }, { name: 'Item 2' }]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
