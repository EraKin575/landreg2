const IPFS = require('ipfs-api');
const projectId = '2PcufIeW596hOBCWZc4BY46qmRm';
const projectSecret = 'aa9330b2eb61fbaa6d5c0e9247b4b460';
const ipfs = new IPFS({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString('base64')}`
  }
});

export default ipfs;