
// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//isPhoneNumber function
test('isPhoneNumber should return true for valid phone number 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber should return true for valid phone number (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber should return false for invalid phone number 123-45-7890', () => {
  expect(isPhoneNumber('123-45-7890')).toBe(false);
});

test('isPhoneNumber should return false for invalid phone number 123-456-789', () => {
  expect(isPhoneNumber('123-456-789')).toBe(false);
});

//isEmail function
test('isEmail should return true for valid email user@domain.com', () => {
  expect(isEmail('user@domain.com')).toBe(true);
});

test('isEmail should return true for valid email test@test.net', () => {
  expect(isEmail('test@test.net')).toBe(true);
});

test('isEmail should return false for invalid email without @ symbol', () => {
  expect(isEmail('userdomaincom')).toBe(false);
});

test('isEmail should return false for invalid email with multiple @ symbols', () => {
  expect(isEmail('user@domain@com')).toBe(false);
});

//isStrongPassword function
test('isStrongPassword should return true for valid password a1234', () => {
  expect(isStrongPassword('a1234')).toBe(true);
});

test('isStrongPassword should return true for valid password Password_123', () => {
  expect(isStrongPassword('Password_123')).toBe(true);
});

test('isStrongPassword should return false for password starting with number 1abc', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('isStrongPassword should return false for password with invalid characters a@bc', () => {
  expect(isStrongPassword('a@bc')).toBe(false);
});

//isDate function
test('isDate should return true for valid date 1/1/2022', () => {
  expect(isDate('1/1/2022')).toBe(true);
});

test('isDate should return true for valid date 12/31/2022', () => {
  expect(isDate('12/31/2022')).toBe(true);
});

test('isDate should return false for invalid date with letters 12/AB/2022', () => {
  expect(isDate('12/AB/2022')).toBe(false);
});

test('isDate should return false for invalid date format 2022/12/31', () => {
  expect(isDate('2022/12/31')).toBe(false);
});

//isHexColor function
test('isHexColor should return true for valid 3-digit hex color #abc', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('isHexColor should return true for valid 6-digit hex color #abcdef', () => {
  expect(isHexColor('#abcdef')).toBe(true);
});

test('isHexColor should return false for hex color with invalid characters #xyz', () => {
  expect(isHexColor('#xyz')).toBe(false);
});

test('isHexColor should return false for hex color with wrong length #abcde', () => {
  expect(isHexColor('#abcde')).toBe(false);
});