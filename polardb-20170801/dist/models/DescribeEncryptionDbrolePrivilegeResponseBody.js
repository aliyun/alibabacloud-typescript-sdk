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
exports.DescribeEncryptionDBRolePrivilegeResponseBody = exports.DescribeEncryptionDBRolePrivilegeResponseBodyData = exports.DescribeEncryptionDBRolePrivilegeResponseBodyDataRolePrivilegeList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeEncryptionDBRolePrivilegeResponseBodyDataRolePrivilegeList extends $dara.Model {
    static names() {
        return {
            encryption: 'Encryption',
            negation: 'Negation',
            notEncryption: 'NotEncryption',
            rolePrivilegeName: 'RolePrivilegeName',
        };
    }
    static types() {
        return {
            encryption: 'string',
            negation: 'string',
            notEncryption: 'string',
            rolePrivilegeName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeEncryptionDBRolePrivilegeResponseBodyDataRolePrivilegeList = DescribeEncryptionDBRolePrivilegeResponseBodyDataRolePrivilegeList;
class DescribeEncryptionDBRolePrivilegeResponseBodyData extends $dara.Model {
    static names() {
        return {
            rolePrivilegeList: 'RolePrivilegeList',
        };
    }
    static types() {
        return {
            rolePrivilegeList: { 'type': 'array', 'itemType': DescribeEncryptionDBRolePrivilegeResponseBodyDataRolePrivilegeList },
        };
    }
    validate() {
        if (Array.isArray(this.rolePrivilegeList)) {
            $dara.Model.validateArray(this.rolePrivilegeList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeEncryptionDBRolePrivilegeResponseBodyData = DescribeEncryptionDBRolePrivilegeResponseBodyData;
class DescribeEncryptionDBRolePrivilegeResponseBody extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            data: 'Data',
            message: 'Message',
            requestId: 'RequestId',
            success: 'Success',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            data: DescribeEncryptionDBRolePrivilegeResponseBodyData,
            message: 'string',
            requestId: 'string',
            success: 'boolean',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeEncryptionDBRolePrivilegeResponseBody = DescribeEncryptionDBRolePrivilegeResponseBody;
//# sourceMappingURL=DescribeEncryptionDbrolePrivilegeResponseBody.js.map