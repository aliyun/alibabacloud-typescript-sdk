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
exports.DescribeDBClusterProxyResponseBody = exports.DescribeDBClusterProxyResponseBodyChildInstances = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClusterProxyResponseBodyChildInstances extends $dara.Model {
    static names() {
        return {
            DBNodeClass: 'DBNodeClass',
            DBNodeIP: 'DBNodeIP',
            DBNodeId: 'DBNodeId',
            DBNodePort: 'DBNodePort',
            DBNodeStatus: 'DBNodeStatus',
            hostName: 'HostName',
        };
    }
    static types() {
        return {
            DBNodeClass: 'string',
            DBNodeIP: 'string',
            DBNodeId: 'string',
            DBNodePort: 'string',
            DBNodeStatus: 'string',
            hostName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterProxyResponseBodyChildInstances = DescribeDBClusterProxyResponseBodyChildInstances;
class DescribeDBClusterProxyResponseBody extends $dara.Model {
    static names() {
        return {
            childInstances: 'ChildInstances',
            DBProxyClusterId: 'DBProxyClusterId',
            DBProxyClusterNum: 'DBProxyClusterNum',
            DBProxyClusterStatus: 'DBProxyClusterStatus',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            childInstances: { 'type': 'array', 'itemType': DescribeDBClusterProxyResponseBodyChildInstances },
            DBProxyClusterId: 'string',
            DBProxyClusterNum: 'number',
            DBProxyClusterStatus: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.childInstances)) {
            $dara.Model.validateArray(this.childInstances);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterProxyResponseBody = DescribeDBClusterProxyResponseBody;
//# sourceMappingURL=DescribeDbclusterProxyResponseBody.js.map