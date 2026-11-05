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
exports.DescribeDBProxyPerformanceResponseBody = exports.DescribeDBProxyPerformanceResponseBodyPerformanceKeys = exports.DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItem = exports.DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPoints = exports.DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $dara.Model {
    static names() {
        return {
            timestamp: 'Timestamp',
            value: 'Value',
        };
    }
    static types() {
        return {
            timestamp: 'number',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue = DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue;
class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPoints extends $dara.Model {
    static names() {
        return {
            performanceItemValue: 'PerformanceItemValue',
        };
    }
    static types() {
        return {
            performanceItemValue: { 'type': 'array', 'itemType': DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue },
        };
    }
    validate() {
        if (Array.isArray(this.performanceItemValue)) {
            $dara.Model.validateArray(this.performanceItemValue);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPoints = DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItem extends $dara.Model {
    static names() {
        return {
            DBNodeId: 'DBNodeId',
            measurement: 'Measurement',
            metricName: 'MetricName',
            points: 'Points',
        };
    }
    static types() {
        return {
            DBNodeId: 'string',
            measurement: 'string',
            metricName: 'string',
            points: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPoints,
        };
    }
    validate() {
        if (this.points && typeof this.points.validate === 'function') {
            this.points.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItem = DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItem;
class DescribeDBProxyPerformanceResponseBodyPerformanceKeys extends $dara.Model {
    static names() {
        return {
            performanceItem: 'PerformanceItem',
        };
    }
    static types() {
        return {
            performanceItem: { 'type': 'array', 'itemType': DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItem },
        };
    }
    validate() {
        if (Array.isArray(this.performanceItem)) {
            $dara.Model.validateArray(this.performanceItem);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyPerformanceResponseBodyPerformanceKeys = DescribeDBProxyPerformanceResponseBodyPerformanceKeys;
class DescribeDBProxyPerformanceResponseBody extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            endTime: 'EndTime',
            performanceKeys: 'PerformanceKeys',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            DBType: 'string',
            DBVersion: 'string',
            endTime: 'string',
            performanceKeys: DescribeDBProxyPerformanceResponseBodyPerformanceKeys,
            requestId: 'string',
            startTime: 'string',
        };
    }
    validate() {
        if (this.performanceKeys && typeof this.performanceKeys.validate === 'function') {
            this.performanceKeys.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyPerformanceResponseBody = DescribeDBProxyPerformanceResponseBody;
//# sourceMappingURL=DescribeDbproxyPerformanceResponseBody.js.map