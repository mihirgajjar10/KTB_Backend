const File = require("../model/file");

class FileController {
  async getFiles(req, res) {
    console.log("req", req);
    var fileUpload = new File();
    var data = await fileUpload.getById(req.params.id);

    console.log("req", data);

    res.status(200).send(data);
  }

  async createRecord(req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
    let fileUpload = await new File();
    var id = await fileUpload.savePictureAndFile(req.files);
    var msg = {
      success: true,
      data: {
        id: id,
      },
    };
    res.status(200).send(msg);
  }
}
module.exports = FileController;
