function isPrime() {
    let num = 1;
    let count = 0;
    for (count = 0; count < 20; ) {

        if (num === 2) {
            num++;
            count++;
        }
        else
            if (num > 1) {
                for (var i = 2; i < Math.sqrt(num); i++) {

                    if (num % i !== 0) {
                        num++;
                        count++;
                    } else if (num === i * i) {
                        num++
                    } else {
                        num++;
                    }
                }
            } else {
                num++;
            }
            document.write(num);
        }


}

