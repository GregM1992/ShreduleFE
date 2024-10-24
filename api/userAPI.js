const endpoint = process.env.NEXT_PUBLIC_API_URL;

const checkuser = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/checkuser/${Username}/${Password}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((data) => resolve(data))
  .catch(reject);
});




export default checkuser;
