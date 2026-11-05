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
exports.DescribeSQLServerUpgradeVersionsResponseBody = exports.DescribeSQLServerUpgradeVersionsResponseBodyItems = exports.DescribeSQLServerUpgradeVersionsResponseBodyItemsItem = exports.DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersions = exports.DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersion = exports.DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItems = exports.DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItemsDBInstanceClassItem = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItemsDBInstanceClassItem extends $dara.Model {
    static names() {
        return {
            CPU: 'CPU',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceClassType: 'DBInstanceClassType',
            group: 'Group',
            memory: 'Memory',
        };
    }
    static types() {
        return {
            CPU: 'string',
            DBInstanceClass: 'string',
            DBInstanceClassType: 'string',
            group: 'string',
            memory: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItemsDBInstanceClassItem = DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItemsDBInstanceClassItem;
class DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItems extends $dara.Model {
    static names() {
        return {
            DBInstanceClassItem: 'DBInstanceClassItem',
        };
    }
    static types() {
        return {
            DBInstanceClassItem: { 'type': 'array', 'itemType': DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItemsDBInstanceClassItem },
        };
    }
    validate() {
        if (Array.isArray(this.DBInstanceClassItem)) {
            $dara.Model.validateArray(this.DBInstanceClassItem);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItems = DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItems;
class DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersion extends $dara.Model {
    static names() {
        return {
            DBInstanceClassItems: 'DBInstanceClassItems',
            enableUpgrade: 'EnableUpgrade',
            version: 'Version',
        };
    }
    static types() {
        return {
            DBInstanceClassItems: DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersionDBInstanceClassItems,
            enableUpgrade: 'string',
            version: 'string',
        };
    }
    validate() {
        if (this.DBInstanceClassItems && typeof this.DBInstanceClassItems.validate === 'function') {
            this.DBInstanceClassItems.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersion = DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersion;
class DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersions extends $dara.Model {
    static names() {
        return {
            SQLServerUpgradeVersion: 'SQLServerUpgradeVersion',
        };
    }
    static types() {
        return {
            SQLServerUpgradeVersion: { 'type': 'array', 'itemType': DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersionsSQLServerUpgradeVersion },
        };
    }
    validate() {
        if (Array.isArray(this.SQLServerUpgradeVersion)) {
            $dara.Model.validateArray(this.SQLServerUpgradeVersion);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersions = DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersions;
class DescribeSQLServerUpgradeVersionsResponseBodyItemsItem extends $dara.Model {
    static names() {
        return {
            currentVersion: 'CurrentVersion',
            SQLServerUpgradeVersions: 'SQLServerUpgradeVersions',
        };
    }
    static types() {
        return {
            currentVersion: 'string',
            SQLServerUpgradeVersions: DescribeSQLServerUpgradeVersionsResponseBodyItemsItemSQLServerUpgradeVersions,
        };
    }
    validate() {
        if (this.SQLServerUpgradeVersions && typeof this.SQLServerUpgradeVersions.validate === 'function') {
            this.SQLServerUpgradeVersions.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLServerUpgradeVersionsResponseBodyItemsItem = DescribeSQLServerUpgradeVersionsResponseBodyItemsItem;
class DescribeSQLServerUpgradeVersionsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            item: 'Item',
        };
    }
    static types() {
        return {
            item: { 'type': 'array', 'itemType': DescribeSQLServerUpgradeVersionsResponseBodyItemsItem },
        };
    }
    validate() {
        if (Array.isArray(this.item)) {
            $dara.Model.validateArray(this.item);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLServerUpgradeVersionsResponseBodyItems = DescribeSQLServerUpgradeVersionsResponseBodyItems;
class DescribeSQLServerUpgradeVersionsResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            items: DescribeSQLServerUpgradeVersionsResponseBodyItems,
            requestId: 'string',
        };
    }
    validate() {
        if (this.items && typeof this.items.validate === 'function') {
            this.items.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLServerUpgradeVersionsResponseBody = DescribeSQLServerUpgradeVersionsResponseBody;
//# sourceMappingURL=DescribeSqlserverUpgradeVersionsResponseBody.js.map