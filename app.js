// console.log("Praketa Saxena")
const express = require('express')
const app = express();
const morgan =require('morgan')

const  messageCheck =require('./func')
const  func = require('./test')

app.use(morgan('dev'));

app.listen(8000,()=>{console.log('Express Server is listening on port 8000')})

//SUM
app.get('/sum',(req,res)=>{
  const {a,b}=req.query;
  
  const intA =parseInt(a);
  const intB =parseInt(b);
  const sum = intA+intB;

  res.send(`The sum of ${a} and ${b} is ${sum}`);


});


//CIPHER
var caesarShift = function(str, amount) {

	// Wrap the amount
	if (amount < 0)
		return caesarShift(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

	// All done!
	return output;

};


app.get('/cipher', (req, res) => {

  const  {text,shift}=req.query;
  const string =func(text,shift)
  res.send(`Apple is crypted to ${string}`);

})

//LOTTO

app.get('/lotto', (req, res) => {
    const  arr=req.query.a.split(",");
    const intArr=arr.map(elem=> {return parseInt(elem, 10)});
    // console.log(intArr)
    const message=messageCheck(intArr);
    
    res.send(message);

  })

