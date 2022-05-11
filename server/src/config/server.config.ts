import * as express from 'express';
import * as session from 'express-session';
import * as NodeCache from 'node-cache';

import { join } from 'path';
import { readFileSync } from 'fs';
import { logger } from './logger';
import { json } from 'body-parser';
import { GlobalConfig } from '../global-types/config.types';

const server = express.default();

export const config: GlobalConfig = JSON.parse(readFileSync(join(__dirname, './../../../config.json')).toString());

server.use(session.default({
    secret: config.secret,
    resave: true,
    saveUninitialized: true
}));
server.use(logger);
server.use(json());
server.use(express.static(join(__dirname, '../../../../client/build')));
console.log(join(__dirname, '../../../../client/build'));

export const app = server;
export const cache = new NodeCache.default();