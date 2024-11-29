async function fetchCryptoPrices() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=brl"
  );
  const data = await response.json();
  displayPrices(data);
}

function displayPrices(prices) {
  for (const [key, value] of Object.entries(prices)) {
    const priceElement = document.querySelector(`#${key} .mostrar-valor`);
    
    if (priceElement) {      
      priceElement.innerText = `R$ ${value.brl.toFixed(2).replace('.', ',')}`;
    }
  }
}

window.onload = fetchCryptoPrices;