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
exports.DescribePGHbaConfigResponseBody = exports.DescribePGHbaConfigResponseBodyRunningHbaItems = exports.DescribePGHbaConfigResponseBodyRunningHbaItemsHbaItem = exports.DescribePGHbaConfigResponseBodyDefaultHbaItems = exports.DescribePGHbaConfigResponseBodyDefaultHbaItemsHbaItem = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePGHbaConfigResponseBodyDefaultHbaItemsHbaItem extends $dara.Model {
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
exports.DescribePGHbaConfigResponseBodyDefaultHbaItemsHbaItem = DescribePGHbaConfigResponseBodyDefaultHbaItemsHbaItem;
class DescribePGHbaConfigResponseBodyDefaultHbaItems extends $dara.Model {
    static names() {
        return {
            hbaItem: 'HbaItem',
        };
    }
    static types() {
        return {
            hbaItem: { 'type': 'array', 'itemType': DescribePGHbaConfigResponseBodyDefaultHbaItemsHbaItem },
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
exports.DescribePGHbaConfigResponseBodyDefaultHbaItems = DescribePGHbaConfigResponseBodyDefaultHbaItems;
class DescribePGHbaConfigResponseBodyRunningHbaItemsHbaItem extends $dara.Model {
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
exports.DescribePGHbaConfigResponseBodyRunningHbaItemsHbaItem = DescribePGHbaConfigResponseBodyRunningHbaItemsHbaItem;
class DescribePGHbaConfigResponseBodyRunningHbaItems extends $dara.Model {
    static names() {
        return {
            hbaItem: 'HbaItem',
        };
    }
    static types() {
        return {
            hbaItem: { 'type': 'array', 'itemType': DescribePGHbaConfigResponseBodyRunningHbaItemsHbaItem },
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
exports.DescribePGHbaConfigResponseBodyRunningHbaItems = DescribePGHbaConfigResponseBodyRunningHbaItems;
class DescribePGHbaConfigResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            defaultHbaItems: 'DefaultHbaItems',
            hbaModifyTime: 'HbaModifyTime',
            lastModifyStatus: 'LastModifyStatus',
            modifyStatusReason: 'ModifyStatusReason',
            requestId: 'RequestId',
            runningHbaItems: 'RunningHbaItems',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            defaultHbaItems: DescribePGHbaConfigResponseBodyDefaultHbaItems,
            hbaModifyTime: 'string',
            lastModifyStatus: 'string',
            modifyStatusReason: 'string',
            requestId: 'string',
            runningHbaItems: DescribePGHbaConfigResponseBodyRunningHbaItems,
        };
    }
    validate() {
        if (this.defaultHbaItems && typeof this.defaultHbaItems.validate === 'function') {
            this.defaultHbaItems.validate();
        }
        if (this.runningHbaItems && typeof this.runningHbaItems.validate === 'function') {
            this.runningHbaItems.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePGHbaConfigResponseBody = DescribePGHbaConfigResponseBody;
//# sourceMappingURL=DescribePghbaConfigResponseBody.js.map