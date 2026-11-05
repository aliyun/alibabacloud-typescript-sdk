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
exports.DescribeRunIdDeductionsResponseBody = exports.DescribeRunIdDeductionsResponseBodyDeductions = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRunIdDeductionsResponseBodyDeductions extends $dara.Model {
    static names() {
        return {
            agentType: 'AgentType',
            endTime: 'EndTime',
            groupResourceType: 'GroupResourceType',
            instanceId: 'InstanceId',
            model: 'Model',
            packageId: 'PackageId',
            resourceId: 'ResourceId',
            resourceType: 'ResourceType',
            runId: 'RunId',
            startTime: 'StartTime',
            summary: 'Summary',
            usedTime: 'UsedTime',
            usedTimeDecimal: 'UsedTimeDecimal',
        };
    }
    static types() {
        return {
            agentType: 'string',
            endTime: 'string',
            groupResourceType: 'string',
            instanceId: 'string',
            model: 'string',
            packageId: 'string',
            resourceId: 'string',
            resourceType: 'string',
            runId: 'string',
            startTime: 'string',
            summary: 'string',
            usedTime: 'number',
            usedTimeDecimal: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRunIdDeductionsResponseBodyDeductions = DescribeRunIdDeductionsResponseBodyDeductions;
class DescribeRunIdDeductionsResponseBody extends $dara.Model {
    static names() {
        return {
            deductions: 'Deductions',
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
            pageNum: 'PageNum',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
            totalUsedTime: 'TotalUsedTime',
            totalUsedTimeDecimal: 'TotalUsedTimeDecimal',
        };
    }
    static types() {
        return {
            deductions: { 'type': 'array', 'itemType': DescribeRunIdDeductionsResponseBodyDeductions },
            maxResults: 'number',
            nextToken: 'string',
            pageNum: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalCount: 'number',
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
exports.DescribeRunIdDeductionsResponseBody = DescribeRunIdDeductionsResponseBody;
//# sourceMappingURL=DescribeRunIdDeductionsResponseBody.js.map