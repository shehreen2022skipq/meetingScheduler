const { MongoClient, ServerApiVersion } = require("mongodb");

async function createDB(meetingDetails) {
  // adding meeting details in mongodb database
  const uri =
    "mongodb+srv://shehreenfatima:qLg8c4HbL23VHHkK@cluster0.1dffjid.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  }); // acquiring mongodb client
  try {
    await client.connect(); // creating connection with mongodb
    const result = await client
      .db("meetings")
      .collection("meetingDetails")
      .insertOne(meetingDetails);
  } finally {
    await client.close(); // closing connection with mongodb
  }
}

async function getDetails(host) {
  const uri =
    "mongodb+srv://shehreenfatima:qLg8c4HbL23VHHkK@cluster0.1dffjid.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  }); // acquiring mongodb client
  const query = { from: host };
  try {
    await client.connect();
    const fromUser = await client
      .db("meetings")
      .collection("meetingDetails")
      .find({})
      .toArray();
    return fromUser;
  } finally {
    await client.close(); // closing connection with mongodb
  }
}
module.exports.createDB = createDB;
module.exports.getDetails = getDetails;
