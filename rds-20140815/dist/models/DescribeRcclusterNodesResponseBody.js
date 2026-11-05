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
exports.DescribeRCClusterNodesResponseBody = exports.DescribeRCClusterNodesResponseBodyPage = exports.DescribeRCClusterNodesResponseBodyNodes = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCClusterNodesResponseBodyNodes extends $dara.Model {
    static names() {
        return {
            creationTime: 'CreationTime',
            dockerVersion: 'DockerVersion',
            imageId: 'ImageId',
            instanceId: 'InstanceId',
            instanceRole: 'InstanceRole',
            ipAddresses: 'IpAddresses',
            isAliyunNode: 'IsAliyunNode',
            nodeName: 'NodeName',
            nodePoolId: 'NodePoolId',
            nodeStatus: 'NodeStatus',
            podCount: 'PodCount',
            runtimeVersion: 'RuntimeVersion',
            state: 'State',
        };
    }
    static types() {
        return {
            creationTime: 'string',
            dockerVersion: 'string',
            imageId: 'string',
            instanceId: 'string',
            instanceRole: 'string',
            ipAddresses: { 'type': 'array', 'itemType': 'string' },
            isAliyunNode: 'boolean',
            nodeName: 'string',
            nodePoolId: 'string',
            nodeStatus: 'string',
            podCount: 'number',
            runtimeVersion: 'string',
            state: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.ipAddresses)) {
            $dara.Model.validateArray(this.ipAddresses);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCClusterNodesResponseBodyNodes = DescribeRCClusterNodesResponseBodyNodes;
class DescribeRCClusterNodesResponseBodyPage extends $dara.Model {
    static names() {
        return {
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            pageNumber: 'number',
            pageSize: 'number',
            totalCount: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCClusterNodesResponseBodyPage = DescribeRCClusterNodesResponseBodyPage;
class DescribeRCClusterNodesResponseBody extends $dara.Model {
    static names() {
        return {
            nodes: 'Nodes',
            page: 'Page',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            nodes: { 'type': 'array', 'itemType': DescribeRCClusterNodesResponseBodyNodes },
            page: DescribeRCClusterNodesResponseBodyPage,
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.nodes)) {
            $dara.Model.validateArray(this.nodes);
        }
        if (this.page && typeof this.page.validate === 'function') {
            this.page.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCClusterNodesResponseBody = DescribeRCClusterNodesResponseBody;
//# sourceMappingURL=DescribeRcclusterNodesResponseBody.js.map