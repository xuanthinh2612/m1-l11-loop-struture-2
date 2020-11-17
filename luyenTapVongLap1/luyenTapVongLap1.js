// Bài 1====================
let i;

function hambai1() {
    for (i = 1; i <= 100; i++) {
        console.log(i);
        if (i == 99) {
            alert('hoàn thành');
        }
    }
}

/* bài 2=================*/
function hambai2() {
    let nhietdo = +prompt('Nhập vào nhiệt độ hiện tại');
    while (nhietdo < 20) {
        alert('Vui lòng tăng nhiệt độ');
        nhietdo = +prompt('Nhập vào nhiệt độ hiện tại')
        while (nhietdo > 100) {
            alert('Vui lòng giảm nhiệt độ hiện tại');
            nhietdo = +prompt('Nhập vào nhiệt độ hiện tại')
        }
    }
    alert('ok');
}

//Bài 3=========================
function hambai3() {
    let fibonaccia = 0;
    let fibonaccib = 1;
    let i;
    let fibonaccic;
    let ds = '0' + ';' + '1' + ';'
    for (i = 1; i <= 18; i++) {
        fibonaccic = fibonaccia + fibonaccib;
        fibonaccia = fibonaccib;
        fibonaccib = fibonaccic;
        ds = ds + fibonaccic + ';';
    }
    console.log(ds);

   /* var fibonacci_series = function (n)
    {
        if (n===1)
        {
            return [0, 1];
        }
        else
        {
            var s = fibonacci_series(n - 1);
            s.push(s[s.length - 1] + s[s.length - 2]);
            return s;
        }
    };

    console.log(fibonacci_series(19));*/
}

//Bài 4=========================

function hambai4() {
    let fibonaccia = 1;
    let fibonaccib = 2;
    let fibonaccic;
    let ds = '0' + ';' + '1' + ';' + '2' + ';'
    while (fibonaccic % 5 !== 0) {
        fibonaccic = fibonaccia + fibonaccib;
        fibonaccia = fibonaccib;
        fibonaccib = fibonaccic;
        // break;
    }
    console.log(fibonaccic);

}

//Bài 5======================
function hambai5() {
    let fibonaccia = 1;
    let fibonaccib = 2;
    let fibonaccic = 0;
    let tong = fibonaccia + fibonaccib;
    let ds = '0' + ';' + '1' + ';' + '2' + ';'
    for (i = 1; i <= 20; i++) {
        fibonaccic = fibonaccia + fibonaccib;
        fibonaccia = fibonaccib;
        fibonaccib = fibonaccic;
        tong = tong + fibonaccic;
    }
    console.log(tong);

}

//Bài 6======================
function hambai6() {
    let count;
    let i = 1;
    let tong = 0;
    for (count = 1; count <= 30; i++) {
        // i%7==0?(count=count+1);console.log(i):i++;
        if (i % 7 == 0) {
            count = count + 1;
            tong = tong + i;
        }
    }
    console.log(tong);
}

//Bài 7======================
function hambai7() {

    for (i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else {
            console.log(i);
        }
    }
}

//Bài 8======================
function hambai8() {
    let number1 = +prompt('Nhập vào khoảng từ số: ');
    let number2 = +prompt('tới số: ');
    let i, number3;
    number3 = Math.round(Math.random() * (number2 - number1)) + number1;
    console.log(number3);
    for (i = 1; i < 4; i++) {
        let userinput = +prompt('Hãy chọn con số may mắn của bạn?');
        if (userinput == number3) {
            alert('Bạn đã đoán trúng');
            break;
        }
    }
    i == 4 ? alert('Bạn đã thua') : alert('Bạn đã thắng');
}
