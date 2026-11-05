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
exports.ModifyDBProxyInstanceRequest = exports.ModifyDBProxyInstanceRequestMigrateAZ = exports.ModifyDBProxyInstanceRequestDBProxyNodes = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyDBProxyInstanceRequestDBProxyNodes extends $dara.Model {
    static names() {
        return {
            cpuCores: 'cpuCores',
            nodeCounts: 'nodeCounts',
            zoneId: 'zoneId',
        };
    }
    static types() {
        return {
            cpuCores: 'string',
            nodeCounts: 'string',
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
exports.ModifyDBProxyInstanceRequestDBProxyNodes = ModifyDBProxyInstanceRequestDBProxyNodes;
class ModifyDBProxyInstanceRequestMigrateAZ extends $dara.Model {
    static names() {
        return {
            dbProxyEndpointId: 'dbProxyEndpointId',
            destVSwitchId: 'destVSwitchId',
            destVpcId: 'destVpcId',
        };
    }
    static types() {
        return {
            dbProxyEndpointId: 'string',
            destVSwitchId: 'string',
            destVpcId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyDBProxyInstanceRequestMigrateAZ = ModifyDBProxyInstanceRequestMigrateAZ;
class ModifyDBProxyInstanceRequest extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            DBProxyEngineType: 'DBProxyEngineType',
            DBProxyInstanceNum: 'DBProxyInstanceNum',
            DBProxyInstanceType: 'DBProxyInstanceType',
            DBProxyNodes: 'DBProxyNodes',
            effectiveSpecificTime: 'EffectiveSpecificTime',
            effectiveTime: 'EffectiveTime',
            migrateAZ: 'MigrateAZ',
            ownerId: 'OwnerId',
            regionId: 'RegionId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            vSwitchIds: 'VSwitchIds',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            DBProxyEngineType: 'string',
            DBProxyInstanceNum: 'string',
            DBProxyInstanceType: 'string',
            DBProxyNodes: { 'type': 'array', 'itemType': ModifyDBProxyInstanceRequestDBProxyNodes },
            effectiveSpecificTime: 'string',
            effectiveTime: 'string',
            migrateAZ: { 'type': 'array', 'itemType': ModifyDBProxyInstanceRequestMigrateAZ },
            ownerId: 'number',
            regionId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            vSwitchIds: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.DBProxyNodes)) {
            $dara.Model.validateArray(this.DBProxyNodes);
        }
        if (Array.isArray(this.migrateAZ)) {
            $dara.Model.validateArray(this.migrateAZ);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyDBProxyInstanceRequest = ModifyDBProxyInstanceRequest;
//# sourceMappingURL=ModifyDbproxyInstanceRequest.js.map