import { Client } from 'pg'

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

client.connect()
    .then(() => console.log('Connected to database'))
    .catch(err => console.error('Error connecting to database', err));

export default client;
