import axios from 'axios';
import {Platform} from 'react-native';

console.log(Platform.OS)

const axiosInstance = axios.create({  
  baseURL: 'http://3.141.200.250:3030',
  withCredentials: true,
});

export default axiosInstance;
