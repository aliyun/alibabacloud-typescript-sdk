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
exports.GetContextDatabaseSyncDiscoveryTaskResponseBody = exports.GetContextDatabaseSyncDiscoveryTaskResponseBodyData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetContextDatabaseSyncDiscoveryTaskResponseBodyData extends $dara.Model {
    static names() {
        return {
            cancelRequestedAt: 'CancelRequestedAt',
            connectionId: 'ConnectionId',
            containers: 'Containers',
            createdAt: 'CreatedAt',
            error: 'Error',
            pluginRef: 'PluginRef',
            scanned: 'Scanned',
            sourceConfig: 'SourceConfig',
            sourceId: 'SourceId',
            state: 'State',
            taskId: 'TaskId',
            updatedAt: 'UpdatedAt',
        };
    }
    static types() {
        return {
            cancelRequestedAt: 'string',
            connectionId: 'string',
            containers: 'number',
            createdAt: 'string',
            error: 'string',
            pluginRef: 'string',
            scanned: 'number',
            sourceConfig: 'string',
            sourceId: 'string',
            state: 'string',
            taskId: 'string',
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
exports.GetContextDatabaseSyncDiscoveryTaskResponseBodyData = GetContextDatabaseSyncDiscoveryTaskResponseBodyData;
class GetContextDatabaseSyncDiscoveryTaskResponseBody extends $dara.Model {
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
            data: GetContextDatabaseSyncDiscoveryTaskResponseBodyData,
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
exports.GetContextDatabaseSyncDiscoveryTaskResponseBody = GetContextDatabaseSyncDiscoveryTaskResponseBody;
//# sourceMappingURL=GetContextDatabaseSyncDiscoveryTaskResponseBody.js.map