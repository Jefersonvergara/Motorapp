const express = require('express');
const cors = require('cors');
const { db } = require('../database/config');
const { userRouter } = require('../routes/users.routes');
const { repairRouter } = require('../routes/repairs.routes');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Path Routes
        this.paths = {
            user:'/api/v1/user',
            repair:'/api/v1/repair'
        }


        //Connect to db
        this.database();

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.paths.user,userRouter),
        this.app.use(this.paths.repair,repairRouter)

    }

    database() {
        db.authenticate()
            .then(() => console.log('Database authenticated'))
            .catch(err => console.log(err));

        //relations


        db.sync()
            .then(() => console.log('Database synced'))
            .catch(err => console.log(err));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server Running On Por', this.port)
        })
    }

}

module.exports = Server