const mongoose = require('mongoose');
const url = 'mongodb+srv://prabhakar:Pj86390@cluster0.cmzi8.mongodb.net/EDB?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') } else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');