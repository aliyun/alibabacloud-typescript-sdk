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
exports.DescribeRCVClusterResponseBody = exports.DescribeRCVClusterResponseBodyMysqlOperator = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCVClusterResponseBodyMysqlOperator extends $dara.Model {
    static names() {
        return {
            dashboardPublicEndpoint: 'DashboardPublicEndpoint',
            dashboardPublicEndpointExpireTime: 'DashboardPublicEndpointExpireTime',
            dashboardUsername: 'DashboardUsername',
            dashboardVpcEndpoint: 'DashboardVpcEndpoint',
            deployTime: 'DeployTime',
            status: 'Status',
        };
    }
    static types() {
        return {
            dashboardPublicEndpoint: 'string',
            dashboardPublicEndpointExpireTime: 'string',
            dashboardUsername: 'string',
            dashboardVpcEndpoint: 'string',
            deployTime: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCVClusterResponseBodyMysqlOperator = DescribeRCVClusterResponseBodyMysqlOperator;
class DescribeRCVClusterResponseBody extends $dara.Model {
    static names() {
        return {
            clusterId: 'ClusterId',
            clusterName: 'ClusterName',
            mysqlOperator: 'MysqlOperator',
            region: 'Region',
            requestId: 'RequestId',
            supportDiskPerformanceLevel: 'SupportDiskPerformanceLevel',
            VClusterStatus: 'VClusterStatus',
            vpcId: 'VpcId',
        };
    }
    static types() {
        return {
            clusterId: 'string',
            clusterName: 'string',
            mysqlOperator: DescribeRCVClusterResponseBodyMysqlOperator,
            region: 'string',
            requestId: 'string',
            supportDiskPerformanceLevel: { 'type': 'array', 'itemType': 'string' },
            VClusterStatus: 'string',
            vpcId: 'string',
        };
    }
    validate() {
        if (this.mysqlOperator && typeof this.mysqlOperator.validate === 'function') {
            this.mysqlOperator.validate();
        }
        if (Array.isArray(this.supportDiskPerformanceLevel)) {
            $dara.Model.validateArray(this.supportDiskPerformanceLevel);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCVClusterResponseBody = DescribeRCVClusterResponseBody;
//# sourceMappingURL=DescribeRcvclusterResponseBody.js.map