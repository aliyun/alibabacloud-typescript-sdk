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
exports.DescribeRCInstanceTypesResponseBody = exports.DescribeRCInstanceTypesResponseBodyInstanceTypes = exports.DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType extends $dara.Model {
    static names() {
        return {
            cpuCoreCount: 'CpuCoreCount',
            diskQuantity: 'DiskQuantity',
            instanceTypeFamily: 'InstanceTypeFamily',
            instanceTypeId: 'InstanceTypeId',
            jumboFrameSupport: 'JumboFrameSupport',
            memorySize: 'MemorySize',
        };
    }
    static types() {
        return {
            cpuCoreCount: 'number',
            diskQuantity: 'number',
            instanceTypeFamily: 'string',
            instanceTypeId: 'string',
            jumboFrameSupport: 'boolean',
            memorySize: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType = DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType;
class DescribeRCInstanceTypesResponseBodyInstanceTypes extends $dara.Model {
    static names() {
        return {
            instanceType: 'InstanceType',
        };
    }
    static types() {
        return {
            instanceType: { 'type': 'array', 'itemType': DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType },
        };
    }
    validate() {
        if (Array.isArray(this.instanceType)) {
            $dara.Model.validateArray(this.instanceType);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceTypesResponseBodyInstanceTypes = DescribeRCInstanceTypesResponseBodyInstanceTypes;
class DescribeRCInstanceTypesResponseBody extends $dara.Model {
    static names() {
        return {
            instanceTypes: 'InstanceTypes',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            instanceTypes: DescribeRCInstanceTypesResponseBodyInstanceTypes,
            requestId: 'string',
        };
    }
    validate() {
        if (this.instanceTypes && typeof this.instanceTypes.validate === 'function') {
            this.instanceTypes.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceTypesResponseBody = DescribeRCInstanceTypesResponseBody;
//# sourceMappingURL=DescribeRcinstanceTypesResponseBody.js.map