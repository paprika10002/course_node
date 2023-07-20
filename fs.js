const f= require('fs')


/* let ff=f.readFileSync('file.txt')

console.log('data of file '+ff)
 */

// f.writeFileSync('fil2.txt', 'heloo pupil')

// f.appendFileSync('fil2.txt',' this is updated')


 //f.unlinkSync('file1txt')


 //Directoies

//  f.mkdirSync('mydirectory')

let dpath='C:\\Users\\Lenovo\\Desktop\\node js course\\mydirectory'

let fcontent=f.readdirSync(dpath)

console.log('Folder content',fcontent
)

let doesExist=f.existsSync('mydirectory')

console.log(doesExist)

f.rmdirSync('mydirectory')