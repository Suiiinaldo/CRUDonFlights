const { AirplaneService } = require("../services");
const { StatusCodes} = require("http-status-codes");
const { SuccessResponse, ErrorResponse} = require("../utils/common")


/*
 * POST : /airplanes 
 * req-body : {modelNumber: 'airbusA380' , capacity : 200 }
 */
async function createAirplane(req,res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);   
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCodes)
                .json(ErrorResponse);
    }
}

/*
 * GET : /airplanes
 * req-body : {}
 */
async function getAirplanes(req,res){
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse); 
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCodes)
                .json(ErrorResponse);
    }
}

/*
 * GET : /airplanes/:id
 * req-body : {}
 */
async function getAirplane(req,res){
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse); 
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCodes)
                .json(ErrorResponse);
    }
}

/*
 * DELETE : /airplanes/:id
 * req-body : {}
 */
async function destroyAirplane(req,res){
    try {
        const airplane = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse); 
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCodes)
                .json(ErrorResponse);
    }
}

/*
 * PATCH : /airplanes/:id
 * req-body : {capacity : 400}
 */
async function updateAirplane(req,res){
    try {
        const airplane = await AirplaneService.updateAirplane({
                capacity: req.body.capacity,
            },req.params.id,);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse); 
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCodes)
                .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane,
    
}