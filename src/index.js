const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ejs = require('ejs');
const colors = require('colors');

const app = express();

const HomeRoutes = require('./routes/home');
const UserRoutes = require('./routes/users');

//configuraciones
//!uso de SET para guardarombre de variales
app.set('appName', 'Express Course')
app.set('port', 4000)
//?case sentitive routing es para el programa 
//?diferencie entre MAYUSCULAS y minusculas
app.set('case sensitive routing', true)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// let products = [
//   {
//     id: 1,
//     name: "laptop",
//     price: 3000
//   }
// ]
//?middlewares
app.use(express.json());
app.use(morgan('dev'));

// app.get('/products', (req, res) => {
//   res.json(products)
// });

// app.post('/products', (req, res) => {
//   const newProduct = { id: products.length + 1, ...req.body }
//   products.push(newProduct)
//   res.send(newProduct)
// });


//app.put('/products/:id', (req, res) => {
//!esta variable es para guardar todos los nuevos datos
//const newData = req.body

//!buscar el producto
// const productFound = products.find((product) => product.id === parseInt(req.params.id)
// );

//!si esta o no esta el producto
// if (!productFound)
//   return res.status(404).json({
//     message: "product not found"
//   });

//!estio es actualizar los datos del array
// products = products.map(p => p.id === parseInt(req.params.id) ? { ...p, ...newData } : p);

//res.send('actualizando productos')

//   res.json({
//     message: 'actuailizando ...🤷‍♂️'
//   })

// });


// app.delete('/products/:id', (req, res) => {
//!buscar el producto
// const productFound = products.find((product) => product.id === parseInt(req.params.id)
// );
//!si esta o no esta el producto
// if (!productFound)
//   return res.status(404).json({
//     message: "product not found"
//   });
//!eliminar el producto
//   products = products.filter((p) => p.id !== parseInt(req.params.id))

//   console.log('elimando productos')
//   res.sendStatus(204)
// });

// app.get('/products/:id', (req, res) => {
//   const productFound = products.find((product) => product.id === parseInt(req.params.id)
//   )
//   if (!productFound) return res.status(404).json({
//     message: "product not found"
//   })
//   res.json(productFound)
// });

app.use(HomeRoutes)
app.use(UserRoutes)

app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')} `.rainbow)
