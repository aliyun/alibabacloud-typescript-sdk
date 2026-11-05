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
exports.DescribeResourceDetailsResponseBody = exports.DescribeResourceDetailsResponseBodyRdsEcsSecurityGroupRel = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeResourceDetailsResponseBodyRdsEcsSecurityGroupRel extends $dara.Model {
    static names() {
        return {
            securityGroupName: 'SecurityGroupName',
        };
    }
    static types() {
        return {
            securityGroupName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeResourceDetailsResponseBodyRdsEcsSecurityGroupRel = DescribeResourceDetailsResponseBodyRdsEcsSecurityGroupRel;
class DescribeResourceDetailsResponseBody extends $dara.Model {
    static names() {
        return {
            backupDataSize: 'BackupDataSize',
            backupLogSize: 'BackupLogSize',
            backupSize: 'BackupSize',
            dbInstanceStorage: 'DbInstanceStorage',
            dbProxyInstanceName: 'DbProxyInstanceName',
            diskUsed: 'DiskUsed',
            instanceStorageType: 'InstanceStorageType',
            rdsEcsSecurityGroupRel: 'RdsEcsSecurityGroupRel',
            region: 'Region',
            requestId: 'RequestId',
            resourceGroupId: 'ResourceGroupId',
            securityIPList: 'SecurityIPList',
            vSwitchId: 'VSwitchId',
            vpcId: 'VpcId',
        };
    }
    static types() {
        return {
            backupDataSize: 'number',
            backupLogSize: 'number',
            backupSize: 'number',
            dbInstanceStorage: 'number',
            dbProxyInstanceName: 'string',
            diskUsed: 'number',
            instanceStorageType: 'string',
            rdsEcsSecurityGroupRel: { 'type': 'array', 'itemType': DescribeResourceDetailsResponseBodyRdsEcsSecurityGroupRel },
            region: 'string',
            requestId: 'string',
            resourceGroupId: 'string',
            securityIPList: 'string',
            vSwitchId: 'string',
            vpcId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.rdsEcsSecurityGroupRel)) {
            $dara.Model.validateArray(this.rdsEcsSecurityGroupRel);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeResourceDetailsResponseBody = DescribeResourceDetailsResponseBody;
//# sourceMappingURL=DescribeResourceDetailsResponseBody.js.map