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
exports.DescribeAccountsResponseBody = exports.DescribeAccountsResponseBodyAccounts = exports.DescribeAccountsResponseBodyAccountsDatabasePrivileges = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAccountsResponseBodyAccountsDatabasePrivileges extends $dara.Model {
    static names() {
        return {
            accountPrivilege: 'AccountPrivilege',
            DBName: 'DBName',
        };
    }
    static types() {
        return {
            accountPrivilege: 'string',
            DBName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAccountsResponseBodyAccountsDatabasePrivileges = DescribeAccountsResponseBodyAccountsDatabasePrivileges;
class DescribeAccountsResponseBodyAccounts extends $dara.Model {
    static names() {
        return {
            accountDescription: 'AccountDescription',
            accountLockState: 'AccountLockState',
            accountName: 'AccountName',
            accountPasswordValidTime: 'AccountPasswordValidTime',
            accountStatus: 'AccountStatus',
            accountType: 'AccountType',
            databasePrivileges: 'DatabasePrivileges',
        };
    }
    static types() {
        return {
            accountDescription: 'string',
            accountLockState: 'string',
            accountName: 'string',
            accountPasswordValidTime: 'string',
            accountStatus: 'string',
            accountType: 'string',
            databasePrivileges: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsDatabasePrivileges },
        };
    }
    validate() {
        if (Array.isArray(this.databasePrivileges)) {
            $dara.Model.validateArray(this.databasePrivileges);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAccountsResponseBodyAccounts = DescribeAccountsResponseBodyAccounts;
class DescribeAccountsResponseBody extends $dara.Model {
    static names() {
        return {
            accounts: 'Accounts',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            accounts: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccounts },
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.accounts)) {
            $dara.Model.validateArray(this.accounts);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAccountsResponseBody = DescribeAccountsResponseBody;
//# sourceMappingURL=DescribeAccountsResponseBody.js.map