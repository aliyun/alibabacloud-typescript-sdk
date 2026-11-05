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
exports.DescribeRCCloudAssistantStatusResponseBody = exports.DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet extends $dara.Model {
    static names() {
        return {
            activeTaskCount: 'ActiveTaskCount',
            cloudAssistantStatus: 'CloudAssistantStatus',
            cloudAssistantVersion: 'CloudAssistantVersion',
            instanceId: 'InstanceId',
            invocationCount: 'InvocationCount',
            lastHeartbeatTime: 'LastHeartbeatTime',
            lastInvokedTime: 'LastInvokedTime',
            OSType: 'OSType',
            supportSessionManager: 'SupportSessionManager',
        };
    }
    static types() {
        return {
            activeTaskCount: 'number',
            cloudAssistantStatus: 'string',
            cloudAssistantVersion: 'string',
            instanceId: 'string',
            invocationCount: 'number',
            lastHeartbeatTime: 'string',
            lastInvokedTime: 'string',
            OSType: 'string',
            supportSessionManager: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet = DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet;
class DescribeRCCloudAssistantStatusResponseBody extends $dara.Model {
    static names() {
        return {
            instanceCloudAssistantStatusSet: 'InstanceCloudAssistantStatusSet',
            nextToken: 'NextToken',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            instanceCloudAssistantStatusSet: { 'type': 'array', 'itemType': DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet },
            nextToken: 'string',
            pageNumber: 'string',
            pageSize: 'string',
            requestId: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.instanceCloudAssistantStatusSet)) {
            $dara.Model.validateArray(this.instanceCloudAssistantStatusSet);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCCloudAssistantStatusResponseBody = DescribeRCCloudAssistantStatusResponseBody;
//# sourceMappingURL=DescribeRccloudAssistantStatusResponseBody.js.map