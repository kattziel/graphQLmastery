const Quotes = require("inspirational-quotes");

function rootValue() {
  const getRandomDiceThrow = (sides) => Math.ceil(Math.random() * sides);
  const today = new Date();
  const DAYS_OF_WEEK = ["SUN", "MON", "THU", "WED", "THU", "FRI", "SAT"];
  const randomCoinToss = () => Math.random() > 0.5;
  const getRandomCoinTossesUntilTrue = () => {
    const result = [];
    do {
      result.push(randomCoinToss());
    } while (!result[result.length - 1]);
    return result;
  };
  return {
    greeting: "Hello, this is primary greeting vol. 2!",
    interestingUrls: ["https://www.google.com", "https://www.github.com"],
    randomDiceThrow: getRandomDiceThrow(6),
    pi: Math.PI,
    isTodayFriday: today.getDay() === 3,
    randomCoinTossesUntilTrue: getRandomCoinTossesUntilTrue(),
    today: DAYS_OF_WEEK[today.getDay()],
    workDays: DAYS_OF_WEEK.slice(1, 5),
    schroedingersCatGreeting: randomCoinToss() ? "Meow" : null,
    randomQuote: Quotes.getQuote(),
  };
}

module.exports = rootValue;
