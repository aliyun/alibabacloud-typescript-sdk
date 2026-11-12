// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryKnowledgeBasesContentRequestMergeMethodArgsRrf extends $dara.Model {
  /**
   * @remarks
   * The constant k in the score calculation formula 1/(k+rank_i). The value must be a positive integer greater than 1.
   * 
   * @example
   * 60
   */
  k?: number;
  static names(): { [key: string]: string } {
    return {
      k: 'K',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentRequestMergeMethodArgsWeight extends $dara.Model {
  /**
   * @remarks
   * The array of weights for each SourceCollection.
   */
  weights?: number[];
  static names(): { [key: string]: string } {
    return {
      weights: 'Weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weights: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.weights)) {
      $dara.Model.validateArray(this.weights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentRequestMergeMethodArgs extends $dara.Model {
  /**
   * @remarks
   * The configurable parameters when MergeMethod is set to RRF.
   */
  rrf?: QueryKnowledgeBasesContentRequestMergeMethodArgsRrf;
  /**
   * @remarks
   * The configurable parameters when MergeMethod is set to Weight.
   */
  weight?: QueryKnowledgeBasesContentRequestMergeMethodArgsWeight;
  static names(): { [key: string]: string } {
    return {
      rrf: 'Rrf',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rrf: QueryKnowledgeBasesContentRequestMergeMethodArgsRrf,
      weight: QueryKnowledgeBasesContentRequestMergeMethodArgsWeight,
    };
  }

  validate() {
    if(this.rrf && typeof (this.rrf as any).validate === 'function') {
      (this.rrf as any).validate();
    }
    if(this.weight && typeof (this.weight as any).validate === 'function') {
      (this.weight as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentRequestRerankModel extends $dara.Model {
  /**
   * @remarks
   * This parameter can be set when RerankModel.Name is set to qwen3-rerank. Adds a custom description for the sorting task type. You can use this parameter to guide the model to adopt different sorting strategies.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The name of the reranking model. Valid values: qwen3-rerank and gte-rerank-v2.
   * 
   * @example
   * qwen3-rerank
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      instruct: 'Instruct',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instruct: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentRequestSourceCollectionQueryParamsGraphSearchArgs extends $dara.Model {
  /**
   * @remarks
   * The number of top entities and relationship edges to return. Default value: 60.
   * 
   * @example
   * 60
   */
  graphTopK?: number;
  static names(): { [key: string]: string } {
    return {
      graphTopK: 'GraphTopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphTopK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentRequestSourceCollectionQueryParamsRerankModel extends $dara.Model {
  /**
   * @remarks
   * This parameter can be set when RerankModel.Name is set to qwen3-rerank. Adds a custom description for the sorting task type. You can use this parameter to guide the model to adopt different sorting strategies.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The name of the reranking model. Valid values: qwen3-rerank and gte-rerank-v2.
   * 
   * @example
   * qwen3-rerank
   */
  name?: string;
  /**
   * @remarks
   * The metadata fields that participate in reranking. Separate multiple fields with commas (,). By default, only the document content (content) is used for reranking. The field names must be defined in the metadata of the collection.
   * 
   * @example
   * title
   */
  rerankMetadataFields?: string;
  static names(): { [key: string]: string } {
    return {
      instruct: 'Instruct',
      name: 'Name',
      rerankMetadataFields: 'RerankMetadataFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instruct: 'string',
      name: 'string',
      rerankMetadataFields: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentRequestSourceCollectionQueryParams extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the data to be queried, in the SQL WHERE clause format. It is an expression that returns a Boolean value (true or false). The condition can be a simple comparison operator such as equal to (=), not equal to (<> or !=), greater than (>), less than (<), greater than or equal to (>=), or less than or equal to (<=). It can also be a more complex expression combined with logical operators (AND, OR, NOT), or a condition using keywords such as IN, BETWEEN, and LIKE.
   * 
   * > 
   * > - For detailed syntax, refer to https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-where/.
   * 
   * @example
   * id = \\"llm-52tvykqt6u67iw73_j6ovptwjk7_file_6ce3da1f7e69495d9f491f2180c86973_11967297\\"
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to enable knowledge graph enhancement. Default value: false.
   * 
   * @example
   * true
   */
  graphEnhance?: boolean;
  /**
   * @remarks
   * The number of top entities and relationship edges to return. Default value: 60.
   */
  graphSearchArgs?: QueryKnowledgeBasesContentRequestSourceCollectionQueryParamsGraphSearchArgs;
  /**
   * @remarks
   * The multi-channel recall algorithm. Default value: empty, which means directly comparing and sorting the scores of dense vectors and full text. Valid values:
   * 
   * - RRF: Reciprocal Rank Fusion. A parameter k is used to control the fusion effect. For more information, see the HybridSearchArgs configuration.
   * - Weight: Weighted sorting. Parameters are used to control the score weights of vectors and full text before sorting. For more information, see the HybridSearchArgs configuration.
   * - Cascaded: Full-text retrieve is performed first, followed by vector retrieve based on the full-text retrieve results.
   * 
   * @example
   * Cascaded
   */
  hybridSearch?: string;
  /**
   * @remarks
   * The algorithm parameters for multi-channel recall. Currently, RRF and Weight are supported. You can use HybridPathsSetting to specify the recall of dense vectors (dense), sparse vectors (sparse), and full-text index (fulltext). If this value is empty, dense vectors (dense) and full-text index (fulltext) are recalled by default.
   * 
   * - RRF: Specifies the constant k in the score calculation formula 1/(k+rank_i). The value must be a positive integer greater than 1. Format:
   * ```
   * {
   *   "HybridPathsSetting": {
   *     "paths": "dense,fulltext"
   *   },
   *   "RRF": {
   *     "k": 60
   *   }
   * }
   * ```
   * 
   * - Weight: 
   *    - Dual-channel recall (HybridPathsSetting is not specified, only alpha is specified):
   *       - Calculation formula: alpha * dense_score + (1-alpha) * fulltext_score. The alpha parameter represents the score weight of dense vectors and full-text index retrieve score. The value ranges from 0 to 1, where 0 indicates full-text index only and 1 indicates dense vectors only:
   * ```
   * { 
   *    "Weight": {
   *     "alpha": 0.5
   *    }
   * }
   * ```
   *   - Triple-channel recall pattern:
   *      - Calculation formula: normalized_dense * dense_score + normalized_sparse * sparse_score + normalized_fulltext * fulltext_score. Here, dense, sparse, and fulltext represent the weights of dense vectors, sparse vectors, and full-text index, respectively. The value must be greater than or equal to 0. The system automatically performs normalization on the weights to 0 to 1 (that is, normalized_x = x / (dense + sparse + fulltext)).
   * ```
   * {
   *   "HybridPathsSetting": {
   *      "paths": "dense,sparse,fulltext"
   *    },
   *   "Weight": {
   *     "dense": 0.5,
   *     "sparse": 0.3,
   *     "fulltext": 0.2
   *   }
   * }
   * ```
   */
  hybridSearchArgs?: { [key: string]: any };
  /**
   * @remarks
   * The method used to build the vector index. Valid values:
   * - l2: Euclidean distance.
   * - ip: Dot product (inner product) distance.
   * - cosine: Cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The offset used for paging in a paged query.
   * 
   * @example
   * 20
   */
  offset?: number;
  /**
   * @remarks
   * The field based on which the results are sorted. Default value: empty.
   * 
   * The field must belong to metadata or be a default field in the table, such as id. Supported formats:
   * 
   * A single field, such as chunk_id.
   * Multiple fields separated by commas, such as block_id, chunk_id.
   * Descending order, such as block_id DESC, chunk_id DESC.
   * 
   * @example
   * file_id,sort_num
   */
  orderBy?: string;
  /**
   * @remarks
   * The recall window. If this value is not empty, the context of the retrieval results is additionally returned. The format is an array of two elements: List<A, B>, where -10 <= A <= 0 and 0 <= B <= 10.
   * > - We recommend that you use this parameter when document chunks are too small and retrieval may lose context information.
   * > - Reranking takes precedence over windowing. That is, reranking is performed before windowing.
   * 
   * @example
   * [0,0]
   */
  recallWindow?: number[];
  /**
   * @remarks
   * The reranking factor. If this value is not empty, the vector retrieve results are reranked. Valid values: 1 < RerankFactor <= 5.
   * > - Reranking is slow when document chunks are sparse.
   * > - We recommend that the number of reranked items (TopK × Factor, rounded up) does not exceed 50.
   * 
   * @example
   * 2.0
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The parameters of the reranking model.
   */
  rerankModel?: QueryKnowledgeBasesContentRequestSourceCollectionQueryParamsRerankModel;
  /**
   * @remarks
   * The number of top results to return.
   * 
   * @example
   * 776
   */
  topK?: number;
  /**
   * @remarks
   * Specifies whether to use full-text retrieve (dual-channel recall). Default value: false, which indicates that only vector retrieve is used.
   * 
   * @example
   * false
   */
  useFullTextRetrieval?: boolean;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      graphEnhance: 'GraphEnhance',
      graphSearchArgs: 'GraphSearchArgs',
      hybridSearch: 'HybridSearch',
      hybridSearchArgs: 'HybridSearchArgs',
      metrics: 'Metrics',
      offset: 'Offset',
      orderBy: 'OrderBy',
      recallWindow: 'RecallWindow',
      rerankFactor: 'RerankFactor',
      rerankModel: 'RerankModel',
      topK: 'TopK',
      useFullTextRetrieval: 'UseFullTextRetrieval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      graphEnhance: 'boolean',
      graphSearchArgs: QueryKnowledgeBasesContentRequestSourceCollectionQueryParamsGraphSearchArgs,
      hybridSearch: 'string',
      hybridSearchArgs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metrics: 'string',
      offset: 'number',
      orderBy: 'string',
      recallWindow: { 'type': 'array', 'itemType': 'number' },
      rerankFactor: 'number',
      rerankModel: QueryKnowledgeBasesContentRequestSourceCollectionQueryParamsRerankModel,
      topK: 'number',
      useFullTextRetrieval: 'boolean',
    };
  }

  validate() {
    if(this.graphSearchArgs && typeof (this.graphSearchArgs as any).validate === 'function') {
      (this.graphSearchArgs as any).validate();
    }
    if(this.hybridSearchArgs) {
      $dara.Model.validateMap(this.hybridSearchArgs);
    }
    if(Array.isArray(this.recallWindow)) {
      $dara.Model.validateArray(this.recallWindow);
    }
    if(this.rerankModel && typeof (this.rerankModel as any).validate === 'function') {
      (this.rerankModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentRequestSourceCollection extends $dara.Model {
  /**
   * @remarks
   * The name of the document collection.
   * 
   * > Created by the [CreateDocumentCollection](https://help.aliyun.com/document_detail/2618448.html) operation. You can call the [ListDocumentCollections](https://help.aliyun.com/document_detail/2618452.html) operation to view the created document collections.
   * 
   * This parameter is required.
   * 
   * @example
   * knowledge22
   */
  collection?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * > You can call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation to create a namespace and the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to view the namespace list.
   * 
   * @example
   * ns_cloud_index
   */
  namespace?: string;
  /**
   * @remarks
   * The password for the namespace.
   * 
   * > This value is specified when you call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ns_password
   */
  namespacePassword?: string;
  /**
   * @remarks
   * The filter condition for the data to be updated, in the SQL WHERE clause format.
   */
  queryParams?: QueryKnowledgeBasesContentRequestSourceCollectionQueryParams;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      queryParams: 'QueryParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      queryParams: QueryKnowledgeBasesContentRequestSourceCollectionQueryParams,
    };
  }

  validate() {
    if(this.queryParams && typeof (this.queryParams as any).validate === 'function') {
      (this.queryParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentRequest extends $dara.Model {
  /**
   * @remarks
   * The text content used for retrieval.
   * 
   * This parameter is required.
   * 
   * @example
   * What is ADBPG?
   */
  content?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The method used to merge results from multiple knowledge bases. Default value: RRF. Valid values:
   * - RRF
   * - Weight
   * 
   * @example
   * RRF
   */
  mergeMethod?: string;
  /**
   * @remarks
   * The parameters for the merge method of each SourceCollection.
   */
  mergeMethodArgs?: QueryKnowledgeBasesContentRequestMergeMethodArgs;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The reranking factor. If this value is not empty, the vector retrieve results are reranked. Valid values: 1 < RerankFactor <= 5.
   * > - Reranking is slow when document chunks are sparse.
   * > - We recommend that the number of reranked items (TopK × Factor, rounded up) does not exceed 50.
   * 
   * @example
   * 2
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The parameters of the reranking model used to rerank the merged multi-channel results.
   */
  rerankModel?: QueryKnowledgeBasesContentRequestRerankModel;
  /**
   * @remarks
   * The information about multiple collections to be retrieved.
   * 
   * This parameter is required.
   */
  sourceCollection?: QueryKnowledgeBasesContentRequestSourceCollection[];
  /**
   * @remarks
   * The number of top results to return after multi-channel recall results are merged.
   * 
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      DBInstanceId: 'DBInstanceId',
      mergeMethod: 'MergeMethod',
      mergeMethodArgs: 'MergeMethodArgs',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      rerankFactor: 'RerankFactor',
      rerankModel: 'RerankModel',
      sourceCollection: 'SourceCollection',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      DBInstanceId: 'string',
      mergeMethod: 'string',
      mergeMethodArgs: QueryKnowledgeBasesContentRequestMergeMethodArgs,
      ownerId: 'number',
      regionId: 'string',
      rerankFactor: 'number',
      rerankModel: QueryKnowledgeBasesContentRequestRerankModel,
      sourceCollection: { 'type': 'array', 'itemType': QueryKnowledgeBasesContentRequestSourceCollection },
      topK: 'number',
    };
  }

  validate() {
    if(this.mergeMethodArgs && typeof (this.mergeMethodArgs as any).validate === 'function') {
      (this.mergeMethodArgs as any).validate();
    }
    if(this.rerankModel && typeof (this.rerankModel as any).validate === 'function') {
      (this.rerankModel as any).validate();
    }
    if(Array.isArray(this.sourceCollection)) {
      $dara.Model.validateArray(this.sourceCollection);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

