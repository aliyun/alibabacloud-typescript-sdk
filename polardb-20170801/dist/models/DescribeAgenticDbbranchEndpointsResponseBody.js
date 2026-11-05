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
exports.DescribeAgenticDBBranchEndpointsResponseBody = exports.DescribeAgenticDBBranchEndpointsResponseBodyItems = exports.DescribeAgenticDBBranchEndpointsResponseBodyItemsAddressItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAgenticDBBranchEndpointsResponseBodyItemsAddressItems extends $dara.Model {
    static names() {
        return {
            address: 'Address',
            connectionString: 'ConnectionString',
            netType: 'NetType',
            port: 'Port',
        };
    }
    static types() {
        return {
            address: 'string',
            connectionString: 'string',
            netType: 'string',
            port: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAgenticDBBranchEndpointsResponseBodyItemsAddressItems = DescribeAgenticDBBranchEndpointsResponseBodyItemsAddressItems;
class DescribeAgenticDBBranchEndpointsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            account: 'Account',
            address: 'Address',
            addressItems: 'AddressItems',
            connectionString: 'ConnectionString',
            database: 'Database',
            endpointId: 'EndpointId',
            endpointType: 'EndpointType',
            password: 'Password',
            port: 'Port',
        };
    }
    static types() {
        return {
            account: 'string',
            address: 'string',
            addressItems: { 'type': 'array', 'itemType': DescribeAgenticDBBranchEndpointsResponseBodyItemsAddressItems },
            connectionString: 'string',
            database: 'string',
            endpointId: 'string',
            endpointType: 'string',
            password: 'string',
            port: 'number',
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
exports.DescribeAgenticDBBranchEndpointsResponseBodyItems = DescribeAgenticDBBranchEndpointsResponseBodyItems;
class DescribeAgenticDBBranchEndpointsResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeAgenticDBBranchEndpointsResponseBodyItems },
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
exports.DescribeAgenticDBBranchEndpointsResponseBody = DescribeAgenticDBBranchEndpointsResponseBody;
//# sourceMappingURL=DescribeAgenticDbbranchEndpointsResponseBody.js.map