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
exports.DescribeSnapshotsResponseBody = exports.DescribeSnapshotsResponseBodySnapshots = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeSnapshotsResponseBodySnapshots extends $dara.Model {
    static names() {
        return {
            creationTime: 'CreationTime',
            description: 'Description',
            desktopId: 'DesktopId',
            progress: 'Progress',
            remainTime: 'RemainTime',
            restorePointId: 'RestorePointId',
            restorePointName: 'RestorePointName',
            snapshotId: 'SnapshotId',
            snapshotName: 'SnapshotName',
            snapshotType: 'SnapshotType',
            sourceDiskSize: 'SourceDiskSize',
            sourceDiskType: 'SourceDiskType',
            status: 'Status',
        };
    }
    static types() {
        return {
            creationTime: 'string',
            description: 'string',
            desktopId: 'string',
            progress: 'string',
            remainTime: 'number',
            restorePointId: 'string',
            restorePointName: 'string',
            snapshotId: 'string',
            snapshotName: 'string',
            snapshotType: 'string',
            sourceDiskSize: 'string',
            sourceDiskType: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSnapshotsResponseBodySnapshots = DescribeSnapshotsResponseBodySnapshots;
class DescribeSnapshotsResponseBody extends $dara.Model {
    static names() {
        return {
            nextToken: 'NextToken',
            requestId: 'RequestId',
            snapshots: 'Snapshots',
        };
    }
    static types() {
        return {
            nextToken: 'string',
            requestId: 'string',
            snapshots: { 'type': 'array', 'itemType': DescribeSnapshotsResponseBodySnapshots },
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
exports.DescribeSnapshotsResponseBody = DescribeSnapshotsResponseBody;
//# sourceMappingURL=DescribeSnapshotsResponseBody.js.map