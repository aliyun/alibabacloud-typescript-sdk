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
exports.UpgradeDBInstanceMajorVersionRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpgradeDBInstanceMajorVersionRequest extends $dara.Model {
    static names() {
        return {
            allowDDL: 'AllowDDL',
            collectStatMode: 'CollectStatMode',
            customExtraInfo: 'CustomExtraInfo',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceId: 'DBInstanceId',
            DBInstanceStorage: 'DBInstanceStorage',
            DBInstanceStorageType: 'DBInstanceStorageType',
            instanceNetworkType: 'InstanceNetworkType',
            payType: 'PayType',
            period: 'Period',
            privateIpAddress: 'PrivateIpAddress',
            resourceOwnerId: 'ResourceOwnerId',
            switchOver: 'SwitchOver',
            switchTime: 'SwitchTime',
            switchTimeMode: 'SwitchTimeMode',
            targetMajorVersion: 'TargetMajorVersion',
            upgradeMode: 'UpgradeMode',
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
            allowDDL: 'boolean',
            collectStatMode: 'string',
            customExtraInfo: 'string',
            DBInstanceClass: 'string',
            DBInstanceId: 'string',
            DBInstanceStorage: 'number',
            DBInstanceStorageType: 'string',
            instanceNetworkType: 'string',
            payType: 'string',
            period: 'string',
            privateIpAddress: 'string',
            resourceOwnerId: 'number',
            switchOver: 'string',
            switchTime: 'string',
            switchTimeMode: 'string',
            targetMajorVersion: 'string',
            upgradeMode: 'string',
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
exports.UpgradeDBInstanceMajorVersionRequest = UpgradeDBInstanceMajorVersionRequest;
//# sourceMappingURL=UpgradeDbinstanceMajorVersionRequest.js.map