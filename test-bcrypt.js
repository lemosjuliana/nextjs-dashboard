const bcrypt = require('bcryptjs');

const password = 'mySecurePassword';
const hashedPassword = bcrypt.hashSync(password, 10); // Hash the password

console.log('Hashed Password:', hashedPassword);

// Simulate user login: check if the entered password matches the stored hash
const isMatch = bcrypt.compareSync(password, hashedPassword);

if (isMatch) {
    console.log('✅ Passwords match! Authentication successful.');
} else {
    console.log('❌ Passwords do not match! Authentication failed.');
}
