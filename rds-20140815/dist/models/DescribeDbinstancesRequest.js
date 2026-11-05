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
exports.DescribeDBInstancesRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstancesRequest extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            clientToken: 'ClientToken',
            connectionMode: 'ConnectionMode',
            connectionString: 'ConnectionString',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceId: 'DBInstanceId',
            DBInstanceStatus: 'DBInstanceStatus',
            DBInstanceType: 'DBInstanceType',
            dedicatedHostGroupId: 'DedicatedHostGroupId',
            dedicatedHostId: 'DedicatedHostId',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            expired: 'Expired',
            filter: 'Filter',
            instanceLevel: 'InstanceLevel',
            instanceNetworkType: 'InstanceNetworkType',
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            payType: 'PayType',
            queryAutoRenewal: 'QueryAutoRenewal',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            searchKey: 'SearchKey',
            tags: 'Tags',
            vSwitchId: 'VSwitchId',
            vpcId: 'VpcId',
            zoneId: 'ZoneId',
            proxyId: 'proxyId',
        };
    }
    static types() {
        return {
            category: 'string',
            clientToken: 'string',
            connectionMode: 'string',
            connectionString: 'string',
            DBInstanceClass: 'string',
            DBInstanceId: 'string',
            DBInstanceStatus: 'string',
            DBInstanceType: 'string',
            dedicatedHostGroupId: 'string',
            dedicatedHostId: 'string',
            engine: 'string',
            engineVersion: 'string',
            expired: 'string',
            filter: 'string',
            instanceLevel: 'number',
            instanceNetworkType: 'string',
            maxResults: 'number',
            nextToken: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            pageNumber: 'number',
            pageSize: 'number',
            payType: 'string',
            queryAutoRenewal: 'boolean',
            regionId: 'string',
            resourceGroupId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            searchKey: 'string',
            tags: 'string',
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
exports.DescribeDBInstancesRequest = DescribeDBInstancesRequest;
//# sourceMappingURL=DescribeDbinstancesRequest.js.map