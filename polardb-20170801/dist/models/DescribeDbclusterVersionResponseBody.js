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
exports.DescribeDBClusterVersionResponseBody = exports.DescribeDBClusterVersionResponseBodyProxyRevisionVersionList = exports.DescribeDBClusterVersionResponseBodyDBRevisionVersionList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClusterVersionResponseBodyDBRevisionVersionList extends $dara.Model {
    static names() {
        return {
            releaseNote: 'ReleaseNote',
            releaseType: 'ReleaseType',
            revisionVersionCode: 'RevisionVersionCode',
            revisionVersionName: 'RevisionVersionName',
        };
    }
    static types() {
        return {
            releaseNote: 'string',
            releaseType: 'string',
            revisionVersionCode: 'string',
            revisionVersionName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterVersionResponseBodyDBRevisionVersionList = DescribeDBClusterVersionResponseBodyDBRevisionVersionList;
class DescribeDBClusterVersionResponseBodyProxyRevisionVersionList extends $dara.Model {
    static names() {
        return {
            releaseNote: 'ReleaseNote',
            releaseType: 'ReleaseType',
            revisionVersionCode: 'RevisionVersionCode',
            revisionVersionName: 'RevisionVersionName',
        };
    }
    static types() {
        return {
            releaseNote: 'string',
            releaseType: 'string',
            revisionVersionCode: 'string',
            revisionVersionName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterVersionResponseBodyProxyRevisionVersionList = DescribeDBClusterVersionResponseBodyProxyRevisionVersionList;
class DescribeDBClusterVersionResponseBody extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            DBLatestStableVersion: 'DBLatestStableVersion',
            DBLatestVersion: 'DBLatestVersion',
            DBMinorVersion: 'DBMinorVersion',
            DBRevisionVersion: 'DBRevisionVersion',
            DBRevisionVersionList: 'DBRevisionVersionList',
            DBVersion: 'DBVersion',
            DBVersionStatus: 'DBVersionStatus',
            isLatestStableVersion: 'IsLatestStableVersion',
            isLatestVersion: 'IsLatestVersion',
            isProxyLatestVersion: 'IsProxyLatestVersion',
            proxyLatestVersion: 'ProxyLatestVersion',
            proxyRevisionVersion: 'ProxyRevisionVersion',
            proxyRevisionVersionList: 'ProxyRevisionVersionList',
            proxyVersionStatus: 'ProxyVersionStatus',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            DBLatestStableVersion: 'string',
            DBLatestVersion: 'string',
            DBMinorVersion: 'string',
            DBRevisionVersion: 'string',
            DBRevisionVersionList: { 'type': 'array', 'itemType': DescribeDBClusterVersionResponseBodyDBRevisionVersionList },
            DBVersion: 'string',
            DBVersionStatus: 'string',
            isLatestStableVersion: 'string',
            isLatestVersion: 'string',
            isProxyLatestVersion: 'string',
            proxyLatestVersion: 'string',
            proxyRevisionVersion: 'string',
            proxyRevisionVersionList: { 'type': 'array', 'itemType': DescribeDBClusterVersionResponseBodyProxyRevisionVersionList },
            proxyVersionStatus: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.DBRevisionVersionList)) {
            $dara.Model.validateArray(this.DBRevisionVersionList);
        }
        if (Array.isArray(this.proxyRevisionVersionList)) {
            $dara.Model.validateArray(this.proxyRevisionVersionList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterVersionResponseBody = DescribeDBClusterVersionResponseBody;
//# sourceMappingURL=DescribeDbclusterVersionResponseBody.js.map