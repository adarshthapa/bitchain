const Blockchain = require('./blockchain');
const bitchain = new Blockchain();

const previousBlockHash = '7sdfjsdf8sduk39u3kj239kkjdf323j4'
const currentBlockData = [
    {
        amount: 10,
        sender: 'ADARSHksdlkjf923k23j43',
        recipient: 'MARK872342k34234982324'
    },
    {
        amount: 50,
        sender: '8sf9sfkjfkdsjf98u23n2n3',
        recipient: 'kldfja9sfd8ui2j3k923332'
    },
    {
        amount: 100,
        sender: 'skdfjsao823il2j39832',
        recipient: 'sdjfio32i2j3iojd233'
    }
];

console.log(bitchain.hashBlock(previousBlockHash, currentBlockData, 22289));