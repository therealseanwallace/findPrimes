let num = 1;
      let primeCount = 0;
      function getUserInput() {
        let numberInput = window.prompt("Which number prime would you like to find?");
        return (numberInput);
      }

      function isPrime(num) {
        let sqrtnum=Math.floor(Math.sqrt(num));
        let prime = num != 1;
        for(var i=2; i<sqrtnum+1; i++) { 
          if(num % i == 0) {
            prime = false;
            break;
          }
          else {
            prime = true;
          }
        }
      return prime;
      }

      function findPrimes() {
        primeInput = getUserInput();
        while (primeCount < primeInput) {
          if (isPrime(num) === true) {
            primeCount ++;
            console.log(num, "is prime number", primeCount);
          }
          num ++;
        }
        return("Program complete.");
      }