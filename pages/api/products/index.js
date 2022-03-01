

const domainURL = 'http://172.17.0.1:3001/';

export async function getProducts() {

  let products;
    try {
      products = await fetch(domainURL.concat('products'))
      .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong with the request");
      }
      return response.json();
    });
    } catch (e) {
    console.log("...logging error to our system...");
    throw e;
    }
  return products;
}

export async function calculateDiscount(shoppingCartProductsRequest){
      console.log('calculateDiscount',shoppingCartProductsRequest)
     return await fetch(domainURL.concat('shoppingCart?cartProducts=')
     .concat(shoppingCartProductsRequest),{
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    })
      .then((response) => response.json()
      .catch(err => {
            console.err(`'${err}' happened!`);
            return {};
      }))
      .then((json) => {
            return  json;
      })
      .catch((err) => { console.log('fetch request failed: ', err)})
    
}
