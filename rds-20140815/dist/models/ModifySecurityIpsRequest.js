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
exports.ModifySecurityIpsRequest = exports.ModifySecurityIpsRequestGroupItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifySecurityIpsRequestGroupItems extends $dara.Model {
    static names() {
        return {
            groupName: 'GroupName',
            groupTag: 'GroupTag',
            securityIPList: 'SecurityIPList',
        };
    }
    static types() {
        return {
            groupName: 'string',
            groupTag: 'string',
            securityIPList: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifySecurityIpsRequestGroupItems = ModifySecurityIpsRequestGroupItems;
class ModifySecurityIpsRequest extends $dara.Model {
    static names() {
        return {
            batchMode: 'BatchMode',
            DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
            DBInstanceIPArrayName: 'DBInstanceIPArrayName',
            DBInstanceId: 'DBInstanceId',
            freshWhiteListReadins: 'FreshWhiteListReadins',
            groupItems: 'GroupItems',
            modifyMode: 'ModifyMode',
            resourceOwnerId: 'ResourceOwnerId',
            securityIPType: 'SecurityIPType',
            securityIps: 'SecurityIps',
            whitelistNetworkType: 'WhitelistNetworkType',
        };
    }
    static types() {
        return {
            batchMode: 'boolean',
            DBInstanceIPArrayAttribute: 'string',
            DBInstanceIPArrayName: 'string',
            DBInstanceId: 'string',
            freshWhiteListReadins: 'string',
            groupItems: { 'type': 'array', 'itemType': ModifySecurityIpsRequestGroupItems },
            modifyMode: 'string',
            resourceOwnerId: 'number',
            securityIPType: 'string',
            securityIps: 'string',
            whitelistNetworkType: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.groupItems)) {
            $dara.Model.validateArray(this.groupItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifySecurityIpsRequest = ModifySecurityIpsRequest;
//# sourceMappingURL=ModifySecurityIpsRequest.js.map