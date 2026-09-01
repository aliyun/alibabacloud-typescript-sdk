// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
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

export class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategy extends $dara.Model {
  parameters?: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategyParameters;
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
      parameters: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategyParameters,
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

export class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesMatch extends $dara.Model {
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

export class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategyParameters extends $dara.Model {
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

export class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategy extends $dara.Model {
  parameters?: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategyParameters;
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
      parameters: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategyParameters,
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

export class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRules extends $dara.Model {
  match?: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesMatch;
  strategy?: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategy;
  static names(): { [key: string]: string } {
    return {
      match: 'Match',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesMatch,
      strategy: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategy,
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

export class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfig extends $dara.Model {
  defaultStrategy?: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategy;
  rules?: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRules[];
  static names(): { [key: string]: string } {
    return {
      defaultStrategy: 'DefaultStrategy',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultStrategy: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategy,
      rules: { 'type': 'array', 'itemType': DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRules },
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

export class DescribeKnowledgeSpaceAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * ENFORCED
   */
  ACLMode?: string;
  /**
   * @example
   * 2026-06-25T09:53:44Z
   */
  creationTime?: string;
  /**
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @example
   * polar_rag_meta
   */
  DBName?: string;
  /**
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @example
   * testDesc
   */
  description?: string;
  /**
   * @example
   * 1536
   */
  embeddingDimension?: number;
  /**
   * @example
   * text-embedding-v4
   */
  embeddingModel?: string;
  /**
   * @example
   * 1
   */
  knowledgeBaseCount?: number;
  /**
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
   * @example
   * test-bucket
   */
  OSSBucket?: string;
  /**
   * @example
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
   */
  requestId?: string;
  /**
   * @example
   * qwen3-rerank
   */
  rerankModel?: string;
  /**
   * @example
   * 512
   */
  shardSize?: number;
  shardingStrategyConfig?: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfig;
  /**
   * @example
   * Activation
   */
  status?: string;
  /**
   * @example
   * hybrid
   */
  strategy?: string;
  /**
   * @example
   * 1
   */
  totalDocs?: number;
  /**
   * @example
   * 318881
   */
  totalSizeBytes?: number;
  static names(): { [key: string]: string } {
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

  static types(): { [key: string]: any } {
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
    if(this.shardingStrategyConfig && typeof (this.shardingStrategyConfig as any).validate === 'function') {
      (this.shardingStrategyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

