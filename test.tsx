import { generateRandomPassword, Strength } from "./random";

describe('generateRandomPassword', () => {
     test('should generate a password of specified length', () => {
          const length = 12;
          const password = generateRandomPassword(length, 'high');
          expect(password.length).toBe(length);
      });

      test('should generate a low strength password with only lowercase letters', () => {
          const password = generateRandomPassword(12, 'low');
          expect(password).toMatch(/^[a-z]+$/);
      });

      test('should generate a medium strength password with lowercase, uppercase letters, and numbers', () => {
          const password = generateRandomPassword(12, 'medium');
          expect(password).toMatch(/[a-z]/);
          expect(password).toMatch(/[A-Z]/);
          expect(password).toMatch(/[0-9]/);
      });

      test('should generate a high strength password with lowercase, uppercase letters, numbers, and special characters', () => {
          const password = generateRandomPassword(12, 'high');
          expect(password).toMatch(/[a-z]/);
          expect(password).toMatch(/[A-Z]/);
          expect(password).toMatch(/[0-9]/);
          expect(password).toMatch(/[!@#$%^&*()_+\[\]{}|;:,.<>?]/);
      });

      test('should generate a password of minimum length 1', () => {
          const length = 1;
          const password = generateRandomPassword(length, 'high');
          expect(password.length).toBe(length);
      });

      test('should include at least one character from each required set for high strength', () => {
          const password = generateRandomPassword(12, 'high');
          const lowercase = /[a-z]/;
          const uppercase = /[A-Z]/;
          const numeric = /[0-9]/;
          const special = /[!@#$%^&*()_+\[\]{}|;:,.<>?]/;
  
          expect(lowercase.test(password)).toBe(true);
          expect(uppercase.test(password)).toBe(true);
          expect(numeric.test(password)).toBe(true);
          expect(special.test(password)).toBe(true);
      });
  
});