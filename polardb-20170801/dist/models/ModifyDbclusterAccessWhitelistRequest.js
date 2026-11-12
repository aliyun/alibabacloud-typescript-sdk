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
exports.ModifyDBClusterAccessWhitelistRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyDBClusterAccessWhitelistRequest extends $dara.Model {
    static names() {
        return {
            DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
            DBClusterIPArrayName: 'DBClusterIPArrayName',
            DBClusterId: 'DBClusterId',
            modifyMode: 'ModifyMode',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            pfsInstanceId: 'PfsInstanceId',
            projectId: 'ProjectId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            securityGroupIds: 'SecurityGroupIds',
            securityIps: 'SecurityIps',
            whiteListType: 'WhiteListType',
        };
    }
    static types() {
        return {
            DBClusterIPArrayAttribute: 'string',
            DBClusterIPArrayName: 'string',
            DBClusterId: 'string',
            modifyMode: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            pfsInstanceId: 'string',
            projectId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            securityGroupIds: 'string',
            securityIps: 'string',
            whiteListType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyDBClusterAccessWhitelistRequest = ModifyDBClusterAccessWhitelistRequest;
//# sourceMappingURL=ModifyDbclusterAccessWhitelistRequest.js.map