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
exports.ModifyDBInstanceRequest = exports.ModifyDBInstanceRequestDBNodes = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyDBInstanceRequestDBNodes extends $dara.Model {
    static names() {
        return {
            nodeId: 'NodeId',
            role: 'Role',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            nodeId: 'string',
            role: 'string',
            vSwitchId: 'string',
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
exports.ModifyDBInstanceRequestDBNodes = ModifyDBInstanceRequestDBNodes;
class ModifyDBInstanceRequest extends $dara.Model {
    static names() {
        return {
            autoUseCoupon: 'AutoUseCoupon',
            burstingEnabled: 'BurstingEnabled',
            category: 'Category',
            coldDataEnabled: 'ColdDataEnabled',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceId: 'DBInstanceId',
            DBInstanceStorage: 'DBInstanceStorage',
            DBInstanceStorageType: 'DBInstanceStorageType',
            DBNodes: 'DBNodes',
            direction: 'Direction',
            effectiveTime: 'EffectiveTime',
            ioAccelerationEnabled: 'IoAccelerationEnabled',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            parameterGroupId: 'ParameterGroupId',
            parameters: 'Parameters',
            promotionCode: 'PromotionCode',
            resourceGroupId: 'ResourceGroupId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            switchTime: 'SwitchTime',
            targetMinorVersion: 'TargetMinorVersion',
        };
    }
    static types() {
        return {
            autoUseCoupon: 'boolean',
            burstingEnabled: 'boolean',
            category: 'string',
            coldDataEnabled: 'boolean',
            DBInstanceClass: 'string',
            DBInstanceId: 'string',
            DBInstanceStorage: 'number',
            DBInstanceStorageType: 'string',
            DBNodes: { 'type': 'array', 'itemType': ModifyDBInstanceRequestDBNodes },
            direction: 'string',
            effectiveTime: 'string',
            ioAccelerationEnabled: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            parameterGroupId: 'string',
            parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            promotionCode: 'string',
            resourceGroupId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            switchTime: 'string',
            targetMinorVersion: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.DBNodes)) {
            $dara.Model.validateArray(this.DBNodes);
        }
        if (this.parameters) {
            $dara.Model.validateMap(this.parameters);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyDBInstanceRequest = ModifyDBInstanceRequest;
//# sourceMappingURL=ModifyDbinstanceRequest.js.map