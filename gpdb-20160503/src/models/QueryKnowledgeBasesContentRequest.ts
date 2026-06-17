// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryKnowledgeBasesContentRequestMergeMethodArgsRrf extends $dara.Model {
  /**
   * @remarks
   * The constant `k` in the scoring formula `1/(k+rank_i)`. It must be a positive integer greater than 1.
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
   * An array of weights for each source collection.
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
   * The parameters that you can configure when `MergeMethod` is set to `RRF`.
   */
  rrf?: QueryKnowledgeBasesContentRequestMergeMethodArgsRrf;
  /**
   * @remarks
   * The parameters that you can configure when `MergeMethod` is set to `Weight`.
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
   * This parameter can be set only when `RerankModel.Name` is `qwen3-rerank`. Use this parameter to provide a custom instruction that guides the model\\"s ranking strategy.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The name of the rerank model. Valid values: `qwen3-rerank` and `gte-rerank-v2`.
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
   * The number of top entities and relationship edges to return. The default value is 60.
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
   * This parameter can be set only when `RerankModel.Name` is `qwen3-rerank`. Use this parameter to provide a custom instruction that guides the model\\"s ranking strategy.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The name of the rerank model. Valid values: `qwen3-rerank` and `gte-rerank-v2`.
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

export class QueryKnowledgeBasesContentRequestSourceCollectionQueryParams extends $dara.Model {
  /**
   * @remarks
   * A filter expression for the data to retrieve, formatted as a SQL `WHERE` clause. This is a Boolean expression that evaluates to `true` or `false`. The expression can include simple comparison operators (such as `=`, `<>`, `!=`, `>`, `<`, `>=`, and `<=`), logical operators (`AND`, `OR`, `NOT`), and keywords such as `IN`, `BETWEEN`, and `LIKE`.
   * 
   * > - For syntax details, see [PostgreSQL WHERE](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-where/).
   * 
   * @example
   * id = \\"llm-52tvykqt6u67iw73_j6ovptwjk7_file_6ce3da1f7e69495d9f491f2180c86973_11967297\\"
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to enable knowledge graph enhancement. The default value is `false`.
   * 
   * @example
   * true
   */
  graphEnhance?: boolean;
  /**
   * @remarks
   * Parameters for the graph search.
   */
  graphSearchArgs?: QueryKnowledgeBasesContentRequestSourceCollectionQueryParamsGraphSearchArgs;
  /**
   * @remarks
   * The hybrid search algorithm. If this parameter is not specified, the system directly compares and sorts the scores from dense vector and full-text searches.
   * 
   * Valid values:
   * 
   * - `RRF`: Reciprocal rank fusion. Uses a parameter `k` to control the fusion effect. For more information, see the `HybridSearchArgs` parameter.
   * 
   * - `Weight`: Weighted ranking. Uses parameters to control the score weights from different retrieval paths, such as dense vector and full-text searches, before sorting. For more information, see the `HybridSearchArgs` parameter.
   * 
   * - `Cascaded`: Performs a full-text search first, and then performs a vector search on the results.
   * 
   * @example
   * Cascaded
   */
  hybridSearch?: string;
  /**
   * @remarks
   * The parameters for the hybrid search algorithm. `RRF` and `Weight` are supported. `HybridPathsSetting` specifies the retrieval paths: dense vectors (`dense`), sparse vectors (`sparse`), and full-text search (`fulltext`). If this parameter is not specified, the default paths are `dense` and `fulltext`.
   * 
   * - `RRF`: Specifies the constant `k` in the scoring formula `1/(k+rank_i)`. `k` must be a positive integer greater than 1. Format:
   * 
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
   * - `Weight`:
   * 
   *   - Two-path retrieval (the default if you do not specify `HybridPathsSetting`):
   * 
   *     - Scoring formula: `alpha * dense_score + (1-alpha) * fulltext_score`. The `alpha` parameter represents the score weight of dense vectors relative to full-text search. The value must be in the range of [0, 1]. A value of 0 indicates full-text search only, and a value of 1 indicates dense vector search only.
   * 
   * ```
   * { 
   *    "Weight": {
   *     "alpha": 0.5
   *    }
   * }
   * ```
   * 
   * - Three-path retrieval:
   * 
   *   - Scoring formula: `normalized_dense * dense_score + normalized_sparse * sparse_score + normalized_fulltext * fulltext_score`. The `dense`, `sparse`, and `fulltext` parameters represent the weights for dense vectors, sparse vectors, and full-text search, respectively. The value of each weight must be greater than or equal to 0. The system automatically normalizes the weights to a range of [0, 1] (for example, `normalized_x = x / (dense + sparse + fulltext)`).
   * 
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
   * The distance metric used for building the vector index. Valid values:
   * 
   * - `l2`: Euclidean distance.
   * 
   * - `ip`: Inner product distance.
   * 
   * - `cosine`: Cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The offset for paged queries.
   * 
   * @example
   * 20
   */
  offset?: number;
  /**
   * @remarks
   * Specifies the field by which to sort the results. By default, this parameter is empty.
   * 
   * The field must be a metadata field or a default field in the table, such as `id`. The following formats are supported:
   * 
   * A single field, such as `chunk_id`. Multiple fields separated by commas, such as `block_id, chunk_id`. Descending order, such as `block_id DESC, chunk_id DESC`.
   * 
   * @example
   * file_id,sort_num
   */
  orderBy?: string;
  /**
   * @remarks
   * The recall window. If specified, adds context from surrounding document chunks to the search results. The format is a two-element array `[A, B]`, where `-10 <= A <= 0` and `0 <= B <= 10`.
   * 
   * > - This parameter is recommended for finely chunked documents where retrieval might otherwise lose context.
   * >
   * > - The system applies reranking before applying the recall window.
   */
  recallWindow?: number[];
  /**
   * @remarks
   * The reranking factor. If specified, the system reranks the results from this source collection before they are merged. Valid values: 1 < RerankFactor <= 5.
   * 
   * > - Sparse document chunking reduces reranking efficiency.
   * >
   * > - We recommend that the number of items to rerank (TopK × Factor, rounded up) does not exceed 50.
   * 
   * @example
   * 2.0
   */
  rerankFactor?: number;
  /**
   * @remarks
   * Parameters for the rerank model applied to the results from this specific source collection before the final merge.
   */
  rerankModel?: QueryKnowledgeBasesContentRequestSourceCollectionQueryParamsRerankModel;
  /**
   * @remarks
   * The number of top results to return from this source collection.
   * 
   * @example
   * 776
   */
  topK?: number;
  /**
   * @remarks
   * Specifies whether to use full-text search, which enables two-path retrieval. The default value is `false`, which indicates that only vector retrieval is performed.
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
   * The document collection name.
   * 
   * > To create a document collection, call the [CreateDocumentCollection](https://help.aliyun.com/document_detail/2618448.html) operation. To view existing document collections, call the [ListDocumentCollections](https://help.aliyun.com/document_detail/2618452.html) operation.
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
   * > You can call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation to create a namespace and call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to view existing namespaces.
   * 
   * @example
   * ns_cloud_index
   */
  namespace?: string;
  /**
   * @remarks
   * The password for the namespace.
   * 
   * > You specify this value when you call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ns_password
   */
  namespacePassword?: string;
  /**
   * @remarks
   * The query parameters for the source collection.
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
   * The text content to search for.
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
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to view the details of all AnalyticDB for PostgreSQL instances in a specific region, including their instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The method for merging results from multiple knowledge bases. The default value is `RRF`. Valid values:
   * 
   * - RRF
   * 
   * - Weight
   * 
   * @example
   * RRF
   */
  mergeMethod?: string;
  /**
   * @remarks
   * The arguments for the specified `MergeMethod`.
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
   * The reranking factor. If specified, the system reranks the final merged results. Valid values: 1 < RerankFactor <= 5.
   * 
   * > - Sparse document chunking reduces reranking efficiency.
   * >
   * > - We recommend that the number of items to rerank (TopK × Factor, rounded up) does not exceed 50.
   * 
   * @example
   * 2
   */
  rerankFactor?: number;
  /**
   * @remarks
   * Parameters for the rerank model applied to the final merged results.
   */
  rerankModel?: QueryKnowledgeBasesContentRequestRerankModel;
  /**
   * @remarks
   * The source collections to search.
   * 
   * This parameter is required.
   */
  sourceCollection?: QueryKnowledgeBasesContentRequestSourceCollection[];
  /**
   * @remarks
   * The number of top results to return after the results from all recall paths are merged.
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

