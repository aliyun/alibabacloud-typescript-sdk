// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
  /**
   * @remarks
   * The maximum number of tokens per chunk. The value must be a positive integer.
   * 
   * @example
   * 512
   */
  maxTokens?: number;
  /**
   * @remarks
   * Specifies whether to merge adjacent small chunks under the same heading.
   * 
   * @example
   * true
   */
  mergePeers?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxTokens: 'MaxTokens',
      mergePeers: 'MergePeers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxTokens: 'number',
      mergePeers: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategy extends $dara.Model {
  /**
   * @remarks
   * The parameters of the default chunking strategy. MaxTokens and MergePeers take effect only when Type is set to hybrid.
   */
  parameters?: UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategyParameters;
  /**
   * @remarks
   * The type of the default chunking strategy. Valid values: hybrid or hierarchical.
   * 
   * @example
   * hybrid
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategyParameters,
      type: 'string',
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesMatch extends $dara.Model {
  /**
   * @remarks
   * The content type. Currently, only table is supported.
   * 
   * @example
   * table
   */
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategyParameters extends $dara.Model {
  /**
   * @remarks
   * The processing mode for Markdown tables. Valid values: auto, on, or off.
   * 
   * @example
   * auto
   */
  markdownTables?: string;
  /**
   * @remarks
   * The maximum number of tokens per chunk for matched content. The value must be a positive integer.
   * 
   * @example
   * 512
   */
  maxTokens?: number;
  static names(): { [key: string]: string } {
    return {
      markdownTables: 'MarkdownTables',
      maxTokens: 'MaxTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markdownTables: 'string',
      maxTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategy extends $dara.Model {
  /**
   * @remarks
   * The chunking strategy parameters for the override rule. MaxTokens takes effect only when Type is set to hybrid. MarkdownTables supports auto, on, or off.
   */
  parameters?: UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategyParameters;
  /**
   * @remarks
   * The type of the chunking strategy to use when the rule is matched. Valid values: hybrid or hierarchical.
   * 
   * @example
   * hierarchical
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategyParameters,
      type: 'string',
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeSpaceRequestShardingStrategyConfigRules extends $dara.Model {
  /**
   * @remarks
   * The match condition of the rule. Currently, only exact matching of table content by content type is supported.
   */
  match?: UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesMatch;
  /**
   * @remarks
   * The chunking strategy to use when the rule is matched.
   */
  strategy?: UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategy;
  static names(): { [key: string]: string } {
    return {
      match: 'Match',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesMatch,
      strategy: UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategy,
    };
  }

  validate() {
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeSpaceRequestShardingStrategyConfig extends $dara.Model {
  /**
   * @remarks
   * The default chunking strategy. This strategy is used when no rule is matched.
   */
  defaultStrategy?: UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategy;
  /**
   * @remarks
   * The list of override rules that are matched in order. Currently, a maximum of one exact-match rule with ContentType set to table is supported.
   */
  rules?: UpdateKnowledgeSpaceRequestShardingStrategyConfigRules[];
  static names(): { [key: string]: string } {
    return {
      defaultStrategy: 'DefaultStrategy',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultStrategy: UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategy,
      rules: { 'type': 'array', 'itemType': UpdateKnowledgeSpaceRequestShardingStrategyConfigRules },
    };
  }

  validate() {
    if(this.defaultStrategy && typeof (this.defaultStrategy as any).validate === 'function') {
      (this.defaultStrategy as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the knowledge space. The description can be up to 512 characters in length.
   * 
   * @example
   * testDesc
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the knowledge space.
   * 
   * This parameter is required.
   * 
   * @example
   * pks-xxxxxx
   */
  knowledgeSpaceId?: string;
  /**
   * @remarks
   * The name of the large language model.
   * 
   * @example
   * qwen3.6-plus
   */
  LLMModel?: string;
  /**
   * @remarks
   * The name of the knowledge space. The name must be 1 to 128 characters in length.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the reranking model.
   * 
   * @example
   * qwen3-rerank
   */
  rerankModel?: string;
  /**
   * @remarks
   * The default chunking strategy configuration for the knowledge space. Both simple strategies and composite strategies that match by content type are supported.
   */
  shardingStrategyConfig?: UpdateKnowledgeSpaceRequestShardingStrategyConfig;
  static names(): { [key: string]: string } {
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

  static types(): { [key: string]: any } {
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
    if(this.shardingStrategyConfig && typeof (this.shardingStrategyConfig as any).validate === 'function') {
      (this.shardingStrategyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

