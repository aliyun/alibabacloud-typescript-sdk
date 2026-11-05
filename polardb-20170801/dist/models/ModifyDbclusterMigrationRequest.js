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
exports.ModifyDBClusterMigrationRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyDBClusterMigrationRequest extends $dara.Model {
    static names() {
        return {
            connectionStrings: 'ConnectionStrings',
            DBClusterId: 'DBClusterId',
            newMasterInstanceId: 'NewMasterInstanceId',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            securityToken: 'SecurityToken',
            sourceRDSDBInstanceId: 'SourceRDSDBInstanceId',
            swapConnectionString: 'SwapConnectionString',
        };
    }
    static types() {
        return {
            connectionStrings: 'string',
            DBClusterId: 'string',
            newMasterInstanceId: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            securityToken: 'string',
            sourceRDSDBInstanceId: 'string',
            swapConnectionString: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyDBClusterMigrationRequest = ModifyDBClusterMigrationRequest;
//# sourceMappingURL=ModifyDbclusterMigrationRequest.js.map