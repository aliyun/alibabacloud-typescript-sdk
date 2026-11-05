"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyApplicationParameterRequest = exports.ModifyApplicationParameterRequestParameters = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyApplicationParameterRequestParameters extends $dara.Model {
    static names() {
        return {
            parameterName: 'ParameterName',
            parameterValue: 'ParameterValue',
        };
    }
    static types() {
        return {
            parameterName: 'string',
            parameterValue: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyApplicationParameterRequestParameters = ModifyApplicationParameterRequestParameters;
class ModifyApplicationParameterRequest extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            parameterName: 'ParameterName',
            parameterValue: 'ParameterValue',
            parameters: 'Parameters',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            parameterName: 'string',
            parameterValue: 'string',
            parameters: { 'type': 'array', 'itemType': ModifyApplicationParameterRequestParameters },
        };
    }
    validate() {
        if (Array.isArray(this.parameters)) {
            $dara.Model.validateArray(this.parameters);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyApplicationParameterRequest = ModifyApplicationParameterRequest;
//# sourceMappingURL=ModifyApplicationParameterRequest.js.map