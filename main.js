export function pow(x, n) {
  result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
