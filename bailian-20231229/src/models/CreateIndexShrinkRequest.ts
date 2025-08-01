// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of primary key IDs of the categories to be imported into the knowledge base.
   */
  categoryIdsShrink?: string;
  /**
   * @remarks
   * The estimated length of chunks. The maximum number of characters for a chunk. Texts exceeding this limit are splited. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values: [1-2048].
   * 
   * The default value is empty, which means using the intelligent splitting method.
   * 
   * >  If you specify the `ChunkSize` parameter, you must also specify the `OverlapSize` and `Separator` parameters. If you do not specify these three parameters, the system uses the intelligent splitting method by default.
   * 
   * @example
   * 128
   */
  chunkSize?: number;
  columnsShrink?: string;
  createIndexType?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  dataSourceShrink?: string;
  /**
   * @remarks
   * The description of the knowledge base. The description must be 0 to 1,000 characters in length. This parameter is empty by default.
   */
  description?: string;
  /**
   * @remarks
   * The list of primary key IDs of the documents to be imported into the knowledge base.
   */
  documentIdsShrink?: string;
  /**
   * @remarks
   * The name of the embedding model. The embedding model converts the original input prompt and knowledge text into numerical vectors for similarity comparison. The default and only model available is DashScope text-embedding-v2. It supports multiple languages including Chinese and English and normalizes the vector results. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid value:
   * 
   * *   text-embedding-v2
   * 
   * The default value is null, which means using the text-embedding-v2 model.
   * 
   * @example
   * text-embedding-v2
   */
  embeddingModelName?: string;
  enableRewrite?: boolean;
  /**
   * @remarks
   * The name of the knowledge base. The name must be 1 to 20 characters in length and can contain characters classified as letter in Unicode, including English letters, Chinese characters, digits, among others. The name can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * The overlap length. The number of overlapping characters between two consecutive chunks. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values: 0 to 1024.
   * 
   * The default value is empty, which means using the intelligent splitting method.
   * 
   * @example
   * 16
   */
  overlapSize?: number;
  /**
   * @remarks
   * Similarity Threshold. The lowest similarity score of chunks that can be returned. This parameter is used to filter text chunks returned by the rank model. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values: [0.01-1.00].
   * 
   * Default value: 0.20.
   * 
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @remarks
   * The name of the rank model. The rank model is a scoring system outside the knowledge base. It calculates the similarity score of each text chunk in the input question and knowledge base and ranks them in descending order. Then, the model returns the top K chunks with the highest scores. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   gte-rerank-hybrid
   * *   gte-rerank
   * 
   * The default value is empty, which means using the official gte-rerank-hybrid model.
   * 
   * >  If you need only semantic ranking, we recommend that you use gte-rerank. If you need both semantic ranking and text matching features to ensure relevance, we recommend that you use gte-rerank-hybrid.
   * 
   * @example
   * gte-rerank-hybrid
   */
  rerankModelName?: string;
  /**
   * @remarks
   * The clause identifier. The document is split into chunks based on this identifier. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). You can specify multiple identifiers and do not need to add any other characters to separate them. For example: !,\\\\\\n. Valid values:
   * 
   * *   \\n: line break
   * *   ，: Chinese comma
   * *   ,: English comma
   * *   。 : Chinese full stop
   * *   .: English full stop
   * *   ！ : Chinese exclamation point
   * *   ! : English exclamation point
   * *   ；: Chinese semicolon
   * *   ;: English semicolon
   * *   ？: Chinese question mark
   * *   ?: English question mark
   * 
   * The default value is empty, which means using the intelligent splitting method.
   * 
   * @example
   * ,
   */
  separator?: string;
  /**
   * @remarks
   * The ID of the vector storage instance. This parameter is available only when SinkType is set to ADB. You can view the ID on the [Instances](https://gpdbnext.console.aliyun.com/gpdb/list) page of AnalyticDB for PostgreSQL.
   * 
   * @example
   * gp-bp321093j84
   */
  sinkInstanceId?: string;
  /**
   * @remarks
   * The region of the vector storage instance. This parameter is available only when SinkType is set to ADB. You can call the [DescribeRegions](https://www.alibabacloud.com/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describeregions) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  sinkRegion?: string;
  /**
   * @remarks
   * The vector storage type of the knowledge base. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   DEFAULT: The built-in vector database.
   * *   ADB: AnalyticDB for PostgreSQL database. If you need advanced features, such as managing, auditing, and monitoring, we recommend that you specify ADB.
   * 
   * >  If you have not used AnalyticDB for AnalyticDB in Model Studio before, go to the [Create Knowledge Base](https://bailian.console.aliyun.com/#/knowledge-base/create) page, select ADB-PG as Vector Storage Type, and follow the instructions to grant permissions. If you specify ADB, you must also specify the `SinkInstanceId` and `SinkRegion` parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * DEFAULT
   */
  sinkType?: string;
  /**
   * @remarks
   * The data type of [Data Management](https://bailian.console.aliyun.com/#/data-center). For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   DATA_CENTER_CATEGORY: The category type. Import all documents from one or more categories in Data Center.
   * *   DATA_CENTER_FILE: The document type. Import one or more documents from Data Center.
   * 
   * >  If this parameter is set to DATA_CENTER_CATEGORY, you must specify the `CategoryIds` parameter. If this parameter is set to DATA_CENTER_FILE, you must specify the `DocumentIds` parameter.
   * 
   * >  If you want to create an empty knowledge base, you can use an empty category. Set this parameter to DATA_CENTER_CATEGORY. And specify the ID of an empty category for the `CategoryIds` parameter.
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
   * The data type of the knowledge base. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base). Valid value:
   * 
   * *   unstructured
   * 
   * >  After a knowledge base is created, its data type cannot be changed. You cannot create a structured knowledge base by calling an API operation. Use the console instead.
   * 
   * This parameter is required.
   * 
   * @example
   * structured
   */
  structureType?: string;
  tableIdsShrink?: string;
  chunkMode?: string;
  enableHeaders?: boolean;
  metaExtractColumnsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIdsShrink: 'CategoryIds',
      chunkSize: 'ChunkSize',
      columnsShrink: 'Columns',
      createIndexType: 'CreateIndexType',
      dataSourceShrink: 'DataSource',
      description: 'Description',
      documentIdsShrink: 'DocumentIds',
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
      tableIdsShrink: 'TableIds',
      chunkMode: 'chunkMode',
      enableHeaders: 'enableHeaders',
      metaExtractColumnsShrink: 'metaExtractColumns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIdsShrink: 'string',
      chunkSize: 'number',
      columnsShrink: 'string',
      createIndexType: 'string',
      dataSourceShrink: 'string',
      description: 'string',
      documentIdsShrink: 'string',
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
      tableIdsShrink: 'string',
      chunkMode: 'string',
      enableHeaders: 'boolean',
      metaExtractColumnsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

