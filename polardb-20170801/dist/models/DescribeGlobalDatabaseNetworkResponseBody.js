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
exports.DescribeGlobalDatabaseNetworkResponseBody = exports.DescribeGlobalDatabaseNetworkResponseBodyLabels = exports.DescribeGlobalDatabaseNetworkResponseBodyDBClusters = exports.DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes = exports.DescribeGlobalDatabaseNetworkResponseBodyConnections = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeGlobalDatabaseNetworkResponseBodyConnections extends $dara.Model {
    static names() {
        return {
            connectionString: 'ConnectionString',
            netType: 'NetType',
            port: 'Port',
        };
    }
    static types() {
        return {
            connectionString: 'string',
            netType: 'string',
            port: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDatabaseNetworkResponseBodyConnections = DescribeGlobalDatabaseNetworkResponseBodyConnections;
class DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes extends $dara.Model {
    static names() {
        return {
            creationTime: 'CreationTime',
            DBNodeClass: 'DBNodeClass',
            DBNodeId: 'DBNodeId',
            DBNodeRole: 'DBNodeRole',
            DBNodeStatus: 'DBNodeStatus',
            failoverPriority: 'FailoverPriority',
            maxConnections: 'MaxConnections',
            maxIOPS: 'MaxIOPS',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            creationTime: 'string',
            DBNodeClass: 'string',
            DBNodeId: 'string',
            DBNodeRole: 'string',
            DBNodeStatus: 'string',
            failoverPriority: 'number',
            maxConnections: 'number',
            maxIOPS: 'number',
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
exports.DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes = DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes;
class DescribeGlobalDatabaseNetworkResponseBodyDBClusters extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            DBClusterDescription: 'DBClusterDescription',
            DBClusterId: 'DBClusterId',
            DBClusterStatus: 'DBClusterStatus',
            DBNodeClass: 'DBNodeClass',
            DBNodes: 'DBNodes',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            expireTime: 'ExpireTime',
            expired: 'Expired',
            payType: 'PayType',
            regionId: 'RegionId',
            replicaLag: 'ReplicaLag',
            role: 'Role',
            serverlessType: 'ServerlessType',
            storageUsed: 'StorageUsed',
        };
    }
    static types() {
        return {
            category: 'string',
            DBClusterDescription: 'string',
            DBClusterId: 'string',
            DBClusterStatus: 'string',
            DBNodeClass: 'string',
            DBNodes: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes },
            DBType: 'string',
            DBVersion: 'string',
            expireTime: 'string',
            expired: 'string',
            payType: 'string',
            regionId: 'string',
            replicaLag: 'string',
            role: 'string',
            serverlessType: 'string',
            storageUsed: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.DBNodes)) {
            $dara.Model.validateArray(this.DBNodes);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDatabaseNetworkResponseBodyDBClusters = DescribeGlobalDatabaseNetworkResponseBodyDBClusters;
class DescribeGlobalDatabaseNetworkResponseBodyLabels extends $dara.Model {
    static names() {
        return {
            GDNVersion: 'GDNVersion',
        };
    }
    static types() {
        return {
            GDNVersion: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDatabaseNetworkResponseBodyLabels = DescribeGlobalDatabaseNetworkResponseBodyLabels;
class DescribeGlobalDatabaseNetworkResponseBody extends $dara.Model {
    static names() {
        return {
            connections: 'Connections',
            createTime: 'CreateTime',
            DBClusterId: 'DBClusterId',
            DBClusters: 'DBClusters',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            GDNDescription: 'GDNDescription',
            GDNId: 'GDNId',
            GDNStatus: 'GDNStatus',
            globalDomainName: 'GlobalDomainName',
            labels: 'Labels',
            requestId: 'RequestId',
            resourceGroupId: 'ResourceGroupId',
        };
    }
    static types() {
        return {
            connections: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworkResponseBodyConnections },
            createTime: 'string',
            DBClusterId: 'string',
            DBClusters: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworkResponseBodyDBClusters },
            DBType: 'string',
            DBVersion: 'string',
            GDNDescription: 'string',
            GDNId: 'string',
            GDNStatus: 'string',
            globalDomainName: 'string',
            labels: DescribeGlobalDatabaseNetworkResponseBodyLabels,
            requestId: 'string',
            resourceGroupId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.connections)) {
            $dara.Model.validateArray(this.connections);
        }
        if (Array.isArray(this.DBClusters)) {
            $dara.Model.validateArray(this.DBClusters);
        }
        if (this.labels && typeof this.labels.validate === 'function') {
            this.labels.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDatabaseNetworkResponseBody = DescribeGlobalDatabaseNetworkResponseBody;
//# sourceMappingURL=DescribeGlobalDatabaseNetworkResponseBody.js.map