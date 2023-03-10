const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT ||3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Student = require('./student');

app.use(express.static(path.join(__dirname ,'/public')));
app.use(express.static(path.join(__dirname ,'/public/event')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

mongoose.connect('mongodb+srv://WebsiteUser:participantsData@studentdata.ckuh4.mongodb.net/StudentData?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected',connected=>{
	console.log("Connected");
});




app.get('/',(req,res)=>{
	res.sendFile();
});

						
app.get('/teams', (req,res)=>{
	res.sendFile(__dirname + '/public/teams.html');
});
app.get('/linkedin', (req,res)=>{
	res.redirect('https://www.linkedin.com/company/electrical-engineers-legation-mmmut');
});
app.get('/eelfamily', (req,res)=>{
	res.sendFile(__dirname + '/public/eelfamily.html');
});

app.get('/register',(req,res)=>{
	res.sendFile(__dirname+'/public/registration.html');
});
app.get('/sitemap1',(req,res)=>{
	res.sendFile(__dirname+'/public/sitemap2.xml');
});
app.get('/imagesitemap',(req,res)=>{
	res.sendFile(__dirname+'/public/imagesitemap.xml');
});

app.get('/events',(req,res)=>{
	res.sendFile(__dirname+'/public/event/event.html');
});

app.get('/gallery',(req,res)=>{
	res.sendFile(__dirname+'/public/gallery.html');
});
app.get('/electropedia',(req,res)=>{
	res.redirect('https://docs.google.com/spreadsheets/d/107Wa3HqImuVG65lxnBCQmkzVlA251XCFK2SEPSyeIbg/edit?usp=drivesdk');
});
app.get('/climax',(req,res)=>{
	res.sendFile(__dirname+'/public/climax.html');
});
app.get('/developers',(req,res)=>{
	res.sendFile(__dirname+'/public/developers.html');
});
app.get('/siteadmin',(req,res)=>{
	res.sendFile(__dirname+'/public/siteadmin.html');
});
app.get('/mydevelopers',(req,res)=>{
	res.send("<H1>Mihir Srivastava</H1><H1>Faheem Ahmed</H1><H1>Yash Kumar</H1><H1>Ikchhit Kumar Pandey</H1>");
});
// app.all('*', (req, res) => {
// 	res.status(404).sendFile(__dirname+'/public/404error.html');
//   });
app.get("/:universalURL", (req, res) => {
	res.status(404).sendFile(__dirname+'/public/404error.html');
 });


app.post('/data',(req,res)=>{
	console.log(req.body);
	const student = new Student({

	first_name: req.body.first_name,

	rollno: req.body.rollno,
	email: req.body.email,
	course: req.body.course,
	branch: req.body.branch,
	institution: req.body.institution,
	phone: req.body.phone,
	subject: req.body.subject,
	hostel: req.body.hostel,
	event0: req.body.event0,
	event1: req.body.event1,
	event2: req.body.event2,
	event3: req.body.event3,
	event4: req.body.event4,
	event5: req.body.event5,
	event6: req.body.event6,
	event7: req.body.event7,
	event8: req.body.event8,
	event9: req.body.event9,
	room: req.body.room		
	});
	
	student.save()
	.then(result=>{
		console.log(result);

	})
	.catch(error=>{
		console.log(error);

	})
	res.sendFile(__dirname+'/public/congo.html')
});

// app.get('/mydevelopers',(req,res)=>{
// 	res.send("<H1>Mihir Srivastava</H1><H1>Faheem Ahmed</H1><H1>Yash Kumar</H1><H1>Ikchhit Kumar Pandey</H1>");
// });

app.listen(port, ()=>{
	console.log(`Server is running at http://localhost:${port}`);
});

