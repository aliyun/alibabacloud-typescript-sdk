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
exports.DescribeParameterTemplatesResponseBody = exports.DescribeParameterTemplatesResponseBodyParameters = exports.DescribeParameterTemplatesResponseBodyParametersTemplateRecord = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeParameterTemplatesResponseBodyParametersTemplateRecord extends $dara.Model {
    static names() {
        return {
            checkingCode: 'CheckingCode',
            forceModify: 'ForceModify',
            forceRestart: 'ForceRestart',
            parameterDescription: 'ParameterDescription',
            parameterName: 'ParameterName',
            parameterValue: 'ParameterValue',
        };
    }
    static types() {
        return {
            checkingCode: 'string',
            forceModify: 'string',
            forceRestart: 'string',
            parameterDescription: 'string',
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
exports.DescribeParameterTemplatesResponseBodyParametersTemplateRecord = DescribeParameterTemplatesResponseBodyParametersTemplateRecord;
class DescribeParameterTemplatesResponseBodyParameters extends $dara.Model {
    static names() {
        return {
            templateRecord: 'TemplateRecord',
        };
    }
    static types() {
        return {
            templateRecord: { 'type': 'array', 'itemType': DescribeParameterTemplatesResponseBodyParametersTemplateRecord },
        };
    }
    validate() {
        if (Array.isArray(this.templateRecord)) {
            $dara.Model.validateArray(this.templateRecord);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParameterTemplatesResponseBodyParameters = DescribeParameterTemplatesResponseBodyParameters;
class DescribeParameterTemplatesResponseBody extends $dara.Model {
    static names() {
        return {
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            parameterCount: 'ParameterCount',
            parameters: 'Parameters',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            engine: 'string',
            engineVersion: 'string',
            parameterCount: 'string',
            parameters: DescribeParameterTemplatesResponseBodyParameters,
            requestId: 'string',
        };
    }
    validate() {
        if (this.parameters && typeof this.parameters.validate === 'function') {
            this.parameters.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParameterTemplatesResponseBody = DescribeParameterTemplatesResponseBody;
//# sourceMappingURL=DescribeParameterTemplatesResponseBody.js.map