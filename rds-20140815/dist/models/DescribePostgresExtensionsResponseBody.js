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
exports.DescribePostgresExtensionsResponseBody = exports.DescribePostgresExtensionsResponseBodyUninstalledExtensions = exports.DescribePostgresExtensionsResponseBodyInstalledExtensions = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePostgresExtensionsResponseBodyInstalledExtensions extends $dara.Model {
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
            uid: 'Uid',
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
            uid: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePostgresExtensionsResponseBodyInstalledExtensions = DescribePostgresExtensionsResponseBodyInstalledExtensions;
class DescribePostgresExtensionsResponseBodyUninstalledExtensions extends $dara.Model {
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
            uid: 'Uid',
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
            uid: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePostgresExtensionsResponseBodyUninstalledExtensions = DescribePostgresExtensionsResponseBodyUninstalledExtensions;
class DescribePostgresExtensionsResponseBody extends $dara.Model {
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
            installedExtensions: { 'type': 'array', 'itemType': DescribePostgresExtensionsResponseBodyInstalledExtensions },
            overview: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            requestId: 'string',
            uninstalledExtensions: { 'type': 'array', 'itemType': DescribePostgresExtensionsResponseBodyUninstalledExtensions },
        };
    }
    validate() {
        if (Array.isArray(this.installedExtensions)) {
            $dara.Model.validateArray(this.installedExtensions);
        }
        if (this.overview) {
            $dara.Model.validateMap(this.overview);
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
exports.DescribePostgresExtensionsResponseBody = DescribePostgresExtensionsResponseBody;
//# sourceMappingURL=DescribePostgresExtensionsResponseBody.js.map