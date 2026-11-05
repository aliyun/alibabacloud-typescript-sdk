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
exports.DescribeDBClustersRequest = exports.DescribeDBClustersRequestTag = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClustersRequestTag extends $dara.Model {
    static names() {
        return {
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            key: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClustersRequestTag = DescribeDBClustersRequestTag;
class DescribeDBClustersRequest extends $dara.Model {
    static names() {
        return {
            connectionString: 'ConnectionString',
            DBClusterDescription: 'DBClusterDescription',
            DBClusterIds: 'DBClusterIds',
            DBClusterStatus: 'DBClusterStatus',
            DBNodeIds: 'DBNodeIds',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            describeType: 'DescribeType',
            expired: 'Expired',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            payType: 'PayType',
            recentCreationInterval: 'RecentCreationInterval',
            recentExpirationInterval: 'RecentExpirationInterval',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            tag: 'Tag',
        };
    }
    static types() {
        return {
            connectionString: 'string',
            DBClusterDescription: 'string',
            DBClusterIds: 'string',
            DBClusterStatus: 'string',
            DBNodeIds: 'string',
            DBType: 'string',
            DBVersion: 'string',
            describeType: 'string',
            expired: 'boolean',
            ownerAccount: 'string',
            ownerId: 'number',
            pageNumber: 'number',
            pageSize: 'number',
            payType: 'string',
            recentCreationInterval: 'number',
            recentExpirationInterval: 'number',
            regionId: 'string',
            resourceGroupId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            tag: { 'type': 'array', 'itemType': DescribeDBClustersRequestTag },
        };
    }
    validate() {
        if (Array.isArray(this.tag)) {
            $dara.Model.validateArray(this.tag);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClustersRequest = DescribeDBClustersRequest;
//# sourceMappingURL=DescribeDbclustersRequest.js.map