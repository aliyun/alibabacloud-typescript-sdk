// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
  /**
   * @remarks
   * The maximum number of tokens per shard.
   * 
   * @example
   * 512
   */
  maxTokens?: number;
  /**
   * @remarks
   * Specifies whether to merge adjacent small shards under the same heading.
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

export class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategy extends $dara.Model {
  /**
   * @remarks
   * The parameter list.
   */
  parameters?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategyParameters;
  /**
   * @remarks
   * The default chunking strategy type. Valid values: hybrid and hierarchical.
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
   * @remarks
   * The content type. Currently, table is supported.
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

export class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategyParameters extends $dara.Model {
  /**
   * @remarks
   * The Markdown table processing mode. Valid values: auto, on, and off.
   * 
   * @example
   * auto
   */
  markdownTables?: string;
  /**
   * @remarks
   * The maximum number of tokens per shard for matched content.
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

export class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategy extends $dara.Model {
  /**
   * @remarks
   * The parameter list.
   */
  parameters?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategyParameters;
  /**
   * @remarks
   * The chunking strategy type applied after a rule is matched.
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
  /**
   * @remarks
   * The content type. Currently, table is supported.
   */
  match?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesMatch;
  /**
   * @remarks
   * The chunking strategy.
   */
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
  /**
   * @remarks
   * The default chunking strategy type. Valid values: hybrid and hierarchical.
   */
  defaultStrategy?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategy;
  /**
   * @remarks
   * The list of override rules matched in order.
   */
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
   * @remarks
   * The error message.
   * 
   * @example
   * Not Support.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 5b2dbb13-xxxx-xxxx-xxxx-a55fe8daec8f
   */
  fileId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * Financial_report.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The file size, in bytes.
   * 
   * @example
   * 318881
   */
  fileSize?: number;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * Indicates whether the chunking strategy is inherited from the knowledge space.
   * 
   * @example
   * true
   */
  inheritSpaceStrategy?: boolean;
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * @example
   * pkb-xxxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The knowledge space ID.
   * 
   * @example
   * pks-xxxxxx
   */
  knowledgeSpaceId?: string;
  /**
   * @remarks
   * The document metadata.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The OSS file path.
   * 
   * @example
   * oss://test-bucket-example/pks-xxxx/pkb-xxxx/Financial_report.pdf
   */
  OSSPath?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 10
   */
  shardCount?: number;
  /**
   * @remarks
   * The chunking strategy configuration currently in effect for the document. This value may be empty if the complete configuration was not saved for existing objects.
   */
  shardingStrategyConfig?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfig;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-06-15T22:28:53Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The upload time.
   * 
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
  /**
   * @remarks
   * The list of files.
   */
  items?: DescribeKnowledgeBaseFilesResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on the current page.
   * 
   * @example
   * 9
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The number of records per page. Valid values: **30**, **50**, and **100**.
   *                               
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CED079B7-A408-41A1-BFF1-EC608E******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
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

