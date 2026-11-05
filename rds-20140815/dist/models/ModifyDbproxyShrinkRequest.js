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
exports.ModifyDBProxyShrinkRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyDBProxyShrinkRequest extends $dara.Model {
    static names() {
        return {
            configDBProxyService: 'ConfigDBProxyService',
            DBInstanceId: 'DBInstanceId',
            DBProxyEngineType: 'DBProxyEngineType',
            DBProxyInstanceNum: 'DBProxyInstanceNum',
            DBProxyInstanceType: 'DBProxyInstanceType',
            DBProxyNodesShrink: 'DBProxyNodes',
            instanceNetworkType: 'InstanceNetworkType',
            ownerId: 'OwnerId',
            persistentConnectionStatus: 'PersistentConnectionStatus',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
        };
    }
    static types() {
        return {
            configDBProxyService: 'string',
            DBInstanceId: 'string',
            DBProxyEngineType: 'string',
            DBProxyInstanceNum: 'string',
            DBProxyInstanceType: 'string',
            DBProxyNodesShrink: 'string',
            instanceNetworkType: 'string',
            ownerId: 'number',
            persistentConnectionStatus: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            VPCId: 'string',
            vSwitchId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyDBProxyShrinkRequest = ModifyDBProxyShrinkRequest;
//# sourceMappingURL=ModifyDbproxyShrinkRequest.js.map