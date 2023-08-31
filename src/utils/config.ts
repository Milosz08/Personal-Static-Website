/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: config.ts
 *   Created at: 2023-05-29, 01:50:56
 *   Last updated at: 2023-08-31, 19:52:11
 *   Project name: <<msph_projectName>>
 *
 *   LICENSE NOT SPECIFIED.
 *
 * For more info about use this code in your project, make contact with
 * original author. Project created only for personal purposes.
 */
import * as dotenv from 'dotenv';
import * as process from 'process';

declare let __EXPRESS_PORT__: number;

dotenv.config();

export default {
  PORT: __EXPRESS_PORT__ || 80,
  SESSION_KEY:
    process.env.SESSION_KEY || 'vtg290d203dkd0kd09kdgghhmnkj57jh4hg3fgv5h65h6h',
  CONNECTION_STRING:
    process.env.CONNECTION_STRING || 'mongodb://localhost:27017',
  DEF_USER_LOGIN: process.env.DEF_USER_LOGIN || 'admin',
  DEF_USER_EMAIL: process.env.DEF_USER_EMAIL || 'admin@example.com',
  DEF_USER_PASSWORD: process.env.DEF_USER_PASSWORD || 'Admin123@',
  SMTP_HOST: process.env.SMTP_HOST || '127.0.0.1',
  SMTP_USERNAME: process.env.SMTP_USERNAME || '',
  SMTP_PASSWORD: process.env.SMTP_PASSWORD || '',
  SMTP_SSL: process.env.SMTP_SSL || false,
  SMTP_PORT: process.env.SMTP_PORT || 25,
};
