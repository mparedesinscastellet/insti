function saymyname() {
  console.log('hello this is Ernest');
}

function writeCountdown(num) {
  console.log(num);
}

function countdown() {
  let count = 10; // rename to count

  waitOneSecAndCount = function () {
    if (count >= 0) {
      writeCountdown(count);
      count--;

      setTimeout(() => {
        waitOneSecAndCount();
      }, 1000);
    }
  };

  waitOneSecAndCount()
}

saymyname();
countdown();


