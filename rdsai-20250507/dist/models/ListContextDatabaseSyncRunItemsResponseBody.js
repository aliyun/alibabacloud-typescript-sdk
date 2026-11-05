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
exports.ListContextDatabaseSyncRunItemsResponseBody = exports.ListContextDatabaseSyncRunItemsResponseBodyData = exports.ListContextDatabaseSyncRunItemsResponseBodyDataItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListContextDatabaseSyncRunItemsResponseBodyDataItems extends $dara.Model {
    static names() {
        return {
            artifactIndex: 'ArtifactIndex',
            ctxdbDocumentId: 'CtxdbDocumentId',
            decision: 'Decision',
            decisionCategory: 'DecisionCategory',
            providerDocumentId: 'ProviderDocumentId',
            reason: 'Reason',
            sizeBytes: 'SizeBytes',
            sourcePath: 'SourcePath',
            sourceRecordId: 'SourceRecordId',
            title: 'Title',
            updatedAt: 'UpdatedAt',
        };
    }
    static types() {
        return {
            artifactIndex: 'number',
            ctxdbDocumentId: 'string',
            decision: 'string',
            decisionCategory: 'string',
            providerDocumentId: 'string',
            reason: 'string',
            sizeBytes: 'number',
            sourcePath: 'string',
            sourceRecordId: 'string',
            title: 'string',
            updatedAt: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListContextDatabaseSyncRunItemsResponseBodyDataItems = ListContextDatabaseSyncRunItemsResponseBodyDataItems;
class ListContextDatabaseSyncRunItemsResponseBodyData extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            page: 'Page',
            pageSize: 'PageSize',
            total: 'Total',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': ListContextDatabaseSyncRunItemsResponseBodyDataItems },
            page: 'number',
            pageSize: 'number',
            total: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListContextDatabaseSyncRunItemsResponseBodyData = ListContextDatabaseSyncRunItemsResponseBodyData;
class ListContextDatabaseSyncRunItemsResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'Code',
            data: 'Data',
            httpStatusCode: 'HttpStatusCode',
            message: 'Message',
            requestId: 'RequestId',
            success: 'Success',
        };
    }
    static types() {
        return {
            code: 'string',
            data: ListContextDatabaseSyncRunItemsResponseBodyData,
            httpStatusCode: 'number',
            message: 'string',
            requestId: 'string',
            success: 'boolean',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListContextDatabaseSyncRunItemsResponseBody = ListContextDatabaseSyncRunItemsResponseBody;
//# sourceMappingURL=ListContextDatabaseSyncRunItemsResponseBody.js.map