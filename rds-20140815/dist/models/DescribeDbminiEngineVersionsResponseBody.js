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
exports.DescribeDBMiniEngineVersionsResponseBody = exports.DescribeDBMiniEngineVersionsResponseBodyMinorVersionItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBMiniEngineVersionsResponseBodyMinorVersionItems extends $dara.Model {
    static names() {
        return {
            communityMinorVersion: 'CommunityMinorVersion',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            expireDate: 'ExpireDate',
            expireStatus: 'ExpireStatus',
            isHotfixVersion: 'IsHotfixVersion',
            minorVersion: 'MinorVersion',
            nodeType: 'NodeType',
            releaseNote: 'ReleaseNote',
            releaseType: 'ReleaseType',
            statusDesc: 'StatusDesc',
            tag: 'Tag',
        };
    }
    static types() {
        return {
            communityMinorVersion: 'string',
            engine: 'string',
            engineVersion: 'string',
            expireDate: 'string',
            expireStatus: 'string',
            isHotfixVersion: 'boolean',
            minorVersion: 'string',
            nodeType: 'string',
            releaseNote: 'string',
            releaseType: 'string',
            statusDesc: 'string',
            tag: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBMiniEngineVersionsResponseBodyMinorVersionItems = DescribeDBMiniEngineVersionsResponseBodyMinorVersionItems;
class DescribeDBMiniEngineVersionsResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            maxRecordsPerPage: 'MaxRecordsPerPage',
            minorVersionItems: 'MinorVersionItems',
            pageNumbers: 'PageNumbers',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            maxRecordsPerPage: 'number',
            minorVersionItems: { 'type': 'array', 'itemType': DescribeDBMiniEngineVersionsResponseBodyMinorVersionItems },
            pageNumbers: 'number',
            requestId: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.minorVersionItems)) {
            $dara.Model.validateArray(this.minorVersionItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBMiniEngineVersionsResponseBody = DescribeDBMiniEngineVersionsResponseBody;
//# sourceMappingURL=DescribeDbminiEngineVersionsResponseBody.js.map