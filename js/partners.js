// array.forEach((elem) => {
//   console.log(elem)
// })
const renderItems = (data) => {
  data.forEach((elem) => {
    console.log(elem)
  })
}

fetch('https://deliveryfood-7f48b-default-rtdb.firebaseio.com/db/partners.json')
  .then((response) => response.json())
  .then((data) => {
    renderItems(data)
  })
  .catch((error) => {
  console.log(error)
})