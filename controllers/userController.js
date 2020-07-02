let userslist = [
    { id: 1, name: 'noon' },
    { id: 2, name: 'noon2' },
    { id: 3, name: 'noon3' }
]

module.exports.getAllUser = (req, res) => {
    res.status(200).json(userslist)
}

module.exports.getUserById = (req, res) => {
    console.log(`ID : ${req.params.id}`)

    const data = userslist.find(x => x.id == req.params.id)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(200).json('Not found data')
    }
}

module.exports.createUser = (req, res) => {
    console.log(req.body)

    let user = req.body
    const { id } = req.body
    console.log(`ID : ${id}`)
    let data = userslist.find(x => x.id == id)
    if (data) {
        res.status(201).json('Duplicate data')
    } else {
        userslist.push(user)
        res.status(201).json(userslist)
    }
}

module.exports.updateUser = async (req, res) => {
    console.log(req.body)
    const { id } = req.body
    const user = await findUserById(id)
    if (user) {
        console.log(`User : ${user.id}`)
    } else {
        console.log(`Not Found User`)
        res.status(404).send({ message: "Not found User with id " + id })
    }

    // res.status(200).json(user)
}

async function findUserById(id) {
    return userslist.find(item => {
        if (item.id === id) {
            return item
        } else {
            return null
        }
    })
}