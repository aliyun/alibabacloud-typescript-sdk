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
exports.RenewRCInstanceRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class RenewRCInstanceRequest extends $dara.Model {
    static names() {
        return {
            autoPay: 'AutoPay',
            autoRenew: 'AutoRenew',
            autoUseCoupon: 'AutoUseCoupon',
            businessInfo: 'BusinessInfo',
            clientToken: 'ClientToken',
            commodityCode: 'CommodityCode',
            instanceId: 'InstanceId',
            ownerId: 'OwnerId',
            payType: 'PayType',
            periodAlign: 'PeriodAlign',
            promotionCode: 'PromotionCode',
            regionId: 'RegionId',
            resource: 'Resource',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            timeType: 'TimeType',
            usedTime: 'UsedTime',
        };
    }
    static types() {
        return {
            autoPay: 'boolean',
            autoRenew: 'string',
            autoUseCoupon: 'boolean',
            businessInfo: 'string',
            clientToken: 'string',
            commodityCode: 'string',
            instanceId: 'string',
            ownerId: 'number',
            payType: 'string',
            periodAlign: 'boolean',
            promotionCode: 'string',
            regionId: 'string',
            resource: 'string',
            resourceOwnerAccount: 'string',
            timeType: 'string',
            usedTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.RenewRCInstanceRequest = RenewRCInstanceRequest;
//# sourceMappingURL=RenewRcinstanceRequest.js.map