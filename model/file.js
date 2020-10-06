const mysql = require("mysql2/promise");
// const mysql = require("../config/db");
class File {
  constructor() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.MYSQL_DB,
      password: process.env.DB_PASS,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  async getById(id) {
    console.log("id", id)
    const result = await this.pool.query(
      "SELECT * from informations WHERE id = ?",
      [id]
    );

    console.log("res", result);
    if (result[0].length < 1) {
      throw new Error("Post with this id was not found");
    }
    return result[0][0];
  }
  async savePictureAndFile(data) {
    var picture = data.picture;
    var picture_name = picture.name;
    picture.mv("public/files/" + picture.name, function (err) {});
    var file = data.file;
    var file_name = file.name;
    file.mv("public/files/" + file.name, function (err) {});

    const result = await this.pool.query(
      "INSERT INTO informations SET picture = ?, file = ?",
      [picture_name, file_name]
    );
    return result[0].insertId;
  }
}
module.exports = File;
