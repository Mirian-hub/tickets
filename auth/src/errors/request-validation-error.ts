import { ValidationError } from "express-validator";
import { isThisTypeNode } from "typescript";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
    statusCode = 400;
    constructor(public errors: ValidationError[]){
        super('Invalid request parameters')
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }
    serializeError () {
        return this.errors.map(err => ({
            message: err.msg,
            field: err.param,
          }))
    }
}