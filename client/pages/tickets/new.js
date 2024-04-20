import { useState } from "react";
import Router from 'next/router';
import useRequest from "../../hooks/useRequest";

const NewTicket = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: {
      title, price
    },
    onSuccess: () => Router.push('/')
  });

  const onSubmit = (event) => {
    event.preventDefault();

    doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return <div>
    <h1>Create a ticket</h1>
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
      </div>

      <div className="mb-3">
        <label>Price</label>
        <input value={price} onChange={(e) => setPrice(e.target.valueAsNumber)} className="form-control" type="number" min={0} />
      </div>
      { errors }
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>;
};

export default NewTicket;
