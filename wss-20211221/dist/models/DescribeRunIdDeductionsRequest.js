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
exports.DescribeRunIdDeductionsRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRunIdDeductionsRequest extends $dara.Model {
    static names() {
        return {
            agentType: 'AgentType',
            agentTypes: 'AgentTypes',
            aliUid: 'AliUid',
            bizType: 'BizType',
            consumeWyId: 'ConsumeWyId',
            consumeWyIds: 'ConsumeWyIds',
            deductionRequestId: 'DeductionRequestId',
            deductionTypes: 'DeductionTypes',
            endTime: 'EndTime',
            groupByFields: 'GroupByFields',
            groupResourceTypes: 'GroupResourceTypes',
            groupSeparator: 'GroupSeparator',
            instanceId: 'InstanceId',
            instanceIdType: 'InstanceIdType',
            instanceIds: 'InstanceIds',
            maxResults: 'MaxResults',
            model: 'Model',
            nextToken: 'NextToken',
            packageIds: 'PackageIds',
            pageNum: 'PageNum',
            pageSize: 'PageSize',
            resourceType: 'ResourceType',
            resourceTypes: 'ResourceTypes',
            runId: 'RunId',
            runIdList: 'RunIdList',
            startTime: 'StartTime',
            wyId: 'WyId',
        };
    }
    static types() {
        return {
            agentType: 'string',
            agentTypes: { 'type': 'array', 'itemType': 'string' },
            aliUid: 'number',
            bizType: 'string',
            consumeWyId: 'string',
            consumeWyIds: { 'type': 'array', 'itemType': 'string' },
            deductionRequestId: 'string',
            deductionTypes: { 'type': 'array', 'itemType': 'string' },
            endTime: 'number',
            groupByFields: { 'type': 'array', 'itemType': 'string' },
            groupResourceTypes: { 'type': 'array', 'itemType': 'string' },
            groupSeparator: 'boolean',
            instanceId: 'string',
            instanceIdType: 'string',
            instanceIds: { 'type': 'array', 'itemType': 'string' },
            maxResults: 'number',
            model: 'string',
            nextToken: 'string',
            packageIds: { 'type': 'array', 'itemType': 'string' },
            pageNum: 'number',
            pageSize: 'number',
            resourceType: 'string',
            resourceTypes: { 'type': 'array', 'itemType': 'string' },
            runId: 'string',
            runIdList: { 'type': 'array', 'itemType': 'string' },
            startTime: 'number',
            wyId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.agentTypes)) {
            $dara.Model.validateArray(this.agentTypes);
        }
        if (Array.isArray(this.consumeWyIds)) {
            $dara.Model.validateArray(this.consumeWyIds);
        }
        if (Array.isArray(this.deductionTypes)) {
            $dara.Model.validateArray(this.deductionTypes);
        }
        if (Array.isArray(this.groupByFields)) {
            $dara.Model.validateArray(this.groupByFields);
        }
        if (Array.isArray(this.groupResourceTypes)) {
            $dara.Model.validateArray(this.groupResourceTypes);
        }
        if (Array.isArray(this.instanceIds)) {
            $dara.Model.validateArray(this.instanceIds);
        }
        if (Array.isArray(this.packageIds)) {
            $dara.Model.validateArray(this.packageIds);
        }
        if (Array.isArray(this.resourceTypes)) {
            $dara.Model.validateArray(this.resourceTypes);
        }
        if (Array.isArray(this.runIdList)) {
            $dara.Model.validateArray(this.runIdList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRunIdDeductionsRequest = DescribeRunIdDeductionsRequest;
//# sourceMappingURL=DescribeRunIdDeductionsRequest.js.map