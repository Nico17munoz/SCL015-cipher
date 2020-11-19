// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      const outputEsperado = "HIJKLMNOPQRSTUVWXYZABCDEFG";
      const outputReal = cipher.encode(33 /*offset*/, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      expect(outputReal).toBe(outputEsperado);
    });

  });

});
