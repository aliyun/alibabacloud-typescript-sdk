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
exports.DescribeReplicationLinkLogsResponseBody = exports.DescribeReplicationLinkLogsResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeReplicationLinkLogsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            detail: 'Detail',
            gmtCreated: 'GmtCreated',
            gmtModified: 'GmtModified',
            replicationInfo: 'ReplicationInfo',
            replicationState: 'ReplicationState',
            replicatorAccount: 'ReplicatorAccount',
            replicatorPassword: 'ReplicatorPassword',
            sourceAddress: 'SourceAddress',
            sourceCategory: 'SourceCategory',
            sourcePort: 'SourcePort',
            targetInstanceId: 'TargetInstanceId',
            taskId: 'TaskId',
            taskName: 'TaskName',
            taskStage: 'TaskStage',
            taskStatus: 'TaskStatus',
            taskType: 'TaskType',
        };
    }
    static types() {
        return {
            detail: 'string',
            gmtCreated: 'string',
            gmtModified: 'string',
            replicationInfo: 'string',
            replicationState: 'string',
            replicatorAccount: 'string',
            replicatorPassword: 'string',
            sourceAddress: 'string',
            sourceCategory: 'string',
            sourcePort: 'number',
            targetInstanceId: 'string',
            taskId: 'number',
            taskName: 'string',
            taskStage: 'string',
            taskStatus: 'string',
            taskType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeReplicationLinkLogsResponseBodyItems = DescribeReplicationLinkLogsResponseBodyItems;
class DescribeReplicationLinkLogsResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            items: 'Items',
            requestId: 'RequestId',
            totalSize: 'TotalSize',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            items: { 'type': 'array', 'itemType': DescribeReplicationLinkLogsResponseBodyItems },
            requestId: 'string',
            totalSize: 'number',
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
exports.DescribeReplicationLinkLogsResponseBody = DescribeReplicationLinkLogsResponseBody;
//# sourceMappingURL=DescribeReplicationLinkLogsResponseBody.js.map