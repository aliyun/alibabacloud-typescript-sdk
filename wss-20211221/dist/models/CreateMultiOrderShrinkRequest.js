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
exports.CreateMultiOrderShrinkRequest = exports.CreateMultiOrderShrinkRequestOrderItems = exports.CreateMultiOrderShrinkRequestOrderItemsComponents = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateMultiOrderShrinkRequestOrderItemsComponents extends $dara.Model {
    static names() {
        return {
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            key: 'string',
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
exports.CreateMultiOrderShrinkRequestOrderItemsComponents = CreateMultiOrderShrinkRequestOrderItemsComponents;
class CreateMultiOrderShrinkRequestOrderItems extends $dara.Model {
    static names() {
        return {
            amount: 'Amount',
            autoPay: 'AutoPay',
            autoRenew: 'AutoRenew',
            buyChange: 'BuyChange',
            components: 'Components',
            instanceIds: 'InstanceIds',
            paidCallBackUrl: 'PaidCallBackUrl',
            period: 'Period',
            periodUnit: 'PeriodUnit',
            promotionId: 'PromotionId',
            resourceIds: 'ResourceIds',
            resourceType: 'ResourceType',
            unifiedExpireDay: 'UnifiedExpireDay',
        };
    }
    static types() {
        return {
            amount: 'number',
            autoPay: 'boolean',
            autoRenew: 'boolean',
            buyChange: 'boolean',
            components: { 'type': 'array', 'itemType': CreateMultiOrderShrinkRequestOrderItemsComponents },
            instanceIds: { 'type': 'array', 'itemType': 'string' },
            paidCallBackUrl: 'string',
            period: 'number',
            periodUnit: 'string',
            promotionId: 'string',
            resourceIds: { 'type': 'array', 'itemType': 'string' },
            resourceType: 'string',
            unifiedExpireDay: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.components)) {
            $dara.Model.validateArray(this.components);
        }
        if (Array.isArray(this.instanceIds)) {
            $dara.Model.validateArray(this.instanceIds);
        }
        if (Array.isArray(this.resourceIds)) {
            $dara.Model.validateArray(this.resourceIds);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMultiOrderShrinkRequestOrderItems = CreateMultiOrderShrinkRequestOrderItems;
class CreateMultiOrderShrinkRequest extends $dara.Model {
    static names() {
        return {
            channelCookie: 'ChannelCookie',
            orderItems: 'OrderItems',
            orderType: 'OrderType',
            propertiesShrink: 'Properties',
            resellerOwnerUid: 'ResellerOwnerUid',
        };
    }
    static types() {
        return {
            channelCookie: 'string',
            orderItems: { 'type': 'array', 'itemType': CreateMultiOrderShrinkRequestOrderItems },
            orderType: 'string',
            propertiesShrink: 'string',
            resellerOwnerUid: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.orderItems)) {
            $dara.Model.validateArray(this.orderItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMultiOrderShrinkRequest = CreateMultiOrderShrinkRequest;
//# sourceMappingURL=CreateMultiOrderShrinkRequest.js.map