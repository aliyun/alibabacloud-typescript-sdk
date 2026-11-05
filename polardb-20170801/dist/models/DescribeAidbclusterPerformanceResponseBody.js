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
exports.DescribeAIDBClusterPerformanceResponseBody = exports.DescribeAIDBClusterPerformanceResponseBodyPerformanceKeys = exports.DescribeAIDBClusterPerformanceResponseBodyPerformanceKeysPoints = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAIDBClusterPerformanceResponseBodyPerformanceKeysPoints extends $dara.Model {
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
exports.DescribeAIDBClusterPerformanceResponseBodyPerformanceKeysPoints = DescribeAIDBClusterPerformanceResponseBodyPerformanceKeysPoints;
class DescribeAIDBClusterPerformanceResponseBodyPerformanceKeys extends $dara.Model {
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
            points: { 'type': 'array', 'itemType': DescribeAIDBClusterPerformanceResponseBodyPerformanceKeysPoints },
        };
    }
    validate() {
        if (Array.isArray(this.points)) {
            $dara.Model.validateArray(this.points);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterPerformanceResponseBodyPerformanceKeys = DescribeAIDBClusterPerformanceResponseBodyPerformanceKeys;
class DescribeAIDBClusterPerformanceResponseBody extends $dara.Model {
    static names() {
        return {
            apiKey: 'ApiKey',
            DBClusterId: 'DBClusterId',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            endTime: 'EndTime',
            interval: 'Interval',
            performanceKeys: 'PerformanceKeys',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            apiKey: 'string',
            DBClusterId: 'string',
            DBType: 'string',
            DBVersion: 'string',
            endTime: 'string',
            interval: 'string',
            performanceKeys: { 'type': 'array', 'itemType': DescribeAIDBClusterPerformanceResponseBodyPerformanceKeys },
            requestId: 'string',
            startTime: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.performanceKeys)) {
            $dara.Model.validateArray(this.performanceKeys);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterPerformanceResponseBody = DescribeAIDBClusterPerformanceResponseBody;
//# sourceMappingURL=DescribeAidbclusterPerformanceResponseBody.js.map