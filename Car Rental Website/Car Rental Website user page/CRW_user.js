
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
const formattedTime = year + '-' + month + '-' + day;
const formattedDate = year + '-' + month + '-' + (day + 1);
document.querySelector('.book_date').value = formattedTime;
document.querySelector('.return_date').value = formattedDate;

