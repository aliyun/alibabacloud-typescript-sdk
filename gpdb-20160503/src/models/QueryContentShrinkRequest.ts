// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the document collection.
   * 
   * > A document collection is created by calling the [CreateDocumentCollection](https://help.aliyun.com/document_detail/2618448.html) operation. Call the [ListDocumentCollections](https://help.aliyun.com/document_detail/2618452.html) operation to list your document collections.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * The text to use for retrieval.
   * 
   * @example
   * What is AnalyticDB for PostgreSQL?
   */
  content?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to find the IDs of all AnalyticDB for PostgreSQL instances in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The filename of the source image for a search-by-image query.
   * 
   * > The image file must have a file extension. The supported extensions are bmp, jpg, jpeg, png, and tiff.
   * 
   * @example
   * test.jpg
   */
  fileName?: string;
  /**
   * @remarks
   * The publicly accessible URL of the image file for a search-by-image query.
   * 
   * > The image file must have a file extension. The supported extensions are bmp, jpg, jpeg, png, and tiff.
   * 
   * @example
   * https://xx/myImage.jpg
   */
  fileUrl?: string;
  /**
   * @remarks
   * A filter condition for the query, specified as a SQL `WHERE` clause that returns a boolean value. The clause can use comparison operators (such as `=`, `<>`, `!=`, `>`, `<`, `>=`, and `<=`), logical operators (`AND`, `OR`, and `NOT`), and keywords such as `IN`, `BETWEEN`, and `LIKE`.
   * 
   * > - For details about the syntax, see https\\://www\\.postgresqltutorial.com/postgresql-tutorial/postgresql-where/.
   * 
   * @example
   * title = \\"test\\" AND name like \\"test%\\"
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to enable knowledge graph enhancement. The default value is `false`.
   * 
   * @example
   * false
   */
  graphEnhance?: boolean;
  /**
   * @remarks
   * The parameters for knowledge graph retrieval.
   */
  graphSearchArgsShrink?: string;
  /**
   * @remarks
   * Specifies the hybrid search algorithm. If this parameter is not specified, the system directly compares and sorts the scores from dense vector retrieval and full-text search.
   * 
   * Valid values:
   * 
   * - RRF: reciprocal rank fusion. This method uses a `k` parameter to control the fusion effect. For more information, see the `HybridSearchArgs` parameter.
   * 
   * - Weight: A weighted sorting method. This method uses parameters to control the score weights of vector retrieval and full-text search before sorting. For more information, see the `HybridSearchArgs` parameter.
   * 
   * - Cascaded: Performs full-text search first, and then performs vector retrieval on the results.
   * 
   * @example
   * RRF
   */
  hybridSearch?: string;
  /**
   * @remarks
   * Parameters for the multi-channel recall algorithm. Currently, `RRF` and `Weight` are supported. `HybridPathsSetting` can be used to specify the recall paths, including dense vector search (`dense`), sparse vector search (`sparse`), and full-text search (`fulltext`). If this parameter is not specified, the system recalls dense vectors and full-text search results by default.
   * 
   * - RRF: Specifies the constant `k` in the scoring formula `1/(k+rank_i)`. The value must be an integer greater than 1. Example:
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
   * - Weight:
   * 
   *   - For dual-channel recall (if `HybridPathsSetting` is not specified, only `alpha` is configured):
   * 
   *     - The score is calculated using the formula: `alpha * dense_score + (1-alpha) * fulltext_score`. The `alpha` parameter represents the score weight of dense vector retrieval relative to full-text search. The value must be in the range of 0 to 1. A value of 0 indicates that only full-text search is used, and a value of 1 indicates that only dense vector retrieval is used.
   * 
   * ```
   * { 
   *    "Weight": {
   *     "alpha": 0.5
   *    }
   * }
   * ```
   * 
   * - For three-channel recall:
   * 
   *   - The score is calculated using the formula: `normalized_dense * dense_score + normalized_sparse * sparse_score + normalized_fulltext * fulltext_score`. The `dense`, `sparse`, and `fulltext` parameters represent the weights for the dense vector, sparse vector, and full-text search results, respectively. Their values must be greater than or equal to 0. The system automatically normalizes the weights to a sum of 1 (for example, `normalized_x = x / (dense + sparse + fulltext)`).
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
  hybridSearchArgsShrink?: string;
  /**
   * @remarks
   * Specifies whether to return the URL of the document. The default value is `false`.
   * 
   * @example
   * false
   */
  includeFileUrl?: boolean;
  /**
   * @remarks
   * The metadata fields to include in the response. If left empty, no metadata is returned. To specify multiple fields, use a comma-separated list.
   * 
   * @example
   * title,page
   */
  includeMetadataFields?: string;
  /**
   * @remarks
   * Specifies whether to include the vector in the results. The default value is `false`.
   * 
   * > - **false**: The vector is not returned.
   * >
   * > - **true**: The vector is returned.
   * 
   * @example
   * true
   */
  includeVector?: boolean;
  /**
   * @remarks
   * The similarity algorithm used for retrieval. If this parameter is not specified, the algorithm that was specified when the document collection was created is used. We recommend that you do not set this parameter unless you have specific requirements.
   * 
   * > Valid values:
   * >
   * > - **l2**: Euclidean distance.
   * >
   * > - **ip**: dot product (inner product) distance.
   * >
   * > - **cosine**: cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The namespace. The default value is `public`.
   * 
   * > You can call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation to create a namespace and the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to list existing namespaces.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password for the namespace.
   * 
   * > This password is set when you call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  namespacePassword?: string;
  /**
   * @remarks
   * The offset for paginated queries.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The field to sort the results by. By default, this parameter is empty.
   * 
   * The field must be a metadata field or a default field from the table, such as `id`. Supported formats include single fields (e.g., `chunk_id`), multiple comma-separated fields (e.g., `block_id, chunk_id`), and fields with a sort direction (e.g., `block_id DESC, chunk_id DESC`).
   * 
   * @example
   * created_at
   */
  orderBy?: string;
  ownerId?: number;
  /**
   * @remarks
   * The recall window. If this parameter is specified, additional context is returned with the retrieval results. The value must be a two-element array, `[A, B]`, where `-10 <= A <= 0` and `0 <= B <= 10`.
   * 
   * > - Use this parameter when documents are finely chunked and retrieval might otherwise lose contextual information.
   * >
   * > - Reranking is prioritized over windowing. The system first applies reranking and then processes the window.
   */
  recallWindowShrink?: string;
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
   * The factor for reranking vector retrieval results. The value must be greater than 1 and less than or equal to 5.
   * 
   * > - Reranking may be slower if document chunks are sparse.
   * >
   * > - For best performance, the number of items to be reranked (`TopK` \\* `RerankFactor`, rounded up) should not exceed 50.
   * 
   * @example
   * 2
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The parameters for the reranking model.
   */
  rerankModelShrink?: string;
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
   * > - The value can be specified in seconds (s) or days (d). For example, `300s` indicates that the link is valid for 300 seconds, and `60d` indicates that the link is valid for 60 days.
   * >
   * > - The value must be in the range of `60s` to `365d`.
   * >
   * > - Default value: `7200s` (2 hours).
   * 
   * @example
   * 7200s
   */
  urlExpiration?: string;
  /**
   * @remarks
   * (Deprecated) Specifies whether to use full-text search (dual-channel recall). The default value is `false`, which means only vector retrieval is used.
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
      graphSearchArgsShrink: 'GraphSearchArgs',
      hybridSearch: 'HybridSearch',
      hybridSearchArgsShrink: 'HybridSearchArgs',
      includeFileUrl: 'IncludeFileUrl',
      includeMetadataFields: 'IncludeMetadataFields',
      includeVector: 'IncludeVector',
      metrics: 'Metrics',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      offset: 'Offset',
      orderBy: 'OrderBy',
      ownerId: 'OwnerId',
      recallWindowShrink: 'RecallWindow',
      regionId: 'RegionId',
      rerankFactor: 'RerankFactor',
      rerankModelShrink: 'RerankModel',
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
      graphSearchArgsShrink: 'string',
      hybridSearch: 'string',
      hybridSearchArgsShrink: 'string',
      includeFileUrl: 'boolean',
      includeMetadataFields: 'string',
      includeVector: 'boolean',
      metrics: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      offset: 'number',
      orderBy: 'string',
      ownerId: 'number',
      recallWindowShrink: 'string',
      regionId: 'string',
      rerankFactor: 'number',
      rerankModelShrink: 'string',
      topK: 'number',
      urlExpiration: 'string',
      useFullTextRetrieval: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

