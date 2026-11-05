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
exports.DescribeInstanceAutoRenewalAttributeResponseBody = exports.DescribeInstanceAutoRenewalAttributeResponseBodyItems = exports.DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem extends $dara.Model {
    static names() {
        return {
            autoRenew: 'AutoRenew',
            DBInstanceId: 'DBInstanceId',
            duration: 'Duration',
            regionId: 'RegionId',
            status: 'Status',
        };
    }
    static types() {
        return {
            autoRenew: 'string',
            DBInstanceId: 'string',
            duration: 'number',
            regionId: 'string',
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
exports.DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem = DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem;
class DescribeInstanceAutoRenewalAttributeResponseBodyItems extends $dara.Model {
    static names() {
        return {
            item: 'Item',
        };
    }
    static types() {
        return {
            item: { 'type': 'array', 'itemType': DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem },
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
exports.DescribeInstanceAutoRenewalAttributeResponseBodyItems = DescribeInstanceAutoRenewalAttributeResponseBodyItems;
class DescribeInstanceAutoRenewalAttributeResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescribeInstanceAutoRenewalAttributeResponseBodyItems,
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
exports.DescribeInstanceAutoRenewalAttributeResponseBody = DescribeInstanceAutoRenewalAttributeResponseBody;
//# sourceMappingURL=DescribeInstanceAutoRenewalAttributeResponseBody.js.map