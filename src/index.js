import http from 'http'; // eslint-disable-line import/no-nodejs-modules
import express from 'express';
import socket from 'socket.io';
import socketService from './services/SocketService.js';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import middleware from './middleware';
import api from './api';
import config from './config';

const app = express();
app.server = http.createServer(app);

/**
 * Initiates socket.io for real-time updates
 */
const io = socket(app.server);
socketService(io);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit: config.bodyLimit
}));

app.use(bodyParser.urlencoded({
	extended: true
}));

// internal middleware
app.use(middleware({
	config
}));

// serve frontend code
app.use(express.static('public'));

// api router
app.use('/api', api(io));

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`); // eslint-disable-line no-console
});

export default app;