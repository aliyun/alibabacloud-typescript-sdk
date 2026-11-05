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
exports.DescribeModifyParameterLogResponseBody = exports.DescribeModifyParameterLogResponseBodyItems = exports.DescribeModifyParameterLogResponseBodyItemsParameterChangeLog = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeModifyParameterLogResponseBodyItemsParameterChangeLog extends $dara.Model {
    static names() {
        return {
            modifyTime: 'ModifyTime',
            newParameterValue: 'NewParameterValue',
            oldParameterValue: 'OldParameterValue',
            parameterName: 'ParameterName',
            status: 'Status',
        };
    }
    static types() {
        return {
            modifyTime: 'string',
            newParameterValue: 'string',
            oldParameterValue: 'string',
            parameterName: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeModifyParameterLogResponseBodyItemsParameterChangeLog = DescribeModifyParameterLogResponseBodyItemsParameterChangeLog;
class DescribeModifyParameterLogResponseBodyItems extends $dara.Model {
    static names() {
        return {
            parameterChangeLog: 'ParameterChangeLog',
        };
    }
    static types() {
        return {
            parameterChangeLog: { 'type': 'array', 'itemType': DescribeModifyParameterLogResponseBodyItemsParameterChangeLog },
        };
    }
    validate() {
        if (Array.isArray(this.parameterChangeLog)) {
            $dara.Model.validateArray(this.parameterChangeLog);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeModifyParameterLogResponseBodyItems = DescribeModifyParameterLogResponseBodyItems;
class DescribeModifyParameterLogResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            engine: 'string',
            engineVersion: 'string',
            items: DescribeModifyParameterLogResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
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
exports.DescribeModifyParameterLogResponseBody = DescribeModifyParameterLogResponseBody;
//# sourceMappingURL=DescribeModifyParameterLogResponseBody.js.map