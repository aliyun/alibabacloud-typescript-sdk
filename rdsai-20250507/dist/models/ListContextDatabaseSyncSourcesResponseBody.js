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
exports.ListContextDatabaseSyncSourcesResponseBody = exports.ListContextDatabaseSyncSourcesResponseBodyData = exports.ListContextDatabaseSyncSourcesResponseBodyDataSources = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListContextDatabaseSyncSourcesResponseBodyDataSources extends $dara.Model {
    static names() {
        return {
            confirmedAt: 'ConfirmedAt',
            connectionId: 'ConnectionId',
            id: 'Id',
            name: 'Name',
            selectedNodeKeys: 'SelectedNodeKeys',
            selectionPolicy: 'SelectionPolicy',
            sourceConfig: 'SourceConfig',
        };
    }
    static types() {
        return {
            confirmedAt: 'string',
            connectionId: 'string',
            id: 'string',
            name: 'string',
            selectedNodeKeys: { 'type': 'array', 'itemType': 'string' },
            selectionPolicy: 'string',
            sourceConfig: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.selectedNodeKeys)) {
            $dara.Model.validateArray(this.selectedNodeKeys);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListContextDatabaseSyncSourcesResponseBodyDataSources = ListContextDatabaseSyncSourcesResponseBodyDataSources;
class ListContextDatabaseSyncSourcesResponseBodyData extends $dara.Model {
    static names() {
        return {
            page: 'Page',
            pageSize: 'PageSize',
            sources: 'Sources',
            total: 'Total',
        };
    }
    static types() {
        return {
            page: 'number',
            pageSize: 'number',
            sources: { 'type': 'array', 'itemType': ListContextDatabaseSyncSourcesResponseBodyDataSources },
            total: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.sources)) {
            $dara.Model.validateArray(this.sources);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListContextDatabaseSyncSourcesResponseBodyData = ListContextDatabaseSyncSourcesResponseBodyData;
class ListContextDatabaseSyncSourcesResponseBody extends $dara.Model {
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
            data: ListContextDatabaseSyncSourcesResponseBodyData,
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
exports.ListContextDatabaseSyncSourcesResponseBody = ListContextDatabaseSyncSourcesResponseBody;
//# sourceMappingURL=ListContextDatabaseSyncSourcesResponseBody.js.map