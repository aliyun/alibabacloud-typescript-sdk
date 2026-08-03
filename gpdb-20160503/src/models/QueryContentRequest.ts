// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContentRequestGraphSearchArgs extends $dara.Model {
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

export class QueryContentRequestRerankModel extends $dara.Model {
  /**
   * @remarks
   * This parameter can be set when RerankModel.Name is qwen3-rerank. Specifies a custom sorting task type description that guides the model to adopt different sorting strategies.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The rerank model name. Valid values: qwen3-rerank, gte-rerank-v2.
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

export class QueryContentRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the document collection.
   * 
   * > The document collection is created by calling the [CreateDocumentCollection](https://help.aliyun.com/document_detail/2618448.html) operation. You can call the [ListDocumentCollections](https://help.aliyun.com/document_detail/2618452.html) operation to query existing document collections.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * The text content used for retrieval.
   * 
   * @example
   * What is AnalyticDB for PostgreSQL?
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
   * The name of the source image file to search in image-to-image search scenarios.
   * 
   * > The image file must have a file extension. Currently supported image extensions: bmp, jpg, jpeg, png, and tiff.
   * 
   * @example
   * test.jpg
   */
  fileName?: string;
  /**
   * @remarks
   * The publicly accessible URL of the image file in image-to-image search scenarios.
   * 
   * > The image file must have a file extension. Currently supported image extensions: bmp, jpg, jpeg, png, and tiff.
   * 
   * @example
   * https://xx/myImage.jpg
   */
  fileUrl?: string;
  /**
   * @remarks
   * The filter condition for the data to query, in SQL WHERE clause format. The expression returns a Boolean value (true or false). Conditions can be simple comparison operators such as equal to (=), not equal to (<> or !=), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=). Conditions can also be more complex expressions combined with logical operators (AND, OR, NOT), as well as conditions using IN, BETWEEN, and LIKE keywords.
   * 
   * > 
   * > - For detailed syntax, refer to: https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-where/
   * 
   * @example
   * title = \\"test\\" AND name like \\"test%\\"
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to enable knowledge graph enhancement. Default value: false.
   * 
   * @example
   * false
   */
  graphEnhance?: boolean;
  /**
   * @remarks
   * The knowledge graph retrieval parameters.
   */
  graphSearchArgs?: QueryContentRequestGraphSearchArgs;
  /**
   * @remarks
   * The multi-channel recall algorithm. Default value: empty (scores from dense vectors and full-text retrieve are directly compared and sorting is performed).
   * 
   * Valid values:
   * 
   * - RRF: Reciprocal rank fusion. A parameter k controls the fusion effect. For more information, see the HybridSearchArgs configuration.
   * - Weight: Weighted sorting. Parameters control the score weights of vector retrieve and full-text retrieve results before sorting. For more information, see the HybridSearchArgs configuration.
   * - Cascaded: Full-text retrieve is performed first, followed by vector retrieve on the full-text retrieve results.
   * 
   * @example
   * RRF
   */
  hybridSearch?: string;
  /**
   * @remarks
   * The algorithm parameters for multi-channel recall. Currently, RRF and Weight are supported. HybridPathsSetting specifies the recall paths: dense vectors (dense), sparse vectors (sparse), and full-text retrieve (fulltext). If the value is empty, dense vectors (dense) and full-text retrieve (fulltext) are recalled by default.
   * 
   * - RRF: Specifies the k constant in the score calculation formula `1/(k+rank_i)`. The value must be a positive integer greater than 1. Format:
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
   *       - Formula: alpha * dense_score + (1-alpha) * fulltext_score. The alpha parameter specifies the score weight between dense vectors and full-text retrieve. Valid values: 0 to 1, where 0 indicates full-text retrieve only and 1 indicates dense vectors only:
   * ```
   * { 
   *    "Weight": {
   *     "alpha": 0.5
   *    }
   * }
   * ```
   *   - Three-path recall pattern:
   *      - Formula: normalized_dense * dense_score + normalized_sparse * sparse_score + normalized_fulltext * fulltext_score. The dense, sparse, and fulltext parameters represent the weights of dense vectors, sparse vectors, and full-text retrieve respectively. Valid values: greater than or equal to 0. The system automatically performs normalization on the weights to 0–1 (normalized_x = x / (dense + sparse + fulltext)).
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
  hybridSearchArgs?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * Specifies whether to synchronously return the URL of the document. By default, the URL is not returned.
   * 
   * @example
   * false
   */
  includeFileUrl?: boolean;
  /**
   * @remarks
   * The metadata fields to return, separated by commas. Default value: empty.
   * 
   * @example
   * title,page
   */
  includeMetadataFields?: string;
  /**
   * @remarks
   * Specifies whether to return vectors. Default value: false.
   * > - **false**: Does not return vectors.
   * > - **true**: Returns vectors.
   * 
   * @example
   * true
   */
  includeVector?: boolean;
  /**
   * @remarks
   * The similarity algorithm used during retrieval. If this value is empty, the algorithm specified when the knowledge base was created is used. Leave this parameter empty unless you have specific requirements.
   * 
   * > Valid values:
   * > - **l2**: Euclidean distance.
   * > - **ip**: inner product distance.
   * > - **cosine**: cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The namespace. Default value: public.
   * 
   * > You can create a namespace by calling the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation and query the list of namespaces by calling the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation.
   * 
   * @example
   * mynamespace
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
   * testpassword
   */
  namespacePassword?: string;
  /**
   * @remarks
   * The offset for paging query.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The field used for sorting. Default value: empty.
   * 
   * The field must belong to metadata or a default field in the table such as id. Supported formats:
   * 
   * Single field, such as chunk_id.
   * Multiple fields separated by commas, such as block_id, chunk_id.
   * Descending order, such as block_id DESC, chunk_id DESC.
   * 
   * @example
   * created_at
   */
  orderBy?: string;
  ownerId?: number;
  /**
   * @remarks
   * The recall window. When this value is not empty, the context of the retrieval results is also returned. The format is a 2-element array: List<A, B>, where -10<=A<=0 and 0<=B<=10.
   * > - Use this parameter when documents are split into overly small chunks and retrieval may lose contextual information.
   * > - Reranking takes priority over windowing, meaning reranking is performed first, followed by windowing.
   */
  recallWindow?: number[];
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reranking factor. When this value is not empty, the vector retrieve results are reranked. Valid values: 1 < RerankFactor <= 5.
   * > - Reranking is slower when documents are sparsely chunked.
   * > - The total number of items to rerank (TopK × Factor, rounded up) should not exceed 50.
   * 
   * @example
   * 2
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The rerank model parameters.
   */
  rerankModel?: QueryContentRequestRerankModel;
  /**
   * @remarks
   * The number of top results to return.
   * 
   * @example
   * 10
   */
  topK?: number;
  /**
   * @remarks
   * The validity period of the returned image URL.
   * 
   * > Valid values:
   * > - Supports seconds (s) and days (d) as units. For example, 300s indicates a validity period of 300 seconds, and 60d indicates a validity period of 60 days.
   * > - Valid values: 60s to 365d.
   * > - Default value: 7200s (2 hours).
   * 
   * @example
   * 7200s
   */
  urlExpiration?: string;
  /**
   * @remarks
   * **[Deprecated]** Specifies whether to use full-text retrieve (dual-path recall). Default value: false, which indicates that only vector retrieve is used.
   * 
   * @example
   * true
   */
  useFullTextRetrieval?: boolean;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      content: 'Content',
      DBInstanceId: 'DBInstanceId',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      filter: 'Filter',
      graphEnhance: 'GraphEnhance',
      graphSearchArgs: 'GraphSearchArgs',
      hybridSearch: 'HybridSearch',
      hybridSearchArgs: 'HybridSearchArgs',
      includeFileUrl: 'IncludeFileUrl',
      includeMetadataFields: 'IncludeMetadataFields',
      includeVector: 'IncludeVector',
      metrics: 'Metrics',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      offset: 'Offset',
      orderBy: 'OrderBy',
      ownerId: 'OwnerId',
      recallWindow: 'RecallWindow',
      regionId: 'RegionId',
      rerankFactor: 'RerankFactor',
      rerankModel: 'RerankModel',
      topK: 'TopK',
      urlExpiration: 'UrlExpiration',
      useFullTextRetrieval: 'UseFullTextRetrieval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      content: 'string',
      DBInstanceId: 'string',
      fileName: 'string',
      fileUrl: 'string',
      filter: 'string',
      graphEnhance: 'boolean',
      graphSearchArgs: QueryContentRequestGraphSearchArgs,
      hybridSearch: 'string',
      hybridSearchArgs: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      includeFileUrl: 'boolean',
      includeMetadataFields: 'string',
      includeVector: 'boolean',
      metrics: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      offset: 'number',
      orderBy: 'string',
      ownerId: 'number',
      recallWindow: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
      rerankFactor: 'number',
      rerankModel: QueryContentRequestRerankModel,
      topK: 'number',
      urlExpiration: 'string',
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

