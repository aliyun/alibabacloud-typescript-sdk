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
exports.DescribeBackupTasksResponseBody = exports.DescribeBackupTasksResponseBodyItems = exports.DescribeBackupTasksResponseBodyItemsBackupJob = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeBackupTasksResponseBodyItemsBackupJob extends $dara.Model {
    static names() {
        return {
            backupJobId: 'BackupJobId',
            backupProgressStatus: 'BackupProgressStatus',
            jobMode: 'JobMode',
            process: 'Process',
            startTime: 'StartTime',
            taskAction: 'TaskAction',
        };
    }
    static types() {
        return {
            backupJobId: 'string',
            backupProgressStatus: 'string',
            jobMode: 'string',
            process: 'string',
            startTime: 'string',
            taskAction: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeBackupTasksResponseBodyItemsBackupJob = DescribeBackupTasksResponseBodyItemsBackupJob;
class DescribeBackupTasksResponseBodyItems extends $dara.Model {
    static names() {
        return {
            backupJob: 'BackupJob',
        };
    }
    static types() {
        return {
            backupJob: { 'type': 'array', 'itemType': DescribeBackupTasksResponseBodyItemsBackupJob },
        };
    }
    validate() {
        if (Array.isArray(this.backupJob)) {
            $dara.Model.validateArray(this.backupJob);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeBackupTasksResponseBodyItems = DescribeBackupTasksResponseBodyItems;
class DescribeBackupTasksResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            items: DescribeBackupTasksResponseBodyItems,
            requestId: 'string',
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
exports.DescribeBackupTasksResponseBody = DescribeBackupTasksResponseBody;
//# sourceMappingURL=DescribeBackupTasksResponseBody.js.map