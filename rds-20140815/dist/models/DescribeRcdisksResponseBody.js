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
exports.DescribeRCDisksResponseBody = exports.DescribeRCDisksResponseBodyDisks = exports.DescribeRCDisksResponseBodyDisksTag = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCDisksResponseBodyDisksTag extends $dara.Model {
    static names() {
        return {
            tagKey: 'TagKey',
            tagValue: 'TagValue',
        };
    }
    static types() {
        return {
            tagKey: 'string',
            tagValue: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCDisksResponseBodyDisksTag = DescribeRCDisksResponseBodyDisksTag;
class DescribeRCDisksResponseBodyDisks extends $dara.Model {
    static names() {
        return {
            attachedTime: 'AttachedTime',
            burstingEnabled: 'BurstingEnabled',
            category: 'Category',
            creationTime: 'CreationTime',
            deleteAutoSnapshot: 'DeleteAutoSnapshot',
            deleteWithInstance: 'DeleteWithInstance',
            description: 'Description',
            device: 'Device',
            diskChargeType: 'DiskChargeType',
            diskId: 'DiskId',
            diskName: 'DiskName',
            encrypted: 'Encrypted',
            expiredTime: 'ExpiredTime',
            IOPS: 'IOPS',
            imageId: 'ImageId',
            instanceId: 'InstanceId',
            performanceLevel: 'PerformanceLevel',
            portable: 'Portable',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            serialNumber: 'SerialNumber',
            size: 'Size',
            sourceSnapshotId: 'SourceSnapshotId',
            status: 'Status',
            storageClusterId: 'StorageClusterId',
            storageSetId: 'StorageSetId',
            tag: 'Tag',
            type: 'Type',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            attachedTime: 'string',
            burstingEnabled: 'boolean',
            category: 'string',
            creationTime: 'string',
            deleteAutoSnapshot: 'boolean',
            deleteWithInstance: 'boolean',
            description: 'string',
            device: 'string',
            diskChargeType: 'string',
            diskId: 'string',
            diskName: 'string',
            encrypted: 'boolean',
            expiredTime: 'string',
            IOPS: 'number',
            imageId: 'string',
            instanceId: 'string',
            performanceLevel: 'string',
            portable: 'boolean',
            regionId: 'string',
            resourceGroupId: 'string',
            serialNumber: 'string',
            size: 'number',
            sourceSnapshotId: 'string',
            status: 'string',
            storageClusterId: 'string',
            storageSetId: 'string',
            tag: { 'type': 'array', 'itemType': DescribeRCDisksResponseBodyDisksTag },
            type: 'string',
            zoneId: 'string',
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
exports.DescribeRCDisksResponseBodyDisks = DescribeRCDisksResponseBodyDisks;
class DescribeRCDisksResponseBody extends $dara.Model {
    static names() {
        return {
            disks: 'Disks',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            disks: { 'type': 'array', 'itemType': DescribeRCDisksResponseBodyDisks },
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.disks)) {
            $dara.Model.validateArray(this.disks);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCDisksResponseBody = DescribeRCDisksResponseBody;
//# sourceMappingURL=DescribeRcdisksResponseBody.js.map