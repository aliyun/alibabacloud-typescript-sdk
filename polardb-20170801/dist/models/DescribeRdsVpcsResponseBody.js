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
exports.DescribeRdsVpcsResponseBody = exports.DescribeRdsVpcsResponseBodyVpcs = exports.DescribeRdsVpcsResponseBodyVpcsVpc = exports.DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs extends $dara.Model {
    static names() {
        return {
            cidrBlock: 'CidrBlock',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            isDefault: 'IsDefault',
            izNo: 'IzNo',
            status: 'Status',
            vSwitchId: 'VSwitchId',
            vSwitchName: 'VSwitchName',
        };
    }
    static types() {
        return {
            cidrBlock: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            isDefault: 'boolean',
            izNo: 'string',
            status: 'string',
            vSwitchId: 'string',
            vSwitchName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs = DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs;
class DescribeRdsVpcsResponseBodyVpcsVpc extends $dara.Model {
    static names() {
        return {
            aliUid: 'AliUid',
            bid: 'Bid',
            cidrBlock: 'CidrBlock',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            isDefault: 'IsDefault',
            regionNo: 'RegionNo',
            status: 'Status',
            vSwitchs: 'VSwitchs',
            vpcId: 'VpcId',
            vpcName: 'VpcName',
        };
    }
    static types() {
        return {
            aliUid: 'string',
            bid: 'string',
            cidrBlock: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            isDefault: 'boolean',
            regionNo: 'string',
            status: 'string',
            vSwitchs: { 'type': 'array', 'itemType': DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs },
            vpcId: 'string',
            vpcName: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.vSwitchs)) {
            $dara.Model.validateArray(this.vSwitchs);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRdsVpcsResponseBodyVpcsVpc = DescribeRdsVpcsResponseBodyVpcsVpc;
class DescribeRdsVpcsResponseBodyVpcs extends $dara.Model {
    static names() {
        return {
            vpc: 'Vpc',
        };
    }
    static types() {
        return {
            vpc: { 'type': 'array', 'itemType': DescribeRdsVpcsResponseBodyVpcsVpc },
        };
    }
    validate() {
        if (Array.isArray(this.vpc)) {
            $dara.Model.validateArray(this.vpc);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRdsVpcsResponseBodyVpcs = DescribeRdsVpcsResponseBodyVpcs;
class DescribeRdsVpcsResponseBody extends $dara.Model {
    static names() {
        return {
            requestId: 'RequestId',
            vpcs: 'Vpcs',
        };
    }
    static types() {
        return {
            requestId: 'string',
            vpcs: DescribeRdsVpcsResponseBodyVpcs,
        };
    }
    validate() {
        if (this.vpcs && typeof this.vpcs.validate === 'function') {
            this.vpcs.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRdsVpcsResponseBody = DescribeRdsVpcsResponseBody;
//# sourceMappingURL=DescribeRdsVpcsResponseBody.js.map