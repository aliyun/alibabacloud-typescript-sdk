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
exports.DescribeDBInstanceSwitchLogResponseBody = exports.DescribeDBInstanceSwitchLogResponseBodyItems = exports.DescribeDBInstanceSwitchLogResponseBodyItemsItem = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstanceSwitchLogResponseBodyItemsItem extends $dara.Model {
    static names() {
        return {
            affectedSessions: 'AffectedSessions',
            HAStatus: 'HAStatus',
            switchCauseCode: 'SwitchCauseCode',
            switchCauseDetail: 'SwitchCauseDetail',
            switchFinishTime: 'SwitchFinishTime',
            switchId: 'SwitchId',
            switchStartTime: 'SwitchStartTime',
            totalSessions: 'TotalSessions',
        };
    }
    static types() {
        return {
            affectedSessions: 'string',
            HAStatus: 'string',
            switchCauseCode: 'string',
            switchCauseDetail: 'string',
            switchFinishTime: 'string',
            switchId: 'string',
            switchStartTime: 'string',
            totalSessions: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceSwitchLogResponseBodyItemsItem = DescribeDBInstanceSwitchLogResponseBodyItemsItem;
class DescribeDBInstanceSwitchLogResponseBodyItems extends $dara.Model {
    static names() {
        return {
            item: 'Item',
        };
    }
    static types() {
        return {
            item: { 'type': 'array', 'itemType': DescribeDBInstanceSwitchLogResponseBodyItemsItem },
        };
    }
    validate() {
        if (Array.isArray(this.item)) {
            $dara.Model.validateArray(this.item);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceSwitchLogResponseBodyItems = DescribeDBInstanceSwitchLogResponseBodyItems;
class DescribeDBInstanceSwitchLogResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceName: 'DBInstanceName',
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            DBInstanceName: 'string',
            items: DescribeDBInstanceSwitchLogResponseBodyItems,
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
exports.DescribeDBInstanceSwitchLogResponseBody = DescribeDBInstanceSwitchLogResponseBody;
//# sourceMappingURL=DescribeDbinstanceSwitchLogResponseBody.js.map