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
exports.DescribeModifyPGHbaConfigLogResponseBody = exports.DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems = exports.DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItem = exports.DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems = exports.DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItemsHbaItem = exports.DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems = exports.DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItemsHbaItem = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItemsHbaItem extends $dara.Model {
    static names() {
        return {
            address: 'Address',
            database: 'Database',
            mask: 'Mask',
            method: 'Method',
            option: 'Option',
            priorityId: 'PriorityId',
            type: 'Type',
            user: 'User',
        };
    }
    static types() {
        return {
            address: 'string',
            database: 'string',
            mask: 'string',
            method: 'string',
            option: 'string',
            priorityId: 'number',
            type: 'string',
            user: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItemsHbaItem = DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItemsHbaItem;
class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems extends $dara.Model {
    static names() {
        return {
            hbaItem: 'HbaItem',
        };
    }
    static types() {
        return {
            hbaItem: { 'type': 'array', 'itemType': DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItemsHbaItem },
        };
    }
    validate() {
        if (Array.isArray(this.hbaItem)) {
            $dara.Model.validateArray(this.hbaItem);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems = DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems;
class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItemsHbaItem extends $dara.Model {
    static names() {
        return {
            address: 'Address',
            database: 'Database',
            mask: 'Mask',
            method: 'Method',
            option: 'Option',
            priorityId: 'PriorityId',
            type: 'Type',
            user: 'User',
        };
    }
    static types() {
        return {
            address: 'string',
            database: 'string',
            mask: 'string',
            method: 'string',
            option: 'string',
            priorityId: 'number',
            type: 'string',
            user: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItemsHbaItem = DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItemsHbaItem;
class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems extends $dara.Model {
    static names() {
        return {
            hbaItem: 'HbaItem',
        };
    }
    static types() {
        return {
            hbaItem: { 'type': 'array', 'itemType': DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItemsHbaItem },
        };
    }
    validate() {
        if (Array.isArray(this.hbaItem)) {
            $dara.Model.validateArray(this.hbaItem);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems = DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems;
class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItem extends $dara.Model {
    static names() {
        return {
            afterHbaItems: 'AfterHbaItems',
            beforeHbaItems: 'BeforeHbaItems',
            modifyStatus: 'ModifyStatus',
            modifyTime: 'ModifyTime',
            statusReason: 'StatusReason',
        };
    }
    static types() {
        return {
            afterHbaItems: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems,
            beforeHbaItems: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems,
            modifyStatus: 'string',
            modifyTime: 'string',
            statusReason: 'string',
        };
    }
    validate() {
        if (this.afterHbaItems && typeof this.afterHbaItems.validate === 'function') {
            this.afterHbaItems.validate();
        }
        if (this.beforeHbaItems && typeof this.beforeHbaItems.validate === 'function') {
            this.beforeHbaItems.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItem = DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItem;
class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems extends $dara.Model {
    static names() {
        return {
            hbaLogItem: 'HbaLogItem',
        };
    }
    static types() {
        return {
            hbaLogItem: { 'type': 'array', 'itemType': DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItem },
        };
    }
    validate() {
        if (Array.isArray(this.hbaLogItem)) {
            $dara.Model.validateArray(this.hbaLogItem);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems = DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems;
class DescribeModifyPGHbaConfigLogResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            hbaLogItems: 'HbaLogItems',
            logItemCount: 'LogItemCount',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            hbaLogItems: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems,
            logItemCount: 'number',
            requestId: 'string',
        };
    }
    validate() {
        if (this.hbaLogItems && typeof this.hbaLogItems.validate === 'function') {
            this.hbaLogItems.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeModifyPGHbaConfigLogResponseBody = DescribeModifyPGHbaConfigLogResponseBody;
//# sourceMappingURL=DescribeModifyPghbaConfigLogResponseBody.js.map