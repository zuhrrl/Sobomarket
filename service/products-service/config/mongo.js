const mongoose = require("mongoose"), mongo_server = "mongodb://127.0.0.1:27017/test"

// connecting to mongo database
mongoose
    .connect(mongo_server)
    .then(() => console.log("mongoDB Connected"))
    .catch((err) => console.log(err));



module.exports = {
    database: mongoose ,
};