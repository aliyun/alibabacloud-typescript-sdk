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
exports.DescribeDatabasesZonalResponseBody = exports.DescribeDatabasesZonalResponseBodyDatabases = exports.DescribeDatabasesZonalResponseBodyDatabasesAccounts = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDatabasesZonalResponseBodyDatabasesAccounts extends $dara.Model {
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
exports.DescribeDatabasesZonalResponseBodyDatabasesAccounts = DescribeDatabasesZonalResponseBodyDatabasesAccounts;
class DescribeDatabasesZonalResponseBodyDatabases extends $dara.Model {
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
            accounts: { 'type': 'array', 'itemType': DescribeDatabasesZonalResponseBodyDatabasesAccounts },
            characterSetName: 'string',
            DBDescription: 'string',
            DBName: 'string',
            DBStatus: 'string',
            engine: 'string',
            masterID: 'string',
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
exports.DescribeDatabasesZonalResponseBodyDatabases = DescribeDatabasesZonalResponseBodyDatabases;
class DescribeDatabasesZonalResponseBody extends $dara.Model {
    static names() {
        return {
            databases: 'Databases',
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            databases: { 'type': 'array', 'itemType': DescribeDatabasesZonalResponseBodyDatabases },
            maxResults: 'number',
            nextToken: 'string',
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.databases)) {
            $dara.Model.validateArray(this.databases);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDatabasesZonalResponseBody = DescribeDatabasesZonalResponseBody;
//# sourceMappingURL=DescribeDatabasesZonalResponseBody.js.map