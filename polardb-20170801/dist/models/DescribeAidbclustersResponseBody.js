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
exports.DescribeAIDBClustersResponseBody = exports.DescribeAIDBClustersResponseBodyItems = exports.DescribeAIDBClustersResponseBodyItemsDBCluster = exports.DescribeAIDBClustersResponseBodyItemsDBClusterTags = exports.DescribeAIDBClustersResponseBodyItemsDBClusterTagsTag = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAIDBClustersResponseBodyItemsDBClusterTagsTag extends $dara.Model {
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
exports.DescribeAIDBClustersResponseBodyItemsDBClusterTagsTag = DescribeAIDBClustersResponseBodyItemsDBClusterTagsTag;
class DescribeAIDBClustersResponseBodyItemsDBClusterTags extends $dara.Model {
    static names() {
        return {
            tag: 'Tag',
        };
    }
    static types() {
        return {
            tag: { 'type': 'array', 'itemType': DescribeAIDBClustersResponseBodyItemsDBClusterTagsTag },
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
exports.DescribeAIDBClustersResponseBodyItemsDBClusterTags = DescribeAIDBClustersResponseBodyItemsDBClusterTags;
class DescribeAIDBClustersResponseBodyItemsDBCluster extends $dara.Model {
    static names() {
        return {
            aiNodeType: 'AiNodeType',
            createTime: 'CreateTime',
            DBClusterDescription: 'DBClusterDescription',
            DBClusterId: 'DBClusterId',
            DBClusterStatus: 'DBClusterStatus',
            DBNodeClass: 'DBNodeClass',
            DBType: 'DBType',
            expireTime: 'ExpireTime',
            expired: 'Expired',
            kubeClusterId: 'KubeClusterId',
            lockMode: 'LockMode',
            modelSpace: 'ModelSpace',
            modelType: 'ModelType',
            payType: 'PayType',
            regionId: 'RegionId',
            relativeDBClusterId: 'RelativeDBClusterId',
            runType: 'RunType',
            storageSpace: 'StorageSpace',
            storageType: 'StorageType',
            tags: 'Tags',
            vpcId: 'VpcId',
            vswitchId: 'VswitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            aiNodeType: 'string',
            createTime: 'string',
            DBClusterDescription: 'string',
            DBClusterId: 'string',
            DBClusterStatus: 'string',
            DBNodeClass: 'string',
            DBType: 'string',
            expireTime: 'string',
            expired: 'boolean',
            kubeClusterId: 'string',
            lockMode: 'string',
            modelSpace: 'string',
            modelType: 'string',
            payType: 'string',
            regionId: 'string',
            relativeDBClusterId: 'string',
            runType: 'string',
            storageSpace: 'number',
            storageType: 'string',
            tags: DescribeAIDBClustersResponseBodyItemsDBClusterTags,
            vpcId: 'string',
            vswitchId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (this.tags && typeof this.tags.validate === 'function') {
            this.tags.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClustersResponseBodyItemsDBCluster = DescribeAIDBClustersResponseBodyItemsDBCluster;
class DescribeAIDBClustersResponseBodyItems extends $dara.Model {
    static names() {
        return {
            DBCluster: 'DBCluster',
        };
    }
    static types() {
        return {
            DBCluster: { 'type': 'array', 'itemType': DescribeAIDBClustersResponseBodyItemsDBCluster },
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
exports.DescribeAIDBClustersResponseBodyItems = DescribeAIDBClustersResponseBodyItems;
class DescribeAIDBClustersResponseBody extends $dara.Model {
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
            items: DescribeAIDBClustersResponseBodyItems,
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
exports.DescribeAIDBClustersResponseBody = DescribeAIDBClustersResponseBody;
//# sourceMappingURL=DescribeAidbclustersResponseBody.js.map