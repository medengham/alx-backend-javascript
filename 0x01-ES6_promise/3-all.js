import { createUser, uploadPhoto } from "./utils";

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then((resp) => {
      console.log(`${resp[1].body} ${resp[0].firstName} ${resp[0].lastName}`);
    })
    .catch(() => console.log("Signup system offline"));
}
