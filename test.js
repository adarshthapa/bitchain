const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(93424, '32akjdf3k392kl234u', '4kjkd9ka9a9sk323w5');

bitcoin.createNewTransaction(100, 'ADARSH9d8sdkfs9sdf', 'MARK8sdfksdf83k328');

bitcoin.createNewBlock(79890, '088dfkdsk339s3l232', '532mn32349iuj8s353');

bitcoin.createNewTransaction(70, 'a3423dfi44843523j3', '34jk4a93kj29ia4742');
bitcoin.createNewTransaction(500, '45kljkad83nsf8sdf3', '09lkjlkdfsdfkksf31');
bitcoin.createNewTransaction(1500, '923jlas9ijja3kdk2j', '234jlks83j0343233d');

bitcoin.createNewBlock(903825, 'k8s4kad32432k30ljl', '532mn32349iuj8s33r');

console.log(bitcoin);