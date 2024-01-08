const express = require("express");

const { CityController } = require("../../controller");
const { CityMiddlewares } = require("../../middlewares")

const router = express.Router();

// /api/v1/cities POST
router.post("/",
            CityMiddlewares.validateCreateUpdateRequest,
            CityController.createCity);

// api/v1/cities/:id DELETE
router.delete("/:id",
            CityController.destroyCity);

// api/v1/cities/:id PATCH
router.patch("/:id",
                CityMiddlewares.validateCreateUpdateRequest,
                CityController.updateCity);

module.exports = router;