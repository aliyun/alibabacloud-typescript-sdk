// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
  /**
   * @remarks
   * The maximum number of tokens per chunk. The value must be a positive integer. This parameter takes effect only when Type is set to hybrid.
   * 
   * @example
   * 512
   */
  maxTokens?: number;
  /**
   * @remarks
   * Specifies whether to merge adjacent small chunks under the same heading. This parameter takes effect only when Type is set to hybrid.
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

export class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategy extends $dara.Model {
  /**
   * @remarks
   * The parameters of the default chunking strategy. MaxTokens and MergePeers are supported only when Type is set to hybrid.
   */
  parameters?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategyParameters;
  /**
   * @remarks
   * The type of the default chunking strategy. Valid values:
   * - hybrid: Splits by document structure and limits the token count.
   * - hierarchical: Splits only by document structure.
   * 
   * This parameter is required.
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
      parameters: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategyParameters,
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

export class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesMatch extends $dara.Model {
  /**
   * @remarks
   * The content type. Currently, only table is supported, which matches content that is parsed as tables.
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

export class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategyParameters extends $dara.Model {
  /**
   * @remarks
   * The Markdown table processing mode. Valid values:
   * - auto: Automatically determines the processing mode.
   * - on: Forcefully enables Markdown table processing.
   * - off: Disables Markdown table processing.
   * 
   * @example
   * auto
   */
  markdownTables?: string;
  /**
   * @remarks
   * The maximum number of tokens per chunk for matched content. The value must be a positive integer. This parameter takes effect only when Type is set to hybrid.
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

export class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategy extends $dara.Model {
  /**
   * @remarks
   * The chunking strategy parameters of the override rule. MaxTokens takes effect only when Type is set to hybrid. MarkdownTables supports auto, on, or off.
   */
  parameters?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategyParameters;
  /**
   * @remarks
   * The chunking strategy type of the override rule. Valid values:
   * - hybrid
   * - hierarchical
   * 
   * This parameter is required.
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
      parameters: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategyParameters,
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

export class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRules extends $dara.Model {
  /**
   * @remarks
   * The rule match condition. Currently, only exact matching by content type for table content is supported.
   * 
   * This parameter is required.
   */
  match?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesMatch;
  /**
   * @remarks
   * The chunking strategy to use when the rule is matched.
   * 
   * This parameter is required.
   */
  strategy?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategy;
  static names(): { [key: string]: string } {
    return {
      match: 'Match',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesMatch,
      strategy: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategy,
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

export class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfig extends $dara.Model {
  /**
   * @remarks
   * The default chunking strategy. This strategy is used when no rule is matched.
   * 
   * This parameter is required.
   */
  defaultStrategy?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategy;
  /**
   * @remarks
   * The list of override rules that are matched in order. Currently, a maximum of one exact-match rule with ContentType set to table is supported.
   */
  rules?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRules[];
  static names(): { [key: string]: string } {
    return {
      defaultStrategy: 'DefaultStrategy',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultStrategy: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategy,
      rules: { 'type': 'array', 'itemType': UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRules },
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

export class UpdateKnowledgeBaseFileShardingStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the knowledge base file.
   * 
   * This parameter is required.
   * 
   * @example
   * e347ddb8-49bb-5c66-94bc-fa05cedaeac8
   */
  fileId?: string;
  /**
   * @remarks
   * Specifies whether to restore inheritance of the chunking strategy from the knowledge space. When this parameter is set to true, ShardingStrategyConfig cannot be specified at the same time.
   * 
   * @example
   * false
   */
  inheritSpaceStrategy?: boolean;
  /**
   * @remarks
   * The unique ID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * pkb-2zesv6l6a63xsrym
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The ID of the region where the knowledge base resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The file-level chunking strategy configuration. This parameter is required when InheritSpaceStrategy is not set to true.
   */
  shardingStrategyConfig?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfig;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      inheritSpaceStrategy: 'InheritSpaceStrategy',
      knowledgeBaseId: 'KnowledgeBaseId',
      regionId: 'RegionId',
      shardingStrategyConfig: 'ShardingStrategyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      inheritSpaceStrategy: 'boolean',
      knowledgeBaseId: 'string',
      regionId: 'string',
      shardingStrategyConfig: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfig,
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

