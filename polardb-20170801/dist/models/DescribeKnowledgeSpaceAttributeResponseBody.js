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
exports.DescribeKnowledgeSpaceAttributeResponseBody = exports.DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfig = exports.DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRules = exports.DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategy = exports.DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategyParameters = exports.DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesMatch = exports.DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategy = exports.DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategyParameters = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
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
exports.DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategyParameters = DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategyParameters;
class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategy extends $dara.Model {
    static names() {
        return {
            parameters: 'Parameters',
            type: 'Type',
        };
    }
    static types() {
        return {
            parameters: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategyParameters,
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
exports.DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategy = DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategy;
class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesMatch extends $dara.Model {
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
exports.DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesMatch = DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesMatch;
class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategyParameters extends $dara.Model {
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
exports.DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategyParameters = DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategyParameters;
class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategy extends $dara.Model {
    static names() {
        return {
            parameters: 'Parameters',
            type: 'Type',
        };
    }
    static types() {
        return {
            parameters: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategyParameters,
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
exports.DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategy = DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategy;
class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRules extends $dara.Model {
    static names() {
        return {
            match: 'Match',
            strategy: 'Strategy',
        };
    }
    static types() {
        return {
            match: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesMatch,
            strategy: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategy,
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
exports.DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRules = DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRules;
class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfig extends $dara.Model {
    static names() {
        return {
            defaultStrategy: 'DefaultStrategy',
            rules: 'Rules',
        };
    }
    static types() {
        return {
            defaultStrategy: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategy,
            rules: { 'type': 'array', 'itemType': DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRules },
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
exports.DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfig = DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfig;
class DescribeKnowledgeSpaceAttributeResponseBody extends $dara.Model {
    static names() {
        return {
            ACLMode: 'ACLMode',
            creationTime: 'CreationTime',
            DBClusterId: 'DBClusterId',
            DBName: 'DBName',
            DBType: 'DBType',
            description: 'Description',
            embeddingDimension: 'EmbeddingDimension',
            embeddingModel: 'EmbeddingModel',
            knowledgeBaseCount: 'KnowledgeBaseCount',
            knowledgeSpaceId: 'KnowledgeSpaceId',
            LLMModel: 'LLMModel',
            name: 'Name',
            OSSBucket: 'OSSBucket',
            requestId: 'RequestId',
            rerankModel: 'RerankModel',
            shardSize: 'ShardSize',
            shardingStrategyConfig: 'ShardingStrategyConfig',
            status: 'Status',
            strategy: 'Strategy',
            totalDocs: 'TotalDocs',
            totalSizeBytes: 'TotalSizeBytes',
        };
    }
    static types() {
        return {
            ACLMode: 'string',
            creationTime: 'string',
            DBClusterId: 'string',
            DBName: 'string',
            DBType: 'string',
            description: 'string',
            embeddingDimension: 'number',
            embeddingModel: 'string',
            knowledgeBaseCount: 'number',
            knowledgeSpaceId: 'string',
            LLMModel: 'string',
            name: 'string',
            OSSBucket: 'string',
            requestId: 'string',
            rerankModel: 'string',
            shardSize: 'number',
            shardingStrategyConfig: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfig,
            status: 'string',
            strategy: 'string',
            totalDocs: 'number',
            totalSizeBytes: 'number',
        };
    }
    validate() {
        if (this.shardingStrategyConfig && typeof this.shardingStrategyConfig.validate === 'function') {
            this.shardingStrategyConfig.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKnowledgeSpaceAttributeResponseBody = DescribeKnowledgeSpaceAttributeResponseBody;
//# sourceMappingURL=DescribeKnowledgeSpaceAttributeResponseBody.js.map