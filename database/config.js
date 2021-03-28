const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://mean_user:5QuuF17DWz5mCnf9@cluster0.monwc.mongodb.net/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("db Online");
  } catch (error) {
      console.log(error);
      throw new Error('Error al momento de iniciar la base de datos');
  }
};

module.exports = {
  dbConnection
}