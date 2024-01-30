export default {

    base_url: "http://127.0.0.1:8000",
  
    get: async function (endpoint:any) {
      const data = await fetch(`${this.base_url}/${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
      return await data.json();
    },
    post: async function (formData:any, endpoint:any) {
      const data = await fetch(`${this.base_url}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: formData
      });
      return await data.json();
    },
  };
  


