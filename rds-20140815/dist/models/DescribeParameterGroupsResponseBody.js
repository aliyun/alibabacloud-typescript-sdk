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
exports.DescribeParameterGroupsResponseBody = exports.DescribeParameterGroupsResponseBodyParameterGroups = exports.DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup extends $dara.Model {
    static names() {
        return {
            createTime: 'CreateTime',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            forceRestart: 'ForceRestart',
            paramCounts: 'ParamCounts',
            parameterGroupDesc: 'ParameterGroupDesc',
            parameterGroupId: 'ParameterGroupId',
            parameterGroupName: 'ParameterGroupName',
            parameterGroupType: 'ParameterGroupType',
            updateTime: 'UpdateTime',
        };
    }
    static types() {
        return {
            createTime: 'string',
            engine: 'string',
            engineVersion: 'string',
            forceRestart: 'number',
            paramCounts: 'number',
            parameterGroupDesc: 'string',
            parameterGroupId: 'string',
            parameterGroupName: 'string',
            parameterGroupType: 'number',
            updateTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup = DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup;
class DescribeParameterGroupsResponseBodyParameterGroups extends $dara.Model {
    static names() {
        return {
            parameterGroup: 'ParameterGroup',
        };
    }
    static types() {
        return {
            parameterGroup: { 'type': 'array', 'itemType': DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup },
        };
    }
    validate() {
        if (Array.isArray(this.parameterGroup)) {
            $dara.Model.validateArray(this.parameterGroup);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParameterGroupsResponseBodyParameterGroups = DescribeParameterGroupsResponseBodyParameterGroups;
class DescribeParameterGroupsResponseBody extends $dara.Model {
    static names() {
        return {
            parameterGroups: 'ParameterGroups',
            requestId: 'RequestId',
            signalForOptimizeParams: 'SignalForOptimizeParams',
        };
    }
    static types() {
        return {
            parameterGroups: DescribeParameterGroupsResponseBodyParameterGroups,
            requestId: 'string',
            signalForOptimizeParams: 'boolean',
        };
    }
    validate() {
        if (this.parameterGroups && typeof this.parameterGroups.validate === 'function') {
            this.parameterGroups.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParameterGroupsResponseBody = DescribeParameterGroupsResponseBody;
//# sourceMappingURL=DescribeParameterGroupsResponseBody.js.map