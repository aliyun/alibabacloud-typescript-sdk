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
exports.CreateDBInstanceForRebuildRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateDBInstanceForRebuildRequest extends $dara.Model {
    static names() {
        return {
            clientToken: 'ClientToken',
            DBInstanceDescription: 'DBInstanceDescription',
            DBInstanceId: 'DBInstanceId',
            DBInstanceNetType: 'DBInstanceNetType',
            instanceNetworkType: 'InstanceNetworkType',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            payType: 'PayType',
            period: 'Period',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            securityIPList: 'SecurityIPList',
            securityToken: 'SecurityToken',
            usedTime: 'UsedTime',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
            zoneIdSlave1: 'ZoneIdSlave1',
            zoneIdSlave2: 'ZoneIdSlave2',
        };
    }
    static types() {
        return {
            clientToken: 'string',
            DBInstanceDescription: 'string',
            DBInstanceId: 'string',
            DBInstanceNetType: 'string',
            instanceNetworkType: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            payType: 'string',
            period: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            securityIPList: 'string',
            securityToken: 'string',
            usedTime: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
            zoneId: 'string',
            zoneIdSlave1: 'string',
            zoneIdSlave2: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateDBInstanceForRebuildRequest = CreateDBInstanceForRebuildRequest;
//# sourceMappingURL=CreateDbinstanceForRebuildRequest.js.map