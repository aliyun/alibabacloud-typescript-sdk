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
exports.DescribeDBClustersResponseBody = exports.DescribeDBClustersResponseBodyItems = exports.DescribeDBClustersResponseBodyItemsDBCluster = exports.DescribeDBClustersResponseBodyItemsDBClusterTags = exports.DescribeDBClustersResponseBodyItemsDBClusterTagsTag = exports.DescribeDBClustersResponseBodyItemsDBClusterDBNodes = exports.DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode extends $dara.Model {
    static names() {
        return {
            DBNodeClass: 'DBNodeClass',
            DBNodeId: 'DBNodeId',
            DBNodeRole: 'DBNodeRole',
            hotReplicaMode: 'HotReplicaMode',
            imciSwitch: 'ImciSwitch',
            regionId: 'RegionId',
            serverless: 'Serverless',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            DBNodeClass: 'string',
            DBNodeId: 'string',
            DBNodeRole: 'string',
            hotReplicaMode: 'string',
            imciSwitch: 'string',
            regionId: 'string',
            serverless: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode = DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode;
class DescribeDBClustersResponseBodyItemsDBClusterDBNodes extends $dara.Model {
    static names() {
        return {
            DBNode: 'DBNode',
        };
    }
    static types() {
        return {
            DBNode: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode },
        };
    }
    validate() {
        if (Array.isArray(this.DBNode)) {
            $dara.Model.validateArray(this.DBNode);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClustersResponseBodyItemsDBClusterDBNodes = DescribeDBClustersResponseBodyItemsDBClusterDBNodes;
class DescribeDBClustersResponseBodyItemsDBClusterTagsTag extends $dara.Model {
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
exports.DescribeDBClustersResponseBodyItemsDBClusterTagsTag = DescribeDBClustersResponseBodyItemsDBClusterTagsTag;
class DescribeDBClustersResponseBodyItemsDBClusterTags extends $dara.Model {
    static names() {
        return {
            tag: 'Tag',
        };
    }
    static types() {
        return {
            tag: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBClusterTagsTag },
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
exports.DescribeDBClustersResponseBodyItemsDBClusterTags = DescribeDBClustersResponseBodyItemsDBClusterTags;
class DescribeDBClustersResponseBodyItemsDBCluster extends $dara.Model {
    static names() {
        return {
            aiType: 'AiType',
            category: 'Category',
            connectionResourceQuota: 'ConnectionResourceQuota',
            connectionResourceUsed: 'ConnectionResourceUsed',
            cpuCores: 'CpuCores',
            createTime: 'CreateTime',
            DBClusterDescription: 'DBClusterDescription',
            DBClusterId: 'DBClusterId',
            DBClusterNetworkType: 'DBClusterNetworkType',
            DBClusterStatus: 'DBClusterStatus',
            DBNodeClass: 'DBNodeClass',
            DBNodeNumber: 'DBNodeNumber',
            DBNodes: 'DBNodes',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            deletionLock: 'DeletionLock',
            engine: 'Engine',
            expireTime: 'ExpireTime',
            expired: 'Expired',
            hotStandbyCluster: 'HotStandbyCluster',
            lockMode: 'LockMode',
            memorySize: 'MemorySize',
            payType: 'PayType',
            regionId: 'RegionId',
            remoteMemorySize: 'RemoteMemorySize',
            resourceGroupId: 'ResourceGroupId',
            searchStorageUsed: 'SearchStorageUsed',
            serverlessType: 'ServerlessType',
            storagePayType: 'StoragePayType',
            storageSpace: 'StorageSpace',
            storageType: 'StorageType',
            storageUsed: 'StorageUsed',
            strictConsistency: 'StrictConsistency',
            subCategory: 'SubCategory',
            tags: 'Tags',
            vpcId: 'VpcId',
            vswitchId: 'VswitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            aiType: 'string',
            category: 'string',
            connectionResourceQuota: 'number',
            connectionResourceUsed: 'number',
            cpuCores: 'string',
            createTime: 'string',
            DBClusterDescription: 'string',
            DBClusterId: 'string',
            DBClusterNetworkType: 'string',
            DBClusterStatus: 'string',
            DBNodeClass: 'string',
            DBNodeNumber: 'number',
            DBNodes: DescribeDBClustersResponseBodyItemsDBClusterDBNodes,
            DBType: 'string',
            DBVersion: 'string',
            deletionLock: 'number',
            engine: 'string',
            expireTime: 'string',
            expired: 'string',
            hotStandbyCluster: 'string',
            lockMode: 'string',
            memorySize: 'string',
            payType: 'string',
            regionId: 'string',
            remoteMemorySize: 'string',
            resourceGroupId: 'string',
            searchStorageUsed: 'number',
            serverlessType: 'string',
            storagePayType: 'string',
            storageSpace: 'number',
            storageType: 'string',
            storageUsed: 'number',
            strictConsistency: 'string',
            subCategory: 'string',
            tags: DescribeDBClustersResponseBodyItemsDBClusterTags,
            vpcId: 'string',
            vswitchId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (this.DBNodes && typeof this.DBNodes.validate === 'function') {
            this.DBNodes.validate();
        }
        if (this.tags && typeof this.tags.validate === 'function') {
            this.tags.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClustersResponseBodyItemsDBCluster = DescribeDBClustersResponseBodyItemsDBCluster;
class DescribeDBClustersResponseBodyItems extends $dara.Model {
    static names() {
        return {
            DBCluster: 'DBCluster',
        };
    }
    static types() {
        return {
            DBCluster: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBCluster },
        };
    }
    validate() {
        if (Array.isArray(this.DBCluster)) {
            $dara.Model.validateArray(this.DBCluster);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClustersResponseBodyItems = DescribeDBClustersResponseBodyItems;
class DescribeDBClustersResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescribeDBClustersResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (this.items && typeof this.items.validate === 'function') {
            this.items.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClustersResponseBody = DescribeDBClustersResponseBody;
//# sourceMappingURL=DescribeDbclustersResponseBody.js.map