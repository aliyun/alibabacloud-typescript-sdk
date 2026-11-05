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
exports.RetrievalKnowledgeBaseResponseBody = exports.RetrievalKnowledgeBaseResponseBodyResults = exports.RetrievalKnowledgeBaseResponseBodyResultsImageResources = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class RetrievalKnowledgeBaseResponseBodyResultsImageResources extends $dara.Model {
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
exports.RetrievalKnowledgeBaseResponseBodyResultsImageResources = RetrievalKnowledgeBaseResponseBodyResultsImageResources;
class RetrievalKnowledgeBaseResponseBodyResults extends $dara.Model {
    static names() {
        return {
            captions: 'Captions',
            docItems: 'DocItems',
            fileId: 'FileId',
            fileName: 'FileName',
            headings: 'Headings',
            imageResources: 'ImageResources',
            knowledgeBaseId: 'KnowledgeBaseId',
            metadata: 'Metadata',
            pageNumbers: 'PageNumbers',
            shardContent: 'ShardContent',
            shardIndex: 'ShardIndex',
            similarityScore: 'SimilarityScore',
            sourceUri: 'SourceUri',
        };
    }
    static types() {
        return {
            captions: { 'type': 'array', 'itemType': 'string' },
            docItems: { 'type': 'array', 'itemType': 'string' },
            fileId: 'string',
            fileName: 'string',
            headings: { 'type': 'array', 'itemType': 'string' },
            imageResources: { 'type': 'array', 'itemType': RetrievalKnowledgeBaseResponseBodyResultsImageResources },
            knowledgeBaseId: 'string',
            metadata: 'string',
            pageNumbers: { 'type': 'array', 'itemType': 'number' },
            shardContent: 'string',
            shardIndex: 'number',
            similarityScore: 'number',
            sourceUri: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.captions)) {
            $dara.Model.validateArray(this.captions);
        }
        if (Array.isArray(this.docItems)) {
            $dara.Model.validateArray(this.docItems);
        }
        if (Array.isArray(this.headings)) {
            $dara.Model.validateArray(this.headings);
        }
        if (Array.isArray(this.imageResources)) {
            $dara.Model.validateArray(this.imageResources);
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
exports.RetrievalKnowledgeBaseResponseBodyResults = RetrievalKnowledgeBaseResponseBodyResults;
class RetrievalKnowledgeBaseResponseBody extends $dara.Model {
    static names() {
        return {
            queryText: 'QueryText',
            requestId: 'RequestId',
            resultCount: 'ResultCount',
            results: 'Results',
        };
    }
    static types() {
        return {
            queryText: 'string',
            requestId: 'string',
            resultCount: 'number',
            results: { 'type': 'array', 'itemType': RetrievalKnowledgeBaseResponseBodyResults },
        };
    }
    validate() {
        if (Array.isArray(this.results)) {
            $dara.Model.validateArray(this.results);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.RetrievalKnowledgeBaseResponseBody = RetrievalKnowledgeBaseResponseBody;
//# sourceMappingURL=RetrievalKnowledgeBaseResponseBody.js.map