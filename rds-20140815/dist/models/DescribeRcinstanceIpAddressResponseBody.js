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
exports.DescribeRCInstanceIpAddressResponseBody = exports.DescribeRCInstanceIpAddressResponseBodyRCInstanceList = exports.DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig extends $dara.Model {
    static names() {
        return {
            blackholeThreshold: 'BlackholeThreshold',
            defenseBpsThreshold: 'DefenseBpsThreshold',
            defensePpsThreshold: 'DefensePpsThreshold',
            elasticThreshold: 'ElasticThreshold',
            instanceIp: 'InstanceIp',
            ipStatus: 'IpStatus',
            ipVersion: 'IpVersion',
            isBgppack: 'IsBgppack',
            isFullProtection: 'IsFullProtection',
            regionId: 'RegionId',
        };
    }
    static types() {
        return {
            blackholeThreshold: 'number',
            defenseBpsThreshold: 'number',
            defensePpsThreshold: 'number',
            elasticThreshold: 'number',
            instanceIp: 'string',
            ipStatus: 'string',
            ipVersion: 'string',
            isBgppack: 'boolean',
            isFullProtection: 'number',
            regionId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig = DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig;
class DescribeRCInstanceIpAddressResponseBodyRCInstanceList extends $dara.Model {
    static names() {
        return {
            instanceId: 'InstanceId',
            instanceName: 'InstanceName',
            instanceStatus: 'InstanceStatus',
            instanceType: 'InstanceType',
            ipAddressConfig: 'IpAddressConfig',
        };
    }
    static types() {
        return {
            instanceId: 'string',
            instanceName: 'string',
            instanceStatus: 'string',
            instanceType: 'string',
            ipAddressConfig: { 'type': 'array', 'itemType': DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig },
        };
    }
    validate() {
        if (Array.isArray(this.ipAddressConfig)) {
            $dara.Model.validateArray(this.ipAddressConfig);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceIpAddressResponseBodyRCInstanceList = DescribeRCInstanceIpAddressResponseBodyRCInstanceList;
class DescribeRCInstanceIpAddressResponseBody extends $dara.Model {
    static names() {
        return {
            RCInstanceList: 'RCInstanceList',
            requestId: 'RequestId',
            total: 'Total',
        };
    }
    static types() {
        return {
            RCInstanceList: { 'type': 'array', 'itemType': DescribeRCInstanceIpAddressResponseBodyRCInstanceList },
            requestId: 'string',
            total: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.RCInstanceList)) {
            $dara.Model.validateArray(this.RCInstanceList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceIpAddressResponseBody = DescribeRCInstanceIpAddressResponseBody;
//# sourceMappingURL=DescribeRcinstanceIpAddressResponseBody.js.map