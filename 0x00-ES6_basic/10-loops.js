export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, value] of Object(array).entries()) {
    array[idx] = appendString + value;
  }

  return array;
}
