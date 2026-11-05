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
exports.ModifyDBNodeClassRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyDBNodeClassRequest extends $dara.Model {
    static names() {
        return {
            autoUseCoupon: 'AutoUseCoupon',
            clientToken: 'ClientToken',
            cloudProvider: 'CloudProvider',
            DBClusterId: 'DBClusterId',
            DBNodeTargetClass: 'DBNodeTargetClass',
            DBNodeType: 'DBNodeType',
            modifyType: 'ModifyType',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            plannedEndTime: 'PlannedEndTime',
            plannedFlashingOffTime: 'PlannedFlashingOffTime',
            plannedStartTime: 'PlannedStartTime',
            promotionCode: 'PromotionCode',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            subCategory: 'SubCategory',
        };
    }
    static types() {
        return {
            autoUseCoupon: 'boolean',
            clientToken: 'string',
            cloudProvider: 'string',
            DBClusterId: 'string',
            DBNodeTargetClass: 'string',
            DBNodeType: 'string',
            modifyType: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            plannedEndTime: 'string',
            plannedFlashingOffTime: 'string',
            plannedStartTime: 'string',
            promotionCode: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            subCategory: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyDBNodeClassRequest = ModifyDBNodeClassRequest;
//# sourceMappingURL=ModifyDbnodeClassRequest.js.map