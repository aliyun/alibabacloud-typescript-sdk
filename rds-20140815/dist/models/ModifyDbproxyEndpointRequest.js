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
exports.ModifyDBProxyEndpointRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyDBProxyEndpointRequest extends $dara.Model {
    static names() {
        return {
            causalConsistReadTimeout: 'CausalConsistReadTimeout',
            configDBProxyFeatures: 'ConfigDBProxyFeatures',
            DBInstanceId: 'DBInstanceId',
            DBProxyEndpointId: 'DBProxyEndpointId',
            DBProxyEngineType: 'DBProxyEngineType',
            dbEndpointAliases: 'DbEndpointAliases',
            dbEndpointCostThresholdForDuckdb: 'DbEndpointCostThresholdForDuckdb',
            dbEndpointMinSlaveCount: 'DbEndpointMinSlaveCount',
            dbEndpointOperator: 'DbEndpointOperator',
            dbEndpointReadWriteMode: 'DbEndpointReadWriteMode',
            dbEndpointType: 'DbEndpointType',
            effectiveSpecificTime: 'EffectiveSpecificTime',
            effectiveTime: 'EffectiveTime',
            ownerId: 'OwnerId',
            readOnlyInstanceDistributionType: 'ReadOnlyInstanceDistributionType',
            readOnlyInstanceMaxDelayTime: 'ReadOnlyInstanceMaxDelayTime',
            readOnlyInstanceWeight: 'ReadOnlyInstanceWeight',
            regionId: 'RegionId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            vSwitchId: 'VSwitchId',
            vpcId: 'VpcId',
        };
    }
    static types() {
        return {
            causalConsistReadTimeout: 'string',
            configDBProxyFeatures: 'string',
            DBInstanceId: 'string',
            DBProxyEndpointId: 'string',
            DBProxyEngineType: 'string',
            dbEndpointAliases: 'string',
            dbEndpointCostThresholdForDuckdb: 'string',
            dbEndpointMinSlaveCount: 'string',
            dbEndpointOperator: 'string',
            dbEndpointReadWriteMode: 'string',
            dbEndpointType: 'string',
            effectiveSpecificTime: 'string',
            effectiveTime: 'string',
            ownerId: 'number',
            readOnlyInstanceDistributionType: 'string',
            readOnlyInstanceMaxDelayTime: 'string',
            readOnlyInstanceWeight: 'string',
            regionId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            vSwitchId: 'string',
            vpcId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyDBProxyEndpointRequest = ModifyDBProxyEndpointRequest;
//# sourceMappingURL=ModifyDbproxyEndpointRequest.js.map