'use strict';

let assert = require('assert'),
    Morse = require('./morse');

describe('Roman Encryption', () => {

    it('should be loaded', () => {
        assert.equal(true, true);
    })

    it('should return W', () => {
        assert.equal(Morse('.--'), 'W');
    })

    it('should return WILD', () => {
        assert.equal(Morse('.-- .. .-.. -..'), 'WILD');
    })

    it('should return WILD CODE', () => {
        assert.equal(Morse('.-- .. .-.. -..  -.-. --- -.. .'), 'WILD CODE');
    })
    
})