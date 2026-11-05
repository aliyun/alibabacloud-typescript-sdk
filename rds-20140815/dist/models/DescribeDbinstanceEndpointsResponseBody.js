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
exports.DescribeDBInstanceEndpointsResponseBody = exports.DescribeDBInstanceEndpointsResponseBodyData = exports.DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints = exports.DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpoint = exports.DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItems = exports.DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItemsNodeItem = exports.DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItems = exports.DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem extends $dara.Model {
    static names() {
        return {
            connectionString: 'ConnectionString',
            ipAddress: 'IpAddress',
            ipType: 'IpType',
            port: 'Port',
            vSwitchId: 'VSwitchId',
            vpcId: 'VpcId',
        };
    }
    static types() {
        return {
            connectionString: 'string',
            ipAddress: 'string',
            ipType: 'string',
            port: 'string',
            vSwitchId: 'string',
            vpcId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem = DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem;
class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItems extends $dara.Model {
    static names() {
        return {
            addressItem: 'AddressItem',
        };
    }
    static types() {
        return {
            addressItem: { 'type': 'array', 'itemType': DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem },
        };
    }
    validate() {
        if (Array.isArray(this.addressItem)) {
            $dara.Model.validateArray(this.addressItem);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItems = DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItems;
class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItemsNodeItem extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            nodeId: 'NodeId',
            weight: 'Weight',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            nodeId: 'string',
            weight: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItemsNodeItem = DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItemsNodeItem;
class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItems extends $dara.Model {
    static names() {
        return {
            nodeItem: 'NodeItem',
        };
    }
    static types() {
        return {
            nodeItem: { 'type': 'array', 'itemType': DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItemsNodeItem },
        };
    }
    validate() {
        if (Array.isArray(this.nodeItem)) {
            $dara.Model.validateArray(this.nodeItem);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItems = DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItems;
class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpoint extends $dara.Model {
    static names() {
        return {
            addressItems: 'AddressItems',
            endpointDescription: 'EndpointDescription',
            endpointId: 'EndpointId',
            endpointType: 'EndpointType',
            nodeItems: 'NodeItems',
        };
    }
    static types() {
        return {
            addressItems: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItems,
            endpointDescription: 'string',
            endpointId: 'string',
            endpointType: 'string',
            nodeItems: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItems,
        };
    }
    validate() {
        if (this.addressItems && typeof this.addressItems.validate === 'function') {
            this.addressItems.validate();
        }
        if (this.nodeItems && typeof this.nodeItems.validate === 'function') {
            this.nodeItems.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpoint = DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpoint;
class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints extends $dara.Model {
    static names() {
        return {
            DBInstanceEndpoint: 'DBInstanceEndpoint',
        };
    }
    static types() {
        return {
            DBInstanceEndpoint: { 'type': 'array', 'itemType': DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpoint },
        };
    }
    validate() {
        if (Array.isArray(this.DBInstanceEndpoint)) {
            $dara.Model.validateArray(this.DBInstanceEndpoint);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints = DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints;
class DescribeDBInstanceEndpointsResponseBodyData extends $dara.Model {
    static names() {
        return {
            DBInstanceEndpoints: 'DBInstanceEndpoints',
            DBInstanceName: 'DBInstanceName',
            ipVersion: 'IpVersion',
        };
    }
    static types() {
        return {
            DBInstanceEndpoints: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints,
            DBInstanceName: 'string',
            ipVersion: 'string',
        };
    }
    validate() {
        if (this.DBInstanceEndpoints && typeof this.DBInstanceEndpoints.validate === 'function') {
            this.DBInstanceEndpoints.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceEndpointsResponseBodyData = DescribeDBInstanceEndpointsResponseBodyData;
class DescribeDBInstanceEndpointsResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: DescribeDBInstanceEndpointsResponseBodyData,
            requestId: 'string',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceEndpointsResponseBody = DescribeDBInstanceEndpointsResponseBody;
//# sourceMappingURL=DescribeDbinstanceEndpointsResponseBody.js.map