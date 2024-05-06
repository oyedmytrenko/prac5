var name = prompt('Input name','');
var position = prompt('Input position','');
var phone = prompt('Input phone','');

var visitcard = '<div class="visit-card">' +
    '<img src="img/logo.png" alt="Logo" style="width: 50px; height: 50px; margin-right: 10px;">' +
    '<div class="info">' +
    '<b>' + name + '</b><br>' +
    '<i>' + position + '</i><br>' +
    '<font>' + phone + '</font>' +
    '</div>' +
    '</div>';

document.write('<table width="100%" border="0" align="center">');
for(var y = 0; y < 12; y++) {
    document.write('<tr>');
    for(var x = 0; x < 3; x++) {
        document.write('<td align="center">');
        document.write(visitcard);
        document.write('</td>');
    }
    document.write('</tr>');
}
document.write('</table>');