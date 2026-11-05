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
exports.DescribeDBInstanceTDEResponseBody = exports.DescribeDBInstanceTDEResponseBodyDatabases = exports.DescribeDBInstanceTDEResponseBodyDatabasesDatabase = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstanceTDEResponseBodyDatabasesDatabase extends $dara.Model {
    static names() {
        return {
            DBName: 'DBName',
            TDEStatus: 'TDEStatus',
        };
    }
    static types() {
        return {
            DBName: 'string',
            TDEStatus: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceTDEResponseBodyDatabasesDatabase = DescribeDBInstanceTDEResponseBodyDatabasesDatabase;
class DescribeDBInstanceTDEResponseBodyDatabases extends $dara.Model {
    static names() {
        return {
            database: 'Database',
        };
    }
    static types() {
        return {
            database: { 'type': 'array', 'itemType': DescribeDBInstanceTDEResponseBodyDatabasesDatabase },
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
exports.DescribeDBInstanceTDEResponseBodyDatabases = DescribeDBInstanceTDEResponseBodyDatabases;
class DescribeDBInstanceTDEResponseBody extends $dara.Model {
    static names() {
        return {
            databases: 'Databases',
            encryptionKey: 'EncryptionKey',
            requestId: 'RequestId',
            TDEMode: 'TDEMode',
            TDEStatus: 'TDEStatus',
        };
    }
    static types() {
        return {
            databases: DescribeDBInstanceTDEResponseBodyDatabases,
            encryptionKey: 'string',
            requestId: 'string',
            TDEMode: 'string',
            TDEStatus: 'string',
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
exports.DescribeDBInstanceTDEResponseBody = DescribeDBInstanceTDEResponseBody;
//# sourceMappingURL=DescribeDbinstanceTderesponseBody.js.map