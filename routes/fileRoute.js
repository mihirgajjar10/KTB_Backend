var FileController = require("../controller/fileController");
FileController = new FileController();

// File Upload routes
router.post("/uploadFiles", PromoController.uploadFiles);

router.get("/getFiles/:id", FileController.getFiles);
