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
exports.DescibeImportsFromDatabaseResponseBody = exports.DescibeImportsFromDatabaseResponseBodyItems = exports.DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB extends $dara.Model {
    static names() {
        return {
            importDataStatus: 'ImportDataStatus',
            importDataStatusDescription: 'ImportDataStatusDescription',
            importDataType: 'ImportDataType',
            importId: 'ImportId',
            incrementalImportingTime: 'IncrementalImportingTime',
        };
    }
    static types() {
        return {
            importDataStatus: 'string',
            importDataStatusDescription: 'string',
            importDataType: 'string',
            importId: 'number',
            incrementalImportingTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB = DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB;
class DescibeImportsFromDatabaseResponseBodyItems extends $dara.Model {
    static names() {
        return {
            importResultFromDB: 'ImportResultFromDB',
        };
    }
    static types() {
        return {
            importResultFromDB: { 'type': 'array', 'itemType': DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB },
        };
    }
    validate() {
        if (Array.isArray(this.importResultFromDB)) {
            $dara.Model.validateArray(this.importResultFromDB);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescibeImportsFromDatabaseResponseBodyItems = DescibeImportsFromDatabaseResponseBodyItems;
class DescibeImportsFromDatabaseResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescibeImportsFromDatabaseResponseBodyItems,
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
exports.DescibeImportsFromDatabaseResponseBody = DescibeImportsFromDatabaseResponseBody;
//# sourceMappingURL=DescibeImportsFromDatabaseResponseBody.js.map