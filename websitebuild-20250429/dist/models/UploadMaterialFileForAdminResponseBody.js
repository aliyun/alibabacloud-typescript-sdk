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
exports.UploadMaterialFileForAdminResponseBody = exports.UploadMaterialFileForAdminResponseBodyModule = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UploadMaterialFileForAdminResponseBodyModule extends $dara.Model {
    static names() {
        return {
            bizId: 'BizId',
            contentType: 'ContentType',
            createTime: 'CreateTime',
            deletedTime: 'DeletedTime',
            directoryId: 'DirectoryId',
            fileId: 'FileId',
            fileUrl: 'FileUrl',
            height: 'Height',
            name: 'Name',
            status: 'Status',
            storageSize: 'StorageSize',
            suffix: 'Suffix',
            type: 'Type',
            width: 'Width',
        };
    }
    static types() {
        return {
            bizId: 'string',
            contentType: 'string',
            createTime: 'string',
            deletedTime: 'string',
            directoryId: 'string',
            fileId: 'string',
            fileUrl: 'string',
            height: 'number',
            name: 'string',
            status: 'string',
            storageSize: 'string',
            suffix: 'string',
            type: 'string',
            width: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UploadMaterialFileForAdminResponseBodyModule = UploadMaterialFileForAdminResponseBodyModule;
class UploadMaterialFileForAdminResponseBody extends $dara.Model {
    static names() {
        return {
            accessDeniedDetail: 'AccessDeniedDetail',
            allowRetry: 'AllowRetry',
            appName: 'AppName',
            dynamicCode: 'DynamicCode',
            dynamicMessage: 'DynamicMessage',
            errorArgs: 'ErrorArgs',
            module: 'Module',
            requestId: 'RequestId',
            rootErrorCode: 'RootErrorCode',
            rootErrorMsg: 'RootErrorMsg',
            synchro: 'Synchro',
        };
    }
    static types() {
        return {
            accessDeniedDetail: 'string',
            allowRetry: 'boolean',
            appName: 'string',
            dynamicCode: 'string',
            dynamicMessage: 'string',
            errorArgs: { 'type': 'array', 'itemType': 'any' },
            module: UploadMaterialFileForAdminResponseBodyModule,
            requestId: 'string',
            rootErrorCode: 'string',
            rootErrorMsg: 'string',
            synchro: 'boolean',
        };
    }
    validate() {
        if (Array.isArray(this.errorArgs)) {
            $dara.Model.validateArray(this.errorArgs);
        }
        if (this.module && typeof this.module.validate === 'function') {
            this.module.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UploadMaterialFileForAdminResponseBody = UploadMaterialFileForAdminResponseBody;
//# sourceMappingURL=UploadMaterialFileForAdminResponseBody.js.map