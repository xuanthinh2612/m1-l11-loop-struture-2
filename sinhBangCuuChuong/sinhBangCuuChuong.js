let a;
let b;
let c;

c = "<table align='center' border='1' cellspacing='0';' >";
for (a = 1; a <= 10; a++) {
    c = c + '<tr>';
    for (b = 1; b < 10; b++) {
        c = c + '<td style="width: 100px">' + b + 'x' + a +'=' +a*b+ '</td>';
    }
    c = c + '</tr>';
}
c = c + '</table>';
document.write(c);