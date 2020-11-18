function isPrime(n) {
    if (n<2) return false;
    for (let i=2;i<=Math.sqrt(n);i++) {
        if (n%i==0) return false;
    }
    return true;
}
function countPrime () {
    let count;
    let n=1;
    let m = +prompt('Ban muon hien thi bao nhieu so nguyen to dau tien?')
    for (count=0; count<m;n++) {
        if (isPrime(n)) {
            count++
            console.log(n);
        }
    }
}