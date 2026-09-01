// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
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

export class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategy extends $dara.Model {
  parameters?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategyParameters;
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
      parameters: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategyParameters,
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

export class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesMatch extends $dara.Model {
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

export class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategyParameters extends $dara.Model {
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

export class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategy extends $dara.Model {
  parameters?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategyParameters;
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
      parameters: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategyParameters,
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

export class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRules extends $dara.Model {
  match?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesMatch;
  strategy?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategy;
  static names(): { [key: string]: string } {
    return {
      match: 'Match',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesMatch,
      strategy: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategy,
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

export class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfig extends $dara.Model {
  defaultStrategy?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategy;
  rules?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRules[];
  static names(): { [key: string]: string } {
    return {
      defaultStrategy: 'DefaultStrategy',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultStrategy: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategy,
      rules: { 'type': 'array', 'itemType': DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRules },
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

export class DescribeKnowledgeBaseFilesResponseBodyItems extends $dara.Model {
  /**
   * @example
   * Not Support.
   */
  errorMessage?: string;
  /**
   * @example
   * 5b2dbb13-xxxx-xxxx-xxxx-a55fe8daec8f
   */
  fileId?: string;
  /**
   * @example
   * 财报.pdf
   */
  fileName?: string;
  /**
   * @example
   * 318881
   */
  fileSize?: number;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * true
   */
  inheritSpaceStrategy?: boolean;
  /**
   * @example
   * pkb-xxxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @example
   * pks-xxxxxx
   */
  knowledgeSpaceId?: string;
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * oss://test-bucket-example/pks-xxxx/pkb-xxxx/财报.pdf
   */
  OSSPath?: string;
  /**
   * @example
   * 10
   */
  shardCount?: number;
  shardingStrategyConfig?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfig;
  /**
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @example
   * 2026-06-15T22:28:53Z
   */
  updatedAt?: string;
  /**
   * @example
   * 2026-06-15T22:28:53Z
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
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

  static types(): { [key: string]: any } {
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
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.shardingStrategyConfig && typeof (this.shardingStrategyConfig as any).validate === 'function') {
      (this.shardingStrategyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKnowledgeBaseFilesResponseBody extends $dara.Model {
  items?: DescribeKnowledgeBaseFilesResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 9
   */
  pageRecordCount?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * CED079B7-A408-41A1-BFF1-EC608E******
   */
  requestId?: string;
  /**
   * @example
   * 9
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
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
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

