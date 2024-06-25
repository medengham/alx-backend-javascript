export default function getFullResponseFromAPI(success) {
  return new Promise((resovle, reject) => {
    if (success) {
      resovle({ status: 200, body: "Success" });
    } else {
      reject(new Error("The fake API is not working currently"));
    }
  });
}
