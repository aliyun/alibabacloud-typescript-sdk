// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * You can import files synchronously when you create a knowledge base. Here, you can import all files under a specified category by specifying the category ID. We recommend that you import no more than 500 files. If you have remaining files, you can call the **SubmitIndexAddDocumentsJob** operation to continue importing them later.
   */
  categoryIdsShrink?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The chunk size, which is the maximum number of characters in each text chunk. If the text exceeds this length:
   * 
   * - **Intelligent chunking** (chunkMode is not specified): The text is highly likely to be truncated.
   * - **Custom chunking** (chunkMode is specified): The text is forcibly truncated.
   * 
   * 
   * 
   * <props="intl">
   * The chunk size, which is the maximum number of characters in each text chunk. If the text exceeds this length, it is highly likely to be truncated.
   * 
   * 
   * 
   * Valid values: [1, 6000]. Default value: 500.
   * 
   * > If you set ChunkSize to a value less than 100, you must also set OverlapSize. You can also leave these two parameters unspecified, and the system uses the default values.
   * 
   * @example
   * 128
   */
  chunkSize?: number;
  /**
   * @remarks
   * <props="china">
   * The structure of the data table, such as column names and types.
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not pass this parameter.
   * >
   */
  columnsShrink?: string;
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
   * The description of the knowledge base. The description must be 0 to 200 characters in length and can contain English and Chinese characters.
   * Default value: empty.
   * 
   * @example
   * The enterprise help document library includes important materials such as company policies and product lists
   */
  description?: string;
  /**
   * @remarks
   * You can import files synchronously when you create a knowledge base. Here, you can specify the list of files to be imported by passing file IDs. We recommend that you import no more than 10,000 files. If you have remaining files, you can call the **SubmitIndexAddDocumentsJob** operation to continue importing them later.
   */
  documentIdsShrink?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The embedding model used by the knowledge base. The embedding model is used to transform the original input prompt and knowledge text into numerical vectors for similarity comparison. Compared with the text-embedding-v3 model, the text-embedding-v4 model is comprehensively upgraded in terms of language support, code snippet vectorization effect, and selection of vector dimensions, and is suitable for most scenarios. For more information, refer to [Quantization](https://help.aliyun.com/document_detail/2842587.html). Valid values:
   * - text-embedding-v4
   * - text-embedding-v3
   * 
   * Default value: empty. In this case, the text-embedding-v3 model is used.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * The embedding model used by the knowledge base. The embedding model is used to transform the original input prompt and knowledge text into numerical vectors for similarity comparison. The default text-embedding-v2 model (which cannot be changed at the moment) supports not only Chinese and English but also multiple other languages, and performs normalization on the vector results. For more information, refer to [Quantization](https://help.aliyun.com/document_detail/2842587.html). Valid values:
   * - text-embedding-v2
   * 
   * Default value: empty. In this case, the text-embedding-v2 model is used.
   * 
   * @example
   * text-embedding-v4
   */
  embeddingModelName?: string;
  /**
   * @remarks
   * Specifies whether to enable multi-turn conversation rewriting. Valid values:
   * 
   * - true: enabled.
   * - false: disabled.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  enableRewrite?: boolean;
  /**
   * @remarks
   * The name of the knowledge base. The name must be 1 to 20 characters in length and can contain Chinese characters, English letters, digits, underscores (_), hyphens (-), periods (.), and colons (:).
   * 
   * This parameter is required.
   * 
   * @example
   * Enterprise help document library
   */
  name?: string;
  /**
   * @remarks
   * The chunk overlap size, which indicates the number of overlapping characters between the current text chunk and the previous text chunk. Valid values: [0, 1024].
   * 
   * Default value: 100.
   * > OverlapSize must be less than ChunkSize. Otherwise, chunking exceptions occur.
   * 
   * @example
   * 16
   */
  overlapSize?: number;
  /**
   * @remarks
   * <props="intl">This parameter is not available. Do not specify this parameter.
   * 
   * <props="china">Provides a natural language instruction to fine-tune the behavior of the reranking model.
   * <notice>This parameter takes effect only when rerank_mode is set to "custom".</notice>
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query.
   */
  rerankInstruct?: string;
  /**
   * @remarks
   * The similarity threshold. Only text chunks with a similarity score greater than this value are recalled. This parameter is used to filter the text chunks returned by the reranking model. Valid values: [0.01, 1.00].
   * 
   * Default value: 0.01.
   * 
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @remarks
   * <props="china">
   * Specifies the instruction intervention mode of the reranking model to determine its scoring preference. Valid values:
   * 
   * - **qa**: question answering mode. This is the default value. The model tends to assign higher scores to candidates that can directly answer the query. We recommend that you use this mode in question answering scenarios.
   * 
   * - **similar**: similarity mode. The model tends to assign higher scores to candidates that are highly consistent with the query content. We recommend that you use this mode in matching and retrieval scenarios.
   * 
   * - **custom**: custom mode. The ranking behavior of the model is determined by the instruction in the rerank_instruct parameter.
   * 
   * 
   * 
   * <props="intl">This parameter is not available. Do not specify this parameter.
   * 
   * @example
   * qa
   */
  rerankMode?: string;
  /**
   * @remarks
   * The reranking model used by the knowledge base. The reranking model is a scoring system external to the knowledge base. It calculates the similarity score between the user\\"s question and each text chunk in the knowledge base, sorts the chunks in descending order of the scores, and returns the top K text chunks with the highest scores. Valid values:
   * 
   * 
   * <props="china">
   * 
   * - qwen3-rerank-hybrid: qwen3-rerank (hybrid) reranking.
   * - qwen3-rerank: qwen3-rerank reranking.
   * - gte-rerank-hybrid: gte-rerank (hybrid) reranking.
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
   * Default value: empty. In this case, qwen3-rerank is used.
   * > If you only need semantic reranking, you can use qwen3-rerank. If you need both semantic reranking and text matching features to ensure relevance, use qwen3-rerank-hybrid.
   * >
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * Default value: empty. In this case, gte-rerank-hybrid is used.
   * > If you only need semantic reranking, you can use gte-rerank. If you need both semantic reranking and text matching features to ensure relevance, use gte-rerank-hybrid.
   * >
   * 
   * 
   * 
   * 
   * 
   * <props="china">
   * 
   * > gte-rerank-hybrid and gte-rerank will stop receiving updates and are not recommended.
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
   * The sentence separator. This parameter takes effect only when chunkMode is set to **regex**. In other modes, this parameter does not take effect even if it is passed. You can pass a regular expression (multiple regular expressions are not supported) to split the file into small text chunks.
   * 
   * When you use intelligent chunking (chunkMode is not specified), leave this parameter empty.
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
   * The ID of the AnalyticDB for PostgreSQL instance. This parameter is required only when SinkType is set to ADB. Go to the [AnalyticDB for PostgreSQL Instance List](https://gpdbnext.console.aliyun.com/gpdb/list) page to obtain the ID.
   * 
   * @example
   * gp-bp32109xxxx
   */
  sinkInstanceId?: string;
  /**
   * @remarks
   * The region where the AnalyticDB for PostgreSQL instance resides. This parameter is required only when SinkType is set to ADB. You can call the <props="china">[DescribeRegions](https://www.alibabacloud.com/help/en/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describeregions)<props="intl">[DescribeRegions](https://www.alibabacloud.com/help/zh/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describeregions?spm=a2c63.p38356.0.i3) operation to obtain the region list.
   * 
   * @example
   * cn-hangzhou
   */
  sinkRegion?: string;
  /**
   * @remarks
   * The vector storage type of the knowledge base. For more information, refer to [Knowledge base](https://help.aliyun.com/document_detail/2807740.html). Valid values:
   * - BUILT_IN: stores vector data in Alibaba Cloud Model Studio.
   * - ADB: AnalyticDB for PostgreSQL database. If you need advanced features such as managing, auditing, and monitoring the database, select ADB.
   * > If you have not used ADB storage in Alibaba Cloud Model Studio, go to the <props="china">[Create Knowledge Base](https://bailian.console.aliyun.com/#/knowledge-base/create)<props="intl">[Create Knowledge Base](https://bailian.console.alibabacloud.com/#/knowledge-base/create) page, select ADB-PG as the vector storage type, and complete the authorization as prompted. If you pass ADB, you must specify the SinkInstanceId and SinkRegion parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * BUILT_IN
   */
  sinkType?: string;
  /**
   * @remarks
   * >Notice: This parameter is required in the latest SDK version. Otherwise, an error is reported when you call the SubmitIndexJob operation: Required parameter(data_sources) missing or invalid.</notice>
   * 
   * The source of the imported data. Valid values:
   * - DATA_CENTER_CATEGORY: the category type. This value indicates that all files under a specified category in <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) are imported. You can import multiple categories at a time.
   * - DATA_CENTER_FILE: the file type. This value indicates that specified files in <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) are imported. You can import multiple files at a time.
   * 
   * > If you set this parameter to DATA_CENTER_CATEGORY, you must specify the CategoryIds parameter. If you set this parameter to DATA_CENTER_FILE, you must specify the DocumentIds parameter.
   * >
   * 
   * > To create an empty knowledge base, you can use an empty category that contains no files: set this parameter to DATA_CENTER_CATEGORY and set CategoryIds to the ID of the empty category.
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
   * The type of the knowledge base.
   * 
   * **Valid values**:
   * 
   * - unstructured: a knowledge base for document search or audio and video. The default use scenario for the document search type is basic document question answering. <props="china">To create a knowledge base for other scenarios, you must also pass the knowledgeType and knowledgeScene parameters.
   * 
   * <props="china">
   * 
   * - structured: a knowledge base for data querying or image question answering.
   * 
   * 
   * 
   * > Note that the type of a knowledge base cannot be changed after it is created.
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
   * You can obtain the ID by clicking the ID icon next to the table name on the Tables tab of the Table Connector in [Data Connection](https://bailian.console.aliyun.com/cn-beijing?tab=app#/connector/list). If the list contains multiple IDs, only the first one is used.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not pass this parameter.
   * >
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
   * Enables custom chunking and specifies the chunking strategy. For more information, refer to [Knowledge base](https://help.aliyun.com/document_detail/2807740.html).
   * 
   * Valid values (you cannot pass multiple values at a time):
   * 
   * - **length**: chunks by length. The text is strictly chunked according to the ChunkSize and OverlapSize you specify. If you do not pass these two parameters, the system uses the default values (ChunkSize is 500 and OverlapSize is 100). Chunking by length does not support Separator (it does not take effect even if passed).
   * - **page**: chunks by page. If ChunkSize is specified, it is considered during chunking (if not passed, the default value 500 is used). Chunking by page does not support OverlapSize and Separator (they do not take effect even if passed).
   * - **h1**: chunks by level-1 heading. If ChunkSize is specified, it is considered during chunking (if not passed, the default value 500 is used). Chunking by level-1 heading does not support OverlapSize and Separator (they do not take effect even if passed).
   * - **h2**: chunks by level-2 heading. If ChunkSize is specified, it is considered during chunking (if not passed, the default value 500 is used). Chunking by level-2 heading does not support OverlapSize and Separator (they do not take effect even if passed).
   * - **regex**: chunks by regular expression. In this case, you must specify the Separator parameter. If ChunkSize is specified, it is considered during chunking (if not passed, the default value 500 is used). Chunking by regular expression does not support OverlapSize (it does not take effect even if passed).
   * 
   * Default value: empty. In this case, intelligent chunking is used.
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
   * Specifies whether to use the first row of all .xlsx and .xls files as the header and concatenate it to each text chunk to prevent the large language model from mistakenly treating the header as a normal data row.
   * 
   * 
   * > Enable this feature only when all imported files are in .xlsx or .xls format and contain headers. Otherwise, do not enable it.
   * >
   * 
   * Valid values:
   * - true: enabled.
   * - false: disabled.
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
   * <props="china">
   * The specific knowledge type, which is used to further specify the type of data processed by the knowledge base.
   * <notice>This parameter must be provided or omitted together with knowledgeScene. It cannot be set separately. If both are omitted, the system uses the default configurations based on structureType.</notice>
   * 
   * **Settings** constraints: The value of this parameter must match the structureType you select and determines the active values for knowledgeScene.
   * 
   * **Valid values**:
   * - document: document search. Must be used with structureType: unstructured.
   * - table: data querying. Must be used with structureType: structured.
   * - image: image question answering. Must be used with structureType: structured.
   * - multimedia: audio and video search. Must be used with structureType: unstructured.
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
   * The metadata extraction configuration. Metadata is a series of additional attributes related to the content of unstructured data. These attributes are integrated into text chunks in the form of key-value pairs. For more information, refer to [Knowledge base](https://help.aliyun.com/document_detail/2807740.html).
   */
  metaExtractColumnsShrink?: string;
  /**
   * @remarks
   * <props="china">The number of RCUs for the knowledge base. This parameter is required only when pipelineCommercialType is set to enterprise. Valid values: [1, 200].
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
   * The [edition](https://help.aliyun.com/document_detail/2997110.html) of the knowledge base. Valid values:
   * - standard: Standard Edition
   * - enterprise: Ultimate Edition
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
   * <props="china">The throttling handling strategy for the knowledge base dependency link. This parameter is required only when pipelineCommercialType is set to enterprise.
   * Valid values:
   * downgrade: downgrade processing (switches to lightweight link retrieval).
   * Default value: downgrade.
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

