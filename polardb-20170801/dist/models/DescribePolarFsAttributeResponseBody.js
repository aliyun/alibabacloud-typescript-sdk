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
exports.DescribePolarFsAttributeResponseBody = exports.DescribePolarFsAttributeResponseBodyMountInfo = exports.DescribePolarFsAttributeResponseBodyEndpointItems = exports.DescribePolarFsAttributeResponseBodyEndpointItemsAddressItems = exports.DescribePolarFsAttributeResponseBodyCustomBucketPathList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePolarFsAttributeResponseBodyCustomBucketPathList extends $dara.Model {
    static names() {
        return {
            bucket: 'Bucket',
            path: 'Path',
        };
    }
    static types() {
        return {
            bucket: 'string',
            path: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarFsAttributeResponseBodyCustomBucketPathList = DescribePolarFsAttributeResponseBodyCustomBucketPathList;
class DescribePolarFsAttributeResponseBodyEndpointItemsAddressItems extends $dara.Model {
    static names() {
        return {
            connectionString: 'ConnectionString',
            IPAddress: 'IPAddress',
            netType: 'NetType',
            port: 'Port',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
        };
    }
    static types() {
        return {
            connectionString: 'string',
            IPAddress: 'string',
            netType: 'string',
            port: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarFsAttributeResponseBodyEndpointItemsAddressItems = DescribePolarFsAttributeResponseBodyEndpointItemsAddressItems;
class DescribePolarFsAttributeResponseBodyEndpointItems extends $dara.Model {
    static names() {
        return {
            addressItems: 'AddressItems',
            DBEndpointId: 'DBEndpointId',
            endpointType: 'EndpointType',
        };
    }
    static types() {
        return {
            addressItems: { 'type': 'array', 'itemType': DescribePolarFsAttributeResponseBodyEndpointItemsAddressItems },
            DBEndpointId: 'string',
            endpointType: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.addressItems)) {
            $dara.Model.validateArray(this.addressItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarFsAttributeResponseBodyEndpointItems = DescribePolarFsAttributeResponseBodyEndpointItems;
class DescribePolarFsAttributeResponseBodyMountInfo extends $dara.Model {
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
exports.DescribePolarFsAttributeResponseBodyMountInfo = DescribePolarFsAttributeResponseBodyMountInfo;
class DescribePolarFsAttributeResponseBody extends $dara.Model {
    static names() {
        return {
            accelerateType: 'AccelerateType',
            acceleratedStorageSpace: 'AcceleratedStorageSpace',
            acceleratingEnable: 'AcceleratingEnable',
            authorizedUserArnIds: 'AuthorizedUserArnIds',
            authorizedUserIds: 'AuthorizedUserIds',
            bandwidth: 'Bandwidth',
            bandwidthBaseLine: 'BandwidthBaseLine',
            bucketId: 'BucketId',
            category: 'Category',
            clientDownloadPath: 'ClientDownloadPath',
            createTime: 'CreateTime',
            customBucketPath: 'CustomBucketPath',
            customBucketPathList: 'CustomBucketPathList',
            DBEndpointId: 'DBEndpointId',
            DBType: 'DBType',
            endpointItems: 'EndpointItems',
            expireTime: 'ExpireTime',
            expired: 'Expired',
            fileSystemId: 'FileSystemId',
            lockMode: 'LockMode',
            maxscaleEndpointId: 'MaxscaleEndpointId',
            metaConnString: 'MetaConnString',
            metaInstanceName: 'MetaInstanceName',
            metaMxsConnString: 'MetaMxsConnString',
            metaUrl: 'MetaUrl',
            minorVersion: 'MinorVersion',
            mountInfo: 'MountInfo',
            payType: 'PayType',
            polarFsInstanceDescription: 'PolarFsInstanceDescription',
            polarFsInstanceId: 'PolarFsInstanceId',
            polarFsStatus: 'PolarFsStatus',
            polarFsType: 'PolarFsType',
            polarFsVersion: 'PolarFsVersion',
            regionId: 'RegionId',
            relativeDbClusterId: 'RelativeDbClusterId',
            relativePfsClusterId: 'RelativePfsClusterId',
            requestId: 'RequestId',
            resourceGroupId: 'ResourceGroupId',
            securityGroupId: 'SecurityGroupId',
            storageSpace: 'StorageSpace',
            storageType: 'StorageType',
            storageUsed: 'StorageUsed',
            userDefaultAccName: 'UserDefaultAccName',
            userDefaultAccSk: 'UserDefaultAccSk',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            accelerateType: 'string',
            acceleratedStorageSpace: 'number',
            acceleratingEnable: 'string',
            authorizedUserArnIds: 'string',
            authorizedUserIds: 'string',
            bandwidth: 'number',
            bandwidthBaseLine: 'number',
            bucketId: 'string',
            category: 'string',
            clientDownloadPath: 'string',
            createTime: 'string',
            customBucketPath: 'string',
            customBucketPathList: { 'type': 'array', 'itemType': DescribePolarFsAttributeResponseBodyCustomBucketPathList },
            DBEndpointId: 'string',
            DBType: 'string',
            endpointItems: { 'type': 'array', 'itemType': DescribePolarFsAttributeResponseBodyEndpointItems },
            expireTime: 'string',
            expired: 'string',
            fileSystemId: 'string',
            lockMode: 'string',
            maxscaleEndpointId: 'string',
            metaConnString: 'string',
            metaInstanceName: 'string',
            metaMxsConnString: 'string',
            metaUrl: 'string',
            minorVersion: 'string',
            mountInfo: DescribePolarFsAttributeResponseBodyMountInfo,
            payType: 'string',
            polarFsInstanceDescription: 'string',
            polarFsInstanceId: 'string',
            polarFsStatus: 'string',
            polarFsType: 'string',
            polarFsVersion: 'string',
            regionId: 'string',
            relativeDbClusterId: 'string',
            relativePfsClusterId: 'string',
            requestId: 'string',
            resourceGroupId: 'string',
            securityGroupId: 'string',
            storageSpace: 'number',
            storageType: 'string',
            storageUsed: 'number',
            userDefaultAccName: 'string',
            userDefaultAccSk: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.customBucketPathList)) {
            $dara.Model.validateArray(this.customBucketPathList);
        }
        if (Array.isArray(this.endpointItems)) {
            $dara.Model.validateArray(this.endpointItems);
        }
        if (this.mountInfo && typeof this.mountInfo.validate === 'function') {
            this.mountInfo.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarFsAttributeResponseBody = DescribePolarFsAttributeResponseBody;
//# sourceMappingURL=DescribePolarFsAttributeResponseBody.js.map