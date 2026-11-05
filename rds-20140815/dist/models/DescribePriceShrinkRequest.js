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
exports.DescribePriceShrinkRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePriceShrinkRequest extends $dara.Model {
    static names() {
        return {
            clientToken: 'ClientToken',
            commodityCode: 'CommodityCode',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceId: 'DBInstanceId',
            DBInstanceStorage: 'DBInstanceStorage',
            DBInstanceStorageType: 'DBInstanceStorageType',
            DBNodeShrink: 'DBNode',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            instanceUsedType: 'InstanceUsedType',
            orderType: 'OrderType',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            payType: 'PayType',
            quantity: 'Quantity',
            regionId: 'RegionId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            serverlessConfigShrink: 'ServerlessConfig',
            timeType: 'TimeType',
            usedTime: 'UsedTime',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            clientToken: 'string',
            commodityCode: 'string',
            DBInstanceClass: 'string',
            DBInstanceId: 'string',
            DBInstanceStorage: 'number',
            DBInstanceStorageType: 'string',
            DBNodeShrink: 'string',
            engine: 'string',
            engineVersion: 'string',
            instanceUsedType: 'number',
            orderType: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            payType: 'string',
            quantity: 'number',
            regionId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            serverlessConfigShrink: 'string',
            timeType: 'string',
            usedTime: 'number',
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
exports.DescribePriceShrinkRequest = DescribePriceShrinkRequest;
//# sourceMappingURL=DescribePriceShrinkRequest.js.map