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
exports.DescribeDatabasesResponseBody = exports.DescribeDatabasesResponseBodyDatabases = exports.DescribeDatabasesResponseBodyDatabasesDatabase = exports.DescribeDatabasesResponseBodyDatabasesDatabaseRuntimeInfo = exports.DescribeDatabasesResponseBodyDatabasesDatabaseBasicInfo = exports.DescribeDatabasesResponseBodyDatabasesDatabaseAdvancedInfo = exports.DescribeDatabasesResponseBodyDatabasesDatabaseAccounts = exports.DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo extends $dara.Model {
    static names() {
        return {
            account: 'Account',
            accountPrivilege: 'AccountPrivilege',
            accountPrivilegeDetail: 'AccountPrivilegeDetail',
        };
    }
    static types() {
        return {
            account: 'string',
            accountPrivilege: 'string',
            accountPrivilegeDetail: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo = DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo;
class DescribeDatabasesResponseBodyDatabasesDatabaseAccounts extends $dara.Model {
    static names() {
        return {
            accountPrivilegeInfo: 'AccountPrivilegeInfo',
        };
    }
    static types() {
        return {
            accountPrivilegeInfo: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo },
        };
    }
    validate() {
        if (Array.isArray(this.accountPrivilegeInfo)) {
            $dara.Model.validateArray(this.accountPrivilegeInfo);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDatabasesResponseBodyDatabasesDatabaseAccounts = DescribeDatabasesResponseBodyDatabasesDatabaseAccounts;
class DescribeDatabasesResponseBodyDatabasesDatabaseAdvancedInfo extends $dara.Model {
    static names() {
        return {
            advancedDbProperty: 'AdvancedDbProperty',
        };
    }
    static types() {
        return {
            advancedDbProperty: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
        };
    }
    validate() {
        if (Array.isArray(this.advancedDbProperty)) {
            $dara.Model.validateArray(this.advancedDbProperty);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDatabasesResponseBodyDatabasesDatabaseAdvancedInfo = DescribeDatabasesResponseBodyDatabasesDatabaseAdvancedInfo;
class DescribeDatabasesResponseBodyDatabasesDatabaseBasicInfo extends $dara.Model {
    static names() {
        return {
            basicDbProperty: 'BasicDbProperty',
        };
    }
    static types() {
        return {
            basicDbProperty: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
        };
    }
    validate() {
        if (Array.isArray(this.basicDbProperty)) {
            $dara.Model.validateArray(this.basicDbProperty);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDatabasesResponseBodyDatabasesDatabaseBasicInfo = DescribeDatabasesResponseBodyDatabasesDatabaseBasicInfo;
class DescribeDatabasesResponseBodyDatabasesDatabaseRuntimeInfo extends $dara.Model {
    static names() {
        return {
            runtimeDbProperty: 'RuntimeDbProperty',
        };
    }
    static types() {
        return {
            runtimeDbProperty: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
        };
    }
    validate() {
        if (Array.isArray(this.runtimeDbProperty)) {
            $dara.Model.validateArray(this.runtimeDbProperty);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDatabasesResponseBodyDatabasesDatabaseRuntimeInfo = DescribeDatabasesResponseBodyDatabasesDatabaseRuntimeInfo;
class DescribeDatabasesResponseBodyDatabasesDatabase extends $dara.Model {
    static names() {
        return {
            accounts: 'Accounts',
            advancedInfo: 'AdvancedInfo',
            basicInfo: 'BasicInfo',
            characterSetName: 'CharacterSetName',
            collate: 'Collate',
            connLimit: 'ConnLimit',
            ctype: 'Ctype',
            DBDescription: 'DBDescription',
            DBInstanceId: 'DBInstanceId',
            DBName: 'DBName',
            DBStatus: 'DBStatus',
            duckDBEnabled: 'DuckDBEnabled',
            engine: 'Engine',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            runtimeInfo: 'RuntimeInfo',
            tablespace: 'Tablespace',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            accounts: DescribeDatabasesResponseBodyDatabasesDatabaseAccounts,
            advancedInfo: DescribeDatabasesResponseBodyDatabasesDatabaseAdvancedInfo,
            basicInfo: DescribeDatabasesResponseBodyDatabasesDatabaseBasicInfo,
            characterSetName: 'string',
            collate: 'string',
            connLimit: 'string',
            ctype: 'string',
            DBDescription: 'string',
            DBInstanceId: 'string',
            DBName: 'string',
            DBStatus: 'string',
            duckDBEnabled: 'boolean',
            engine: 'string',
            pageNumber: 'number',
            pageSize: 'number',
            runtimeInfo: DescribeDatabasesResponseBodyDatabasesDatabaseRuntimeInfo,
            tablespace: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (this.accounts && typeof this.accounts.validate === 'function') {
            this.accounts.validate();
        }
        if (this.advancedInfo && typeof this.advancedInfo.validate === 'function') {
            this.advancedInfo.validate();
        }
        if (this.basicInfo && typeof this.basicInfo.validate === 'function') {
            this.basicInfo.validate();
        }
        if (this.runtimeInfo && typeof this.runtimeInfo.validate === 'function') {
            this.runtimeInfo.validate();
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
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            databases: DescribeDatabasesResponseBodyDatabases,
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