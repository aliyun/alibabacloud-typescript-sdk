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
exports.DescribeAccountMaskingPrivilegeResponseBody = exports.DescribeAccountMaskingPrivilegeResponseBodyData = exports.DescribeAccountMaskingPrivilegeResponseBodyDataUserPrivilege = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAccountMaskingPrivilegeResponseBodyDataUserPrivilege extends $dara.Model {
    static names() {
        return {
            expireTime: 'ExpireTime',
            privilege: 'Privilege',
            userName: 'UserName',
        };
    }
    static types() {
        return {
            expireTime: 'string',
            privilege: 'string',
            userName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAccountMaskingPrivilegeResponseBodyDataUserPrivilege = DescribeAccountMaskingPrivilegeResponseBodyDataUserPrivilege;
class DescribeAccountMaskingPrivilegeResponseBodyData extends $dara.Model {
    static names() {
        return {
            userPrivilege: 'UserPrivilege',
        };
    }
    static types() {
        return {
            userPrivilege: { 'type': 'array', 'itemType': DescribeAccountMaskingPrivilegeResponseBodyDataUserPrivilege },
        };
    }
    validate() {
        if (Array.isArray(this.userPrivilege)) {
            $dara.Model.validateArray(this.userPrivilege);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAccountMaskingPrivilegeResponseBodyData = DescribeAccountMaskingPrivilegeResponseBodyData;
class DescribeAccountMaskingPrivilegeResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: DescribeAccountMaskingPrivilegeResponseBodyData,
            requestId: 'string',
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
exports.DescribeAccountMaskingPrivilegeResponseBody = DescribeAccountMaskingPrivilegeResponseBody;
//# sourceMappingURL=DescribeAccountMaskingPrivilegeResponseBody.js.map