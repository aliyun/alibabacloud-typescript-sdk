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
exports.DescribeKnowledgeBaseFilesResponseBody = exports.DescribeKnowledgeBaseFilesResponseBodyItems = exports.DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfig = exports.DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRules = exports.DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategy = exports.DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategyParameters = exports.DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesMatch = exports.DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategy = exports.DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategyParameters = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
    static names() {
        return {
            maxTokens: 'MaxTokens',
            mergePeers: 'MergePeers',
        };
    }
    static types() {
        return {
            maxTokens: 'number',
            mergePeers: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategyParameters = DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategyParameters;
class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategy extends $dara.Model {
    static names() {
        return {
            parameters: 'Parameters',
            type: 'Type',
        };
    }
    static types() {
        return {
            parameters: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategyParameters,
            type: 'string',
        };
    }
    validate() {
        if (this.parameters && typeof this.parameters.validate === 'function') {
            this.parameters.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategy = DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategy;
class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesMatch extends $dara.Model {
    static names() {
        return {
            contentType: 'ContentType',
        };
    }
    static types() {
        return {
            contentType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesMatch = DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesMatch;
class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategyParameters extends $dara.Model {
    static names() {
        return {
            markdownTables: 'MarkdownTables',
            maxTokens: 'MaxTokens',
        };
    }
    static types() {
        return {
            markdownTables: 'string',
            maxTokens: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategyParameters = DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategyParameters;
class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategy extends $dara.Model {
    static names() {
        return {
            parameters: 'Parameters',
            type: 'Type',
        };
    }
    static types() {
        return {
            parameters: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategyParameters,
            type: 'string',
        };
    }
    validate() {
        if (this.parameters && typeof this.parameters.validate === 'function') {
            this.parameters.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategy = DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategy;
class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRules extends $dara.Model {
    static names() {
        return {
            match: 'Match',
            strategy: 'Strategy',
        };
    }
    static types() {
        return {
            match: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesMatch,
            strategy: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategy,
        };
    }
    validate() {
        if (this.match && typeof this.match.validate === 'function') {
            this.match.validate();
        }
        if (this.strategy && typeof this.strategy.validate === 'function') {
            this.strategy.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRules = DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRules;
class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfig extends $dara.Model {
    static names() {
        return {
            defaultStrategy: 'DefaultStrategy',
            rules: 'Rules',
        };
    }
    static types() {
        return {
            defaultStrategy: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategy,
            rules: { 'type': 'array', 'itemType': DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRules },
        };
    }
    validate() {
        if (this.defaultStrategy && typeof this.defaultStrategy.validate === 'function') {
            this.defaultStrategy.validate();
        }
        if (Array.isArray(this.rules)) {
            $dara.Model.validateArray(this.rules);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfig = DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfig;
class DescribeKnowledgeBaseFilesResponseBodyItems extends $dara.Model {
    static names() {
        return {
            errorMessage: 'ErrorMessage',
            fileId: 'FileId',
            fileName: 'FileName',
            fileSize: 'FileSize',
            fileType: 'FileType',
            inheritSpaceStrategy: 'InheritSpaceStrategy',
            knowledgeBaseId: 'KnowledgeBaseId',
            knowledgeSpaceId: 'KnowledgeSpaceId',
            metadata: 'Metadata',
            OSSPath: 'OSSPath',
            shardCount: 'ShardCount',
            shardingStrategyConfig: 'ShardingStrategyConfig',
            sourceType: 'SourceType',
            status: 'Status',
            updatedAt: 'UpdatedAt',
            uploadTime: 'UploadTime',
        };
    }
    static types() {
        return {
            errorMessage: 'string',
            fileId: 'string',
            fileName: 'string',
            fileSize: 'number',
            fileType: 'string',
            inheritSpaceStrategy: 'boolean',
            knowledgeBaseId: 'string',
            knowledgeSpaceId: 'string',
            metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            OSSPath: 'string',
            shardCount: 'number',
            shardingStrategyConfig: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfig,
            sourceType: 'string',
            status: 'string',
            updatedAt: 'string',
            uploadTime: 'string',
        };
    }
    validate() {
        if (this.metadata) {
            $dara.Model.validateMap(this.metadata);
        }
        if (this.shardingStrategyConfig && typeof this.shardingStrategyConfig.validate === 'function') {
            this.shardingStrategyConfig.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKnowledgeBaseFilesResponseBodyItems = DescribeKnowledgeBaseFilesResponseBodyItems;
class DescribeKnowledgeBaseFilesResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeKnowledgeBaseFilesResponseBodyItems },
            pageNumber: 'number',
            pageRecordCount: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
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
exports.DescribeKnowledgeBaseFilesResponseBody = DescribeKnowledgeBaseFilesResponseBody;
//# sourceMappingURL=DescribeKnowledgeBaseFilesResponseBody.js.map