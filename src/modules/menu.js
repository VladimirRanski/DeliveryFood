export const menu = () => {
  const restaurant = 'food-band'
  
  const renderItems = (data) => {
    data.forEach((elem) => {
      console.log(elem)
    })
  }
  
  fetch(`https://deliveryfood-7f48b-default-rtdb.firebaseio.com/db/${restaurant}.json`)
    .then((response) => response.json())
    .then((data) => {
      renderItems(data)
    })
    .catch((error) => {
      console.log(error)
    })
}

