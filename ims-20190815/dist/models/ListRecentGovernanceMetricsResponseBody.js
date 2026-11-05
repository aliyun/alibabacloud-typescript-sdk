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
exports.ListRecentGovernanceMetricsResponseBody = exports.ListRecentGovernanceMetricsResponseBodyGovernanceMetrics = exports.ListRecentGovernanceMetricsResponseBodyGovernanceMetricsGovernanceMetric = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListRecentGovernanceMetricsResponseBodyGovernanceMetricsGovernanceMetric extends $dara.Model {
    static names() {
        return {
            governanceItem: 'GovernanceItem',
            metricType: 'MetricType',
            metricValue: 'MetricValue',
        };
    }
    static types() {
        return {
            governanceItem: 'string',
            metricType: 'string',
            metricValue: 'any',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListRecentGovernanceMetricsResponseBodyGovernanceMetricsGovernanceMetric = ListRecentGovernanceMetricsResponseBodyGovernanceMetricsGovernanceMetric;
class ListRecentGovernanceMetricsResponseBodyGovernanceMetrics extends $dara.Model {
    static names() {
        return {
            governanceMetric: 'GovernanceMetric',
        };
    }
    static types() {
        return {
            governanceMetric: { 'type': 'array', 'itemType': ListRecentGovernanceMetricsResponseBodyGovernanceMetricsGovernanceMetric },
        };
    }
    validate() {
        if (Array.isArray(this.governanceMetric)) {
            $dara.Model.validateArray(this.governanceMetric);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListRecentGovernanceMetricsResponseBodyGovernanceMetrics = ListRecentGovernanceMetricsResponseBodyGovernanceMetrics;
class ListRecentGovernanceMetricsResponseBody extends $dara.Model {
    static names() {
        return {
            generateTime: 'GenerateTime',
            governanceMetrics: 'GovernanceMetrics',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            generateTime: 'string',
            governanceMetrics: ListRecentGovernanceMetricsResponseBodyGovernanceMetrics,
            requestId: 'string',
        };
    }
    validate() {
        if (this.governanceMetrics && typeof this.governanceMetrics.validate === 'function') {
            this.governanceMetrics.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListRecentGovernanceMetricsResponseBody = ListRecentGovernanceMetricsResponseBody;
//# sourceMappingURL=ListRecentGovernanceMetricsResponseBody.js.map