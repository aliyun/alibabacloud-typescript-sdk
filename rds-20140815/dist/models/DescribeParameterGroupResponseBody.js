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
exports.DescribeParameterGroupResponseBody = exports.DescribeParameterGroupResponseBodyRelatedCustinsInfo = exports.DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo = exports.DescribeParameterGroupResponseBodyParamGroup = exports.DescribeParameterGroupResponseBodyParamGroupParameterGroup = exports.DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail = exports.DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail extends $dara.Model {
    static names() {
        return {
            paramName: 'ParamName',
            paramValue: 'ParamValue',
        };
    }
    static types() {
        return {
            paramName: 'string',
            paramValue: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail = DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail;
class DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail extends $dara.Model {
    static names() {
        return {
            parameterDetail: 'ParameterDetail',
        };
    }
    static types() {
        return {
            parameterDetail: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail },
        };
    }
    validate() {
        if (Array.isArray(this.parameterDetail)) {
            $dara.Model.validateArray(this.parameterDetail);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail = DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail;
class DescribeParameterGroupResponseBodyParamGroupParameterGroup extends $dara.Model {
    static names() {
        return {
            createTime: 'CreateTime',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            forceRestart: 'ForceRestart',
            paramCounts: 'ParamCounts',
            paramDetail: 'ParamDetail',
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
            paramDetail: DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail,
            parameterGroupDesc: 'string',
            parameterGroupId: 'string',
            parameterGroupName: 'string',
            parameterGroupType: 'number',
            updateTime: 'string',
        };
    }
    validate() {
        if (this.paramDetail && typeof this.paramDetail.validate === 'function') {
            this.paramDetail.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParameterGroupResponseBodyParamGroupParameterGroup = DescribeParameterGroupResponseBodyParamGroupParameterGroup;
class DescribeParameterGroupResponseBodyParamGroup extends $dara.Model {
    static names() {
        return {
            parameterGroup: 'ParameterGroup',
        };
    }
    static types() {
        return {
            parameterGroup: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParamGroupParameterGroup },
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
exports.DescribeParameterGroupResponseBodyParamGroup = DescribeParameterGroupResponseBodyParamGroup;
class DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo extends $dara.Model {
    static names() {
        return {
            appliedTime: 'AppliedTime',
            DBInstanceName: 'DBInstanceName',
        };
    }
    static types() {
        return {
            appliedTime: 'string',
            DBInstanceName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo = DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo;
class DescribeParameterGroupResponseBodyRelatedCustinsInfo extends $dara.Model {
    static names() {
        return {
            relatedCustinsInfo: 'RelatedCustinsInfo',
        };
    }
    static types() {
        return {
            relatedCustinsInfo: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo },
        };
    }
    validate() {
        if (Array.isArray(this.relatedCustinsInfo)) {
            $dara.Model.validateArray(this.relatedCustinsInfo);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParameterGroupResponseBodyRelatedCustinsInfo = DescribeParameterGroupResponseBodyRelatedCustinsInfo;
class DescribeParameterGroupResponseBody extends $dara.Model {
    static names() {
        return {
            paramGroup: 'ParamGroup',
            relatedCustinsInfo: 'RelatedCustinsInfo',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            paramGroup: DescribeParameterGroupResponseBodyParamGroup,
            relatedCustinsInfo: DescribeParameterGroupResponseBodyRelatedCustinsInfo,
            requestId: 'string',
        };
    }
    validate() {
        if (this.paramGroup && typeof this.paramGroup.validate === 'function') {
            this.paramGroup.validate();
        }
        if (this.relatedCustinsInfo && typeof this.relatedCustinsInfo.validate === 'function') {
            this.relatedCustinsInfo.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeParameterGroupResponseBody = DescribeParameterGroupResponseBody;
//# sourceMappingURL=DescribeParameterGroupResponseBody.js.map