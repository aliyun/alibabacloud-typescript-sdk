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
exports.CreateContextDatabaseSyncJobRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateContextDatabaseSyncJobRequest extends $dara.Model {
    static names() {
        return {
            clientToken: 'ClientToken',
            filters: 'Filters',
            knowledgeBaseId: 'KnowledgeBaseId',
            name: 'Name',
            sourceId: 'SourceId',
            targetId: 'TargetId',
            targetKnowledgeBaseId: 'TargetKnowledgeBaseId',
            targetKnowledgeBaseName: 'TargetKnowledgeBaseName',
            workspaceId: 'WorkspaceId',
        };
    }
    static types() {
        return {
            clientToken: 'string',
            filters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            knowledgeBaseId: 'string',
            name: 'string',
            sourceId: 'string',
            targetId: 'string',
            targetKnowledgeBaseId: 'string',
            targetKnowledgeBaseName: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (this.filters) {
            $dara.Model.validateMap(this.filters);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateContextDatabaseSyncJobRequest = CreateContextDatabaseSyncJobRequest;
//# sourceMappingURL=CreateContextDatabaseSyncJobRequest.js.map