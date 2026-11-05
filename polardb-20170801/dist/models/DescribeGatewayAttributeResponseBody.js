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
exports.DescribeGatewayAttributeResponseBody = exports.DescribeGatewayAttributeResponseBodySecurityIPArrays = exports.DescribeGatewayAttributeResponseBodyEndpoints = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeGatewayAttributeResponseBodyEndpoints extends $dara.Model {
    static names() {
        return {
            address: 'Address',
            endpointId: 'EndpointId',
            gwClusterId: 'GwClusterId',
            netType: 'NetType',
            port: 'Port',
            tunnelId: 'TunnelId',
            vpcId: 'VpcId',
        };
    }
    static types() {
        return {
            address: 'string',
            endpointId: 'string',
            gwClusterId: 'string',
            netType: 'string',
            port: 'string',
            tunnelId: 'string',
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
exports.DescribeGatewayAttributeResponseBodyEndpoints = DescribeGatewayAttributeResponseBodyEndpoints;
class DescribeGatewayAttributeResponseBodySecurityIPArrays extends $dara.Model {
    static names() {
        return {
            securityIPArrayName: 'SecurityIPArrayName',
            securityIPArrayTag: 'SecurityIPArrayTag',
            securityIPList: 'SecurityIPList',
        };
    }
    static types() {
        return {
            securityIPArrayName: 'string',
            securityIPArrayTag: 'string',
            securityIPList: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGatewayAttributeResponseBodySecurityIPArrays = DescribeGatewayAttributeResponseBodySecurityIPArrays;
class DescribeGatewayAttributeResponseBody extends $dara.Model {
    static names() {
        return {
            classCode: 'ClassCode',
            createTime: 'CreateTime',
            currentVersion: 'CurrentVersion',
            dbType: 'DbType',
            endpoints: 'Endpoints',
            expireTime: 'ExpireTime',
            expired: 'Expired',
            gwClusterId: 'GwClusterId',
            gwDescription: 'GwDescription',
            latestVersion: 'LatestVersion',
            modifyTime: 'ModifyTime',
            payType: 'PayType',
            regionId: 'RegionId',
            requestId: 'RequestId',
            runningVersion: 'RunningVersion',
            securityIPArrays: 'SecurityIPArrays',
            status: 'Status',
            vSwitchId: 'VSwitchId',
            vpcId: 'VpcId',
        };
    }
    static types() {
        return {
            classCode: 'string',
            createTime: 'string',
            currentVersion: 'string',
            dbType: 'string',
            endpoints: { 'type': 'array', 'itemType': DescribeGatewayAttributeResponseBodyEndpoints },
            expireTime: 'string',
            expired: 'boolean',
            gwClusterId: 'string',
            gwDescription: 'string',
            latestVersion: 'string',
            modifyTime: 'string',
            payType: 'string',
            regionId: 'string',
            requestId: 'string',
            runningVersion: 'string',
            securityIPArrays: { 'type': 'array', 'itemType': DescribeGatewayAttributeResponseBodySecurityIPArrays },
            status: 'string',
            vSwitchId: 'string',
            vpcId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.endpoints)) {
            $dara.Model.validateArray(this.endpoints);
        }
        if (Array.isArray(this.securityIPArrays)) {
            $dara.Model.validateArray(this.securityIPArrays);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGatewayAttributeResponseBody = DescribeGatewayAttributeResponseBody;
//# sourceMappingURL=DescribeGatewayAttributeResponseBody.js.map