import app from './app.js'
import { db } from './database/db.js'

import './models/Task.js'

async function main() {
    try {
        await db.sync({ force: false })
        app.listen(4000);
        console.log("Server is listening on port", 4000)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();