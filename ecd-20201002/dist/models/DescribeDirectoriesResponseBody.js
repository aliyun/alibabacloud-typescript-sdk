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
exports.DescribeDirectoriesResponseBody = exports.DescribeDirectoriesResponseBodyDirectories = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
/**
 */
class DescribeDirectoriesResponseBodyDirectories extends $dara.Model {
    static names() {
        return {
            desktopAccessType: 'DesktopAccessType',
            directoryId: 'DirectoryId',
            directoryType: 'DirectoryType',
            providerId: 'ProviderId',
            ssoServiceUrl: 'SsoServiceUrl',
        };
    }
    static types() {
        return {
            desktopAccessType: 'string',
            directoryId: 'string',
            directoryType: 'string',
            providerId: 'string',
            ssoServiceUrl: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDirectoriesResponseBodyDirectories = DescribeDirectoriesResponseBodyDirectories;
class DescribeDirectoriesResponseBody extends $dara.Model {
    static names() {
        return {
            directories: 'Directories',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectories },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.directories)) {
            $dara.Model.validateArray(this.directories);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDirectoriesResponseBody = DescribeDirectoriesResponseBody;
//# sourceMappingURL=DescribeDirectoriesResponseBody.js.map