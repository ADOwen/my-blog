const { User } = require('../models');

const userController = {
  
  async createUser(req, res) {   
    /*   POST request template
        ----------------------
        {
          "username": "",
          "email": "",
          "password": ""
        }

    */
    try {
      const dbUserdata = await User.create(req.body)
      console.log(dbUserdata)

      res.json(dbUserdata)
        
    } catch (error) {
      res.status(500).json(error)
    }
  } 
}

module.exports = userController;