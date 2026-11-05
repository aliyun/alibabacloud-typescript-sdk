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
exports.DescribeDatabasesResponseBody = exports.DescribeDatabasesResponseBodyDatabases = exports.DescribeDatabasesResponseBodyDatabasesDatabase = exports.DescribeDatabasesResponseBodyDatabasesDatabaseAccounts = exports.DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount extends $dara.Model {
    static names() {
        return {
            accountName: 'AccountName',
            accountPrivilege: 'AccountPrivilege',
            accountStatus: 'AccountStatus',
            privilegeStatus: 'PrivilegeStatus',
        };
    }
    static types() {
        return {
            accountName: 'string',
            accountPrivilege: 'string',
            accountStatus: 'string',
            privilegeStatus: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount = DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount;
class DescribeDatabasesResponseBodyDatabasesDatabaseAccounts extends $dara.Model {
    static names() {
        return {
            account: 'Account',
        };
    }
    static types() {
        return {
            account: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount },
        };
    }
    validate() {
        if (Array.isArray(this.account)) {
            $dara.Model.validateArray(this.account);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDatabasesResponseBodyDatabasesDatabaseAccounts = DescribeDatabasesResponseBodyDatabasesDatabaseAccounts;
class DescribeDatabasesResponseBodyDatabasesDatabase extends $dara.Model {
    static names() {
        return {
            accounts: 'Accounts',
            characterSetName: 'CharacterSetName',
            DBDescription: 'DBDescription',
            DBName: 'DBName',
            DBStatus: 'DBStatus',
            engine: 'Engine',
            masterID: 'MasterID',
        };
    }
    static types() {
        return {
            accounts: DescribeDatabasesResponseBodyDatabasesDatabaseAccounts,
            characterSetName: 'string',
            DBDescription: 'string',
            DBName: 'string',
            DBStatus: 'string',
            engine: 'string',
            masterID: 'string',
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
exports.DescribeDatabasesResponseBodyDatabasesDatabase = DescribeDatabasesResponseBodyDatabasesDatabase;
class DescribeDatabasesResponseBodyDatabases extends $dara.Model {
    static names() {
        return {
            database: 'Database',
        };
    }
    static types() {
        return {
            database: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesDatabase },
        };
    }
    validate() {
        if (Array.isArray(this.database)) {
            $dara.Model.validateArray(this.database);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDatabasesResponseBodyDatabases = DescribeDatabasesResponseBodyDatabases;
class DescribeDatabasesResponseBody extends $dara.Model {
    static names() {
        return {
            databases: 'Databases',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            databases: DescribeDatabasesResponseBodyDatabases,
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
        };
    }
    validate() {
        if (this.databases && typeof this.databases.validate === 'function') {
            this.databases.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDatabasesResponseBody = DescribeDatabasesResponseBody;
//# sourceMappingURL=DescribeDatabasesResponseBody.js.map