const timeUTC = () => {
  const currentTime = new Date().toLocaleTimeString();
  let currentDay = new Date().toLocaleString('en-us', {weekday: 'long'});
 
  document.querySelector('#time').textContent = currentTime;
  document.querySelector('#day').textContent = currentDay;
}
setInterval(timeUTC, 1000);
