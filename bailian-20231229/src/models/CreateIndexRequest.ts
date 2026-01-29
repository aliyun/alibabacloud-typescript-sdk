// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexRequestColumns extends $dara.Model {
  column?: string;
  isRecall?: boolean;
  isSearch?: boolean;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      isRecall: 'IsRecall',
      isSearch: 'IsSearch',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      isRecall: 'boolean',
      isSearch: 'boolean',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequestDataSource extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  credentialId?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  credentialKey?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  database?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  endpoint?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  isPrivateLink?: boolean;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  region?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  subPath?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  subType?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  table?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      credentialId: 'CredentialId',
      credentialKey: 'CredentialKey',
      database: 'Database',
      endpoint: 'Endpoint',
      isPrivateLink: 'IsPrivateLink',
      region: 'Region',
      subPath: 'SubPath',
      subType: 'SubType',
      table: 'Table',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialId: 'string',
      credentialKey: 'string',
      database: 'string',
      endpoint: 'string',
      isPrivateLink: 'boolean',
      region: 'string',
      subPath: 'string',
      subType: 'string',
      table: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequestMetaExtractColumns extends $dara.Model {
  /**
   * @remarks
   * The description of the metadata field. The description must be 0 to 1,000 characters in length, and can contain Chinese characters, letters, digits, underscores (_), hyphens (-), periods (.), and colons (:). This parameter is left empty by default.
   * 
   * @example
   * AuthorName
   */
  desc?: string;
  /**
   * @remarks
   * When set to true, the key and value of this metadata filed will participate in the generation process of the model, together with the chunk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableLlm?: boolean;
  /**
   * @remarks
   * When set to true, the key and value of this metadata filed will participate in the knowledge base retrieval, together with the chunk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableSearch?: boolean;
  /**
   * @remarks
   * The metadata key. It must be 1 to 50 characters in length and must be English letters or underscores. If you specify this parameter, the `Value` and `Type` parameters are required.
   * 
   * @example
   * author
   */
  key?: string;
  /**
   * @remarks
   * The type of the metadata field. Valid values:
   * 
   * *   constant
   * *   variable
   * *   custom_prompt
   * *   regular
   * *   keywords
   * 
   * Enumerated value:
   * 
   * *   constant: constant extraction.
   * *   keywords: keyword extraction.
   * *   custom_prompt: LLM.
   * *   variable: variable extraction.
   * *   regular: regular expression.
   * 
   * @example
   * constant
   */
  type?: string;
  /**
   * @remarks
   * The metadata value.
   * 
   * @example
   * Tim
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      enableLlm: 'EnableLlm',
      enableSearch: 'EnableSearch',
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enableLlm: 'boolean',
      enableSearch: 'boolean',
      key: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The files to imported to the knowledge base. Specify the category IDs. All files under the categories will be imported (up to 10,000 files). To add more files later, call **SubmitIndexAddDocumentsJob**.
   */
  categoryIds?: string[];
  /**
   * @remarks
   * The chunk size, which is the maximum number of characters in each chunk. Text exceeding this length may be truncated.
   * 
   * Valid values: 1 to 6000. Default value: 500.
   * 
   * > If `ChunkSize` is set to a value less than 100, `OverlapSize` is required. Or, if you do not pass these two parameters, the system uses the default values of the two.
   * 
   * @example
   * 128
   */
  chunkSize?: number;
  columns?: CreateIndexRequestColumns[];
  /**
   * @remarks
   * > This parameter is not available. Do not specify this parameter.
   */
  createIndexType?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  dataSource?: CreateIndexRequestDataSource;
  /**
   * @remarks
   * The description of the knowledge base. The description must be 0 to 1,000 characters in length. This parameter is empty by default.
   */
  description?: string;
  /**
   * @remarks
   * The files to imported to the knowledge base. Specify the file IDs to import (up to 10,000 files). To add more files later, call **SubmitIndexAddDocumentsJob**.
   */
  documentIds?: string[];
  /**
   * @remarks
   * The embedding model used in the knowledge base. The embedding model converts the original input prompt and knowledge text into numerical embeddings for similarity comparison. The default and only model available is text-embedding-v2. It supports multiple languages including Chinese and English and normalizes the embedding results. For more information, see [Embedding](https://help.aliyun.com/document_detail/2842587.html). Valid values:
   * 
   * *   text-embedding-v2
   * 
   * The default value is null, which means using text-embedding-v2.
   * 
   * @example
   * text-embedding-v2
   */
  embeddingModelName?: string;
  /**
   * @remarks
   * Whether to enable rewriting for multi-turn conversations. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  enableRewrite?: boolean;
  /**
   * @remarks
   * The name of the knowledge base. The name must be 1 to 20 characters in length, and can contain Chinese characters, letters, digits, underscores (_), hyphens (-), periods (.), and colons (:).
   * 
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * The overlap size, which is the number of overlapping characters between two consecutive chunks. Valid values: 0 to 1024.
   * 
   * Default value: 100.
   * 
   * > `OverlapSize` must be less than `ChunkSize`. Otherwise, chunking errors may occur.
   * 
   * @example
   * 16
   */
  overlapSize?: number;
  /**
   * @remarks
   * The similarity threshold. Only chunks with a similarity score higher than this value can be recalled. This parameter is used to filter chunks returned by the re-rank model. Valid values: 0.01 to 1.00.
   * 
   * Default value: 0.01.
   * 
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @remarks
   * The re-ranking model used in the knowledge base. The re-rank model is a scoring system outside the knowledge base. It calculates the similarity score of the query and text chunks in the knowledge base and ranks them in descending order. Then, the model returns the top K chunks with the highest scores. Valid values:
   * 
   * *   gte-rerank-hybrid
   * *   gte-rerank
   * 
   * The default value is empty, which means using gte-rerank-hybrid.
   * 
   * > If you need only semantic ranking, we recommend gte-rerank. If you need both semantic ranking and text matching features to ensure relevance, we recommend gte-rerank-hybrid.
   * 
   * @example
   * gte-rerank-hybrid
   */
  rerankModelName?: string;
  /**
   * @remarks
   * > This parameter is not available. Do not specify this parameter.
   * 
   * @example
   * ,
   */
  separator?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for PostgreSQL instance. Required only when `SinkType` is set to ADB. Get the ID on the [Instances](https://gpdbnext.console.aliyun.com/gpdb/list) page of AnalyticDB for PostgreSQL.
   * 
   * @example
   * gp-bp321093j84
   */
  sinkInstanceId?: string;
  /**
   * @remarks
   * The region of the AnalyticDB for PostgreSQL instance. Required only when `SinkType` is set to ADB. Call [DescribeRegions](https://www.alibabacloud.com/help/zh/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describeregions?spm=a2c63.p38356.0.i3) to obtain the region list.
   * 
   * @example
   * cn-hangzhou
   */
  sinkRegion?: string;
  /**
   * @remarks
   * The vector storage type of the knowledge base. For more information, see [Knowledge base](https://help.aliyun.com/document_detail/2807740.html). Valid values:
   * 
   * *   BUILT_IN: The vector data is hosted by Alibaba Cloud Model Studio.
   * *   ADB: AnalyticDB for PostgreSQL database. If you need advanced features, such as managing, auditing, and monitoring, we recommend ADB.
   * 
   * > If you have not used AnalyticDB for AnalyticDB in Model Studio before, go to the [Create Knowledge Base](https://bailian.console.alibabacloud.com/#/knowledge-base/create) page, select ADB-PG as Vector Storage Type, and follow the instructions to grant permissions. If you specify ADB, the `SinkInstanceId` and `SinkRegion` parameters are required.
   * 
   * This parameter is required.
   * 
   * @example
   * DEFAULT
   */
  sinkType?: string;
  /**
   * @remarks
   * > This parameter is required in the latest version of the SDK. Otherwise, when you call SubmitIndexJob, an error will occur: Required parameter(data_sources) missing or invalid.
   * 
   * The source of the imported data. Valid values:
   * 
   * *   DATA_CENTER_CATEGORY: The category type, that is to import all files in one or more specified categories in [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center).
   * *   DATA_CENTER_FILE: The file type, that is to import one or more specified files in [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center).
   * 
   * > If set to DATA_CENTER_CATEGORY, `CategoryIds` is required. If set to DATA_CENTER_FILE, `DocumentIds` is required.
   * 
   * > To create an empty knowledge base, you can use an empty category with no files: Set this parameter to DATA_CENTER_CATEGORY, and `CategoryIds` to the ID of an empty category.
   * 
   * @example
   * DATA_CENTER_FILE
   * 
   * **if can be null:**
   * false
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the knowledge base. Valid values:
   * 
   * *   unstructured: The document search type.
   * 
   * > After you create a knowledge base, its type cannot be changed. This operation does not support data query and image Q\\&A types. Use the console instead.
   * 
   * This parameter is required.
   * 
   * @example
   * structured
   */
  structureType?: string;
  /**
   * @remarks
   * > This parameter is not available. Do not specify this parameter.
   */
  tableIds?: string[];
  /**
   * @remarks
   * > This parameter is not available. Do not specify this parameter.
   * 
   * @example
   * regex
   */
  chunkMode?: string;
  connectId?: string;
  database?: string;
  datasourceCode?: string;
  /**
   * @remarks
   * Whether to treat the first row of all .xlsx and .xls files as headers and concatenate them into each text chunk. This prevents the models from mistakenly interpreting headers as regular data rows.
   * 
   * > Enable this feature only when all imported files are in .xlsx or .xls format and contain headers. Otherwise, leave it disabled.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableHeaders?: boolean;
  knowledgeScene?: string;
  /**
   * @remarks
   * The metadata extraction configurations. Metadata refers to a set of additional attributes associated with unstructured data, which are integrated into text chunks in key-value pairs. For more information, see [Knowledge base](https://help.aliyun.com/document_detail/2807740.html).
   */
  metaExtractColumns?: CreateIndexRequestMetaExtractColumns[];
  /**
   * @example
   * 1
   */
  pipelineCommercialCu?: number;
  /**
   * @example
   * standard
   */
  pipelineCommercialType?: string;
  /**
   * @example
   * downgrade
   */
  pipelineRetrieveRateLimitStrategy?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIds: 'CategoryIds',
      chunkSize: 'ChunkSize',
      columns: 'Columns',
      createIndexType: 'CreateIndexType',
      dataSource: 'DataSource',
      description: 'Description',
      documentIds: 'DocumentIds',
      embeddingModelName: 'EmbeddingModelName',
      enableRewrite: 'EnableRewrite',
      name: 'Name',
      overlapSize: 'OverlapSize',
      rerankMinScore: 'RerankMinScore',
      rerankModelName: 'RerankModelName',
      separator: 'Separator',
      sinkInstanceId: 'SinkInstanceId',
      sinkRegion: 'SinkRegion',
      sinkType: 'SinkType',
      sourceType: 'SourceType',
      structureType: 'StructureType',
      tableIds: 'TableIds',
      chunkMode: 'chunkMode',
      connectId: 'connectId',
      database: 'database',
      datasourceCode: 'datasourceCode',
      enableHeaders: 'enableHeaders',
      knowledgeScene: 'knowledgeScene',
      metaExtractColumns: 'metaExtractColumns',
      pipelineCommercialCu: 'pipelineCommercialCu',
      pipelineCommercialType: 'pipelineCommercialType',
      pipelineRetrieveRateLimitStrategy: 'pipelineRetrieveRateLimitStrategy',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIds: { 'type': 'array', 'itemType': 'string' },
      chunkSize: 'number',
      columns: { 'type': 'array', 'itemType': CreateIndexRequestColumns },
      createIndexType: 'string',
      dataSource: CreateIndexRequestDataSource,
      description: 'string',
      documentIds: { 'type': 'array', 'itemType': 'string' },
      embeddingModelName: 'string',
      enableRewrite: 'boolean',
      name: 'string',
      overlapSize: 'number',
      rerankMinScore: 'number',
      rerankModelName: 'string',
      separator: 'string',
      sinkInstanceId: 'string',
      sinkRegion: 'string',
      sinkType: 'string',
      sourceType: 'string',
      structureType: 'string',
      tableIds: { 'type': 'array', 'itemType': 'string' },
      chunkMode: 'string',
      connectId: 'string',
      database: 'string',
      datasourceCode: 'string',
      enableHeaders: 'boolean',
      knowledgeScene: 'string',
      metaExtractColumns: { 'type': 'array', 'itemType': CreateIndexRequestMetaExtractColumns },
      pipelineCommercialCu: 'number',
      pipelineCommercialType: 'string',
      pipelineRetrieveRateLimitStrategy: 'string',
      table: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categoryIds)) {
      $dara.Model.validateArray(this.categoryIds);
    }
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(Array.isArray(this.documentIds)) {
      $dara.Model.validateArray(this.documentIds);
    }
    if(Array.isArray(this.tableIds)) {
      $dara.Model.validateArray(this.tableIds);
    }
    if(Array.isArray(this.metaExtractColumns)) {
      $dara.Model.validateArray(this.metaExtractColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

