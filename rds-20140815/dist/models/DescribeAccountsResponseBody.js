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
exports.DescribeAccountsResponseBody = exports.DescribeAccountsResponseBodyAccounts = exports.DescribeAccountsResponseBodyAccountsDBInstanceAccount = exports.DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivileges = exports.DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege extends $dara.Model {
    static names() {
        return {
            accountPrivilege: 'AccountPrivilege',
            accountPrivilegeDetail: 'AccountPrivilegeDetail',
            DBName: 'DBName',
        };
    }
    static types() {
        return {
            accountPrivilege: 'string',
            accountPrivilegeDetail: 'string',
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
exports.DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege = DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege;
class DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivileges extends $dara.Model {
    static names() {
        return {
            databasePrivilege: 'DatabasePrivilege',
        };
    }
    static types() {
        return {
            databasePrivilege: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege },
        };
    }
    validate() {
        if (Array.isArray(this.databasePrivilege)) {
            $dara.Model.validateArray(this.databasePrivilege);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivileges = DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivileges;
class DescribeAccountsResponseBodyAccountsDBInstanceAccount extends $dara.Model {
    static names() {
        return {
            accountDescription: 'AccountDescription',
            accountName: 'AccountName',
            accountStatus: 'AccountStatus',
            accountType: 'AccountType',
            bypassRLS: 'BypassRLS',
            checkPolicy: 'CheckPolicy',
            createDB: 'CreateDB',
            createRole: 'CreateRole',
            DBInstanceId: 'DBInstanceId',
            databasePrivileges: 'DatabasePrivileges',
            passwordExpireTime: 'PasswordExpireTime',
            privExceeded: 'PrivExceeded',
            replication: 'Replication',
            validUntil: 'ValidUntil',
        };
    }
    static types() {
        return {
            accountDescription: 'string',
            accountName: 'string',
            accountStatus: 'string',
            accountType: 'string',
            bypassRLS: 'string',
            checkPolicy: 'boolean',
            createDB: 'string',
            createRole: 'string',
            DBInstanceId: 'string',
            databasePrivileges: DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivileges,
            passwordExpireTime: 'string',
            privExceeded: 'string',
            replication: 'string',
            validUntil: 'string',
        };
    }
    validate() {
        if (this.databasePrivileges && typeof this.databasePrivileges.validate === 'function') {
            this.databasePrivileges.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAccountsResponseBodyAccountsDBInstanceAccount = DescribeAccountsResponseBodyAccountsDBInstanceAccount;
class DescribeAccountsResponseBodyAccounts extends $dara.Model {
    static names() {
        return {
            DBInstanceAccount: 'DBInstanceAccount',
        };
    }
    static types() {
        return {
            DBInstanceAccount: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsDBInstanceAccount },
        };
    }
    validate() {
        if (Array.isArray(this.DBInstanceAccount)) {
            $dara.Model.validateArray(this.DBInstanceAccount);
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
            requestId: 'RequestId',
            resourceGroupId: 'ResourceGroupId',
            systemAdminAccountFirstActivationTime: 'SystemAdminAccountFirstActivationTime',
            systemAdminAccountStatus: 'SystemAdminAccountStatus',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            accounts: DescribeAccountsResponseBodyAccounts,
            pageNumber: 'number',
            requestId: 'string',
            resourceGroupId: 'string',
            systemAdminAccountFirstActivationTime: 'string',
            systemAdminAccountStatus: 'string',
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (this.accounts && typeof this.accounts.validate === 'function') {
            this.accounts.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAccountsResponseBody = DescribeAccountsResponseBody;
//# sourceMappingURL=DescribeAccountsResponseBody.js.map