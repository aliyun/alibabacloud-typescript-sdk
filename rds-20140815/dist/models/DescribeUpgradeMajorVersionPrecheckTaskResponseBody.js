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
exports.DescribeUpgradeMajorVersionPrecheckTaskResponseBody = exports.DescribeUpgradeMajorVersionPrecheckTaskResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeUpgradeMajorVersionPrecheckTaskResponseBodyItems extends $dara.Model {
    static names() {
        return {
            checkTime: 'CheckTime',
            detail: 'Detail',
            effectiveTime: 'EffectiveTime',
            recommendDiskSize: 'RecommendDiskSize',
            recommendLeastMemSize: 'RecommendLeastMemSize',
            recommendMemSize: 'RecommendMemSize',
            result: 'Result',
            sourceMajorVersion: 'SourceMajorVersion',
            targetMajorVersion: 'TargetMajorVersion',
            taskId: 'TaskId',
            upgradeMode: 'UpgradeMode',
        };
    }
    static types() {
        return {
            checkTime: 'string',
            detail: 'string',
            effectiveTime: 'string',
            recommendDiskSize: 'number',
            recommendLeastMemSize: 'number',
            recommendMemSize: 'number',
            result: 'string',
            sourceMajorVersion: 'string',
            targetMajorVersion: 'string',
            taskId: 'number',
            upgradeMode: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUpgradeMajorVersionPrecheckTaskResponseBodyItems = DescribeUpgradeMajorVersionPrecheckTaskResponseBodyItems;
class DescribeUpgradeMajorVersionPrecheckTaskResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeUpgradeMajorVersionPrecheckTaskResponseBodyItems },
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUpgradeMajorVersionPrecheckTaskResponseBody = DescribeUpgradeMajorVersionPrecheckTaskResponseBody;
//# sourceMappingURL=DescribeUpgradeMajorVersionPrecheckTaskResponseBody.js.map