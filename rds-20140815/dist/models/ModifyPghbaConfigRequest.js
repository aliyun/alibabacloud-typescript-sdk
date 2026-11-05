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
exports.ModifyPGHbaConfigRequest = exports.ModifyPGHbaConfigRequestHbaItem = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyPGHbaConfigRequestHbaItem extends $dara.Model {
    static names() {
        return {
            address: 'Address',
            database: 'Database',
            mask: 'Mask',
            method: 'Method',
            option: 'Option',
            priorityId: 'PriorityId',
            type: 'Type',
            user: 'User',
        };
    }
    static types() {
        return {
            address: 'string',
            database: 'string',
            mask: 'string',
            method: 'string',
            option: 'string',
            priorityId: 'number',
            type: 'string',
            user: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyPGHbaConfigRequestHbaItem = ModifyPGHbaConfigRequestHbaItem;
class ModifyPGHbaConfigRequest extends $dara.Model {
    static names() {
        return {
            clientToken: 'ClientToken',
            DBInstanceId: 'DBInstanceId',
            hbaItem: 'HbaItem',
            opsType: 'OpsType',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
        };
    }
    static types() {
        return {
            clientToken: 'string',
            DBInstanceId: 'string',
            hbaItem: { 'type': 'array', 'itemType': ModifyPGHbaConfigRequestHbaItem },
            opsType: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.hbaItem)) {
            $dara.Model.validateArray(this.hbaItem);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyPGHbaConfigRequest = ModifyPGHbaConfigRequest;
//# sourceMappingURL=ModifyPghbaConfigRequest.js.map