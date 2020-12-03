const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

	first_name: String,

	rollno: Number,
	email: String,
	course: String,
	branch: String,
	institution: String,
	phone: Number,
	subject: String,
	hostel: String,
	event0: String,
	event1: String,
	event2: String,
	event3: String,
	event4: String,
	event5: String,
	event6: String,
	event7: String,
	event8: String,
	event9: String,
	room: String
});

module.exports = mongoose.model('Student',studentSchema);