import axios from 'axios';
import {Platform} from 'react-native';

console.log(Platform.OS)

const axiosInstance = axios.create({
  // baseURL:
  //   Platform.OS === 'android'
  //     ? 'http://10.0.2.2:3030'
  //     : 'http://localhost:3030',  
  baseURL: 'http://3.141.200.250:3030',
  withCredentials: true,
});

export default axiosInstance;
