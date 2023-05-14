import Notiflix from "notiflix";
import { getData } from "../api";
import { makeFirstTableMarkup } from "../markup";
import { jsTbodyEl } from "../refs";
import { addMarkup } from "../utils";

getData("users")
  .then((data) => {
    const markup = makeFirstTableMarkup(data);
    addMarkup(markup, jsTbodyEl);
  })
  .catch((error) => {
    console.log(error);
    Notiflix.Notify.failure(error.message);
  });
