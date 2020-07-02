
module.exports.index = function (req, res) {
    res.status(200).json("Hello POST");
}

module.exports.createPost = function (req, res) {
    const {name, age} = req.body
    console.log(`Name : ${name}, Age : ${age}`)

    res.status(200).json("CREATE POST");
}


module.exports.getPostById = (req, res) => {
    res.status(200).json("Post");
}

module.exports.createPost =   (req, res) => {
    console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}

module.exports.updatePost =   (req, res) => {
    console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}
