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
exports.DescribeDBInstancePerformanceResponseBody = exports.DescribeDBInstancePerformanceResponseBodyPerformanceKeys = exports.DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey = exports.DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues = exports.DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue extends $dara.Model {
    static names() {
        return {
            date: 'Date',
            value: 'Value',
        };
    }
    static types() {
        return {
            date: 'string',
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
exports.DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue = DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue;
class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues extends $dara.Model {
    static names() {
        return {
            performanceValue: 'PerformanceValue',
        };
    }
    static types() {
        return {
            performanceValue: { 'type': 'array', 'itemType': DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue },
        };
    }
    validate() {
        if (Array.isArray(this.performanceValue)) {
            $dara.Model.validateArray(this.performanceValue);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues = DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues;
class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey extends $dara.Model {
    static names() {
        return {
            key: 'Key',
            unit: 'Unit',
            valueFormat: 'ValueFormat',
            values: 'Values',
        };
    }
    static types() {
        return {
            key: 'string',
            unit: 'string',
            valueFormat: 'string',
            values: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues,
        };
    }
    validate() {
        if (this.values && typeof this.values.validate === 'function') {
            this.values.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey = DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey;
class DescribeDBInstancePerformanceResponseBodyPerformanceKeys extends $dara.Model {
    static names() {
        return {
            performanceKey: 'PerformanceKey',
        };
    }
    static types() {
        return {
            performanceKey: { 'type': 'array', 'itemType': DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey },
        };
    }
    validate() {
        if (Array.isArray(this.performanceKey)) {
            $dara.Model.validateArray(this.performanceKey);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstancePerformanceResponseBodyPerformanceKeys = DescribeDBInstancePerformanceResponseBodyPerformanceKeys;
class DescribeDBInstancePerformanceResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            endTime: 'EndTime',
            engine: 'Engine',
            performanceKeys: 'PerformanceKeys',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            endTime: 'string',
            engine: 'string',
            performanceKeys: DescribeDBInstancePerformanceResponseBodyPerformanceKeys,
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
exports.DescribeDBInstancePerformanceResponseBody = DescribeDBInstancePerformanceResponseBody;
//# sourceMappingURL=DescribeDbinstancePerformanceResponseBody.js.map