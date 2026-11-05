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
exports.DescribeDBClustersWithBackupsResponseBody = exports.DescribeDBClustersWithBackupsResponseBodyItems = exports.DescribeDBClustersWithBackupsResponseBodyItemsDBCluster = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClustersWithBackupsResponseBodyItemsDBCluster extends $dara.Model {
    static names() {
        return {
            createTime: 'CreateTime',
            DBClusterDescription: 'DBClusterDescription',
            DBClusterId: 'DBClusterId',
            DBClusterNetworkType: 'DBClusterNetworkType',
            DBClusterStatus: 'DBClusterStatus',
            DBNodeClass: 'DBNodeClass',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            deletedTime: 'DeletedTime',
            deletionLock: 'DeletionLock',
            engine: 'Engine',
            expireTime: 'ExpireTime',
            expired: 'Expired',
            isDeleted: 'IsDeleted',
            lockMode: 'LockMode',
            payType: 'PayType',
            regionId: 'RegionId',
            vpcId: 'VpcId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            createTime: 'string',
            DBClusterDescription: 'string',
            DBClusterId: 'string',
            DBClusterNetworkType: 'string',
            DBClusterStatus: 'string',
            DBNodeClass: 'string',
            DBType: 'string',
            DBVersion: 'string',
            deletedTime: 'string',
            deletionLock: 'number',
            engine: 'string',
            expireTime: 'string',
            expired: 'string',
            isDeleted: 'number',
            lockMode: 'string',
            payType: 'string',
            regionId: 'string',
            vpcId: 'string',
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
exports.DescribeDBClustersWithBackupsResponseBodyItemsDBCluster = DescribeDBClustersWithBackupsResponseBodyItemsDBCluster;
class DescribeDBClustersWithBackupsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            DBCluster: 'DBCluster',
        };
    }
    static types() {
        return {
            DBCluster: { 'type': 'array', 'itemType': DescribeDBClustersWithBackupsResponseBodyItemsDBCluster },
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
exports.DescribeDBClustersWithBackupsResponseBodyItems = DescribeDBClustersWithBackupsResponseBodyItems;
class DescribeDBClustersWithBackupsResponseBody extends $dara.Model {
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
            items: DescribeDBClustersWithBackupsResponseBodyItems,
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
exports.DescribeDBClustersWithBackupsResponseBody = DescribeDBClustersWithBackupsResponseBody;
//# sourceMappingURL=DescribeDbclustersWithBackupsResponseBody.js.map