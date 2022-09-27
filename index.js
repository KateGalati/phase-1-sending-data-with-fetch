// Add your code here

// STEP ONE write a function called submitData 
// submitData will take two strings as arguments (user's name and user's email)
// STEP TWO within submitData write a POST request to URL below using fetch


const submitData = (name, email) => {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }, 
    //The body should have name and email passed in as arguments to submitData
    //These arguments should be assigned to name and email keys within an object
    //Then the object should be stringified
    body: JSON.stringify( {
        name: "Steve",
        email: "steve@steve.com",
    })
    })
    //STEP THREE 
    .then(res => res.json())
    .then(data => console.log(data))
}





