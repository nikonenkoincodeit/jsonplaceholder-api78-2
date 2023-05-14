import { getData } from "../api";
import { userIdMarkup } from "../markup";
import { jsUserTableEl } from "../refs";
import { addMarkup } from "../utils";

const searchParams = new URLSearchParams(location.search);
const userId = searchParams.get("user-id");

getData(`users/${userId}`).then((data) => {
  //console.log(data);
  const markup = userIdMarkup(data);
  addMarkup(markup, jsUserTableEl);
});

console.log(userId);
