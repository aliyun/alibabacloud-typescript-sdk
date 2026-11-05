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
exports.DescribeUpgradeMajorVersionTasksResponseBody = exports.DescribeUpgradeMajorVersionTasksResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeUpgradeMajorVersionTasksResponseBodyItems extends $dara.Model {
    static names() {
        return {
            collectStatMode: 'CollectStatMode',
            detail: 'Detail',
            endTime: 'EndTime',
            result: 'Result',
            sourceInsName: 'SourceInsName',
            sourceMajorVersion: 'SourceMajorVersion',
            startTime: 'StartTime',
            switchEndTime: 'SwitchEndTime',
            switchTime: 'SwitchTime',
            targetInsName: 'TargetInsName',
            targetMajorVersion: 'TargetMajorVersion',
            taskId: 'TaskId',
            upgradeMode: 'UpgradeMode',
            cutOver: 'cutOver',
            totalLogicRepDelayTime: 'totalLogicRepDelayTime',
            totalLogicRepLatencyMB: 'totalLogicRepLatencyMB',
            zeroDownTimeConnectionString: 'zeroDownTimeConnectionString',
            zeroDownTimePort: 'zeroDownTimePort',
        };
    }
    static types() {
        return {
            collectStatMode: 'string',
            detail: 'string',
            endTime: 'string',
            result: 'string',
            sourceInsName: 'string',
            sourceMajorVersion: 'string',
            startTime: 'string',
            switchEndTime: 'string',
            switchTime: 'string',
            targetInsName: 'string',
            targetMajorVersion: 'string',
            taskId: 'number',
            upgradeMode: 'string',
            cutOver: 'boolean',
            totalLogicRepDelayTime: 'number',
            totalLogicRepLatencyMB: 'number',
            zeroDownTimeConnectionString: 'string',
            zeroDownTimePort: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUpgradeMajorVersionTasksResponseBodyItems = DescribeUpgradeMajorVersionTasksResponseBodyItems;
class DescribeUpgradeMajorVersionTasksResponseBody extends $dara.Model {
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
            items: { 'type': 'array', 'itemType': DescribeUpgradeMajorVersionTasksResponseBodyItems },
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
exports.DescribeUpgradeMajorVersionTasksResponseBody = DescribeUpgradeMajorVersionTasksResponseBody;
//# sourceMappingURL=DescribeUpgradeMajorVersionTasksResponseBody.js.map