import { expect } from 'chai';
import { NoirNode } from '../utils/noir/noirNode.js';

const noir = new NoirNode();

describe('Sample noir circuit tests using typescript wrapper', function() {
    before(async () => {
        await noir.init();
    });

    after(async() => {
        await noir.destroy();
    });

    it("Verify successfully for correct input", async () => {
        
        let inputs = {x : 5, y: 6};
        const witness = await noir.generateWitness(inputs);
        const proof = await noir.generateProof(witness);
        
        expect(proof instanceof Uint8Array).to.be.true;

        const verified = await noir.verifyProof(proof);    
        
        expect(verified).to.be.true;
    });
});

