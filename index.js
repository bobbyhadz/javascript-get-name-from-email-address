// EXAMPLE 1 - Extract the Name from an Email Address in JavaScript

const email = 'bobbyhadz@email.com';

const result = email.split('@')[0];
console.log(result); // 👉️ "bobbyhadz"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function

// function extractNameFromEmail(email) {
//   return email.split('@')[0];
// }

// const email = 'bobbyhadz@email.com';

// const name = extractNameFromEmail(email);
// console.log(name); // 👉️ bobbyhadz

// ------------------------------------------------------------------

// // EXAMPLE 3 - Handle the case where the string doesn't contain an `@` symbol

// const email = 'bobbyhadzemail.com';

// // 👇️ [ 'bobbyhadzemail.com' ]
// console.log(email.split('@'));

// ------------------------------------------------------------------

// // EXAMPLE 4 - Extract the Name from an Email Address using `String.slice`

// const email = 'bobbyhadz@email.com';

// const result = email.slice(0, email.indexOf('@'));
// console.log(result); // 👉️ "bobbyhadz"
