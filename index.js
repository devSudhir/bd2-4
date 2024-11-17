const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

const ages = [25, 30, 18, 22, 27];
const marks = [
  {
    name: 'Rahul',
    rollNumber: 101,
    marks: 85,
  },
  {
    name: 'Sita',
    rollNumber: 102,
    marks: 95,
  },
  {
    name: 'Amit',
    rollNumber: 103,
    marks: 70,
  },
];

const cars = [
  {
    make: 'Maruti',
    model: 'Swift',
    mileage: 15000,
  },
  {
    make: 'Hyundai',
    model: 'i20',
    mileage: 25000,
  },
  {
    make: 'Tata',
    model: 'Nexon',
    mileage: 30000,
  },
];

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

function sortAscending(ages) {
  return ages.sort((a, b) => a - b);
}

app.get('/ages/sort-ascending', (req, res) => {
  const copyAges = [...ages];
  const sortedAges = sortAscending(copyAges);
  res.json(sortedAges);
});

function sortDescending(ages) {
  return ages.sort((a, b) => b - a);
}

app.get('/ages/sort-descending', (req, res) => {
  const copyAges = [...ages];
  const sortedAges = sortDescending(copyAges);
  res.json(sortedAges);
});

function studentsByMarksDescending(studentMarks) {
  return studentMarks.sort((a, b) => b.marks - a.marks);
}

app.get('/students/sort-by-marks-descending', (req, res) => {
  const studentMarksCopy = [...marks];
  res.json(studentsByMarksDescending(studentMarksCopy));
});

function sortCarMileageInDescending(cars) {
  return cars.sort((a, b) => b.mileage - a.mileage);
}

app.get('/cars/sort-by-mileage-descending', (req, res) => {
  const carCopy = [...cars];
  res.json(sortCarMileageInDescending(carCopy));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
