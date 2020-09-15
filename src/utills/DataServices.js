import axios from 'axios';
import { productsEndPoint } from '../Config';

export const getProducts = () => {
  axios.get(productsEndPoint)
      .then(res => {
          debugger;
      });
}


