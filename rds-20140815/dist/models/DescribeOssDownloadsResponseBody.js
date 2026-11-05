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
exports.DescribeOssDownloadsResponseBody = exports.DescribeOssDownloadsResponseBodyItems = exports.DescribeOssDownloadsResponseBodyItemsOssDownload = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeOssDownloadsResponseBodyItemsOssDownload extends $dara.Model {
    static names() {
        return {
            backupMode: 'BackupMode',
            createTime: 'CreateTime',
            description: 'Description',
            endTime: 'EndTime',
            fileName: 'FileName',
            fileSize: 'FileSize',
            isAvailable: 'IsAvailable',
            status: 'Status',
        };
    }
    static types() {
        return {
            backupMode: 'string',
            createTime: 'string',
            description: 'string',
            endTime: 'string',
            fileName: 'string',
            fileSize: 'string',
            isAvailable: 'string',
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
exports.DescribeOssDownloadsResponseBodyItemsOssDownload = DescribeOssDownloadsResponseBodyItemsOssDownload;
class DescribeOssDownloadsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            ossDownload: 'OssDownload',
        };
    }
    static types() {
        return {
            ossDownload: { 'type': 'array', 'itemType': DescribeOssDownloadsResponseBodyItemsOssDownload },
        };
    }
    validate() {
        if (Array.isArray(this.ossDownload)) {
            $dara.Model.validateArray(this.ossDownload);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeOssDownloadsResponseBodyItems = DescribeOssDownloadsResponseBodyItems;
class DescribeOssDownloadsResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            items: 'Items',
            migrateTaskId: 'MigrateTaskId',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            items: DescribeOssDownloadsResponseBodyItems,
            migrateTaskId: 'string',
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
exports.DescribeOssDownloadsResponseBody = DescribeOssDownloadsResponseBody;
//# sourceMappingURL=DescribeOssDownloadsResponseBody.js.map