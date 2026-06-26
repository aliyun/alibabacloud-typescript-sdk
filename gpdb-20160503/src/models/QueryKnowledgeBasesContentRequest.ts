// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryKnowledgeBasesContentRequestMergeMethodArgsRrf extends $dara.Model {
  /**
   * @remarks
   * The k constant in the scoring algorithm `1/(k+rank_i)`. The value must be a positive integer greater than 1.
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
   * The weight array for each SourceCollection.
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
   * This parameter can be set when RerankModel.Name is set to qwen3-rerank. Specifies a custom ranking task type description that guides the model to adopt different ranking strategies.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The name of the reranking model. Valid values: qwen3-rerank, gte-rerank-v2.
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
   * This parameter can be set when RerankModel.Name is set to qwen3-rerank. Specifies a custom ranking task type description that guides the model to adopt different ranking strategies.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The name of the reranking model. Valid values: qwen3-rerank, gte-rerank-v2.
   * 
   * @example
   * qwen3-rerank
   */
  name?: string;
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
   * The filter conditions for the data to query, in SQL WHERE clause format. This is an expression that returns a Boolean value (true or false). The conditions can be simple comparison operators such as equal to (=), not equal to (<> or !=), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=). They can also be more complex expressions combined with logical operators (AND, OR, NOT), as well as conditions that use keywords such as IN, BETWEEN, and LIKE.
   * 
   * > 
   * > - For detailed syntax, refer to: https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-where/.
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
   * The multi-channel recall algorithm. Default value: empty (the scores from dense vectors and full-text retrieval are directly compared and sorted).
   * 
   * Valid values:
   * 
   * - RRF: reciprocal rank fusion. A parameter k controls the fusion effect. For more information, see the HybridSearchArgs configuration.
   * - Weight: weighted ranking. Parameters control the score weights of vector retrieval and full-text retrieval before sorting. For more information, see the HybridSearchArgs configuration.
   * - Cascaded: full-text retrieval is performed first, followed by vector retrieval on the full-text results.
   * 
   * @example
   * Cascaded
   */
  hybridSearch?: string;
  /**
   * @remarks
   * The algorithm parameters for multi-channel recall. RRF and Weight are supported. HybridPathsSetting specifies the recall paths: dense vectors (dense), sparse vectors (sparse), and full-text retrieval (fulltext). If this value is empty, dense vectors (dense) and full-text retrieval (fulltext) are used by default.
   * 
   * - RRF: specifies the k constant in the scoring algorithm `1/(k+rank_i)`. The value must be a positive integer greater than 1. Format:
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
   *    - Dual-path recall (without specifying HybridPathsSetting, only specifying alpha):
   *       - Formula: alpha * dense_score + (1-alpha) * fulltext_score. The alpha parameter specifies the score weight between dense vectors and full-text retrieval. Valid values: 0 to 1, where 0 indicates full-text retrieval only and 1 indicates dense vectors only:
   * ```
   * { 
   *    "Weight": {
   *     "alpha": 0.5
   *    }
   * }
   * ```
   *   - Three-path recall pattern:
   *      - Formula: normalized_dense * dense_score + normalized_sparse * sparse_score + normalized_fulltext * fulltext_score. dense, sparse, and fulltext represent the weights for dense vectors, sparse vectors, and full-text retrieval respectively. Valid values: greater than or equal to 0. The system automatically performs normalization on the weights to 0 to 1 (normalized_x = x / (dense + sparse + fulltext)).
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
   * - ip: inner product distance.
   * - cosine: cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The offset for paging query.
   * 
   * @example
   * 20
   */
  offset?: number;
  /**
   * @remarks
   * The field used for sorting. Default value: empty.
   * 
   * The field must belong to metadata or a default field in the table, such as id. Supported formats:
   * 
   * A single field, such as chunk_id.
   * Multiple fields separated by commas, such as block_id, chunk_id.
   * Descending order is supported, such as block_id DESC, chunk_id DESC.
   * 
   * @example
   * file_id,sort_num
   */
  orderBy?: string;
  /**
   * @remarks
   * The recall window. If this value is not empty, the context of the retrieval results is included. The format is a two-element array: List<A, B>, where -10 <= A <= 0 and 0 <= B <= 10.
   * > - Use this parameter when document chunks are too small and retrieval may lose context information.
   * > - Reranking takes priority over windowing. Reranking is performed first, followed by windowing.
   */
  recallWindow?: number[];
  /**
   * @remarks
   * The reranking factor. If this parameter is not empty, the vector retrieval results are reranked. Valid values: 1 < RerankFactor <= 5.
   * > - Reranking is slow when document chunks are sparse.
   * > - The recommended reranking count (TopK × Factor, rounded up) should not exceed 50.
   * 
   * @example
   * 2.0
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The reranking model parameters.
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
   * Specifies whether to use full-text retrieval (dual-path recall). Default value: false, which indicates that only vector retrieval is used.
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
   * > The document collection is created by calling the [CreateDocumentCollection](https://help.aliyun.com/document_detail/2618448.html) operation. You can call the [ListDocumentCollections](https://help.aliyun.com/document_detail/2618452.html) operation to view existing document collections.
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
   * > You can create a namespace by calling the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation and view the list by calling the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation.
   * 
   * @example
   * ns_cloud_index
   */
  namespace?: string;
  /**
   * @remarks
   * The password of the namespace.
   * 
   * > This value is specified by the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ns_password
   */
  namespacePassword?: string;
  /**
   * @remarks
   * The filter conditions for the data to query, in SQL WHERE clause format.
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
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a region, including instance IDs.
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
   * - Weight.
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
   * The reranking factor. If this parameter is not empty, the vector retrieval results are reranked. Valid values: 1 < RerankFactor <= 5.
   * > - Reranking is slow when document chunks are sparse.
   * > - The recommended reranking count (TopK × Factor, rounded up) should not exceed 50.
   * 
   * @example
   * 2
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The reranking model parameters for performing an additional reranking on the overall results after multi-channel merging.
   */
  rerankModel?: QueryKnowledgeBasesContentRequestRerankModel;
  /**
   * @remarks
   * The information about the multiple collections to retrieve.
   * 
   * This parameter is required.
   */
  sourceCollection?: QueryKnowledgeBasesContentRequestSourceCollection[];
  /**
   * @remarks
   * The number of top results to return after multi-channel recall merging.
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

