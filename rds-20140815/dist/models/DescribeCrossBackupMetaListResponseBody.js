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
exports.DescribeCrossBackupMetaListResponseBody = exports.DescribeCrossBackupMetaListResponseBodyItems = exports.DescribeCrossBackupMetaListResponseBodyItemsMeta = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeCrossBackupMetaListResponseBodyItemsMeta extends $dara.Model {
    static names() {
        return {
            database: 'Database',
            size: 'Size',
            tables: 'Tables',
        };
    }
    static types() {
        return {
            database: 'string',
            size: 'string',
            tables: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCrossBackupMetaListResponseBodyItemsMeta = DescribeCrossBackupMetaListResponseBodyItemsMeta;
class DescribeCrossBackupMetaListResponseBodyItems extends $dara.Model {
    static names() {
        return {
            meta: 'Meta',
        };
    }
    static types() {
        return {
            meta: { 'type': 'array', 'itemType': DescribeCrossBackupMetaListResponseBodyItemsMeta },
        };
    }
    validate() {
        if (Array.isArray(this.meta)) {
            $dara.Model.validateArray(this.meta);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCrossBackupMetaListResponseBodyItems = DescribeCrossBackupMetaListResponseBodyItems;
class DescribeCrossBackupMetaListResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceName: 'DBInstanceName',
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalPageCount: 'TotalPageCount',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            DBInstanceName: 'string',
            items: DescribeCrossBackupMetaListResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            totalPageCount: 'number',
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
exports.DescribeCrossBackupMetaListResponseBody = DescribeCrossBackupMetaListResponseBody;
//# sourceMappingURL=DescribeCrossBackupMetaListResponseBody.js.map