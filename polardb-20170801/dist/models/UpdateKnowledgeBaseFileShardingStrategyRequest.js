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
exports.UpdateKnowledgeBaseFileShardingStrategyRequest = exports.UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfig = exports.UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRules = exports.UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategy = exports.UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategyParameters = exports.UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesMatch = exports.UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategy = exports.UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategyParameters = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
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
exports.UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategyParameters = UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategyParameters;
class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategy extends $dara.Model {
    static names() {
        return {
            parameters: 'Parameters',
            type: 'Type',
        };
    }
    static types() {
        return {
            parameters: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategyParameters,
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
exports.UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategy = UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategy;
class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesMatch extends $dara.Model {
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
exports.UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesMatch = UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesMatch;
class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategyParameters extends $dara.Model {
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
exports.UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategyParameters = UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategyParameters;
class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategy extends $dara.Model {
    static names() {
        return {
            parameters: 'Parameters',
            type: 'Type',
        };
    }
    static types() {
        return {
            parameters: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategyParameters,
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
exports.UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategy = UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategy;
class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRules extends $dara.Model {
    static names() {
        return {
            match: 'Match',
            strategy: 'Strategy',
        };
    }
    static types() {
        return {
            match: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesMatch,
            strategy: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategy,
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
exports.UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRules = UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRules;
class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfig extends $dara.Model {
    static names() {
        return {
            defaultStrategy: 'DefaultStrategy',
            rules: 'Rules',
        };
    }
    static types() {
        return {
            defaultStrategy: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategy,
            rules: { 'type': 'array', 'itemType': UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRules },
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
exports.UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfig = UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfig;
class UpdateKnowledgeBaseFileShardingStrategyRequest extends $dara.Model {
    static names() {
        return {
            fileId: 'FileId',
            inheritSpaceStrategy: 'InheritSpaceStrategy',
            knowledgeBaseId: 'KnowledgeBaseId',
            regionId: 'RegionId',
            shardingStrategyConfig: 'ShardingStrategyConfig',
        };
    }
    static types() {
        return {
            fileId: 'string',
            inheritSpaceStrategy: 'boolean',
            knowledgeBaseId: 'string',
            regionId: 'string',
            shardingStrategyConfig: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfig,
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
exports.UpdateKnowledgeBaseFileShardingStrategyRequest = UpdateKnowledgeBaseFileShardingStrategyRequest;
//# sourceMappingURL=UpdateKnowledgeBaseFileShardingStrategyRequest.js.map