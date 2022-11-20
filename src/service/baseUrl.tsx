import axios from 'axios';
// Set config defaults when creating the instance
const config = {
  baseURL: 'https://dd03-45-201-199-61.ap.ngrok.io/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
};
export const instance = axios.create({
  ...config,
});
