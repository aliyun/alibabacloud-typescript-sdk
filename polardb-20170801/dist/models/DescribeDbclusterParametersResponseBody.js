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
exports.DescribeDBClusterParametersResponseBody = exports.DescribeDBClusterParametersResponseBodyRunningParameters = exports.DescribeDBClusterParametersResponseBodyRunningParametersParameter = exports.DescribeDBClusterParametersResponseBodyParameters = exports.DescribeDBClusterParametersResponseBodyParametersParameters = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClusterParametersResponseBodyParametersParameters extends $dara.Model {
    static names() {
        return {
            isEqual: 'IsEqual',
            isInstancePolarDBKey: 'IsInstancePolarDBKey',
            isInstanceRdsKey: 'IsInstanceRdsKey',
            isPolarDBKey: 'IsPolarDBKey',
            isRdsKey: 'IsRdsKey',
            distParameterDescription: 'distParameterDescription',
            distParameterName: 'distParameterName',
            distParameterOptional: 'distParameterOptional',
            distParameterValue: 'distParameterValue',
            rdsParameterDescription: 'rdsParameterDescription',
            rdsParameterName: 'rdsParameterName',
            rdsParameterOptional: 'rdsParameterOptional',
            rdsParameterValue: 'rdsParameterValue',
        };
    }
    static types() {
        return {
            isEqual: 'string',
            isInstancePolarDBKey: 'string',
            isInstanceRdsKey: 'string',
            isPolarDBKey: 'string',
            isRdsKey: 'string',
            distParameterDescription: 'string',
            distParameterName: 'string',
            distParameterOptional: 'string',
            distParameterValue: 'string',
            rdsParameterDescription: 'string',
            rdsParameterName: 'string',
            rdsParameterOptional: 'string',
            rdsParameterValue: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterParametersResponseBodyParametersParameters = DescribeDBClusterParametersResponseBodyParametersParameters;
class DescribeDBClusterParametersResponseBodyParameters extends $dara.Model {
    static names() {
        return {
            parameters: 'Parameters',
        };
    }
    static types() {
        return {
            parameters: { 'type': 'array', 'itemType': DescribeDBClusterParametersResponseBodyParametersParameters },
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
exports.DescribeDBClusterParametersResponseBodyParameters = DescribeDBClusterParametersResponseBodyParameters;
class DescribeDBClusterParametersResponseBodyRunningParametersParameter extends $dara.Model {
    static names() {
        return {
            checkingCode: 'CheckingCode',
            dataType: 'DataType',
            defaultParameterValue: 'DefaultParameterValue',
            factor: 'Factor',
            forceRestart: 'ForceRestart',
            isModifiable: 'IsModifiable',
            isNodeAvailable: 'IsNodeAvailable',
            paramRelyRule: 'ParamRelyRule',
            parameterDescription: 'ParameterDescription',
            parameterName: 'ParameterName',
            parameterStatus: 'ParameterStatus',
            parameterValue: 'ParameterValue',
        };
    }
    static types() {
        return {
            checkingCode: 'string',
            dataType: 'string',
            defaultParameterValue: 'string',
            factor: 'string',
            forceRestart: 'boolean',
            isModifiable: 'boolean',
            isNodeAvailable: 'string',
            paramRelyRule: 'string',
            parameterDescription: 'string',
            parameterName: 'string',
            parameterStatus: 'string',
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
exports.DescribeDBClusterParametersResponseBodyRunningParametersParameter = DescribeDBClusterParametersResponseBodyRunningParametersParameter;
class DescribeDBClusterParametersResponseBodyRunningParameters extends $dara.Model {
    static names() {
        return {
            parameter: 'Parameter',
        };
    }
    static types() {
        return {
            parameter: { 'type': 'array', 'itemType': DescribeDBClusterParametersResponseBodyRunningParametersParameter },
        };
    }
    validate() {
        if (Array.isArray(this.parameter)) {
            $dara.Model.validateArray(this.parameter);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterParametersResponseBodyRunningParameters = DescribeDBClusterParametersResponseBodyRunningParameters;
class DescribeDBClusterParametersResponseBody extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            engine: 'Engine',
            parameterNumbers: 'ParameterNumbers',
            parameters: 'Parameters',
            requestId: 'RequestId',
            runningParameters: 'RunningParameters',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            DBType: 'string',
            DBVersion: 'string',
            engine: 'string',
            parameterNumbers: 'string',
            parameters: DescribeDBClusterParametersResponseBodyParameters,
            requestId: 'string',
            runningParameters: DescribeDBClusterParametersResponseBodyRunningParameters,
        };
    }
    validate() {
        if (this.parameters && typeof this.parameters.validate === 'function') {
            this.parameters.validate();
        }
        if (this.runningParameters && typeof this.runningParameters.validate === 'function') {
            this.runningParameters.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterParametersResponseBody = DescribeDBClusterParametersResponseBody;
//# sourceMappingURL=DescribeDbclusterParametersResponseBody.js.map