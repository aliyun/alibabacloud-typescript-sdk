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
exports.BrandKnowledgeDocument = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class BrandKnowledgeDocument extends $dara.Model {
    static names() {
        return {
            contentSufficient: 'ContentSufficient',
            contentType: 'ContentType',
            createdAt: 'CreatedAt',
            deletable: 'Deletable',
            displayTitle: 'DisplayTitle',
            docCategory: 'DocCategory',
            documentId: 'DocumentId',
            errorCode: 'ErrorCode',
            errorMessage: 'ErrorMessage',
            fileSize: 'FileSize',
            keyTopics: 'KeyTopics',
            oneLineSummary: 'OneLineSummary',
            originalName: 'OriginalName',
            projectId: 'ProjectId',
            readyAt: 'ReadyAt',
            status: 'Status',
            statusMessage: 'StatusMessage',
            summaryErrorCode: 'SummaryErrorCode',
            summaryStatus: 'SummaryStatus',
            updatedAt: 'UpdatedAt',
        };
    }
    static types() {
        return {
            contentSufficient: 'boolean',
            contentType: 'string',
            createdAt: 'number',
            deletable: 'boolean',
            displayTitle: 'string',
            docCategory: 'string',
            documentId: 'string',
            errorCode: 'string',
            errorMessage: 'string',
            fileSize: 'number',
            keyTopics: { 'type': 'array', 'itemType': 'string' },
            oneLineSummary: 'string',
            originalName: 'string',
            projectId: 'string',
            readyAt: 'number',
            status: 'string',
            statusMessage: 'string',
            summaryErrorCode: 'string',
            summaryStatus: 'string',
            updatedAt: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.keyTopics)) {
            $dara.Model.validateArray(this.keyTopics);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.BrandKnowledgeDocument = BrandKnowledgeDocument;
//# sourceMappingURL=BrandKnowledgeDocument.js.map