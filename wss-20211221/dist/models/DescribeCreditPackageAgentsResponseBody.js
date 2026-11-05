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
exports.DescribeCreditPackageAgentsResponseBody = exports.DescribeCreditPackageAgentsResponseBodyAgents = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeCreditPackageAgentsResponseBodyAgents extends $dara.Model {
    static names() {
        return {
            agentId: 'AgentId',
            createdTime: 'CreatedTime',
            creditPackageId: 'CreditPackageId',
            expiredTime: 'ExpiredTime',
            instanceType: 'InstanceType',
            totalCredit: 'TotalCredit',
            usedCredit: 'UsedCredit',
            warnPercent: 'WarnPercent',
        };
    }
    static types() {
        return {
            agentId: 'string',
            createdTime: 'string',
            creditPackageId: 'string',
            expiredTime: 'string',
            instanceType: 'string',
            totalCredit: 'number',
            usedCredit: 'number',
            warnPercent: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCreditPackageAgentsResponseBodyAgents = DescribeCreditPackageAgentsResponseBodyAgents;
class DescribeCreditPackageAgentsResponseBody extends $dara.Model {
    static names() {
        return {
            agents: 'Agents',
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            agents: { 'type': 'array', 'itemType': DescribeCreditPackageAgentsResponseBodyAgents },
            maxResults: 'number',
            nextToken: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.agents)) {
            $dara.Model.validateArray(this.agents);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCreditPackageAgentsResponseBody = DescribeCreditPackageAgentsResponseBody;
//# sourceMappingURL=DescribeCreditPackageAgentsResponseBody.js.map