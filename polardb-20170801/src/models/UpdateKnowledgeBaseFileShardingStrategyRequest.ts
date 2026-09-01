// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
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

export class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategy extends $dara.Model {
  parameters?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategyParameters;
  /**
   * @remarks
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

export class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategy extends $dara.Model {
  parameters?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategyParameters;
  /**
   * @remarks
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
   * This parameter is required.
   */
  match?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesMatch;
  /**
   * @remarks
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
   * This parameter is required.
   */
  defaultStrategy?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategy;
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
   * This parameter is required.
   * 
   * @example
   * e347ddb8-49bb-5c66-94bc-fa05cedaeac8
   */
  fileId?: string;
  /**
   * @example
   * false
   */
  inheritSpaceStrategy?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pkb-2zesv6l6a63xsrym
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
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

