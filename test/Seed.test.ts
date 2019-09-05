import { MAINNET_BYTE, TESTNET_BYTE, Seed, config } from '../src';

const MAINNET = {
    PHRASE: 'boil hip drill joke ability ghost match dizzy opera interest damage cute critic happy eye',
    ADDRESS: '3EF79BQeXJXKRJE4NSrNDu7AYoVLzFaXQR8',
    PUBLIC_KEY: 'ChziWp2CBVfoYN1CdYzoSvQL4xMNB7mjKaXgMFrVJoPW',
    PRIVATE_KEY: '6wa1xTfbg6KeGfj3mRPAVMeTYMVghFqBvpnAwWfiQHSu'
};

const TESTNET = {
    PHRASE: 'boil hip drill joke ability ghost match dizzy opera interest damage cute critic happy eye',
    ADDRESS: '3JGVB2VdQQKxBUZTEh3hQkMtR6XvRRAVGdB',
    PUBLIC_KEY: 'ChziWp2CBVfoYN1CdYzoSvQL4xMNB7mjKaXgMFrVJoPW',
    PRIVATE_KEY: '6wa1xTfbg6KeGfj3mRPAVMeTYMVghFqBvpnAwWfiQHSu'
};

let configure: typeof TESTNET | typeof MAINNET;

describe('Seed tests', () => {
    [MAINNET_BYTE, TESTNET_BYTE].forEach((byte) => {

        describe(`Network byte is ${byte}`, () => {

            beforeEach(() => {
                configure = byte === MAINNET_BYTE ? MAINNET : TESTNET;
                config.set({ networkByte: byte });
            });

            it('get address from phrase', () => {
                const seed = Seed.fromExistingPhrase(configure.PHRASE);
                expect(seed.address).toBe(configure.ADDRESS);
            });

            it('get public key from phrase', () => {
                const seed = Seed.fromExistingPhrase(configure.PHRASE);
                expect(seed.keyPair.publicKey).toBe(configure.PUBLIC_KEY);
            });

            it('get private key from phrase', () => {
                const seed = Seed.fromExistingPhrase(configure.PHRASE);
                expect(seed.keyPair.privateKey).toBe(configure.PRIVATE_KEY);
            });
        });

    });
});
