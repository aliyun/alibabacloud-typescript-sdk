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
exports.DescribePackageDeductionsResponseBody = exports.DescribePackageDeductionsResponseBodyDeductions = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePackageDeductionsResponseBodyDeductions extends $dara.Model {
    static names() {
        return {
            agentType: 'AgentType',
            cpu: 'Cpu',
            deductionRequestId: 'DeductionRequestId',
            deductionType: 'DeductionType',
            desktopId: 'DesktopId',
            desktopName: 'DesktopName',
            desktopType: 'DesktopType',
            endTime: 'EndTime',
            groupResourceType: 'GroupResourceType',
            instanceId: 'InstanceId',
            instanceState: 'InstanceState',
            instanceType: 'InstanceType',
            memory: 'Memory',
            model: 'Model',
            osType: 'OsType',
            packageId: 'PackageId',
            regionId: 'RegionId',
            resourceId: 'ResourceId',
            resourceType: 'ResourceType',
            sessionId: 'SessionId',
            staTime: 'StaTime',
            summary: 'Summary',
            usedCoreTime: 'UsedCoreTime',
            usedTime: 'UsedTime',
            usedTimeDecimal: 'UsedTimeDecimal',
            usedTimeWithScale: 'UsedTimeWithScale',
        };
    }
    static types() {
        return {
            agentType: 'string',
            cpu: 'number',
            deductionRequestId: 'string',
            deductionType: 'string',
            desktopId: 'string',
            desktopName: 'string',
            desktopType: 'string',
            endTime: 'string',
            groupResourceType: 'string',
            instanceId: 'string',
            instanceState: 'string',
            instanceType: 'string',
            memory: 'number',
            model: 'string',
            osType: 'string',
            packageId: 'string',
            regionId: 'string',
            resourceId: 'string',
            resourceType: 'string',
            sessionId: 'string',
            staTime: 'string',
            summary: 'string',
            usedCoreTime: 'number',
            usedTime: 'number',
            usedTimeDecimal: 'string',
            usedTimeWithScale: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePackageDeductionsResponseBodyDeductions = DescribePackageDeductionsResponseBodyDeductions;
class DescribePackageDeductionsResponseBody extends $dara.Model {
    static names() {
        return {
            deductions: 'Deductions',
            pageNum: 'PageNum',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
            totalUsedCoreTime: 'TotalUsedCoreTime',
            totalUsedTime: 'TotalUsedTime',
            totalUsedTimeDecimal: 'TotalUsedTimeDecimal',
        };
    }
    static types() {
        return {
            deductions: { 'type': 'array', 'itemType': DescribePackageDeductionsResponseBodyDeductions },
            pageNum: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalCount: 'number',
            totalUsedCoreTime: 'number',
            totalUsedTime: 'number',
            totalUsedTimeDecimal: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.deductions)) {
            $dara.Model.validateArray(this.deductions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePackageDeductionsResponseBody = DescribePackageDeductionsResponseBody;
//# sourceMappingURL=DescribePackageDeductionsResponseBody.js.map