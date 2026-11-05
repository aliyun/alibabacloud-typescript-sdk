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
exports.DescribeDBInstancesForCloneRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstancesForCloneRequest extends $dara.Model {
    static names() {
        return {
            clientToken: 'ClientToken',
            connectionMode: 'ConnectionMode',
            currentInstanceId: 'CurrentInstanceId',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceId: 'DBInstanceId',
            DBInstanceStatus: 'DBInstanceStatus',
            DBInstanceType: 'DBInstanceType',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            expired: 'Expired',
            instanceNetworkType: 'InstanceNetworkType',
            nodeType: 'NodeType',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            payType: 'PayType',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            searchKey: 'SearchKey',
            vSwitchId: 'VSwitchId',
            vpcId: 'VpcId',
            zoneId: 'ZoneId',
            proxyId: 'proxyId',
        };
    }
    static types() {
        return {
            clientToken: 'string',
            connectionMode: 'string',
            currentInstanceId: 'string',
            DBInstanceClass: 'string',
            DBInstanceId: 'string',
            DBInstanceStatus: 'string',
            DBInstanceType: 'string',
            engine: 'string',
            engineVersion: 'string',
            expired: 'string',
            instanceNetworkType: 'string',
            nodeType: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            pageNumber: 'number',
            pageSize: 'number',
            payType: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            searchKey: 'string',
            vSwitchId: 'string',
            vpcId: 'string',
            zoneId: 'string',
            proxyId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstancesForCloneRequest = DescribeDBInstancesForCloneRequest;
//# sourceMappingURL=DescribeDbinstancesForCloneRequest.js.map