// bài 1===========================
function hambai1() {
    let fibonaccia = 0;
    let fibonaccib = 1;
    let i = 1;
    let fibonaccic;
    let ds = '0' + ';' + '1' + ';'
    while (i <= 18) {
        fibonaccic = fibonaccia + fibonaccib;
        fibonaccia = fibonaccib;
        fibonaccib = fibonaccic;
        ds = ds + fibonaccic + ';';
        i++;
    }
    console.log(ds);
}

//Bài 2==========================
function hambai2() {
    let giaithua = 1;
    let a = +prompt('Nhập vào số nguyên dương ');

    while (a <= 0) {
        a = +prompt('Vui lòng nhập lại vào số nguyên dương ');
    }
        for (; a >= 2; a--) {
            giaithua = giaithua * (a * --a);
        }
    alert(giaithua);
}


//Bài 3==========================
function hambai3() {
    let a, b, e, i;
    let c = '*';
    let d = '';
    for (a = 1; a <= 5; a++) {
        b = 0;
        while (b < a) {
            document.write('*');
            b++;
        }
        // e=5-b;
        // while (e>=1) {
        //     document.write('');
        //     e--;
        // }
        document.write('<br>');
    }
    document.write('<br><br><br>');

    for (a = 5; a >= 1; a--) {
        e = 1;
        while (e <= a) {
            document.write('*');
            e++;
        }
        document.write('<br>');
    }
    document.write('<br><br><br>');

    for (i = 1; i <= 5; i++) {
        let j = 1;
        while (j < i) {
            document.write('&nbsp&nbsp');
            j++;
        }
        let h = 5;
        while (h >= i) {
            document.write('*')
            h--;
        }
        document.write('<br>');
    }
    document.write('<br><br><br>');
    for (i = 1; i <= 5; i++) {
        let j = 5;
        while (j > i) {
            document.write('&nbsp&nbsp');
            j--;
        }
        let h = 0;
        while (h < i) {
            document.write('*')
            h++;
        }
        document.write('<br>');
    }
    document.write('<br><br><br>');
}
//Bài 4==========================
function hambai4 () {
    let j,i,g,h,l,m;
    for(i=0;i<=20;i++) {
        document.write('*');
    }
    for (m=0;m<3;m++) {
        document.write( '<br>'+'*')
        for (j=0;j<19;j++) {
            document.write('&nbsp&nbsp')
        }
        document.write('*')
    } document.write('<br>')
    for(i=0;i<=20;i++) {
        document.write('*');
    }
}
//Bài 5==========================
function hambai5 () {
    let a = +prompt('Nhập vào số tiền vay');
    let b = +prompt('Nhập vào lãi suất hàng tháng');
    let c = +prompt('Bạn muốn vay bao nhiêu tháng');
    let i, tongtien = 0 ;
    for (i=1; i<=c;i++) {
        a= a+a*b;
    }
    alert('tổng tiền phải trả là: '+ a)
}
//Bài 6==========================
function hambai6 () {

}
