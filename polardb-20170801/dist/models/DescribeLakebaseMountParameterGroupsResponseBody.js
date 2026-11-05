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
exports.DescribeLakebaseMountParameterGroupsResponseBody = exports.DescribeLakebaseMountParameterGroupsResponseBodyParameterGroups = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeLakebaseMountParameterGroupsResponseBodyParameterGroups extends $dara.Model {
    static names() {
        return {
            createTime: 'CreateTime',
            isApply: 'IsApply',
            modifyTime: 'ModifyTime',
            parameterCounts: 'ParameterCounts',
            parameterGroupDesc: 'ParameterGroupDesc',
            parameterGroupId: 'ParameterGroupId',
            parameterGroupName: 'ParameterGroupName',
            parameterGroupType: 'ParameterGroupType',
        };
    }
    static types() {
        return {
            createTime: 'string',
            isApply: 'string',
            modifyTime: 'string',
            parameterCounts: 'number',
            parameterGroupDesc: 'string',
            parameterGroupId: 'string',
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
exports.DescribeLakebaseMountParameterGroupsResponseBodyParameterGroups = DescribeLakebaseMountParameterGroupsResponseBodyParameterGroups;
class DescribeLakebaseMountParameterGroupsResponseBody extends $dara.Model {
    static names() {
        return {
            parameterGroups: 'ParameterGroups',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            parameterGroups: { 'type': 'array', 'itemType': DescribeLakebaseMountParameterGroupsResponseBodyParameterGroups },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.parameterGroups)) {
            $dara.Model.validateArray(this.parameterGroups);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeLakebaseMountParameterGroupsResponseBody = DescribeLakebaseMountParameterGroupsResponseBody;
//# sourceMappingURL=DescribeLakebaseMountParameterGroupsResponseBody.js.map