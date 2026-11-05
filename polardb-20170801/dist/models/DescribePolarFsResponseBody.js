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
exports.DescribePolarFsResponseBody = exports.DescribePolarFsResponseBodyItems = exports.DescribePolarFsResponseBodyItemsPolarFsPaths = exports.DescribePolarFsResponseBodyItemsPolarFsPathsTags = exports.DescribePolarFsResponseBodyItemsPolarFsPathsTagsTag = exports.DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClusters = exports.DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClustersMountedAIDBClusters = exports.DescribePolarFsResponseBodyItemsPolarFsPathsMountInfo = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePolarFsResponseBodyItemsPolarFsPathsMountInfo extends $dara.Model {
    static names() {
        return {
            polarDbProxy: 'PolarDbProxy',
            polarFsCluster: 'PolarFsCluster',
            token: 'Token',
        };
    }
    static types() {
        return {
            polarDbProxy: 'string',
            polarFsCluster: 'string',
            token: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarFsResponseBodyItemsPolarFsPathsMountInfo = DescribePolarFsResponseBodyItemsPolarFsPathsMountInfo;
class DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClustersMountedAIDBClusters extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            mountDir: 'MountDir',
            mountStatus: 'MountStatus',
            mountedTime: 'MountedTime',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            mountDir: 'string',
            mountStatus: 'string',
            mountedTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClustersMountedAIDBClusters = DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClustersMountedAIDBClusters;
class DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClusters extends $dara.Model {
    static names() {
        return {
            mountedAIDBClusters: 'MountedAIDBClusters',
        };
    }
    static types() {
        return {
            mountedAIDBClusters: { 'type': 'array', 'itemType': DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClustersMountedAIDBClusters },
        };
    }
    validate() {
        if (Array.isArray(this.mountedAIDBClusters)) {
            $dara.Model.validateArray(this.mountedAIDBClusters);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClusters = DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClusters;
class DescribePolarFsResponseBodyItemsPolarFsPathsTagsTag extends $dara.Model {
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
exports.DescribePolarFsResponseBodyItemsPolarFsPathsTagsTag = DescribePolarFsResponseBodyItemsPolarFsPathsTagsTag;
class DescribePolarFsResponseBodyItemsPolarFsPathsTags extends $dara.Model {
    static names() {
        return {
            tag: 'Tag',
        };
    }
    static types() {
        return {
            tag: { 'type': 'array', 'itemType': DescribePolarFsResponseBodyItemsPolarFsPathsTagsTag },
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
exports.DescribePolarFsResponseBodyItemsPolarFsPathsTags = DescribePolarFsResponseBodyItemsPolarFsPathsTags;
class DescribePolarFsResponseBodyItemsPolarFsPaths extends $dara.Model {
    static names() {
        return {
            accelerateType: 'AccelerateType',
            acceleratedStorageSpace: 'AcceleratedStorageSpace',
            acceleratingEnable: 'AcceleratingEnable',
            bandwidth: 'Bandwidth',
            category: 'Category',
            createTime: 'CreateTime',
            expireTime: 'ExpireTime',
            expired: 'Expired',
            mountInfo: 'MountInfo',
            mountedAIDBClusters: 'MountedAIDBClusters',
            payType: 'PayType',
            polarFsInstanceDescription: 'PolarFsInstanceDescription',
            polarFsInstanceId: 'PolarFsInstanceId',
            polarFsPath: 'PolarFsPath',
            polarFsStatus: 'PolarFsStatus',
            polarFsType: 'PolarFsType',
            regionId: 'RegionId',
            relativeDbClusterId: 'RelativeDbClusterId',
            resourceGroupId: 'ResourceGroupId',
            securityGroupId: 'SecurityGroupId',
            storageSpace: 'StorageSpace',
            storageType: 'StorageType',
            tags: 'Tags',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            accelerateType: 'string',
            acceleratedStorageSpace: 'string',
            acceleratingEnable: 'string',
            bandwidth: 'number',
            category: 'string',
            createTime: 'string',
            expireTime: 'string',
            expired: 'string',
            mountInfo: DescribePolarFsResponseBodyItemsPolarFsPathsMountInfo,
            mountedAIDBClusters: DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClusters,
            payType: 'string',
            polarFsInstanceDescription: 'string',
            polarFsInstanceId: 'string',
            polarFsPath: 'string',
            polarFsStatus: 'string',
            polarFsType: 'string',
            regionId: 'string',
            relativeDbClusterId: 'string',
            resourceGroupId: 'string',
            securityGroupId: 'string',
            storageSpace: 'number',
            storageType: 'string',
            tags: DescribePolarFsResponseBodyItemsPolarFsPathsTags,
            VPCId: 'string',
            vSwitchId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (this.mountInfo && typeof this.mountInfo.validate === 'function') {
            this.mountInfo.validate();
        }
        if (this.mountedAIDBClusters && typeof this.mountedAIDBClusters.validate === 'function') {
            this.mountedAIDBClusters.validate();
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
exports.DescribePolarFsResponseBodyItemsPolarFsPaths = DescribePolarFsResponseBodyItemsPolarFsPaths;
class DescribePolarFsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            polarFsPaths: 'PolarFsPaths',
        };
    }
    static types() {
        return {
            polarFsPaths: { 'type': 'array', 'itemType': DescribePolarFsResponseBodyItemsPolarFsPaths },
        };
    }
    validate() {
        if (Array.isArray(this.polarFsPaths)) {
            $dara.Model.validateArray(this.polarFsPaths);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarFsResponseBodyItems = DescribePolarFsResponseBodyItems;
class DescribePolarFsResponseBody extends $dara.Model {
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
            items: DescribePolarFsResponseBodyItems,
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
exports.DescribePolarFsResponseBody = DescribePolarFsResponseBody;
//# sourceMappingURL=DescribePolarFsResponseBody.js.map