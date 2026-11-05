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
exports.DescribeAutoRenewAttributeResponseBody = exports.DescribeAutoRenewAttributeResponseBodyItems = exports.DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute extends $dara.Model {
    static names() {
        return {
            autoRenewEnabled: 'AutoRenewEnabled',
            DBClusterId: 'DBClusterId',
            duration: 'Duration',
            periodUnit: 'PeriodUnit',
            regionId: 'RegionId',
            renewalStatus: 'RenewalStatus',
        };
    }
    static types() {
        return {
            autoRenewEnabled: 'boolean',
            DBClusterId: 'string',
            duration: 'number',
            periodUnit: 'string',
            regionId: 'string',
            renewalStatus: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute = DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute;
class DescribeAutoRenewAttributeResponseBodyItems extends $dara.Model {
    static names() {
        return {
            autoRenewAttribute: 'AutoRenewAttribute',
        };
    }
    static types() {
        return {
            autoRenewAttribute: { 'type': 'array', 'itemType': DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute },
        };
    }
    validate() {
        if (Array.isArray(this.autoRenewAttribute)) {
            $dara.Model.validateArray(this.autoRenewAttribute);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAutoRenewAttributeResponseBodyItems = DescribeAutoRenewAttributeResponseBodyItems;
class DescribeAutoRenewAttributeResponseBody extends $dara.Model {
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
            items: DescribeAutoRenewAttributeResponseBodyItems,
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
exports.DescribeAutoRenewAttributeResponseBody = DescribeAutoRenewAttributeResponseBody;
//# sourceMappingURL=DescribeAutoRenewAttributeResponseBody.js.map