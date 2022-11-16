const { MongoClient, ServerApiVersion } = require("mongodb");

async function createDB(meetingDetails) {
  // adding new url in mongodb database
  const uri =
    "mongodb+srv://shhereenfatima:qLg8c4HbL23VHHkK@cluster0.2tuwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  }); // acquiring mongodb client
  //console.log(newURL['value'])
  try {
    await client.connect(); // creating connection with mongodb
    const findd = await client.db("meetings").collection("meetingDetails");
  } finally {
    await client.close(); // closing connection with mongodb
  }
}
