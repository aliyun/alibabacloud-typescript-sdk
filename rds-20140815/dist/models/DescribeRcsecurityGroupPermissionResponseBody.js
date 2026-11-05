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
exports.DescribeRCSecurityGroupPermissionResponseBody = exports.DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions extends $dara.Model {
    static names() {
        return {
            createTime: 'CreateTime',
            destCidrIp: 'DestCidrIp',
            direction: 'Direction',
            ipProtocol: 'IpProtocol',
            policy: 'Policy',
            portRange: 'PortRange',
            priority: 'Priority',
            securityGroupRuleId: 'SecurityGroupRuleId',
            sourceCidrIp: 'SourceCidrIp',
            sourcePortRange: 'SourcePortRange',
        };
    }
    static types() {
        return {
            createTime: 'string',
            destCidrIp: 'string',
            direction: 'string',
            ipProtocol: 'string',
            policy: 'string',
            portRange: 'string',
            priority: 'string',
            securityGroupRuleId: 'string',
            sourceCidrIp: 'string',
            sourcePortRange: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions = DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions;
class DescribeRCSecurityGroupPermissionResponseBody extends $dara.Model {
    static names() {
        return {
            innerAccessPolicy: 'InnerAccessPolicy',
            regionId: 'RegionId',
            requestId: 'RequestId',
            securityGroupId: 'SecurityGroupId',
            securityGroupPermissions: 'SecurityGroupPermissions',
            vpcId: 'VpcId',
        };
    }
    static types() {
        return {
            innerAccessPolicy: 'string',
            regionId: 'string',
            requestId: 'string',
            securityGroupId: 'string',
            securityGroupPermissions: { 'type': 'array', 'itemType': DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions },
            vpcId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.securityGroupPermissions)) {
            $dara.Model.validateArray(this.securityGroupPermissions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCSecurityGroupPermissionResponseBody = DescribeRCSecurityGroupPermissionResponseBody;
//# sourceMappingURL=DescribeRcsecurityGroupPermissionResponseBody.js.map