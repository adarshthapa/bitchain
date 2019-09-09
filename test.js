const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(7839, 'a3423dfi44843523kdj3', '34jk4a93kj29jk3oia47');
bitcoin.createNewBlock(3424, '45kljkad83nsf8lasdf3', '09lkjlkdfsdfkj4j4ksf');
bitcoin.createNewBlock(1232, '923jlas9ijja3kkadk2j', '234jlks83jsaijs34323');

console.log(bitcoin);