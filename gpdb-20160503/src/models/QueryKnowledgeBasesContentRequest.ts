// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryKnowledgeBasesContentRequestMergeMethodArgsRrf extends $dara.Model {
  /**
   * @remarks
   * The smoothing constant k in the formula to calculate the score: 1/(k + rank_i). The k constant must be a positive integer greater than 1.
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
   * An array of weights for each SourceCollection.
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
   * The parameter that can be configured when the MergeMethod parameter is set to RRF.
   */
  rrf?: QueryKnowledgeBasesContentRequestMergeMethodArgsRrf;
  /**
   * @remarks
   * The parameter that you can configure when you set the MergeMethod parameter to Weight.
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

export class QueryKnowledgeBasesContentRequestSourceCollectionQueryParamsGraphSearchArgs extends $dara.Model {
  /**
   * @remarks
   * Returns the top number of entities and relationship edges. Default value: 60.
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

export class QueryKnowledgeBasesContentRequestSourceCollectionQueryParams extends $dara.Model {
  /**
   * @remarks
   * The filter condition that is used to query data. Specify this parameter in a format that is the same as the WHERE clause. The parameter is an expression that returns a Boolean value of TRUE or FALSE. The condition can be a simple comparison using operators such as equal (=), not equal (<> or !=), greater than (>), less than (<), greater than or equal (>=), or less than or equal (<=). It can also be a more complex expression combining multiple conditions with logical operators (AND, OR, NOT), or use keywords such as IN, BETWEEN, and LIKE.
   * 
   * > 
   * 
   * *   For the syntax, see https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-where/.
   * 
   * @example
   * id = \\"llm-52tvykqt6u67iw73_j6ovptwjk7_file_6ce3da1f7e69495d9f491f2180c86973_11967297\\"
   */
  filter?: string;
  /**
   * @remarks
   * Whether to enable knowledge graph enhancement. Default value: false.
   * 
   * @example
   * true
   */
  graphEnhance?: boolean;
  /**
   * @remarks
   * Returns the top number of entities and relationship edges. Default value: 60.
   */
  graphSearchArgs?: QueryKnowledgeBasesContentRequestSourceCollectionQueryParamsGraphSearchArgs;
  /**
   * @remarks
   * The dual-path retrieval algorithm. This parameter is empty by default, which specifies that scores of vector retrieval and full-text retrieval are directly compared and sorted together.
   * 
   * Valid values:
   * 
   * *   RRF: The reciprocal rank fusion (RRF) algorithm uses a constant k to control the fusion effect. For more information, see the description of the HybridSearchArgs parameter.
   * *   Weight: This algorithm uses the alpha parameter to specify the proportion of the vector search score and the full-text search score and then sorts by weight. For more information, see the description of the HybridSearchArgs parameter.
   * *   Cascaded: This algorithm performs first full-text retrieval and then vector retrieval.
   * 
   * @example
   * Cascaded
   */
  hybridSearch?: string;
  /**
   * @remarks
   * The parameters of the dual-path retrieval algorithm. RRF and Weight are supported at this time:
   * 
   * *   RRF: Specifies the smoothing constant k in the formula to calculate the score: `1/(k + rank_i)`. The k constant must be a positive integer greater than 1. The format:
   * 
   * <!---->
   * 
   *     { 
   *        "RRF": {
   *         "k": 60
   *        }
   *     }
   * 
   * *   Weight: The score is computed as `alpha * vector_score + (1 - alpha) * text_score`. The parameter alpha controls the weighting between vector search and full-text search scores, with a valid range of [0, 1]. 0 specifies only full-text search score. 1 specifies only vector search score.
   * 
   * <!---->
   * 
   *     { 
   *        "Weight": {
   *         "alpha": 0.5
   *        }
   *     }
   */
  hybridSearchArgs?: { [key: string]: any };
  /**
   * @remarks
   * The method that is used to create vector indexes. Valid values:
   * 
   * *   l2: Euclidean distance.
   * *   ip: Inner product distance.
   * *   cosine: Cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * Offset for pagination.
   * 
   * @example
   * 20
   */
  offset?: number;
  /**
   * @remarks
   * The fields by which to sort the results. This parameter is empty by default.
   * 
   * The field must be either a metadata field or a default field in the table (e.g., id). Supported formats include:
   * 
   * Single field, such as chunk_id. Multiple fields that are separated by commas (,), such as block_id,chunk_id. Descending order is supported, such as block_id DESC,chunk_id DESC.
   * 
   * @example
   * file_id,sort_num
   */
  orderBy?: string;
  /**
   * @remarks
   * The retrieval window. If you specify this parameter, the context of the retrieved result is added in the output. Format: List\\<A, B>. Valid values: -10<=A<=0 and 0<=B<=10.
   * 
   * > 
   * 
   * *   We recommend that you specify this parameter if the source document is segmented into large numbers of pieces, which may result in loss of contextual information during retrieval.
   * 
   * *   Perform re-ranking before windowing.
   */
  recallWindow?: number[];
  /**
   * @remarks
   * The rerank factor. If you specify this parameter, the vector retrieval results are reranked once more. Valid values: 1\\<RerankFactor<=5.
   * 
   * > 
   * 
   * *   If the document is segmented into sparse parts, reranking is inefficient.
   * 
   * *   We recommend that the number of reranked results (the ceiling of TopK × RerankFactor) not exceed 50.
   * 
   * @example
   * 2.0
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The number of top results.
   * 
   * @example
   * 776
   */
  topK?: number;
  /**
   * @remarks
   * Specifies whether to use full-text retrieval (dual-path retrieval). The default value is false, which means only vector retrieval is used.
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
   * >  You can call the [CreateDocumentCollection](https://help.aliyun.com/document_detail/2618448.html) operation to create a document collection and call the [ListDocumentCollections](https://help.aliyun.com/document_detail/2618452.html) operation to query a list of document collections.
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
   * >  You can call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation to create a namespace and call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to query a list of namespaces.
   * 
   * @example
   * ns_cloud_index
   */
  namespace?: string;
  /**
   * @remarks
   * The password of the namespace.
   * 
   * >  The value of this parameter is specified when you call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ns_password
   */
  namespacePassword?: string;
  /**
   * @remarks
   * The condition that is used to filter the data to be updated. Specify this parameter in a format that is the same as the WHERE clause.
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
   * The text content for retrieval.
   * 
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The method used to merge multiple knowledge bases. Default value: RRF. Valid values:
   * 
   * *   RRF
   * *   Weight
   * 
   * @example
   * RRF
   */
  mergeMethod?: string;
  /**
   * @remarks
   * The parameters of the merge method for each SourceCollection.
   */
  mergeMethodArgs?: QueryKnowledgeBasesContentRequestMergeMethodArgs;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The rerank factor. If you specify this parameter, the vector retrieval results are reranked once more. Valid values: 1\\<RerankFactor<=5.
   * 
   * > 
   * 
   * *   If the document is segmented into sparse parts, reranking is inefficient.
   * 
   * *   We recommend that the number of reranked results (the ceiling of TopK × RerankFactor) not exceed 50.
   * 
   * @example
   * 2
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The information about collections to retrieve from.
   * 
   * This parameter is required.
   */
  sourceCollection?: QueryKnowledgeBasesContentRequestSourceCollection[];
  /**
   * @remarks
   * Set the number of top results to be returned after merging results from multiple path retrieval.
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
      sourceCollection: { 'type': 'array', 'itemType': QueryKnowledgeBasesContentRequestSourceCollection },
      topK: 'number',
    };
  }

  validate() {
    if(this.mergeMethodArgs && typeof (this.mergeMethodArgs as any).validate === 'function') {
      (this.mergeMethodArgs as any).validate();
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

