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
exports.DescribeAIDBClusterTaskMetricsResponseBody = exports.DescribeAIDBClusterTaskMetricsResponseBodyItems = exports.DescribeAIDBClusterTaskMetricsResponseBodyItemsSlsMetricsItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAIDBClusterTaskMetricsResponseBodyItemsSlsMetricsItems extends $dara.Model {
    static names() {
        return {
            currentStep: 'CurrentStep',
            epoch: 'Epoch',
            globalStep: 'GlobalStep',
            logTime: 'LogTime',
            metric: 'Metric',
            metricType: 'MetricType',
            timestamp: 'Timestamp',
        };
    }
    static types() {
        return {
            currentStep: 'number',
            epoch: 'number',
            globalStep: 'number',
            logTime: 'string',
            metric: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            metricType: 'string',
            timestamp: 'string',
        };
    }
    validate() {
        if (this.metric) {
            $dara.Model.validateMap(this.metric);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterTaskMetricsResponseBodyItemsSlsMetricsItems = DescribeAIDBClusterTaskMetricsResponseBodyItemsSlsMetricsItems;
class DescribeAIDBClusterTaskMetricsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            slsMetricsItems: 'SlsMetricsItems',
        };
    }
    static types() {
        return {
            slsMetricsItems: { 'type': 'array', 'itemType': DescribeAIDBClusterTaskMetricsResponseBodyItemsSlsMetricsItems },
        };
    }
    validate() {
        if (Array.isArray(this.slsMetricsItems)) {
            $dara.Model.validateArray(this.slsMetricsItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterTaskMetricsResponseBodyItems = DescribeAIDBClusterTaskMetricsResponseBodyItems;
class DescribeAIDBClusterTaskMetricsResponseBody extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            endTime: 'EndTime',
            items: 'Items',
            metricType: 'MetricType',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            pageSize: 'PageSize',
            relativeDbClusterId: 'RelativeDbClusterId',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            endTime: 'string',
            items: DescribeAIDBClusterTaskMetricsResponseBodyItems,
            metricType: 'string',
            pageNumber: 'number',
            pageRecordCount: 'number',
            pageSize: 'number',
            relativeDbClusterId: 'string',
            requestId: 'string',
            startTime: 'string',
        };
    }
    validate() {
        if (this.items && typeof this.items.validate === 'function') {
            this.items.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterTaskMetricsResponseBody = DescribeAIDBClusterTaskMetricsResponseBody;
//# sourceMappingURL=DescribeAidbclusterTaskMetricsResponseBody.js.map