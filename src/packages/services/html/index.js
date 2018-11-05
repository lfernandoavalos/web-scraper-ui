import request
  from '../request';


export default async (url) => {
  const response = await request(`http://localhost:3001?url=${url}`);
  const {
    data,
  } = response;

  return data;
};
