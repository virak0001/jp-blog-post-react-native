import axios from 'axios';
// Set config defaults when creating the instance
const config = {
  baseURL: 'https://4c6b-117-20-113-64.ap.ngrok.io/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
};
export const instance = axios.create({
  ...config,
});
