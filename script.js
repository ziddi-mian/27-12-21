// Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.

function lower_am_pm(dt) 
{ 
   return dt.getHours() < 12 ? 'AM' : 'PM';
}

dt = new Date(); 
console.log(lower_am_pm(dt)); 

dt = new Date(1989, 10, 1); 
console.log(lower_am_pm(dt));


// 31. Write a JavaScript function to get uppercase Ante meridiem and Post meridiem.   function upper_am_pm(dt) 
{ 
    return dt.getHours() < 12 ? 'AM' : 'PM';
  }
  
  dt = new Date(); 
  console.log(upper_am_pm(dt)); 
  
  dt = new Date(1989, 10, 1); 
  console.log(upper_am_pm(dt));

  //   Write a JavaScript function to swatch Internet time (000 through 999).   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(internet_time(dt));
// 812

function internet_time(dt) 
{ 
  return Math.floor((((dt.getUTCHours() + 1) % 24) + dt.getUTCMinutes() / 60 + dt.getUTCSeconds() / 3600) * 1000 / 24);
}

dt = new Date(); 
console.log(internet_time(dt)); 

dt = new Date(1989, 10, 1); 
console.log(internet_time(dt));


// Write a JavaScript function to get 12-hour format of an hour with leading zeros.   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(hours_with_zeroes(dt));
// "12"

function hours_with_zeroes(dt) 
{ 
  return ((dt.getHours() % 12 || 12) < 10 ? '0' : '') + (dt.getHours() % 12 || 12);
}

dt = new Date(); 
console.log(hours_with_zeroes(dt)); 

dt = new Date(1989, 10, 1); 
console.log(hours_with_zeroes(dt));


// Write a JavaScript function to get 24-hour format of an hour without leading zeros.   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(hours_without_zeroes(dt));
// 0]


function hours_without_zeroes(dt) 
{ 
  return dt.getHours();
}

dt = new Date(); 
console.log(hours_without_zeroes(dt)); 

dt = new Date(1989, 10, 1); 
console.log(hours_without_zeroes(dt));


// Write a JavaScript function to get minutes with leading zeros (00 to 59).   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(minutes_with_leading_zeros(dt));
// "00"


function minutes_with_leading_zeros(dt) 
{ 
  return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}

dt = new Date(); 
console.log(minutes_with_leading_zeros(dt)); 

dt = new Date(1989, 10, 1); 
console.log(minutes_with_leading_zeros(dt));