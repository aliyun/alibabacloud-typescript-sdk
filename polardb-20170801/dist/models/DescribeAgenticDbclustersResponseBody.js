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
exports.DescribeAgenticDBClustersResponseBody = exports.DescribeAgenticDBClustersResponseBodyItems = exports.DescribeAgenticDBClustersResponseBodyItemsTags = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAgenticDBClustersResponseBodyItemsTags extends $dara.Model {
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
exports.DescribeAgenticDBClustersResponseBodyItemsTags = DescribeAgenticDBClustersResponseBodyItemsTags;
class DescribeAgenticDBClustersResponseBodyItems extends $dara.Model {
    static names() {
        return {
            agenticDbClusterDescription: 'AgenticDbClusterDescription',
            agenticDbClusterId: 'AgenticDbClusterId',
            category: 'Category',
            createTime: 'CreateTime',
            DBClusterDescription: 'DBClusterDescription',
            DBClusterId: 'DBClusterId',
            DBClusterStatus: 'DBClusterStatus',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            expireTime: 'ExpireTime',
            expired: 'Expired',
            lockMode: 'LockMode',
            payType: 'PayType',
            regionId: 'RegionId',
            scaleMax: 'ScaleMax',
            scaleMin: 'ScaleMin',
            serverlessType: 'ServerlessType',
            storageType: 'StorageType',
            storageUsed: 'StorageUsed',
            tags: 'Tags',
            vpcId: 'VpcId',
            vswitchId: 'VswitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            agenticDbClusterDescription: 'string',
            agenticDbClusterId: 'string',
            category: 'string',
            createTime: 'string',
            DBClusterDescription: 'string',
            DBClusterId: 'string',
            DBClusterStatus: 'string',
            DBType: 'string',
            DBVersion: 'string',
            expireTime: 'string',
            expired: 'string',
            lockMode: 'string',
            payType: 'string',
            regionId: 'string',
            scaleMax: 'string',
            scaleMin: 'string',
            serverlessType: 'string',
            storageType: 'string',
            storageUsed: 'number',
            tags: { 'type': 'array', 'itemType': DescribeAgenticDBClustersResponseBodyItemsTags },
            vpcId: 'string',
            vswitchId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.tags)) {
            $dara.Model.validateArray(this.tags);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAgenticDBClustersResponseBodyItems = DescribeAgenticDBClustersResponseBodyItems;
class DescribeAgenticDBClustersResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeAgenticDBClustersResponseBodyItems },
            maxResults: 'number',
            nextToken: 'string',
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAgenticDBClustersResponseBody = DescribeAgenticDBClustersResponseBody;
//# sourceMappingURL=DescribeAgenticDbclustersResponseBody.js.map