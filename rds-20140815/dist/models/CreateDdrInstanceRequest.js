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
exports.CreateDdrInstanceRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateDdrInstanceRequest extends $dara.Model {
    static names() {
        return {
            backupSetId: 'BackupSetId',
            backupSetRegion: 'BackupSetRegion',
            clientToken: 'ClientToken',
            connectionMode: 'ConnectionMode',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceDescription: 'DBInstanceDescription',
            DBInstanceNetType: 'DBInstanceNetType',
            DBInstanceStorage: 'DBInstanceStorage',
            DBInstanceStorageType: 'DBInstanceStorageType',
            encryptionKey: 'EncryptionKey',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            instanceNetworkType: 'InstanceNetworkType',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            payType: 'PayType',
            period: 'Period',
            privateIpAddress: 'PrivateIpAddress',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            restoreTime: 'RestoreTime',
            restoreType: 'RestoreType',
            roleARN: 'RoleARN',
            securityIPList: 'SecurityIPList',
            sourceDBInstanceName: 'SourceDBInstanceName',
            sourceRegion: 'SourceRegion',
            systemDBCharset: 'SystemDBCharset',
            usedTime: 'UsedTime',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            backupSetId: 'string',
            backupSetRegion: 'string',
            clientToken: 'string',
            connectionMode: 'string',
            DBInstanceClass: 'string',
            DBInstanceDescription: 'string',
            DBInstanceNetType: 'string',
            DBInstanceStorage: 'number',
            DBInstanceStorageType: 'string',
            encryptionKey: 'string',
            engine: 'string',
            engineVersion: 'string',
            instanceNetworkType: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            payType: 'string',
            period: 'string',
            privateIpAddress: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            restoreTime: 'string',
            restoreType: 'string',
            roleARN: 'string',
            securityIPList: 'string',
            sourceDBInstanceName: 'string',
            sourceRegion: 'string',
            systemDBCharset: 'string',
            usedTime: 'string',
            VPCId: 'string',
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
exports.CreateDdrInstanceRequest = CreateDdrInstanceRequest;
//# sourceMappingURL=CreateDdrInstanceRequest.js.map