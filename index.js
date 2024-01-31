let apiURL = "http://127.0.0.1:3000/index.html";
let partyData = {
  name: 'New Party',
  location: 'Some Location',
  date: 'Some Date'
};

fetch(http://127.0.0.1:3000/index.html,{
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(partyData)
})

.then(response =>) {
  if(!response.ok) {
    throw new Error("HTTP error" + response.status")
  }
  return response.json();
}

.then(data => {
  console.log(data);
})
.catch(function () {
  console.log("An error occured while fetching the data");
});




