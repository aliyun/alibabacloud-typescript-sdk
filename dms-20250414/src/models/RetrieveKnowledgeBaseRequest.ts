// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * A filter for the data, specified as a SQL `WHERE` clause.
   * 
   * @example
   * title = \\"test\\" AND name like \\"test%\\"
   */
  filter?: string;
  /**
   * @remarks
   * The hybrid search algorithm. If this parameter is not set, the system directly compares and ranks the scores from the dense vector and full-text searches.
   * 
   * Valid values:
   * 
   * - `RRF`: Reciprocal Rank Fusion. This method uses a parameter `k` to control the fusion effect. For more information, see the `HybridSearchArgs` configuration.
   * 
   * - `Weight`: Weighted ranking. This method applies weights to the vector and full-text search scores before ranking. For more information, see the `HybridSearchArgs` configuration.
   * 
   * - `Cascaded`: Performs a full-text search first, followed by a vector search on the results of the full-text search.
   * 
   * @example
   * RRF
   */
  hybridSearch?: string;
  /**
   * @remarks
   * Parameters for the specified `HybridSearch` algorithm. Both `RRF` and `Weight` are supported. You can use the `HybridPathsSetting` object to specify the retrieval paths: dense vector (`dense`), sparse vector (`sparse`), and full-text search (`fulltext`). If this object is not provided, the default retrieval paths are `dense` and `fulltext`.
   * 
   * - `RRF`: Specifies the constant `k` in the scoring formula `1/(k+rank_i)`. The value of `k` must be an integer greater than 1. The format is as follows:
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
   *   - Two-path recall (do not specify `HybridPathsSetting`; specify only `alpha`):
   * 
   *     - The score is calculated using the formula: `alpha * dense_score + (1-alpha) * fulltext_score`. The `alpha` parameter balances the scores from the dense vector and full-text searches. Its value must be in the range [0, 1], where 0 relies solely on full-text search, and 1 relies solely on dense vector search.
   * 
   * ```
   * { 
   *    "Weight": {
   *     "alpha": 0.5
   *    }
   * }
   * ```
   * 
   * - Three-path recall:
   * 
   *   - The score is calculated using the formula: `normalized_dense * dense_score + normalized_sparse * sparse_score + normalized_fulltext * fulltext_score`. The `dense`, `sparse`, and `fulltext` parameters are the weights for the dense vector, sparse vector, and full-text searches, respectively. Their values must be 0 or greater. The system automatically normalizes the weights to sum to 1 (for example, `normalized_x = x / (dense + sparse + fulltext)`).
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
   * 
   * @example
   * { \\"Weight\\": { \\"alpha\\": 0.5 } }
   */
  hybridSearchArgs?: string;
  /**
   * @remarks
   * The metadata fields to return, separated by commas. By default, no metadata fields are returned.
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
   * false
   */
  includeVector?: boolean;
  /**
   * @remarks
   * The ID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * kb-***
   */
  kbUuid?: string;
  /**
   * @remarks
   * The distance metric for retrieval. If unspecified, this defaults to the metric configured for the knowledge base. Only set this parameter if you have specific requirements.
   * 
   * Valid values:
   * 
   * - `l2`: Euclidean distance.
   * 
   * - `ip`: Inner product.
   * 
   * - `cosine`: Cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The offset for pagination.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The field to use for sorting the results. By default, this parameter is empty.
   * 
   * The field must be a metadata field or a default table field, such as `id`. Supported formats include:
   * 
   * You can specify a single field (for example, `chunk_id`), multiple comma-separated fields (for example, `block_id, chunk_id`), or fields with descending order (for example, `block_id DESC, chunk_id DESC`).
   * 
   * @example
   * created_at
   */
  orderBy?: string;
  /**
   * @remarks
   * The query text.
   * 
   * This parameter is required.
   * 
   * @example
   * What is GraphRAG?
   */
  query?: string;
  /**
   * @remarks
   * The recall window. If specified, this parameter expands the context of the retrieved results. The format is a two-element array `[A, B]`, where `-10 <= A <= 0` and `0 <= B <= 10`.
   * 
   * > - Recommended when document chunks are highly fragmented, which might cause context loss during retrieval.
   * >
   * > - Reranking occurs before windowing is applied.
   * 
   * @example
   * [-5,5]
   */
  recallWindow?: string;
  /**
   * @remarks
   * The factor used to rerank vector search results. The value must be in the range (1, 5].
   * 
   * > - Reranking may be slow if document chunks are sparse.
   * >
   * > - The number of items to rerank, calculated as `ceil(TopK * RerankFactor)`, should not exceed 50.
   * 
   * @example
   * 2
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The number of top-ranked results to return.
   * 
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      hybridSearch: 'HybridSearch',
      hybridSearchArgs: 'HybridSearchArgs',
      includeMetadataFields: 'IncludeMetadataFields',
      includeVector: 'IncludeVector',
      kbUuid: 'KbUuid',
      metrics: 'Metrics',
      offset: 'Offset',
      orderBy: 'OrderBy',
      query: 'Query',
      recallWindow: 'RecallWindow',
      rerankFactor: 'RerankFactor',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      hybridSearch: 'string',
      hybridSearchArgs: 'string',
      includeMetadataFields: 'string',
      includeVector: 'boolean',
      kbUuid: 'string',
      metrics: 'string',
      offset: 'number',
      orderBy: 'string',
      query: 'string',
      recallWindow: 'string',
      rerankFactor: 'number',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

