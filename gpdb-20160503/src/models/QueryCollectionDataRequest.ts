// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCollectionDataRequestRelationalTableFilter extends $dara.Model {
  /**
   * @remarks
   * The metadata field of the vector collection, which is used to join with the fields of the relational table.
   * 
   * @example
   * doc_id
   */
  collectionMetadataField?: string;
  /**
   * @remarks
   * The filter condition for the relational table.
   * 
   * @example
   * tags @> ARRAY[\\"art\\"]
   */
  condition?: string;
  /**
   * @remarks
   * The field of the relational table, which is used to join with the metadata fields of the vector collection.
   * 
   * @example
   * id
   */
  tableField?: string;
  /**
   * @remarks
   * The name of the relational table.
   * 
   * @example
   * my_rds_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      collectionMetadataField: 'CollectionMetadataField',
      condition: 'Condition',
      tableField: 'TableField',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionMetadataField: 'string',
      condition: 'string',
      tableField: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionDataRequestSparseVector extends $dara.Model {
  /**
   * @remarks
   * The index array.
   * > The list size cannot exceed 4,000.
   */
  indices?: number[];
  /**
   * @remarks
   * The sparse vector array.
   */
  values?: number[];
  static names(): { [key: string]: string } {
    return {
      indices: 'Indices',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indices: { 'type': 'array', 'itemType': 'number' },
      values: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.indices)) {
      $dara.Model.validateArray(this.indices);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionDataRequest extends $dara.Model {
  /**
   * @remarks
   * The collection name.
   * 
   * > You can call the [ListCollections](https://help.aliyun.com/document_detail/2401503.html) operation to view the list.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * The content used for full-text retrieval. If this parameter is left empty, only vector retrieval is used. If this parameter is specified, both vector and full-text retrieval are used.
   * 
   * > This parameter and the Vector parameter cannot be left empty at the same time.
   * 
   * @example
   * hello_world
   */
  content?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance IDs.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The filter condition for the data to query, in the SQL WHERE clause format. It is an expression that returns a Boolean value (true or false). The condition can be a simple comparison operator, such as equal to (=), not equal to (<> or !=), greater than (>), less than (<), greater than or equal to (>=), or less than or equal to (<=). It can also be a more complex expression combined with logical operators (AND, OR, NOT), or a condition that uses keywords such as IN, BETWEEN, and LIKE.
   * 
   * > 
   * > - For detailed syntax, refer to https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-where/
   * 
   * @example
   * pipeline_id=\\"1yhpmo0rbn\\" AND (spu=\\"10025667796135\\" AND dept_id=\\"226\\")
   */
  filter?: string;
  /**
   * @remarks
   * The dual-channel recall algorithm. Default value: empty (which means the vector and full-text scores are directly compared and sorting is applied). Valid values:
   * 
   * - RRF: reciprocal rank fusion. A parameter k is used to control the fusion effect. For more information, see the HybridSearchArgs configuration.
   * - Weight: weighted sorting. A parameter alpha is used to control the weight of the vector and full-text scores before sorting. For more information, see the HybridSearchArgs configuration.
   * - Cascaded: full-text retrieval is performed first, and then vector retrieval is performed based on the results.
   * 
   * @example
   * RRF
   */
  hybridSearch?: string;
  /**
   * @remarks
   * The algorithm parameters for hybrid search. RRF and Weight are supported:
   * 
   * - RRF: specifies the constant k in the score calculation formula `1/(k+rank_i)`. The value must be a positive integer greater than 1. Format:
   * ```
   * { 
   *    "RRF": {
   *     "k": 60
   *    }
   * }
   * ```
   * 
   * - Weight: The calculation formula is `alpha * vector_score + (1-alpha) * text_score`. The parameter alpha represents the weight of the vector and full-text search scores. The value ranges from 0 to 1, where 0 indicates full-text search only and 1 indicates vector search only. Format:
   * ```
   * { 
   *    "Weight": {
   *     "alpha": 0.5
   *    }
   * }
   * ```
   */
  hybridSearchArgs?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The metadata fields to return. Default value: empty. Separate multiple fields with commas.
   * 
   * @example
   * title,content
   */
  includeMetadataFields?: string;
  /**
   * @remarks
   * Specifies whether to return sparse vector data. Valid values:
   * - **true**: returns sparse vector data.
   * - **false**: does not return sparse vector data.
   * 
   * @example
   * false
   */
  includeSparseValues?: boolean;
  /**
   * @remarks
   * Specifies whether to return dense vector data. Valid values:
   * - **true**: returns dense vector data.
   * - **false**: does not return dense vector data.
   * 
   * @example
   * true
   */
  includeValues?: boolean;
  /**
   * @remarks
   * The similarity algorithm used during search. Valid values:
   * - **l2**: Euclidean distance.
   * - **ip**: Dot product (inner product) distance.
   * - **cosine**: Cosine similarity.
   * 
   * > If this parameter is left empty, the algorithm specified when the index is built is used.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * > You can call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to view the list.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password for the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  namespacePassword?: string;
  /**
   * @remarks
   * The retrieval starting point during paged queries. Default value: empty. This parameter is not supported in dual-channel recall scenarios.
   * 
   * The value must be greater than or equal to 0. If this parameter is specified, the Total parameter is returned to indicate the total number of hits. This parameter is used together with TopK. For example, to retrieve chunks with chunk_id ranging from 0 to 44 with a paging size of 20, you must make three requests:
   * - Offset=0, TopK=20 returns chunks with chunk_id ranging from 0 to 19.
   * - Offset=20, TopK=20 returns chunks with chunk_id ranging from 20 to 39.
   * - Offset=30, TopK=20 returns chunks with chunk_id ranging from 40 to 44.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The field based on which the results are sorted. Default value: empty. This parameter is not supported in hybrid search scenarios.
   * 
   * The field must belong to the metadata or be a default field in the table, such as id. Supported formats:
   * - A single field, such as chunk_id.
   * - Multiple fields separated by commas, such as block_id, chunk_id.
   * - Descending order, such as block_id DESC, chunk_id DESC.
   * 
   * @example
   * chunk_id
   */
  orderBy?: string;
  ownerId?: number;
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
   * Uses another relational table to filter vector data, similar to the JOIN operation.
   * 
   * > You can set the IncludeMetadataFields parameter to return data from the relational table. For example, rds_table_name.id indicates that the id field of the relational table is returned.
   */
  relationalTableFilter?: QueryCollectionDataRequestRelationalTableFilter;
  /**
   * @remarks
   * The list of sparse vector data.
   */
  sparseVector?: QueryCollectionDataRequestSparseVector;
  /**
   * @remarks
   * The number of top results to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  topK?: number;
  /**
   * @remarks
   * The vector data. The length must be consistent with the dimension specified in the [CreateCollection](https://help.aliyun.com/document_detail/2401497.html) operation.
   * > 
   * > - If SparseVector is left empty, the system uses it to retrieve only dense vector results.
   * > - If both Vector and SparseVector are left empty, the system uses it to retrieve only full-text results.
   */
  vector?: number[];
  /**
   * @remarks
   * The ID of the workspace that consists of multiple database instances. This parameter and the DBInstanceId parameter cannot be left empty at the same time. If both parameters are specified, this parameter takes precedence.
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
      hybridSearchArgs: 'HybridSearchArgs',
      includeMetadataFields: 'IncludeMetadataFields',
      includeSparseValues: 'IncludeSparseValues',
      includeValues: 'IncludeValues',
      metrics: 'Metrics',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      offset: 'Offset',
      orderBy: 'OrderBy',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      relationalTableFilter: 'RelationalTableFilter',
      sparseVector: 'SparseVector',
      topK: 'TopK',
      vector: 'Vector',
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
      hybridSearchArgs: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      includeMetadataFields: 'string',
      includeSparseValues: 'boolean',
      includeValues: 'boolean',
      metrics: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      offset: 'number',
      orderBy: 'string',
      ownerId: 'number',
      regionId: 'string',
      relationalTableFilter: QueryCollectionDataRequestRelationalTableFilter,
      sparseVector: QueryCollectionDataRequestSparseVector,
      topK: 'number',
      vector: { 'type': 'array', 'itemType': 'number' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.hybridSearchArgs) {
      $dara.Model.validateMap(this.hybridSearchArgs);
    }
    if(this.relationalTableFilter && typeof (this.relationalTableFilter as any).validate === 'function') {
      (this.relationalTableFilter as any).validate();
    }
    if(this.sparseVector && typeof (this.sparseVector as any).validate === 'function') {
      (this.sparseVector as any).validate();
    }
    if(Array.isArray(this.vector)) {
      $dara.Model.validateArray(this.vector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

