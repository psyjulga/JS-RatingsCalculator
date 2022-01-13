function collect_ratings() {
  let ratings = {
    count: 0,
    sum: 0,
    average: 0,
  };
  let rating = 0;

  const elements = document.querySelectorAll(".rating");

  elements.forEach(function (element) {
    let removeStar = element.id.replace("star", "");
    rating = parseInt(removeStar, 10);

    let inputCountInt = parseInt(element.value, 10);
    ratings.count += inputCountInt;

    ratings.sum = inputCountInt * rating;
  });

  if (ratings.count !== 0) {
    ratings.average = ratings.sum / ratings.count;
  }
  return ratings;
}

document.addEventListener("change", () => {
  const ratings = collect_ratings();
  let averageElem = document.querySelector("#average");
  averageElem.value = ratings.average.toFixed(2);
  console.log(ratings);
});
