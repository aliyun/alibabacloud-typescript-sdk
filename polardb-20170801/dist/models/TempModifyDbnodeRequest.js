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
exports.TempModifyDBNodeRequest = exports.TempModifyDBNodeRequestDBNode = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class TempModifyDBNodeRequestDBNode extends $dara.Model {
    static names() {
        return {
            targetClass: 'TargetClass',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            targetClass: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.TempModifyDBNodeRequestDBNode = TempModifyDBNodeRequestDBNode;
class TempModifyDBNodeRequest extends $dara.Model {
    static names() {
        return {
            autoUseCoupon: 'AutoUseCoupon',
            clientToken: 'ClientToken',
            DBClusterId: 'DBClusterId',
            DBNode: 'DBNode',
            modifyType: 'ModifyType',
            operationType: 'OperationType',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            promotionCode: 'PromotionCode',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            restoreTime: 'RestoreTime',
        };
    }
    static types() {
        return {
            autoUseCoupon: 'boolean',
            clientToken: 'string',
            DBClusterId: 'string',
            DBNode: { 'type': 'array', 'itemType': TempModifyDBNodeRequestDBNode },
            modifyType: 'string',
            operationType: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            promotionCode: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            restoreTime: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.DBNode)) {
            $dara.Model.validateArray(this.DBNode);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.TempModifyDBNodeRequest = TempModifyDBNodeRequest;
//# sourceMappingURL=TempModifyDbnodeRequest.js.map