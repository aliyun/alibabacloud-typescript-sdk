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
exports.DescribeMonitorDataResponseBody = exports.DescribeMonitorDataResponseBodyData = exports.DescribeMonitorDataResponseBodyDataValue = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeMonitorDataResponseBodyDataValue extends $dara.Model {
    static names() {
        return {
            time: 'Time',
            value: 'Value',
        };
    }
    static types() {
        return {
            time: 'string',
            value: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMonitorDataResponseBodyDataValue = DescribeMonitorDataResponseBodyDataValue;
class DescribeMonitorDataResponseBodyData extends $dara.Model {
    static names() {
        return {
            name: 'Name',
            value: 'Value',
        };
    }
    static types() {
        return {
            name: 'string',
            value: { 'type': 'array', 'itemType': DescribeMonitorDataResponseBodyDataValue },
        };
    }
    validate() {
        if (Array.isArray(this.value)) {
            $dara.Model.validateArray(this.value);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMonitorDataResponseBodyData = DescribeMonitorDataResponseBodyData;
class DescribeMonitorDataResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            message: 'Message',
            requestId: 'RequestId',
            success: 'Success',
        };
    }
    static types() {
        return {
            data: { 'type': 'array', 'itemType': DescribeMonitorDataResponseBodyData },
            message: 'string',
            requestId: 'string',
            success: 'boolean',
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
exports.DescribeMonitorDataResponseBody = DescribeMonitorDataResponseBody;
//# sourceMappingURL=DescribeMonitorDataResponseBody.js.map