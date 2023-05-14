const BASE_URL = "https://jsonplaceholder.typicode.com";

export function getData(param) {
  return fetch(`${BASE_URL}/${param}`).then((response) => {
    if (!response.ok) {
      const errorAnswer =
        response.statusText === "" ? response.status : response.statusText;
      throw new Error(errorAnswer);
    }
    return response.json();
  });
}
