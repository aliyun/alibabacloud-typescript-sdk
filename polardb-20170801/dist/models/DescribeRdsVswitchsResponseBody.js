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
exports.DescribeRdsVSwitchsResponseBody = exports.DescribeRdsVSwitchsResponseBodyVSwitches = exports.DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch extends $dara.Model {
    static names() {
        return {
            aliUid: 'AliUid',
            bid: 'Bid',
            cidrBlock: 'CidrBlock',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            isDefault: 'IsDefault',
            izNo: 'IzNo',
            regionNo: 'RegionNo',
            status: 'Status',
            vSwitchId: 'VSwitchId',
            vSwitchName: 'VSwitchName',
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
            izNo: 'string',
            regionNo: 'string',
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
exports.DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch = DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch;
class DescribeRdsVSwitchsResponseBodyVSwitches extends $dara.Model {
    static names() {
        return {
            vSwitch: 'VSwitch',
        };
    }
    static types() {
        return {
            vSwitch: { 'type': 'array', 'itemType': DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch },
        };
    }
    validate() {
        if (Array.isArray(this.vSwitch)) {
            $dara.Model.validateArray(this.vSwitch);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRdsVSwitchsResponseBodyVSwitches = DescribeRdsVSwitchsResponseBodyVSwitches;
class DescribeRdsVSwitchsResponseBody extends $dara.Model {
    static names() {
        return {
            requestId: 'RequestId',
            vSwitches: 'VSwitches',
        };
    }
    static types() {
        return {
            requestId: 'string',
            vSwitches: DescribeRdsVSwitchsResponseBodyVSwitches,
        };
    }
    validate() {
        if (this.vSwitches && typeof this.vSwitches.validate === 'function') {
            this.vSwitches.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRdsVSwitchsResponseBody = DescribeRdsVSwitchsResponseBody;
//# sourceMappingURL=DescribeRdsVswitchsResponseBody.js.map