import { useState } from 'react';
import axios from 'axios';

/** @param {{ url: string; method: 'get' | 'post' | 'put'; body: Record<string, string>; onSuccess: () => void }}  */
export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState([]);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await axios[method]?.(url,
        {...body, ...props});

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops...</h4>
          <ul className="my-0">
            {err.response.data.errors.map(err => <li key={err.message}>{err.message}</li>)}
          </ul>
        </div>
      );
    }
  };

  return {
    doRequest, errors
  };
};
