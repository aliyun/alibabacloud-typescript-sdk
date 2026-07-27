// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexRequestColumns extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not available. Do not pass this parameter.
   * >
   * 
   * @example
   * school
   */
  column?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * Specifies whether this column participates in model responses. When enabled, the search results of this column are used as input for the large language model to generate answers. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not pass this parameter.
   * >
   * 
   * @example
   * true
   */
  isRecall?: boolean;
  /**
   * @remarks
   * <props="china">
   * 
   * Specifies whether this column participates in knowledge base retrieval. When enabled, the knowledge base can search within the data of this column. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not pass this parameter.
   * >
   * 
   * @example
   * true
   */
  isSearch?: boolean;
  /**
   * @remarks
   * <props="china">
   * The field name. Must be consistent with the header of the data table created in Application Data.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not pass this parameter.
   * >
   * 
   * @example
   * School.
   */
  name?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The field type. Must be consistent with the header of the data table created in Application Data. Valid values:
   * 
   * - string
   * - double
   * - long
   * - datetime
   * - image_url
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not pass this parameter.
   * >
   * 
   * @example
   * string
   */
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

export class CreateIndexRequestMetaExtractColumns extends $dara.Model {
  /**
   * @remarks
   * The Chinese description of the metadata field. The description can be up to 1000 characters in length and can contain Chinese characters, letters, digits, underscores (_), hyphens (-), periods (.), and colons (:). Default value: empty.
   * 
   * @example
   * AuthorName.
   */
  desc?: string;
  /**
   * @remarks
   * Specifies whether this metadata field and its value participate in the large language model\\"s answer generation process along with the text chunk content. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableLlm?: boolean;
  /**
   * @remarks
   * Specifies whether this metadata field and its value participate in knowledge base retrieval along with the text chunk content. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableSearch?: boolean;
  /**
   * @remarks
   * The metadata field. The field must be 1 to 50 characters in length and can contain only letters and underscores. If this parameter is specified, you must also specify the `Value` and `Type` parameters.
   * 
   * @example
   * author
   */
  key?: string;
  /**
   * @remarks
   * The extraction method for the metadata field. Valid values:
   * 
   * - constant: Constant.
   * - variable: Variable.
   * - custom_prompt: Large language model.
   * - regular: Regular expression.
   * - keywords: Keyword search.
   * 
   * @example
   * constant
   */
  type?: string;
  /**
   * @remarks
   * The value of the metadata field.
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
   * The list of category IDs to import when creating the knowledge base. All files under the specified categories are imported. We recommend importing no more than 500 files. For remaining files, call the **SubmitIndexAddDocumentsJob** operation to continue importing.
   */
  categoryIds?: string[];
  /**
   * @remarks
   * <props="china">
   * 
   * The chunk size, which specifies the maximum number of characters per text chunk. When this length is exceeded:
   * 
   * - **Intelligent chunking** (when `chunkMode` is not specified): The text is likely to be truncated.
   * - **Custom chunking** (when `chunkMode` is specified): The text is forcibly truncated.
   * 
   * 
   * 
   * <props="intl">
   * The chunk size, which specifies the maximum number of characters per text chunk. When this length is exceeded, the text is likely to be truncated.
   * 
   * 
   * 
   * Value range: [1-6000]. If not specified, the default value is 500.
   * 
   * > If `ChunkSize` is set to a value less than 100, you must also set `OverlapSize`. You can also leave both parameters unspecified, and the system uses default values.
   * 
   * @example
   * 128
   */
  chunkSize?: number;
  /**
   * @remarks
   * <props="china">
   * The structure of the data table (column names, types, etc.).
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not pass this parameter.
   * >
   */
  columns?: CreateIndexRequestColumns[];
  /**
   * @remarks
   * > This parameter is not available. Do not pass this parameter.
   * >
   * 
   * @example
   * standard
   */
  createIndexType?: string;
  /**
   * @remarks
   * The knowledge base description. The description can be up to 1000 characters in length.
   * Default value: empty.
   * 
   * @example
   * The enterprise help document library includes important materials such as company policies and product catalogs.
   */
  description?: string;
  /**
   * @remarks
   * The list of files to import when creating the knowledge base. Specify file IDs here. We recommend importing no more than 10,000 files. For remaining files, call the **SubmitIndexAddDocumentsJob** operation to continue importing.
   */
  documentIds?: string[];
  /**
   * @remarks
   * <props="china">
   * 
   * The embedding model used by the knowledge base. The embedding model transforms the original input prompt and knowledge text into numerical vectors for similarity comparison. The text-embedding-v4 model is a comprehensive upgrade over text-embedding-v3 in terms of language support, code snippet quantization, and vector dimensions selection, and is suitable for most scenarios. For more information, see [Vectorization](https://help.aliyun.com/document_detail/2842587.html). Valid values:
   * - text-embedding-v4
   * - text-embedding-v3
   * 
   * Default value: empty, which uses the text-embedding-v3 model.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * The embedding model used by the knowledge base. The embedding model transforms the original input prompt and knowledge text into numerical vectors for similarity comparison. The default text-embedding-v2 model (cannot be changed) supports Chinese, English, and multiple other languages, and performs normalization on vector results. For more information, see [Vectorization](https://help.aliyun.com/document_detail/2842587.html). Valid values:
   * - text-embedding-v2
   * 
   * Default value: empty, which uses the text-embedding-v2 model.
   * 
   * @example
   * text-embedding-v4
   */
  embeddingModelName?: string;
  /**
   * @remarks
   * Specifies whether to enable multi-turn conversation rewriting. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * If not specified, this feature is enabled by default.
   * 
   * @example
   * true
   */
  enableRewrite?: boolean;
  /**
   * @remarks
   * The knowledge base name. The name must be 1 to 20 characters in length and can contain Chinese characters, letters, digits, underscores (_), hyphens (-), periods (.), and colons (:).
   * 
   * This parameter is required.
   * 
   * @example
   * EnterpriseHelpDocLibrary.
   */
  name?: string;
  /**
   * @remarks
   * The chunk overlap size, which specifies the number of overlapping characters between the current text chunk and the previous text chunk. Value range: [0-1024].
   * 
   * If not specified, the default value is 100.
   * >`OverlapSize` must be less than `ChunkSize`. Otherwise, chunking exceptions occur.
   * 
   * @example
   * 16
   */
  overlapSize?: number;
  /**
   * @remarks
   * <props="intl">This parameter is not available. Do not pass this parameter.
   * 
   * <props="china">A natural language instruction for fine-grained control of the reranking model\\"s behavior.
   * <notice>This parameter takes effect only when rerank_mode is set to "custom".
   */
  rerankInstruct?: string;
  /**
   * @remarks
   * The similarity threshold. Only text chunks with similarity scores exceeding this value are recalled. This parameter filters the text chunks returned by the reranking model. Value range: [0.01-1.00].
   * 
   * If not specified, the default value is 0.01.
   * 
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @remarks
   * <props="china">
   * Specifies the instruction intervention mode for the reranking model to determine its scoring preference.
   * 
   * **Valid values:**
   * 
   * - **qa**: (Default) Q&A mode. The model tends to assign higher scores to candidates that directly answer the query. Recommended for Q&A scenarios.
   * 
   * - **similar**: Similarity mode. The model tends to assign higher scores to candidates with high content consistency with the query. Recommended for matching and retrieval scenarios.
   * 
   * - **custom**: Custom mode. The model\\"s ranking behavior is determined by the instruction in the rerank_instruct parameter.
   * 
   * 
   * 
   * <props="intl">This parameter is not available. Do not pass this parameter.
   * [_single.params.RerankMode.enum.similar: 相似模式。]similar: Similarity mode.
   * [_single.params.RerankMode.enum.custom: 自定义模式。]custom: Custom mode.
   * [_single.params.RerankMode.enum.qa:（默认值） 问答模式。]qa: (Default) Q&A mode.
   * [parameters.33.schema.enumValueTitles.similar: 相似模式。]similar: Similarity mode.
   * [parameters.33.schema.enumValueTitles.custom: 自定义模式。]custom: Custom mode.
   * [parameters.33.schema.enumValueTitles.qa:（默认值） 问答模式。]qa: (Default) Q&A mode.
   * 
   * @example
   * qa
   */
  rerankMode?: string;
  /**
   * @remarks
   * The reranking model used by the knowledge base. The reranking model is an external scoring system that calculates the similarity score between the user query and each text chunk in the knowledge base, sorts them in descending order, and returns the top K text chunks with the highest scores. Valid values:
   * 
   * 
   * <props="china">
   * 
   * - qwen3-rerank-hybrid: qwen3-rerank(hybrid) reranking.
   * - qwen3-rerank: qwen3-rerank reranking.
   * - gte-rerank-hybrid: gte-rerank(hybrid) reranking.
   * - gte-rerank: gte-rerank reranking.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - gte-rerank-hybrid: official reranking.
   * - gte-rerank: gte-rerank reranking.
   * 
   * 
   * 
   * 
   * 
   * <props="china">
   * 
   * Default value: empty, which uses qwen3-rerank.
   * > If you only need semantic reranking, use `qwen3-rerank`. If you need both semantic reranking and text matching features to ensure relevance, use `qwen3-rerank-hybrid`.
   * >
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * Default value: empty, which uses gte-rerank-hybrid.
   * > If you only need semantic reranking, use `gte-rerank`. If you need both semantic reranking and text matching features to ensure relevance, use `gte-rerank-hybrid`.
   * >
   * 
   * 
   * 
   * 
   * 
   * <props="china">
   * 
   * > `gte-rerank-hybrid` and `gte-rerank` will no longer be updated and are not recommended.
   * >
   * 
   * @example
   * gte-rerank-hybrid
   */
  rerankModelName?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The sentence separator, which takes effect only when `chunkMode`=**regex** (it does not take effect in other modes even if specified). You can pass a single regular expression (multiple expressions are not supported) to split files into small text chunks.
   * 
   * When using intelligent chunking (when `chunkMode` is not specified), keep the default empty value.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not pass this parameter.
   * 
   * @example
   * (?<=。)
   */
  separator?: string;
  /**
   * @remarks
   * The AnalyticDB for PostgreSQL instance ID (required only when `SinkType` is set to ADB). Obtain this ID from the [AnalyticDB for PostgreSQL instance list](https://gpdbnext.console.aliyun.com/gpdb/list) page.
   * 
   * @example
   * gp-bp32109xxxx
   */
  sinkInstanceId?: string;
  /**
   * @remarks
   * The region of the AnalyticDB for PostgreSQL instance (required only when `SinkType` is set to ADB). Call <props="china">[DescribeRegions](https://www.alibabacloud.com/help/en/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describeregions)<props="intl">[DescribeRegions](https://www.alibabacloud.com/help/zh/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describeregions?spm=a2c63.p38356.0.i3) to obtain the list of regions.
   * 
   * @example
   * cn-hangzhou
   */
  sinkRegion?: string;
  /**
   * @remarks
   * The vector storage type of the knowledge base. For more information, see [Knowledge base](https://help.aliyun.com/document_detail/2807740.html). Valid values:
   * - BUILT_IN: Vector data is hosted on the Alibaba Cloud Model Studio platform.
   * - ADB: AnalyticDB for PostgreSQL database. If you need advanced features such as database management, auditing, and monitoring, select ADB.
   * > If you have not used ADB storage on Alibaba Cloud Model Studio before, go to the <props="china">[Create Knowledge Base](https://bailian.console.aliyun.com/#/knowledge-base/create)<props="intl">[Create Knowledge Base](https://bailian.console.alibabacloud.com/#/knowledge-base/create) page, select ADB-PG as the vector storage type, and complete authorization as prompted. If you pass ADB, you must specify the `SinkInstanceId` and `SinkRegion` parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * BUILT_IN
   */
  sinkType?: string;
  /**
   * @remarks
   * >Notice: This parameter is required in the latest SDK. Otherwise, calling the SubmitIndexJob operation returns an error: Required parameter(data_sources) missing or invalid.
   * 
   * The data source type. Valid values:
   * - DATA_CENTER_CATEGORY: Category type. Imports all files under specified categories in <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center). Multiple categories can be imported simultaneously.
   * - DATA_CENTER_FILE: File type. Imports specified files from <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center). Multiple files can be imported simultaneously.
   * 
   * > If this parameter is set to DATA_CENTER_CATEGORY, you must specify the `CategoryIds` parameter. If this parameter is set to DATA_CENTER_FILE, you must specify the `DocumentIds` parameter.
   * >
   * 
   * > To create an empty knowledge base, use an empty category that contains no files: set this parameter to DATA_CENTER_CATEGORY and pass the empty category ID in `CategoryIds`.
   * >
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
   * The knowledge base type.
   * 
   * **Valid values:**
   * 
   * - unstructured: A document search or audio/video knowledge base. The default scenario for document search type is basic document Q&A. <props="china">To create other scenarios, pass the knowledgeType and knowledgeScene parameters.
   * 
   * <props="china">
   * 
   * - structured: A data query or image-based Q&A knowledge base.
   * 
   * 
   * 
   * > The knowledge base type cannot be changed after creation.
   * >
   * 
   * This parameter is required.
   * 
   * @example
   * unstructured
   */
  structureType?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * Obtained by clicking the ID icon next to the table name on the Tables tab of [Data Connections](https://bailian.console.aliyun.com/cn-beijing?tab=app#/connector/list) table connector. If the list contains multiple IDs, only the first one is used.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not pass this parameter.
   * >
   */
  tableIds?: string[];
  /**
   * @example
   * connector
   */
  channelType?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * Enables custom chunking and specifies the chunking strategy. For more information, see [Knowledge base](https://help.aliyun.com/document_detail/2807740.html).
   * 
   * Valid values (only one value can be passed at a time):
   * 
   * - **length**: Chunk by length. Strictly chunks according to the specified `ChunkSize` and `OverlapSize`. If these two parameters are not passed, the system uses default values (`ChunkSize` of 500 and `OverlapSize` of 100). Chunking by length does not support `Separator` (it does not take effect even if specified).
   * - **page**: Chunk by page. If `ChunkSize` is specified, it is also considered during chunking (if not passed, the default value of 500 is used). Chunking by page does not support `OverlapSize` or `Separator` (they do not take effect even if specified).
   * - **h1**: Chunk by first-level headings. If `ChunkSize` is specified, it is also considered during chunking (if not passed, the default value of 500 is used). Chunking by first-level headings does not support `OverlapSize` or `Separator` (they do not take effect even if specified).
   * - **h2**: Chunk by second-level headings. If `ChunkSize` is specified, it is also considered during chunking (if not passed, the default value of 500 is used). Chunking by second-level headings does not support `OverlapSize` or `Separator` (they do not take effect even if specified).
   * - **regex**: Chunk by regular expression. The `Separator` parameter must be specified. If `ChunkSize` is specified, it is also considered during chunking (if not passed, the default value of 500 is used). Chunking by regular expression does not support `OverlapSize` (it does not take effect even if specified).
   * 
   * If not specified, intelligent chunking is used by default.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not pass this parameter.
   * 
   * @example
   * regex
   */
  chunkMode?: string;
  /**
   * @example
   * conn_mysql_xxx_xxx
   */
  connectId?: string;
  database?: string;
  datasourceCode?: string;
  /**
   * @remarks
   * Specifies whether to treat the first row of all xlsx and xls files as headers and concatenate them into each text chunk, preventing the large language model from treating headers as regular data rows.
   * 
   * 
   * > Enable this feature only when all imported files are in .xlsx or .xls format and contain headers. Otherwise, do not enable it.
   * >
   * 
   * Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * If not specified, this feature is disabled by default.
   * 
   * @example
   * false
   */
  enableHeaders?: boolean;
  knowledgeScene?: string;
  /**
   * @remarks
   * <props="china">
   * The specific knowledge type, which further specifies the type of data processed by the knowledge base.
   * <notice>This parameter and knowledgeScene must be provided together or omitted together. They cannot be set independently. If both are omitted, the system uses default configurations based on structureType.
   * 
   * **Settings constraint**: The value of this parameter must match the selected structureType and determines the active values for knowledgeScene.
   * 
   * **Valid values**:
   * - document: Document search. Must be used with structureType: unstructured.
   * - table: Data query. Must be used with structureType: structured.
   * - image: Image-based Q&A. Must be used with structureType: structured.
   * - multimedia: Audio/video search. Must be used with structureType: unstructured.
   * 
   * 
   * 
   * 
   * <props="intl">This parameter is not available. Do not pass this parameter.
   * 
   * @example
   * document
   */
  knowledgeType?: string;
  /**
   * @remarks
   * The metadata extraction configuration. Metadata is a set of additional attributes related to unstructured data content. These attributes are integrated into text chunks as key-value pairs. For more information, see [Knowledge base](https://help.aliyun.com/document_detail/2807740.html).
   */
  metaExtractColumns?: CreateIndexRequestMetaExtractColumns[];
  /**
   * @remarks
   * <props="china">The number of RCUs for the knowledge base (required only when pipelineCommercialType is set to enterprise). Value range: [1-200].
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not pass this parameter.
   * >
   * 
   * @example
   * 1
   */
  pipelineCommercialCu?: number;
  /**
   * @remarks
   * <props="china">
   * 
   * The [specification type](https://help.aliyun.com/document_detail/2997110.html) of the knowledge base. Valid values:
   * - standard: Standard Edition.
   * - enterprise: Ultimate Edition.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not pass this parameter.
   * >
   * 
   * @example
   * standard
   */
  pipelineCommercialType?: string;
  /**
   * @remarks
   * <props="china">The rate limiting strategy for knowledge base dependent links (required only when pipelineCommercialType is set to enterprise).
   * Valid values:
   * downgrade: Downgrade processing (switch to lightweight link retrieval).
   * If not specified, the default value is downgrade.
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not pass this parameter.
   * >
   * 
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
      description: 'Description',
      documentIds: 'DocumentIds',
      embeddingModelName: 'EmbeddingModelName',
      enableRewrite: 'EnableRewrite',
      name: 'Name',
      overlapSize: 'OverlapSize',
      rerankInstruct: 'RerankInstruct',
      rerankMinScore: 'RerankMinScore',
      rerankMode: 'RerankMode',
      rerankModelName: 'RerankModelName',
      separator: 'Separator',
      sinkInstanceId: 'SinkInstanceId',
      sinkRegion: 'SinkRegion',
      sinkType: 'SinkType',
      sourceType: 'SourceType',
      structureType: 'StructureType',
      tableIds: 'TableIds',
      channelType: 'channelType',
      chunkMode: 'chunkMode',
      connectId: 'connectId',
      database: 'database',
      datasourceCode: 'datasourceCode',
      enableHeaders: 'enableHeaders',
      knowledgeScene: 'knowledgeScene',
      knowledgeType: 'knowledgeType',
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
      description: 'string',
      documentIds: { 'type': 'array', 'itemType': 'string' },
      embeddingModelName: 'string',
      enableRewrite: 'boolean',
      name: 'string',
      overlapSize: 'number',
      rerankInstruct: 'string',
      rerankMinScore: 'number',
      rerankMode: 'string',
      rerankModelName: 'string',
      separator: 'string',
      sinkInstanceId: 'string',
      sinkRegion: 'string',
      sinkType: 'string',
      sourceType: 'string',
      structureType: 'string',
      tableIds: { 'type': 'array', 'itemType': 'string' },
      channelType: 'string',
      chunkMode: 'string',
      connectId: 'string',
      database: 'string',
      datasourceCode: 'string',
      enableHeaders: 'boolean',
      knowledgeScene: 'string',
      knowledgeType: 'string',
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

