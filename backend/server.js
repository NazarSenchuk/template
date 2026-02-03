const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Simple API endpoint
app.get('/api/message', (req, res) => {
  res.json({ 
    message: 'Hello from backend1!',
    timestamp: new Date().toISOString()
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});


app.get('/api/load/cpu/fibonacci/:n', (req, res) => {
  const n = parseInt(req.params.n) || 40; // 40 is already heavy
  
  // Recursive Fibonacci (very inefficient for large n)
  function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
  const start = Date.now();
  const result = fibonacci(n);
  const duration = Date.now() - start;
  
  res.json({
    fibonacci: `fibonacci(${n})`,
    result: result,
    duration: `${duration}ms`,
    note: 'Recursive implementation - O(2^n) complexity'
  });
});

// Iterative Fibonacci (more efficient)
app.get('/api/load/cpu/fibonacci-iterative/:n', (req, res) => {
  const n = parseInt(req.params.n) || 1000000;
  
  const start = Date.now();
  let a = 0n, b = 1n; // Use BigInt for large numbers
  
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  
  const duration = Date.now() - start;
  
  res.json({
    fibonacci: `fibonacci(${n})`,
    result: a.toString(),
    duration: `${duration}ms`,
    iterations: n
  });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});