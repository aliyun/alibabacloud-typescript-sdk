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
exports.DescribeRCSnapshotsResponseBody = exports.DescribeRCSnapshotsResponseBodySnapshots = exports.DescribeRCSnapshotsResponseBodySnapshotsTag = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCSnapshotsResponseBodySnapshotsTag extends $dara.Model {
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
exports.DescribeRCSnapshotsResponseBodySnapshotsTag = DescribeRCSnapshotsResponseBodySnapshotsTag;
class DescribeRCSnapshotsResponseBodySnapshots extends $dara.Model {
    static names() {
        return {
            available: 'Available',
            category: 'Category',
            creationTime: 'CreationTime',
            description: 'Description',
            encrypted: 'Encrypted',
            instantAccess: 'InstantAccess',
            lastModifiedTime: 'LastModifiedTime',
            progress: 'Progress',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            snapshotId: 'SnapshotId',
            snapshotName: 'SnapshotName',
            snapshotType: 'SnapshotType',
            sourceDiskId: 'SourceDiskId',
            sourceDiskSize: 'SourceDiskSize',
            sourceDiskType: 'SourceDiskType',
            sourceStorageType: 'SourceStorageType',
            status: 'Status',
            tag: 'Tag',
            usage: 'Usage',
        };
    }
    static types() {
        return {
            available: 'boolean',
            category: 'string',
            creationTime: 'string',
            description: 'string',
            encrypted: 'boolean',
            instantAccess: 'boolean',
            lastModifiedTime: 'string',
            progress: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            snapshotId: 'string',
            snapshotName: 'string',
            snapshotType: 'string',
            sourceDiskId: 'string',
            sourceDiskSize: 'number',
            sourceDiskType: 'string',
            sourceStorageType: 'string',
            status: 'string',
            tag: { 'type': 'array', 'itemType': DescribeRCSnapshotsResponseBodySnapshotsTag },
            usage: 'string',
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
exports.DescribeRCSnapshotsResponseBodySnapshots = DescribeRCSnapshotsResponseBodySnapshots;
class DescribeRCSnapshotsResponseBody extends $dara.Model {
    static names() {
        return {
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            snapshots: 'Snapshots',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            snapshots: { 'type': 'array', 'itemType': DescribeRCSnapshotsResponseBodySnapshots },
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.snapshots)) {
            $dara.Model.validateArray(this.snapshots);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCSnapshotsResponseBody = DescribeRCSnapshotsResponseBody;
//# sourceMappingURL=DescribeRcsnapshotsResponseBody.js.map