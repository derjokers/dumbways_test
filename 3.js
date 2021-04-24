function cetak_gambar(panjang){
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j < panjang; j++) {
            if (i % 2 == 0){
                hasil += '* '
                
            } else if (j > 0 && j < panjang-1){
                hasil += '= '
            } else if (j == 0 || j == panjang-1){
                hasil += '* '
            }
        }
        hasil += '\n';
    }
    return hasil;
}

console.log(cetak_gambar(3))
console.log(cetak_gambar(5))
console.log(cetak_gambar(7))