// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
  /**
   * @example
   * 512
   */
  maxTokens?: number;
  /**
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
  parameters?: UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategyParameters;
  /**
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
   * @example
   * auto
   */
  markdownTables?: string;
  /**
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
  parameters?: UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategyParameters;
  /**
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
  match?: UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesMatch;
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
  defaultStrategy?: UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategy;
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
   * @example
   * testDesc
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pks-xxxxxx
   */
  knowledgeSpaceId?: string;
  /**
   * @example
   * qwen3.6-plus
   */
  LLMModel?: string;
  /**
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * qwen3-rerank
   */
  rerankModel?: string;
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

