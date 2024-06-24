
export type Strength = 'low' | 'medium' | 'high';
export function generateRandomPassword(length: number, strength: Strength) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allChars = ""

    if (strength == "low") {
          allChars = lowercaseChars;
    } else if (strength == "medium") {
          allChars = lowercaseChars + uppercaseChars + numberChars;
    } else if (strength == "high") {
      allChars = lowercaseChars + uppercaseChars + numberChars + symbolChars
    }

    let password = ""

    for (let i = 0; i < length; i++) {
     const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}