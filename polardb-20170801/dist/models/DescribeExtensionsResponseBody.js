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
exports.DescribeExtensionsResponseBody = exports.DescribeExtensionsResponseBodyUninstalledExtensions = exports.DescribeExtensionsResponseBodyInstalledExtensions = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeExtensionsResponseBodyInstalledExtensions extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            comment: 'Comment',
            defaultVersion: 'DefaultVersion',
            installedVersion: 'InstalledVersion',
            name: 'Name',
            owner: 'Owner',
            priority: 'Priority',
            requires: 'Requires',
            restart: 'Restart',
        };
    }
    static types() {
        return {
            category: 'string',
            comment: 'string',
            defaultVersion: 'string',
            installedVersion: 'string',
            name: 'string',
            owner: 'string',
            priority: 'string',
            requires: 'string',
            restart: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeExtensionsResponseBodyInstalledExtensions = DescribeExtensionsResponseBodyInstalledExtensions;
class DescribeExtensionsResponseBodyUninstalledExtensions extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            comment: 'Comment',
            defaultVersion: 'DefaultVersion',
            installedVersion: 'InstalledVersion',
            name: 'Name',
            owner: 'Owner',
            priority: 'Priority',
            requires: 'Requires',
            restart: 'Restart',
        };
    }
    static types() {
        return {
            category: 'string',
            comment: 'string',
            defaultVersion: 'string',
            installedVersion: 'string',
            name: 'string',
            owner: 'string',
            priority: 'string',
            requires: 'string',
            restart: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeExtensionsResponseBodyUninstalledExtensions = DescribeExtensionsResponseBodyUninstalledExtensions;
class DescribeExtensionsResponseBody extends $dara.Model {
    static names() {
        return {
            installedExtensions: 'InstalledExtensions',
            overview: 'Overview',
            requestId: 'RequestId',
            uninstalledExtensions: 'UninstalledExtensions',
        };
    }
    static types() {
        return {
            installedExtensions: { 'type': 'array', 'itemType': DescribeExtensionsResponseBodyInstalledExtensions },
            overview: 'string',
            requestId: 'string',
            uninstalledExtensions: { 'type': 'array', 'itemType': DescribeExtensionsResponseBodyUninstalledExtensions },
        };
    }
    validate() {
        if (Array.isArray(this.installedExtensions)) {
            $dara.Model.validateArray(this.installedExtensions);
        }
        if (Array.isArray(this.uninstalledExtensions)) {
            $dara.Model.validateArray(this.uninstalledExtensions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeExtensionsResponseBody = DescribeExtensionsResponseBody;
//# sourceMappingURL=DescribeExtensionsResponseBody.js.map