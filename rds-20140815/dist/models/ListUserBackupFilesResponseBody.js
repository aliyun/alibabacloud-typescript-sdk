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
exports.ListUserBackupFilesResponseBody = exports.ListUserBackupFilesResponseBodyRecords = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListUserBackupFilesResponseBodyRecords extends $dara.Model {
    static names() {
        return {
            backupId: 'BackupId',
            binlogInfo: 'BinlogInfo',
            comment: 'Comment',
            creationTime: 'CreationTime',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            finishTime: 'FinishTime',
            modificationTime: 'ModificationTime',
            ossBucket: 'OssBucket',
            ossFileMetaData: 'OssFileMetaData',
            ossFileName: 'OssFileName',
            ossFilePath: 'OssFilePath',
            ossFileSize: 'OssFileSize',
            ossUrl: 'OssUrl',
            reason: 'Reason',
            restoreSize: 'RestoreSize',
            retention: 'Retention',
            status: 'Status',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            backupId: 'string',
            binlogInfo: 'string',
            comment: 'string',
            creationTime: 'string',
            engine: 'string',
            engineVersion: 'string',
            finishTime: 'string',
            modificationTime: 'string',
            ossBucket: 'string',
            ossFileMetaData: 'string',
            ossFileName: 'string',
            ossFilePath: 'string',
            ossFileSize: 'number',
            ossUrl: 'string',
            reason: 'string',
            restoreSize: 'string',
            retention: 'number',
            status: 'string',
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
exports.ListUserBackupFilesResponseBodyRecords = ListUserBackupFilesResponseBodyRecords;
class ListUserBackupFilesResponseBody extends $dara.Model {
    static names() {
        return {
            records: 'Records',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            records: { 'type': 'array', 'itemType': ListUserBackupFilesResponseBodyRecords },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.records)) {
            $dara.Model.validateArray(this.records);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListUserBackupFilesResponseBody = ListUserBackupFilesResponseBody;
//# sourceMappingURL=ListUserBackupFilesResponseBody.js.map