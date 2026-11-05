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
exports.DescribeRCSecurityGroupListResponseBody = exports.DescribeRCSecurityGroupListResponseBodyRCSecurityGroups = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCSecurityGroupListResponseBodyRCSecurityGroups extends $dara.Model {
    static names() {
        return {
            availableInstanceAmount: 'AvailableInstanceAmount',
            creationTime: 'CreationTime',
            description: 'Description',
            instanceCount: 'InstanceCount',
            securityGroupId: 'SecurityGroupId',
            securityGroupType: 'SecurityGroupType',
            vpcId: 'VpcId',
        };
    }
    static types() {
        return {
            availableInstanceAmount: 'number',
            creationTime: 'string',
            description: 'string',
            instanceCount: 'number',
            securityGroupId: 'string',
            securityGroupType: 'string',
            vpcId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCSecurityGroupListResponseBodyRCSecurityGroups = DescribeRCSecurityGroupListResponseBodyRCSecurityGroups;
class DescribeRCSecurityGroupListResponseBody extends $dara.Model {
    static names() {
        return {
            RCSecurityGroups: 'RCSecurityGroups',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            RCSecurityGroups: { 'type': 'array', 'itemType': DescribeRCSecurityGroupListResponseBodyRCSecurityGroups },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.RCSecurityGroups)) {
            $dara.Model.validateArray(this.RCSecurityGroups);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCSecurityGroupListResponseBody = DescribeRCSecurityGroupListResponseBody;
//# sourceMappingURL=DescribeRcsecurityGroupListResponseBody.js.map