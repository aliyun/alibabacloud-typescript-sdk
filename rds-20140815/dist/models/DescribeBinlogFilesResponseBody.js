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
exports.DescribeBinlogFilesResponseBody = exports.DescribeBinlogFilesResponseBodyItems = exports.DescribeBinlogFilesResponseBodyItemsBinLogFile = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeBinlogFilesResponseBodyItemsBinLogFile extends $dara.Model {
    static names() {
        return {
            checksum: 'Checksum',
            downloadLink: 'DownloadLink',
            fileSize: 'FileSize',
            hostInstanceID: 'HostInstanceID',
            intranetDownloadLink: 'IntranetDownloadLink',
            linkExpiredTime: 'LinkExpiredTime',
            logBeginTime: 'LogBeginTime',
            logEndTime: 'LogEndTime',
            logFileName: 'LogFileName',
            remoteStatus: 'RemoteStatus',
        };
    }
    static types() {
        return {
            checksum: 'string',
            downloadLink: 'string',
            fileSize: 'number',
            hostInstanceID: 'string',
            intranetDownloadLink: 'string',
            linkExpiredTime: 'string',
            logBeginTime: 'string',
            logEndTime: 'string',
            logFileName: 'string',
            remoteStatus: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeBinlogFilesResponseBodyItemsBinLogFile = DescribeBinlogFilesResponseBodyItemsBinLogFile;
class DescribeBinlogFilesResponseBodyItems extends $dara.Model {
    static names() {
        return {
            binLogFile: 'BinLogFile',
        };
    }
    static types() {
        return {
            binLogFile: { 'type': 'array', 'itemType': DescribeBinlogFilesResponseBodyItemsBinLogFile },
        };
    }
    validate() {
        if (Array.isArray(this.binLogFile)) {
            $dara.Model.validateArray(this.binLogFile);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeBinlogFilesResponseBodyItems = DescribeBinlogFilesResponseBodyItems;
class DescribeBinlogFilesResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalFileSize: 'TotalFileSize',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescribeBinlogFilesResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            totalFileSize: 'number',
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
exports.DescribeBinlogFilesResponseBody = DescribeBinlogFilesResponseBody;
//# sourceMappingURL=DescribeBinlogFilesResponseBody.js.map