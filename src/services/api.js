import axios from 'axios';

axios.defaults.baseURL = 'https://uxcandy.com/~shapoval/test-task-backend/v2';

export const postLigin = (username, password) => {
  console.log(username, password);

  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);

  return axios
    .post('/login/?developer=Name', params)
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

export default { postLigin };
