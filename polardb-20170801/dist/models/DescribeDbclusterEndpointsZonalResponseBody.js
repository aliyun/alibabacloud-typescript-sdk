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
exports.DescribeDBClusterEndpointsZonalResponseBody = exports.DescribeDBClusterEndpointsZonalResponseBodyItems = exports.DescribeDBClusterEndpointsZonalResponseBodyItemsAddressItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClusterEndpointsZonalResponseBodyItemsAddressItems extends $dara.Model {
    static names() {
        return {
            connectionString: 'ConnectionString',
            dashboardUsed: 'DashboardUsed',
            IPAddress: 'IPAddress',
            netType: 'NetType',
            port: 'Port',
            privateZoneConnectionString: 'PrivateZoneConnectionString',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            vpcInstanceId: 'VpcInstanceId',
        };
    }
    static types() {
        return {
            connectionString: 'string',
            dashboardUsed: 'boolean',
            IPAddress: 'string',
            netType: 'string',
            port: 'string',
            privateZoneConnectionString: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
            vpcInstanceId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterEndpointsZonalResponseBodyItemsAddressItems = DescribeDBClusterEndpointsZonalResponseBodyItemsAddressItems;
class DescribeDBClusterEndpointsZonalResponseBodyItems extends $dara.Model {
    static names() {
        return {
            addressItems: 'AddressItems',
            autoAddNewNodes: 'AutoAddNewNodes',
            DBClusterId: 'DBClusterId',
            DBEndpointDescription: 'DBEndpointDescription',
            DBEndpointId: 'DBEndpointId',
            endpointConfig: 'EndpointConfig',
            endpointType: 'EndpointType',
            nodeWithRoles: 'NodeWithRoles',
            nodes: 'Nodes',
            polarSccTimeoutAction: 'PolarSccTimeoutAction',
            polarSccWaitTimeout: 'PolarSccWaitTimeout',
            readWriteMode: 'ReadWriteMode',
            sccMode: 'SccMode',
        };
    }
    static types() {
        return {
            addressItems: { 'type': 'array', 'itemType': DescribeDBClusterEndpointsZonalResponseBodyItemsAddressItems },
            autoAddNewNodes: 'string',
            DBClusterId: 'string',
            DBEndpointDescription: 'string',
            DBEndpointId: 'string',
            endpointConfig: 'string',
            endpointType: 'string',
            nodeWithRoles: 'string',
            nodes: 'string',
            polarSccTimeoutAction: 'string',
            polarSccWaitTimeout: 'string',
            readWriteMode: 'string',
            sccMode: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.addressItems)) {
            $dara.Model.validateArray(this.addressItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterEndpointsZonalResponseBodyItems = DescribeDBClusterEndpointsZonalResponseBodyItems;
class DescribeDBClusterEndpointsZonalResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeDBClusterEndpointsZonalResponseBodyItems },
            requestId: 'string',
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
exports.DescribeDBClusterEndpointsZonalResponseBody = DescribeDBClusterEndpointsZonalResponseBody;
//# sourceMappingURL=DescribeDbclusterEndpointsZonalResponseBody.js.map