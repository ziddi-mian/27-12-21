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