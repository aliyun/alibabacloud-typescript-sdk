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
exports.DescribeRCInvocationResultsResponseBody = exports.DescribeRCInvocationResultsResponseBodyInvocationResults = exports.DescribeRCInvocationResultsResponseBodyInvocationResultsTags = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCInvocationResultsResponseBodyInvocationResultsTags extends $dara.Model {
    static names() {
        return {
            tagKey: 'TagKey',
            tagValue: 'TagValue',
        };
    }
    static types() {
        return {
            tagKey: 'string',
            tagValue: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInvocationResultsResponseBodyInvocationResultsTags = DescribeRCInvocationResultsResponseBodyInvocationResultsTags;
class DescribeRCInvocationResultsResponseBodyInvocationResults extends $dara.Model {
    static names() {
        return {
            commandId: 'CommandId',
            containerId: 'ContainerId',
            containerName: 'ContainerName',
            dropped: 'Dropped',
            errorCode: 'ErrorCode',
            errorInfo: 'ErrorInfo',
            exitCode: 'ExitCode',
            finishedTime: 'FinishedTime',
            instanceId: 'InstanceId',
            invocationStatus: 'InvocationStatus',
            invokeId: 'InvokeId',
            invokeRecordStatus: 'InvokeRecordStatus',
            output: 'Output',
            repeats: 'Repeats',
            startTime: 'StartTime',
            stopTime: 'StopTime',
            tags: 'Tags',
            username: 'Username',
        };
    }
    static types() {
        return {
            commandId: 'string',
            containerId: 'string',
            containerName: 'string',
            dropped: 'number',
            errorCode: 'string',
            errorInfo: 'string',
            exitCode: 'number',
            finishedTime: 'string',
            instanceId: 'string',
            invocationStatus: 'string',
            invokeId: 'string',
            invokeRecordStatus: 'string',
            output: 'string',
            repeats: 'string',
            startTime: 'string',
            stopTime: 'string',
            tags: { 'type': 'array', 'itemType': DescribeRCInvocationResultsResponseBodyInvocationResultsTags },
            username: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.tags)) {
            $dara.Model.validateArray(this.tags);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInvocationResultsResponseBodyInvocationResults = DescribeRCInvocationResultsResponseBodyInvocationResults;
class DescribeRCInvocationResultsResponseBody extends $dara.Model {
    static names() {
        return {
            invocationResults: 'InvocationResults',
            nextToken: 'NextToken',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            invocationResults: { 'type': 'array', 'itemType': DescribeRCInvocationResultsResponseBodyInvocationResults },
            nextToken: 'string',
            pageNumber: 'string',
            pageSize: 'string',
            requestId: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.invocationResults)) {
            $dara.Model.validateArray(this.invocationResults);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInvocationResultsResponseBody = DescribeRCInvocationResultsResponseBody;
//# sourceMappingURL=DescribeRcinvocationResultsResponseBody.js.map