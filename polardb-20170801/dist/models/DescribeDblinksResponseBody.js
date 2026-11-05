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
exports.DescribeDBLinksResponseBody = exports.DescribeDBLinksResponseBodyDBLinkInfos = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBLinksResponseBodyDBLinkInfos extends $dara.Model {
    static names() {
        return {
            DBInstanceName: 'DBInstanceName',
            DBLinkName: 'DBLinkName',
            sourceDBName: 'SourceDBName',
            targetAccount: 'TargetAccount',
            targetDBInstanceName: 'TargetDBInstanceName',
            targetDBName: 'TargetDBName',
        };
    }
    static types() {
        return {
            DBInstanceName: 'string',
            DBLinkName: 'string',
            sourceDBName: 'string',
            targetAccount: 'string',
            targetDBInstanceName: 'string',
            targetDBName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBLinksResponseBodyDBLinkInfos = DescribeDBLinksResponseBodyDBLinkInfos;
class DescribeDBLinksResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceName: 'DBInstanceName',
            DBLinkInfos: 'DBLinkInfos',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            DBInstanceName: 'string',
            DBLinkInfos: { 'type': 'array', 'itemType': DescribeDBLinksResponseBodyDBLinkInfos },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.DBLinkInfos)) {
            $dara.Model.validateArray(this.DBLinkInfos);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBLinksResponseBody = DescribeDBLinksResponseBody;
//# sourceMappingURL=DescribeDblinksResponseBody.js.map