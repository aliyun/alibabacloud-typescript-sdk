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
  desc?: string;
  enableLlm?: boolean;
  enableSearch?: boolean;
  key?: string;
  type?: string;
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
   * The list of primary key IDs of the categories to be imported into the knowledge base.
   */
  categoryIds?: string[];
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
  columns?: CreateIndexRequestColumns[];
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
   * The list of primary key IDs of the documents to be imported into the knowledge base.
   */
  documentIds?: string[];
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
  tableIds?: string[];
  chunkMode?: string;
  enableHeaders?: boolean;
  metaExtractColumns?: CreateIndexRequestMetaExtractColumns[];
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
      enableHeaders: 'enableHeaders',
      metaExtractColumns: 'metaExtractColumns',
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
      enableHeaders: 'boolean',
      metaExtractColumns: { 'type': 'array', 'itemType': CreateIndexRequestMetaExtractColumns },
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

