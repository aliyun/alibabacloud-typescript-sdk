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
exports.DescribeKnowledgeBaseAnswerResponseBody = exports.DescribeKnowledgeBaseAnswerResponseBodySources = exports.DescribeKnowledgeBaseAnswerResponseBodySourcesImageResources = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeKnowledgeBaseAnswerResponseBodySourcesImageResources extends $dara.Model {
    static names() {
        return {
            documentIndex: 'DocumentIndex',
            id: 'Id',
            itemRef: 'ItemRef',
            mimeType: 'MimeType',
            uri: 'Uri',
        };
    }
    static types() {
        return {
            documentIndex: 'number',
            id: 'string',
            itemRef: 'string',
            mimeType: 'string',
            uri: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKnowledgeBaseAnswerResponseBodySourcesImageResources = DescribeKnowledgeBaseAnswerResponseBodySourcesImageResources;
class DescribeKnowledgeBaseAnswerResponseBodySources extends $dara.Model {
    static names() {
        return {
            chunkMetadata: 'ChunkMetadata',
            fileId: 'FileId',
            fileName: 'FileName',
            imageResources: 'ImageResources',
            knowledgeBaseId: 'KnowledgeBaseId',
            metadata: 'Metadata',
            pageNumbers: 'PageNumbers',
            shardContent: 'ShardContent',
            shardIndex: 'ShardIndex',
            similarityScore: 'SimilarityScore',
            sourceId: 'SourceId',
            sourceUri: 'SourceUri',
        };
    }
    static types() {
        return {
            chunkMetadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            fileId: 'string',
            fileName: 'string',
            imageResources: { 'type': 'array', 'itemType': DescribeKnowledgeBaseAnswerResponseBodySourcesImageResources },
            knowledgeBaseId: 'string',
            metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            pageNumbers: { 'type': 'array', 'itemType': 'number' },
            shardContent: 'string',
            shardIndex: 'number',
            similarityScore: 'number',
            sourceId: 'number',
            sourceUri: 'string',
        };
    }
    validate() {
        if (this.chunkMetadata) {
            $dara.Model.validateMap(this.chunkMetadata);
        }
        if (Array.isArray(this.imageResources)) {
            $dara.Model.validateArray(this.imageResources);
        }
        if (this.metadata) {
            $dara.Model.validateMap(this.metadata);
        }
        if (Array.isArray(this.pageNumbers)) {
            $dara.Model.validateArray(this.pageNumbers);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKnowledgeBaseAnswerResponseBodySources = DescribeKnowledgeBaseAnswerResponseBodySources;
class DescribeKnowledgeBaseAnswerResponseBody extends $dara.Model {
    static names() {
        return {
            agentId: 'AgentId',
            answer: 'Answer',
            completionTokens: 'CompletionTokens',
            errorMessage: 'ErrorMessage',
            errorType: 'ErrorType',
            LLMModelId: 'LLMModelId',
            promptTokens: 'PromptTokens',
            queryId: 'QueryId',
            requestId: 'RequestId',
            sources: 'Sources',
            status: 'Status',
        };
    }
    static types() {
        return {
            agentId: 'string',
            answer: 'string',
            completionTokens: 'number',
            errorMessage: 'string',
            errorType: 'string',
            LLMModelId: 'string',
            promptTokens: 'number',
            queryId: 'string',
            requestId: 'string',
            sources: { 'type': 'array', 'itemType': DescribeKnowledgeBaseAnswerResponseBodySources },
            status: 'string',
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
exports.DescribeKnowledgeBaseAnswerResponseBody = DescribeKnowledgeBaseAnswerResponseBody;
//# sourceMappingURL=DescribeKnowledgeBaseAnswerResponseBody.js.map