let container,seats,count,total,movieSelect;
let ticketPrice;
$( document ).ready(function() {
   container = document.querySelector('.container');
   seats = document.querySelectorAll('.row .seat:not(.occupied)');
   count = document.getElementById('count');
   total = document.getElementById('total');
   movieSelect = document.getElementById('movie');
   console.log(movieSelect.options);
   ticketPrice = +movieSelect.options[movieSelect.selectedIndex].value;
   //Update total and count
   function updateSelectedCount() {
     const selectedSeats = document.querySelectorAll('.row .seat.selected');
     const selectedSeatsCount = selectedSeats.length;
     count.innerText = selectedSeatsCount;
     total.innerText = selectedSeatsCount * ticketPrice;
   }
   
   //Movie Select Event
   movieSelect.addEventListener('change', e => {
     ticketPrice = +e.target.value;
     updateSelectedCount();
   });
   
   //Seat click event
   container.addEventListener('click', e => {
     if (e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')) {
       e.target.classList.toggle('selected');
     }
     updateSelectedCount();
   });
 
  });
  
  function reserve() {
    alert("Karte su uspesno rezervisane!");
    window.location.href = "../projekcije/projekcije.html"
  }
  
