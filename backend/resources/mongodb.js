const { MongoClient, ServerApiVersion } = require("mongodb");

async function createDB(meetingDetails) {
  // adding new url in mongodb database
  // acquiring mongodb client
  //console.log(newURL['value'])
  try {
    await client.connect(); // creating connection with mongodb
    const findd = await client.db("meetings").collection("meetingDetails");
  } finally {
    await client.close(); // closing connection with mongodb
  }
}
