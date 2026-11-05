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
exports.DescribeKnowledgeBaseFileShardsResponseBody = exports.DescribeKnowledgeBaseFileShardsResponseBodyShards = exports.DescribeKnowledgeBaseFileShardsResponseBodyShardsImageResources = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeKnowledgeBaseFileShardsResponseBodyShardsImageResources extends $dara.Model {
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
exports.DescribeKnowledgeBaseFileShardsResponseBodyShardsImageResources = DescribeKnowledgeBaseFileShardsResponseBodyShardsImageResources;
class DescribeKnowledgeBaseFileShardsResponseBodyShards extends $dara.Model {
    static names() {
        return {
            captions: 'Captions',
            docItems: 'DocItems',
            headings: 'Headings',
            imageResources: 'ImageResources',
            pageNumbers: 'PageNumbers',
            shardContent: 'ShardContent',
            shardIndex: 'ShardIndex',
            sourceUri: 'SourceUri',
        };
    }
    static types() {
        return {
            captions: { 'type': 'array', 'itemType': 'string' },
            docItems: { 'type': 'array', 'itemType': 'string' },
            headings: { 'type': 'array', 'itemType': 'string' },
            imageResources: { 'type': 'array', 'itemType': DescribeKnowledgeBaseFileShardsResponseBodyShardsImageResources },
            pageNumbers: { 'type': 'array', 'itemType': 'string' },
            shardContent: 'string',
            shardIndex: 'number',
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
exports.DescribeKnowledgeBaseFileShardsResponseBodyShards = DescribeKnowledgeBaseFileShardsResponseBodyShards;
class DescribeKnowledgeBaseFileShardsResponseBody extends $dara.Model {
    static names() {
        return {
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            shards: 'Shards',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            pageNumber: 'number',
            pageRecordCount: 'number',
            pageSize: 'number',
            requestId: 'string',
            shards: { 'type': 'array', 'itemType': DescribeKnowledgeBaseFileShardsResponseBodyShards },
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.shards)) {
            $dara.Model.validateArray(this.shards);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKnowledgeBaseFileShardsResponseBody = DescribeKnowledgeBaseFileShardsResponseBody;
//# sourceMappingURL=DescribeKnowledgeBaseFileShardsResponseBody.js.map