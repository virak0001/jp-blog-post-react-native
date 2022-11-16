import axios from 'axios';
// Set config defaults when creating the instance
const config = {
  baseURL: 'https://3503-116-212-132-173.ap.ngrok.io/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
};
export const instance = axios.create({
  ...config,
});
