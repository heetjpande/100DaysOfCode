# Basic concepts regarding Local and string storage 

# Local Storage - 
  localStorage.setItem('key', 'value') / getItem('key') - To set or get item from local storage
  
  
# To store an array as a key Value -
  setItem('key', JSON.stringify(Arrayname))
  
  to get - getItem - JSON.parse(localstorage.getItem)
  
  

# Basic concepts regarding Date and Time 

? new Date() => current date //(Type object)[mm-dd-yy format]

getDay() - sunday,monday etc. (indexing from 0 for sunday)

getTime() - Time in sec (Time format min-hour-sec) 
