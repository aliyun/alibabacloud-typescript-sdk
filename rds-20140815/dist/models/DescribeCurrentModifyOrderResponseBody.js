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
exports.DescribeCurrentModifyOrderResponseBody = exports.DescribeCurrentModifyOrderResponseBodyModifyOrder = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeCurrentModifyOrderResponseBodyModifyOrder extends $dara.Model {
    static names() {
        return {
            classGroup: 'ClassGroup',
            cpu: 'Cpu',
            dbInstanceId: 'DbInstanceId',
            effectiveTime: 'EffectiveTime',
            mark: 'Mark',
            memoryClass: 'MemoryClass',
            status: 'Status',
            storage: 'Storage',
            targetDBInstanceClass: 'TargetDBInstanceClass',
        };
    }
    static types() {
        return {
            classGroup: 'string',
            cpu: 'string',
            dbInstanceId: 'string',
            effectiveTime: 'string',
            mark: 'string',
            memoryClass: 'string',
            status: 'string',
            storage: 'string',
            targetDBInstanceClass: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCurrentModifyOrderResponseBodyModifyOrder = DescribeCurrentModifyOrderResponseBodyModifyOrder;
class DescribeCurrentModifyOrderResponseBody extends $dara.Model {
    static names() {
        return {
            modifyOrder: 'ModifyOrder',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            modifyOrder: { 'type': 'array', 'itemType': DescribeCurrentModifyOrderResponseBodyModifyOrder },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.modifyOrder)) {
            $dara.Model.validateArray(this.modifyOrder);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCurrentModifyOrderResponseBody = DescribeCurrentModifyOrderResponseBody;
//# sourceMappingURL=DescribeCurrentModifyOrderResponseBody.js.map