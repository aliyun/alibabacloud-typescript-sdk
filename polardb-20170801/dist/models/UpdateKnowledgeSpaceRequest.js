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
exports.UpdateKnowledgeSpaceRequest = exports.UpdateKnowledgeSpaceRequestShardingStrategyConfig = exports.UpdateKnowledgeSpaceRequestShardingStrategyConfigRules = exports.UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategy = exports.UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategyParameters = exports.UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesMatch = exports.UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategy = exports.UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategyParameters = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
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
exports.UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategyParameters = UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategyParameters;
class UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategy extends $dara.Model {
    static names() {
        return {
            parameters: 'Parameters',
            type: 'Type',
        };
    }
    static types() {
        return {
            parameters: UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategyParameters,
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
exports.UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategy = UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategy;
class UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesMatch extends $dara.Model {
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
exports.UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesMatch = UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesMatch;
class UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategyParameters extends $dara.Model {
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
exports.UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategyParameters = UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategyParameters;
class UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategy extends $dara.Model {
    static names() {
        return {
            parameters: 'Parameters',
            type: 'Type',
        };
    }
    static types() {
        return {
            parameters: UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategyParameters,
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
exports.UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategy = UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategy;
class UpdateKnowledgeSpaceRequestShardingStrategyConfigRules extends $dara.Model {
    static names() {
        return {
            match: 'Match',
            strategy: 'Strategy',
        };
    }
    static types() {
        return {
            match: UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesMatch,
            strategy: UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategy,
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
exports.UpdateKnowledgeSpaceRequestShardingStrategyConfigRules = UpdateKnowledgeSpaceRequestShardingStrategyConfigRules;
class UpdateKnowledgeSpaceRequestShardingStrategyConfig extends $dara.Model {
    static names() {
        return {
            defaultStrategy: 'DefaultStrategy',
            rules: 'Rules',
        };
    }
    static types() {
        return {
            defaultStrategy: UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategy,
            rules: { 'type': 'array', 'itemType': UpdateKnowledgeSpaceRequestShardingStrategyConfigRules },
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
exports.UpdateKnowledgeSpaceRequestShardingStrategyConfig = UpdateKnowledgeSpaceRequestShardingStrategyConfig;
class UpdateKnowledgeSpaceRequest extends $dara.Model {
    static names() {
        return {
            description: 'Description',
            knowledgeSpaceId: 'KnowledgeSpaceId',
            LLMModel: 'LLMModel',
            name: 'Name',
            regionId: 'RegionId',
            rerankModel: 'RerankModel',
            shardingStrategyConfig: 'ShardingStrategyConfig',
        };
    }
    static types() {
        return {
            description: 'string',
            knowledgeSpaceId: 'string',
            LLMModel: 'string',
            name: 'string',
            regionId: 'string',
            rerankModel: 'string',
            shardingStrategyConfig: UpdateKnowledgeSpaceRequestShardingStrategyConfig,
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
exports.UpdateKnowledgeSpaceRequest = UpdateKnowledgeSpaceRequest;
//# sourceMappingURL=UpdateKnowledgeSpaceRequest.js.map