// write your func here
function isPalindrome(str) {
    const cleanStr = str.replace(/\s+/g, '').toLowerCase();
    
    const reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
  }
  
  console.log(isPalindrome("madam"));          
  console.log(isPalindrome("سلام"));           
  console.log(isPalindrome("نیما تیمان"));     