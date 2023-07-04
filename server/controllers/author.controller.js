const Author = require("../models/author.model.js");

module.exports = {

    
    getAllAuthors: (req, res) => {
        Author.find({})
        .then((allAuthors) => res.json(allAuthors))
        .catch((err) => console.log(err));
    },
    createAuthor: (req, res) => {
        Author.create(req.body)
        .then((newAuthor) => res.json(newAuthor))
        .catch((err) => res.status(400).json(err));

    },
    getOneAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then((oneAuthor) => res.json(oneAuthor))
            .catch((err) => console.log(err));
    },

    updateAuthor: (req, res) =>{
        Author.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedAuthor) => {
                console.log(updatedAuthor);
                res.json(updatedAuthor);
            })
            .catch((err) => console.log(err))
    },


    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then((deletedAuthor) => {
                console.log(deletedAuthor);
                res.json(deletedAuthor);
            })
            .catch((err)=> console.log(err))
    }



}

