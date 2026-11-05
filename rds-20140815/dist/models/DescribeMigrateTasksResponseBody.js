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
exports.DescribeMigrateTasksResponseBody = exports.DescribeMigrateTasksResponseBodyItems = exports.DescribeMigrateTasksResponseBodyItemsMigrateTask = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeMigrateTasksResponseBodyItemsMigrateTask extends $dara.Model {
    static names() {
        return {
            backupMode: 'BackupMode',
            createTime: 'CreateTime',
            DBName: 'DBName',
            description: 'Description',
            endTime: 'EndTime',
            isDBReplaced: 'IsDBReplaced',
            migrateTaskId: 'MigrateTaskId',
            status: 'Status',
        };
    }
    static types() {
        return {
            backupMode: 'string',
            createTime: 'string',
            DBName: 'string',
            description: 'string',
            endTime: 'string',
            isDBReplaced: 'string',
            migrateTaskId: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMigrateTasksResponseBodyItemsMigrateTask = DescribeMigrateTasksResponseBodyItemsMigrateTask;
class DescribeMigrateTasksResponseBodyItems extends $dara.Model {
    static names() {
        return {
            migrateTask: 'MigrateTask',
        };
    }
    static types() {
        return {
            migrateTask: { 'type': 'array', 'itemType': DescribeMigrateTasksResponseBodyItemsMigrateTask },
        };
    }
    validate() {
        if (Array.isArray(this.migrateTask)) {
            $dara.Model.validateArray(this.migrateTask);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMigrateTasksResponseBodyItems = DescribeMigrateTasksResponseBodyItems;
class DescribeMigrateTasksResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            items: DescribeMigrateTasksResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
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
exports.DescribeMigrateTasksResponseBody = DescribeMigrateTasksResponseBody;
//# sourceMappingURL=DescribeMigrateTasksResponseBody.js.map