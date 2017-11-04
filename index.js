const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.set ('view engine', 'hbs');
app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
//   extended: false
// }))
// app.use(bodyParser.json())
// app.use(methodOverride("_method"))


app.listen(port, () =>{
	console.log(`listening at ${port}`);
})
