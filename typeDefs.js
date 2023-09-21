const { gql } = require("apollo-server");

const typeDefs = gql`
  schema {
    query: MyQuery
  }
  type MyQuery {
    "A simple greeting"
    greeting: String
    "Simple array of URLs"
    interestingUrls: [String]
    randomDiceThrow: Int
    pi: Float
    isTodayFriday: Boolean
    randomCoinTossesUntilTrue: [Boolean]
    today: DayOfWeek
    workDays: [DayOfWeek]
    randomQuote: Quote!
    schroedingersCatGreeting: String
  }
  ## object representing a quote
  # it contains text and author's name
  type Quote {
    text: String!
    author: String!
  }
  enum DayOfWeek {
    MON
    TUE
    WED
    THU
    SAT
    SUN
    FRI
  }
`;

module.exports = typeDefs;