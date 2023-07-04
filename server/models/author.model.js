const mongoose = require("mongoose"); 


const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "nane is required"],
            minLength: [3, "Name must be 3 characters"],
        }

    },
    { timestamps: true }
);


const Author = mongoose.model("Author", AuthorSchema);


module.exports = Author;