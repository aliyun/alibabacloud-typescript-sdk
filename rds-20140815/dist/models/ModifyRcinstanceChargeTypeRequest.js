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
exports.ModifyRCInstanceChargeTypeRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyRCInstanceChargeTypeRequest extends $dara.Model {
    static names() {
        return {
            autoPay: 'AutoPay',
            autoRenew: 'AutoRenew',
            autoUseCoupon: 'AutoUseCoupon',
            businessInfo: 'BusinessInfo',
            clientToken: 'ClientToken',
            dryRun: 'DryRun',
            includeDataDisks: 'IncludeDataDisks',
            instanceChargeType: 'InstanceChargeType',
            instanceId: 'InstanceId',
            instanceIds: 'InstanceIds',
            payType: 'PayType',
            period: 'Period',
            promotionCode: 'PromotionCode',
            regionId: 'RegionId',
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
            dryRun: 'boolean',
            includeDataDisks: 'boolean',
            instanceChargeType: 'string',
            instanceId: 'string',
            instanceIds: 'string',
            payType: 'string',
            period: 'string',
            promotionCode: 'string',
            regionId: 'string',
            usedTime: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyRCInstanceChargeTypeRequest = ModifyRCInstanceChargeTypeRequest;
//# sourceMappingURL=ModifyRcinstanceChargeTypeRequest.js.map