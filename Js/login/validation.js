export function validateFullName(value) {
    return /^[a-zA-Z\s]+$/.test(value);
}

export function validateId(value) {
    return /^[0-9]+$/.test(value);
}

export function validateEmail(value) {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value);
}

export function validatePassword(value) {
    return value.length >= 6;
}