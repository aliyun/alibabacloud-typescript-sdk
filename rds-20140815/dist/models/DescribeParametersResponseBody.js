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
exports.DescribeParametersResponseBody = exports.DescribeParametersResponseBodyRunningParameters = exports.DescribeParametersResponseBodyRunningParametersDBInstanceParameter = exports.DescribeParametersResponseBodyParamGroupInfo = exports.DescribeParametersResponseBodyConfigParameters = exports.DescribeParametersResponseBodyConfigParametersDBInstanceParameter = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeParametersResponseBodyConfigParametersDBInstanceParameter extends $dara.Model {
    static names() {
        return {
            parameterDescription: 'ParameterDescription',
            parameterName: 'ParameterName',
            parameterValue: 'ParameterValue',
        };
    }
    static types() {
        return {
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
exports.DescribeParametersResponseBodyConfigParametersDBInstanceParameter = DescribeParametersResponseBodyConfigParametersDBInstanceParameter;
class DescribeParametersResponseBodyConfigParameters extends $dara.Model {
    static names() {
        return {
            DBInstanceParameter: 'DBInstanceParameter',
        };
    }
    static types() {
        return {
            DBInstanceParameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyConfigParametersDBInstanceParameter },
        };
    }
    validate() {
        if (Array.isArray(this.DBInstanceParameter)) {
            $dara.Model.validateArray(this.DBInstanceParameter);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParametersResponseBodyConfigParameters = DescribeParametersResponseBodyConfigParameters;
class DescribeParametersResponseBodyParamGroupInfo extends $dara.Model {
    static names() {
        return {
            paramGroupId: 'ParamGroupId',
            parameterGroupDesc: 'ParameterGroupDesc',
            parameterGroupName: 'ParameterGroupName',
            parameterGroupType: 'ParameterGroupType',
        };
    }
    static types() {
        return {
            paramGroupId: 'string',
            parameterGroupDesc: 'string',
            parameterGroupName: 'string',
            parameterGroupType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParametersResponseBodyParamGroupInfo = DescribeParametersResponseBodyParamGroupInfo;
class DescribeParametersResponseBodyRunningParametersDBInstanceParameter extends $dara.Model {
    static names() {
        return {
            parameterDefaultValue: 'ParameterDefaultValue',
            parameterDescription: 'ParameterDescription',
            parameterName: 'ParameterName',
            parameterValue: 'ParameterValue',
            parameterValueRange: 'ParameterValueRange',
        };
    }
    static types() {
        return {
            parameterDefaultValue: 'string',
            parameterDescription: 'string',
            parameterName: 'string',
            parameterValue: 'string',
            parameterValueRange: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParametersResponseBodyRunningParametersDBInstanceParameter = DescribeParametersResponseBodyRunningParametersDBInstanceParameter;
class DescribeParametersResponseBodyRunningParameters extends $dara.Model {
    static names() {
        return {
            DBInstanceParameter: 'DBInstanceParameter',
        };
    }
    static types() {
        return {
            DBInstanceParameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyRunningParametersDBInstanceParameter },
        };
    }
    validate() {
        if (Array.isArray(this.DBInstanceParameter)) {
            $dara.Model.validateArray(this.DBInstanceParameter);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParametersResponseBodyRunningParameters = DescribeParametersResponseBodyRunningParameters;
class DescribeParametersResponseBody extends $dara.Model {
    static names() {
        return {
            configParameters: 'ConfigParameters',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            paramGroupInfo: 'ParamGroupInfo',
            requestId: 'RequestId',
            runningParameters: 'RunningParameters',
        };
    }
    static types() {
        return {
            configParameters: DescribeParametersResponseBodyConfigParameters,
            engine: 'string',
            engineVersion: 'string',
            paramGroupInfo: DescribeParametersResponseBodyParamGroupInfo,
            requestId: 'string',
            runningParameters: DescribeParametersResponseBodyRunningParameters,
        };
    }
    validate() {
        if (this.configParameters && typeof this.configParameters.validate === 'function') {
            this.configParameters.validate();
        }
        if (this.paramGroupInfo && typeof this.paramGroupInfo.validate === 'function') {
            this.paramGroupInfo.validate();
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
exports.DescribeParametersResponseBody = DescribeParametersResponseBody;
//# sourceMappingURL=DescribeParametersResponseBody.js.map