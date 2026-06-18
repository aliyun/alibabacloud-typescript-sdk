// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * You can import files when you create a knowledge base. Specify category IDs to import all files under the corresponding categories. We recommend importing no more than 10,000 files. If you have more files, you can call the **SubmitIndexAddDocumentsJob** operation to import them later.
   */
  categoryIdsShrink?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The chunk size, which is the maximum number of characters for each text chunk. If this length is exceeded:
   * 
   * - **Smart chunking** (the \\`chunkMode\\` parameter is not specified): The text is likely to be truncated.
   * 
   * - **Custom chunking** (the \\`chunkMode\\` parameter is specified): The text is forcibly truncated.
   * 
   * 
   * 
   * <props="intl">
   * 
   * The chunk size, which is the maximum number of characters for each text chunk. If this length is exceeded, the text is likely to be truncated.
   * 
   * 
   * 
   * The value must be between 1 and 6000. If you do not specify this parameter, the default value 500 is used.
   * 
   * > If you set \\`ChunkSize\\` to a value less than 100, you must also set \\`OverlapSize\\`. You can also leave both parameters unspecified, and the system will use the default values.
   * 
   * @example
   * 128
   */
  chunkSize?: number;
  /**
   * @remarks
   * <props="china">
   * 
   * The structure of the data table (column names, types, etc.).
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not yet available. Do not specify it.
   */
  columnsShrink?: string;
  /**
   * @remarks
   * > This parameter is not yet available. Do not specify it.
   * 
   * @example
   * standard
   */
  createIndexType?: string;
  /**
   * @remarks
   * The description of the knowledge base. The description can be 0 to 1,000 English or Chinese characters in length.
   * The default value is empty.
   * 
   * @example
   * 企业帮助文档库包括了公司制度、产品清单等重要资料。
   */
  description?: string;
  /**
   * @remarks
   * You can import files when you create a knowledge base. Specify a list of files to import by providing their IDs. We recommend importing no more than 10,000 files. If you have more files, you can call the **SubmitIndexAddDocumentsJob** operation to import them later.
   */
  documentIdsShrink?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The vector model used by the knowledge base. A vector model converts the original input prompt and knowledge text into numerical vectors to compare their similarity. The text-embedding-v4 model is a comprehensive upgrade over the text-embedding-v3 model in terms of language support, vectorization of code snippets, and vector dimension selection. It is suitable for most scenarios. For more information, see [Vectorization](https://help.aliyun.com/document_detail/2842587.html). Valid values:
   * 
   * - text-embedding-v4
   * 
   * - text-embedding-v3
   * 
   * If you do not specify this parameter, \\`text-embedding-v3\\` is used.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - The vector model used by the knowledge base. A vector model converts the original input prompt and knowledge text into numerical vectors to compare their similarity. The default text-embedding-v2 model (which cannot be changed for now) supports both Chinese and English, along with multiple other languages, and normalizes the vector results. For more information, see [Vectorization](https://help.aliyun.com/document_detail/2842587.html). Valid values:
   * 
   * 
   * 
   * 
   * - text-embedding-v2
   * 
   * If you do not specify this parameter, \\`text-embedding-v2\\` is used.
   */
  embeddingModelName?: string;
  /**
   * @remarks
   * Specifies whether to enable multi-turn conversation rewriting. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * If you do not specify this parameter, this feature is enabled by default.
   * 
   * @example
   * true
   */
  enableRewrite?: boolean;
  /**
   * @remarks
   * The name of the knowledge base. The name can be 1 to 20 characters in length and can contain Chinese characters, letters, digits, underscores (_), hyphens (-), periods (.), and colons (:).
   * 
   * This parameter is required.
   * 
   * @example
   * 企业帮助文档库
   */
  name?: string;
  /**
   * @remarks
   * The overlap size, which is the number of overlapping characters between the current text chunk and the previous one. The value must be between 0 and 1024.
   * 
   * If you do not specify this parameter, the default value 100 is used.
   * 
   * > \\`OverlapSize\\` must be smaller than \\`ChunkSize\\`. Otherwise, chunking errors will occur.
   * 
   * @example
   * 16
   */
  overlapSize?: number;
  /**
   * @remarks
   * The name of the database. This parameter is required when creating a data query knowledge base.
   * 
   * The database must exist in the data source specified by \\`datasourceCode\\`.
   */
  rerankInstruct?: string;
  /**
   * @remarks
   * The similarity threshold. Only text chunks with a similarity score greater than this value are recalled. This is used to filter the text chunks returned by the reranking model. The value must be between 0.01 and 1.00.
   * 
   * If you do not specify this parameter, the default value 0.01 is used.
   * 
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @remarks
   * The name of the data table. This parameter is required when creating a data query knowledge base.
   * 
   * The data table must exist in the data source specified by \\`connectId\\` or \\`datasourceCode\\`.
   * 
   * @example
   * qa
   */
  rerankMode?: string;
  /**
   * @remarks
   * The reranking model used by the knowledge base. The reranking model is an external scoring system that calculates a similarity score between the user\\"s question and each text chunk in the knowledge base, sorts them in descending order, and returns the top K text chunks. Valid values:
   * 
   * <props="china">
   * 
   * - qwen3-rerank-hybrid: qwen3-rerank (hybrid) reranking.
   * 
   * - qwen3-rerank: qwen3-rerank reranking.
   * 
   * - gte-rerank-hybrid: gte-rerank (hybrid) reranking.
   * 
   * - gte-rerank: gte-rerank reranking.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - gte-rerank-hybrid: Official reranking.
   * 
   * - gte-rerank: gte-rerank reranking.
   * 
   * 
   * 
   * <props="china">
   * 
   * If you do not specify this parameter, \\`qwen3-rerank\\` is used.
   * 
   * > Use \\`qwen3-rerank\\` if you only need semantic sorting. Use \\`qwen3-rerank-hybrid\\` if you need both semantic sorting and text-matching features to ensure relevance.
   * 
   * 
   * 
   * <props="intl">
   * 
   * If you do not specify this parameter, \\`gte-rerank-hybrid\\` is used.
   * 
   * > Use \\`gte-rerank\\` if you only need semantic sorting. Use \\`gte-rerank-hybrid\\` if you need both semantic sorting and text-matching features to ensure relevance.
   * 
   * 
   * 
   * <props="china">
   * 
   * > The \\`gte-rerank-hybrid\\` and \\`gte-rerank\\` models are no longer updated and are not recommended.
   * 
   * @example
   * gte-rerank-hybrid
   */
  rerankModelName?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The sentence separator. This parameter takes effect only when \\`chunkMode\\` is set to **regex**. It is ignored in other modes, even if specified. You can enter a regular expression (multiple expressions are not supported) to split the file into smaller text chunks.
   * 
   * For smart chunking (the \\`chunkMode\\` parameter is not specified), you can leave this parameter empty.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not yet available. Do not specify it.
   * 
   * @example
   * (?<=。)
   */
  separator?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for PostgreSQL instance. This parameter is required only when \\`SinkType\\` is set to ADB. Go to the [AnalyticDB for PostgreSQL instance list](https://gpdbnext.console.aliyun.com/gpdb/list) page to obtain this ID.
   * 
   * @example
   * gp-bp32109xxxx
   */
  sinkInstanceId?: string;
  /**
   * @remarks
   * The region where the AnalyticDB for PostgreSQL instance is located. This parameter is required only when \\`SinkType\\` is set to ADB. You can call the <props="intl">[DescribeRegions ](https://www.alibabacloud.com/help/zh/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describeregions?spm=a2c63.p38356.0.i3)operation to obtain a list of regions.
   * 
   * @example
   * cn-hangzhou
   */
  sinkRegion?: string;
  /**
   * @remarks
   * The storage class for the knowledge base vectors. For more information, see [Knowledge bases](https://help.aliyun.com/document_detail/2807740.html). Valid values:
   * 
   * - BUILT_IN: Hosts the vector data on the Alibaba Cloud Model Studio platform.
   * 
   * - ADB: AnalyticDB for PostgreSQL. We recommend choosing ADB if you need advanced features such as database management, auditing, and monitoring.
   * 
   * > If you have not used ADB storage on Alibaba Cloud Model Studio, go to the <props="intl">[Create Knowledge Base](https://bailian.console.alibabacloud.com/#/knowledge-base/create) page, set the vector storage class to ADB-PG, and follow the on-screen instructions to grant the required permissions. If you set this parameter to ADB, you must specify the \\`SinkInstanceId\\` and \\`SinkRegion\\` parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * BUILT_IN
   */
  sinkType?: string;
  /**
   * @remarks
   * >Notice: 
   * 
   * In the latest SDK version, this parameter is required. Otherwise, calling the SubmitIndexJob operation will result in the error: Required parameter(data_sources) missing or invalid.
   * 
   * 
   * 
   * The source of the imported data. Valid values:
   * 
   * - DATA_CENTER_CATEGORY: Category type. Imports all files under the specified categories in <props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center). You can import multiple categories at the same time.
   * 
   * - DATA_CENTER_FILE: File type. Imports the specified files from <props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center). You can import multiple files at the same time.
   * 
   * > If you set this parameter to DATA_CENTER_CATEGORY, you must specify the \\`CategoryIds\\` parameter. If you set this parameter to DATA_CENTER_FILE, you must specify the \\`DocumentIds\\` parameter.
   * 
   * > To create an empty knowledge base, use an empty category that contains no files. Set this parameter to DATA_CENTER_CATEGORY and specify the ID of the empty category for \\`CategoryIds\\`.
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
   * The type of the knowledge base.
   * 
   * **Valid values**:
   * 
   * - unstructured: A knowledge base for document search, audio, or video. The default scenario for document search is basic document Q\\&A.
   * 
   * <props="china">
   * 
   * - structured: A knowledge base for data query or image Q\\&A.
   * 
   * 
   * 
   * 
   * > The type of a knowledge base cannot be changed after it is created.
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
   * Obtain the table ID on the Tables tab of the table connector in Data Connections by clicking the ID icon next to the table name. If the list contains multiple IDs, only the first one is used.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not yet available. Do not specify it.
   */
  tableIdsShrink?: string;
  /**
   * @example
   * connector
   */
  channelType?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * Enables custom chunking and specifies the chunking policy. For more information, see [Knowledge bases](https://help.aliyun.com/document_detail/2807740.html).
   * 
   * Possible values (only one value can be specified at a time):
   * 
   * - **length**: Chunks by length. The text is strictly chunked according to the \\`ChunkSize\\` and \\`OverlapSize\\` you specify. If you do not specify these two parameters, the system uses the default values (\\`ChunkSize\\` is 500, \\`OverlapSize\\` is 100). Chunking by length does not support \\`Separator\\` (it is ignored even if specified).
   * 
   * - **page**: Chunks by page. If \\`ChunkSize\\` is specified, it is also considered during chunking (if not specified, the default value 500 is used). Chunking by page does not support \\`OverlapSize\\` or \\`Separator\\` (they are ignored even if specified).
   * 
   * - **h1**: Chunks by level-1 heading. If \\`ChunkSize\\` is specified, it is also considered during chunking (if not specified, the default value 500 is used). Chunking by level-1 heading does not support \\`OverlapSize\\` or \\`Separator\\` (they are ignored even if specified).
   * 
   * - **h2**: Chunks by level-2 heading. If \\`ChunkSize\\` is specified, it is also considered during chunking (if not specified, the default value 500 is used). Chunking by level-2 heading does not support \\`OverlapSize\\` or \\`Separator\\` (they are ignored even if specified).
   * 
   * - **regex**: Chunks by regular expression. You must specify the \\`Separator\\` parameter. If \\`ChunkSize\\` is specified, it is also considered during chunking (if not specified, the default value 500 is used). Chunking by regular expression does not support \\`OverlapSize\\` (it is ignored even if specified).
   * 
   * If you do not specify this parameter, smart chunking is used by default.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not yet available. Do not specify it.
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
   * Specifies whether to treat the first row of all .xlsx and .xls files as the table header and append it to each text chunk. This prevents the LLM from treating the header as a regular data row.
   * 
   * > We recommend enabling this feature only when all imported files are in .xlsx or .xls format and contain a header. Otherwise, do not enable it.
   * 
   * Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * If you do not specify this parameter, this feature is disabled by default.
   * 
   * @example
   * false
   */
  enableHeaders?: boolean;
  knowledgeScene?: string;
  /**
   * @remarks
   * The data source code. This parameter is required when creating a data query knowledge base and is used with \\`table\\` and \\`database\\`.
   * 
   * <props="china">
   * 
   * We recommend using the new \\`connectId\\` parameter, which you can obtain from the data connector card on the [Data Connections](https://modelstudio.console.alibabacloud.com/?tab=app#/connector/list) page. This parameter is still compatible but will no longer be maintained in the future.
   * 
   * 
   * 
   * > - This operation does not support associating custom databases. Use the Alibaba Cloud Model Studio console to create them.
   * 
   * @example
   * document
   */
  knowledgeType?: string;
  /**
   * @remarks
   * The metadata extraction configuration. Metadata is a series of additional attributes related to unstructured data content. These attributes are integrated into text chunks as key-value pairs. For more information, see [Knowledge bases](https://help.aliyun.com/document_detail/2807740.html).
   */
  metaExtractColumnsShrink?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The number of RCUs for the knowledge base. This parameter is required only when \\`pipelineCommercialType\\` is set to \\`enterprise\\`. The value must be between 1 and 200.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not yet available. Do not specify it.
   * 
   * @example
   * 1
   */
  pipelineCommercialCu?: number;
  /**
   * @remarks
   * <props="china">
   * 
   * The [edition type](https://help.aliyun.com/document_detail/2997110.html) of the knowledge base. Valid values:
   * 
   * - standard: Standard Edition
   * 
   * - enterprise: Ultimate Edition
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not yet available. Do not specify it.
   * 
   * @example
   * standard
   */
  pipelineCommercialType?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The rate limiting policy for the knowledge base dependency chain. This parameter is required only when \\`pipelineCommercialType\\` is set to \\`enterprise\\`.
   * Value:
   * downgrade: Degrades the service (switches to using a lightweight retrieval chain).
   * If you do not specify this parameter, the default value \\`downgrade\\` is used.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not yet available. Do not specify it.
   * 
   * @example
   * downgrade
   */
  pipelineRetrieveRateLimitStrategy?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIdsShrink: 'CategoryIds',
      chunkSize: 'ChunkSize',
      columnsShrink: 'Columns',
      createIndexType: 'CreateIndexType',
      description: 'Description',
      documentIdsShrink: 'DocumentIds',
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
      tableIdsShrink: 'TableIds',
      channelType: 'channelType',
      chunkMode: 'chunkMode',
      connectId: 'connectId',
      database: 'database',
      datasourceCode: 'datasourceCode',
      enableHeaders: 'enableHeaders',
      knowledgeScene: 'knowledgeScene',
      knowledgeType: 'knowledgeType',
      metaExtractColumnsShrink: 'metaExtractColumns',
      pipelineCommercialCu: 'pipelineCommercialCu',
      pipelineCommercialType: 'pipelineCommercialType',
      pipelineRetrieveRateLimitStrategy: 'pipelineRetrieveRateLimitStrategy',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIdsShrink: 'string',
      chunkSize: 'number',
      columnsShrink: 'string',
      createIndexType: 'string',
      description: 'string',
      documentIdsShrink: 'string',
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
      tableIdsShrink: 'string',
      channelType: 'string',
      chunkMode: 'string',
      connectId: 'string',
      database: 'string',
      datasourceCode: 'string',
      enableHeaders: 'boolean',
      knowledgeScene: 'string',
      knowledgeType: 'string',
      metaExtractColumnsShrink: 'string',
      pipelineCommercialCu: 'number',
      pipelineCommercialType: 'string',
      pipelineRetrieveRateLimitStrategy: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

