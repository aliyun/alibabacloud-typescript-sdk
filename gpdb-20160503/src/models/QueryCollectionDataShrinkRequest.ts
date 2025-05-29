// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCollectionDataShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Collection name.
   * 
   * > You can use the [ListCollections](https://help.aliyun.com/document_detail/2401503.html) API to view the list.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * Content for full-text search. When this value is empty, only vector search is used; when it is not empty, both vector and full-text search are used.
   * 
   * > The Vector parameter cannot be empty at the same time.
   * 
   * @example
   * hello_world
   */
  content?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) API to view details of all AnalyticDB PostgreSQL instances in the target region, including the instance ID.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  filter?: string;
  /**
   * @remarks
   * Dual-path recall algorithm, default is empty (i.e., directly compare and sort the scores of vectors and full-text).
   * 
   * Available values:
   * 
   * - RRF: Reciprocal rank fusion, with a parameter k controlling the fusion effect. See HybridSearchArgs configuration for details;
   * - Weight: Weighted sorting, using a parameter alpha to control the score ratio of vectors and full-text, then sorting. See HybridSearchArgs configuration for details;
   * - Cascaded: Perform full-text search first, then vector search based on the full-text results;
   * 
   * @example
   * RRF
   */
  hybridSearch?: string;
  /**
   * @remarks
   * The parameters of the two-way retrieval algorithm. The following parameters are supported:
   * 
   * *   When HybridSearch is set to RRF, the scores are calculated by using the `1/(k+rank_i)` formula. The constant k is a positive integer that is greater than 1.
   * 
   * <!---->
   * 
   *     { 
   *        "RRF": {
   *         "k": 60
   *        }
   *     }
   * 
   * *   When HybridSearch is set to Weight, the scores are calculated by using the `alpha * vector_score + (1-alpha) * text_score` formula. The alpha parameter specifies the proportion of the vector search score and the full-text search score and ranges from 0 to 1. A value of 0 specifies full-text search and a value of 1 specifies vector search.
   * 
   * <!---->
   * 
   *     { 
   *        "Weight": {
   *         "alpha": 0.5
   *        }
   *     }
   */
  hybridSearchArgsShrink?: string;
  /**
   * @remarks
   * Defaults to empty, indicating the metadata fields to return. Multiple fields should be separated by commas.
   * 
   * @example
   * title,content
   */
  includeMetadataFields?: string;
  /**
   * @remarks
   * Whether to return vector data. Value descriptions:
   * - **true**: Return vector data.
   * - **false**: Do not return vector data, used for full-text search scenarios.
   * 
   * @example
   * true
   */
  includeValues?: boolean;
  /**
   * @remarks
   * Similarity algorithm used during retrieval. Value descriptions:
   * - **l2**: Euclidean distance.
   * - **ip**: Inner product (dot product) distance.
   * - **cosine**: Cosine similarity.
   * 
   * > If this value is empty, the algorithm specified during index creation is used.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * Namespace.
   * 
   * > You can use the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) API to view the list.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * Password for the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  namespacePassword?: string;
  /**
   * @remarks
   * Defaults to empty, indicating the starting point for pagination queries. Does not support hybrid search scenarios.
   * 
   * The value must be >= 0. When this value is not empty, it will return `Total`, which indicates the total number of hits. This parameter works with `TopK`. For example, to paginate 20 and retrieve chunks with `chunk_id` from 0 to 44, you need to make three requests:
   * - `Offset=0, TopK=20` returns `chunk_id` 0~19
   * - `Offset=20, TopK=20` returns `chunk_id` 20~39
   * - `Offset=30, TopK=20` returns `chunk_id` 40~44
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * Defaults to empty, indicating the field for sorting. Does not support hybrid search scenarios.
   * 
   * The field must belong to metadata or be a default field in the table, such as `id`. The supported formats are:
   * - A single field, e.g., `chunk_id`;
   * - Multiple fields, separated by commas, e.g., `block_id, chunk_id`;
   * - Supports reverse order, e.g., `block_id DESC, chunk_id DESC`;
   * 
   * @example
   * chunk_id
   */
  orderBy?: string;
  ownerId?: number;
  /**
   * @remarks
   * Region ID where the instance is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Uses another relational table to filter vector data (similar to a Join function).
   * 
   * > Data from the relational table can be returned by setting the `IncludeMetadataFields` parameter. For example, `rds_table_name.id` indicates returning the `id` field from the relational table.
   */
  relationalTableFilterShrink?: string;
  sparseVectorShrink?: string;
  /**
   * @remarks
   * Set the number of top results to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  topK?: number;
  /**
   * @remarks
   * Vector data, with the same dimension as specified in the [CreateCollection](https://help.aliyun.com/document_detail/2401497.html) API.
   * > When the vector is empty, only full-text search results are returned.
   */
  vectorShrink?: string;
  /**
   * @remarks
   * The ID of the Workspace composed of multiple database instances. This parameter and `DBInstanceId` cannot both be empty. If both are specified, this parameter takes precedence.
   * 
   * @example
   * gp-ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      content: 'Content',
      DBInstanceId: 'DBInstanceId',
      filter: 'Filter',
      hybridSearch: 'HybridSearch',
      hybridSearchArgsShrink: 'HybridSearchArgs',
      includeMetadataFields: 'IncludeMetadataFields',
      includeValues: 'IncludeValues',
      metrics: 'Metrics',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      offset: 'Offset',
      orderBy: 'OrderBy',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      relationalTableFilterShrink: 'RelationalTableFilter',
      sparseVectorShrink: 'SparseVector',
      topK: 'TopK',
      vectorShrink: 'Vector',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      content: 'string',
      DBInstanceId: 'string',
      filter: 'string',
      hybridSearch: 'string',
      hybridSearchArgsShrink: 'string',
      includeMetadataFields: 'string',
      includeValues: 'boolean',
      metrics: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      offset: 'number',
      orderBy: 'string',
      ownerId: 'number',
      regionId: 'string',
      relationalTableFilterShrink: 'string',
      sparseVectorShrink: 'string',
      topK: 'number',
      vectorShrink: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

