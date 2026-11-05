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
exports.DescribeCustinsResourceInfoResponseBody = exports.DescribeCustinsResourceInfoResponseBodyData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeCustinsResourceInfoResponseBodyData extends $dara.Model {
    static names() {
        return {
            cpuAdjustDeadline: 'CpuAdjustDeadline',
            cpuAdjustableMaxRatio: 'CpuAdjustableMaxRatio',
            cpuAdjustableMaxValue: 'CpuAdjustableMaxValue',
            cpuIncreaseRatio: 'CpuIncreaseRatio',
            cpuIncreaseRatioValue: 'CpuIncreaseRatioValue',
            DBInstanceId: 'DBInstanceId',
            iopsAdjustableMaxValue: 'IopsAdjustableMaxValue',
            maxConnAdjustDeadline: 'MaxConnAdjustDeadline',
            maxConnAdjustableMaxValue: 'MaxConnAdjustableMaxValue',
            maxConnIncreaseRatio: 'MaxConnIncreaseRatio',
            maxConnIncreaseRatioValue: 'MaxConnIncreaseRatioValue',
            maxIopsAdjustDeadline: 'MaxIopsAdjustDeadline',
            maxIopsIncreaseRatio: 'MaxIopsIncreaseRatio',
            maxIopsIncreaseRatioValue: 'MaxIopsIncreaseRatioValue',
            memAdjustableMaxRatio: 'MemAdjustableMaxRatio',
            memAdjustableMaxValue: 'MemAdjustableMaxValue',
            memoryAdjustDeadline: 'MemoryAdjustDeadline',
            memoryIncreaseRatio: 'MemoryIncreaseRatio',
            memoryIncreaseRatioValue: 'MemoryIncreaseRatioValue',
            originCpu: 'OriginCpu',
            originMaxConn: 'OriginMaxConn',
            originMaxIops: 'OriginMaxIops',
            originMemory: 'OriginMemory',
        };
    }
    static types() {
        return {
            cpuAdjustDeadline: 'string',
            cpuAdjustableMaxRatio: 'string',
            cpuAdjustableMaxValue: 'string',
            cpuIncreaseRatio: 'string',
            cpuIncreaseRatioValue: 'string',
            DBInstanceId: 'string',
            iopsAdjustableMaxValue: 'string',
            maxConnAdjustDeadline: 'string',
            maxConnAdjustableMaxValue: 'string',
            maxConnIncreaseRatio: 'string',
            maxConnIncreaseRatioValue: 'string',
            maxIopsAdjustDeadline: 'string',
            maxIopsIncreaseRatio: 'string',
            maxIopsIncreaseRatioValue: 'string',
            memAdjustableMaxRatio: 'string',
            memAdjustableMaxValue: 'string',
            memoryAdjustDeadline: 'string',
            memoryIncreaseRatio: 'string',
            memoryIncreaseRatioValue: 'string',
            originCpu: 'string',
            originMaxConn: 'string',
            originMaxIops: 'string',
            originMemory: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCustinsResourceInfoResponseBodyData = DescribeCustinsResourceInfoResponseBodyData;
class DescribeCustinsResourceInfoResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: { 'type': 'array', 'itemType': DescribeCustinsResourceInfoResponseBodyData },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.data)) {
            $dara.Model.validateArray(this.data);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCustinsResourceInfoResponseBody = DescribeCustinsResourceInfoResponseBody;
//# sourceMappingURL=DescribeCustinsResourceInfoResponseBody.js.map