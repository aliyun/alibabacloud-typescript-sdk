// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCollectionRequestSparseVectorIndexConfig extends $dara.Model {
  /**
   * @remarks
   * The vector index algorithm.
   * 
   * Valid values:
   * 
   * - `hnswflat`: (Default) An HNSW index without quantization compression.
   * 
   * - `novam`: A graph index without quantization compression. This algorithm is suitable for high-performance scenarios, such as real-time recommendations.
   * 
   * @example
   * hnswflat
   */
  algorithm?: string;
  /**
   * @remarks
   * The size of the candidate set for HNSW index construction. The value must be an integer from 4 to 1,000. The default is 64.
   * 
   * > This parameter is required only for AnalyticDB for PostgreSQL V7.0 instances, and its value must be greater than or equal to `2 * HnswM`.
   * 
   * @example
   * 128
   */
  hnswEfConstruction?: number;
  /**
   * @remarks
   * The maximum number of neighbors for the HNSW algorithm. You do not typically need to set this parameter, as the system automatically determines a value based on the vector dimension.
   * 
   * > Value range:
   * >
   * > - For AnalyticDB for PostgreSQL V6.0 instances: 1 to 1000.
   * >
   * > - For AnalyticDB for PostgreSQL V7.0 instances: 2 to 100. The default value is 16.
   * 
   * > We recommend that you set this parameter based on the vector dimension:
   * >
   * > - 16 for dimensions less than or equal to 384.
   * >
   * > - 32 for dimensions greater than 384 and less than or equal to 768.
   * >
   * > - 64 for dimensions greater than 768 and less than or equal to 1024.
   * >
   * > - 128 for dimensions greater than 1024.
   * 
   * @example
   * 64
   */
  hnswM?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      hnswEfConstruction: 'HnswEfConstruction',
      hnswM: 'HnswM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      hnswEfConstruction: 'number',
      hnswM: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCollectionRequestVectorIndexConfig extends $dara.Model {
  /**
   * @remarks
   * The number of lists (partitions) for a `novad` index. The value must be an integer from 2 to 1,073,741,824. The default is 256.
   * 
   * @example
   * 256
   */
  nlist?: number;
  /**
   * @remarks
   * The number of bits for `rabitq` compression. The value must be an integer from 1 to 8. The default is 3.
   * 
   * @example
   * 3
   */
  rabitqBits?: number;
  static names(): { [key: string]: string } {
    return {
      nlist: 'Nlist',
      rabitqBits: 'RabitqBits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nlist: 'number',
      rabitqBits: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The vector index algorithm.
   * 
   * Valid values:
   * 
   * - `hnswflat`: (Default) An HNSW index without quantization compression.
   * 
   * - `novam`: A graph index without quantization compression. This algorithm is suitable for high-performance scenarios, such as real-time recommendations.
   * 
   * - `novad`: A partitioned index with `rabitq` quantization. This algorithm is suitable for large-scale, low-cost retrieval scenarios.
   * 
   * @example
   * hnswflat
   */
  algorithm?: string;
  /**
   * @remarks
   * The name of the collection to create.
   * 
   * > The name must comply with PostgreSQL object naming conventions.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in a specific region.
   * 
   * @example
   * gp-bp152460513z****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The vector dimension.
   * 
   * > If you specify this parameter, a vector index is created. In subsequent calls to the [UpsertCollectionData](https://help.aliyun.com/document_detail/2401493.html) operation, the length of `Rows.Vector` must match this dimension. If you do not specify this parameter, you must call the [CreateVectorIndex](https://help.aliyun.com/document_detail/2401499.html) operation to create an index later.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * Specifies whether to use `mmap` to build the HNSW index. The default value is 0. We recommend setting this to 1 if your data does not require deletion and you need high-performance data ingestion.
   * 
   * Valid values:
   * 
   * - `0`: (Default) Builds the index by using segmented page storage. This mode can use the `shared_buffer` in PostgreSQL for caching and supports `DELETE` and `UPDATE` operations.
   * 
   * - `1`: Builds the index by using `mmap`. This mode does not support `DELETE` or `UPDATE` operations.
   * 
   * >Notice: 
   * 
   * The `ExternalStorage` parameter is available only for AnalyticDB for PostgreSQL v6.0 instances and is not supported in v7.0.
   * 
   * @example
   * 0
   */
  externalStorage?: number;
  /**
   * @remarks
   * The fields to use for full-text search. Use commas (`,`) to separate multiple field names. These fields must be keys defined in the `Metadata` parameter.
   * 
   * @example
   * title,content
   */
  fullTextRetrievalFields?: string;
  /**
   * @remarks
   * The size of the candidate set for HNSW index construction. The value must be greater than or equal to `2 * HnswM`.
   * 
   * > Value range:
   * >
   * > - For AnalyticDB for PostgreSQL V6.0 instances: 40 to 4000.
   * >
   * > - For AnalyticDB for PostgreSQL V7.0 instances: 4 to 1000. The default value is 64.
   * 
   * @example
   * 128
   */
  hnswEfConstruction?: string;
  /**
   * @remarks
   * The maximum number of neighbors for the HNSW algorithm. You do not typically need to set this parameter, as the system automatically determines a value based on the vector dimension.
   * 
   * > Value range:
   * >
   * > - For AnalyticDB for PostgreSQL V6.0 instances: 1 to 1000.
   * >
   * > - For AnalyticDB for PostgreSQL V7.0 instances: 2 to 100. The default value is 16.
   * 
   * > We recommend that you set this parameter based on the vector dimension:
   * >
   * > - 16 for dimensions less than or equal to 384.
   * >
   * > - 32 for dimensions greater than 384 and less than or equal to 768.
   * >
   * > - 64 for dimensions greater than 768 and less than or equal to 1024.
   * >
   * > - 128 for dimensions greater than 1024.
   * 
   * @example
   * 64
   */
  hnswM?: number;
  /**
   * @remarks
   * The name of the management account that has the `rds_superuser` privilege.
   * 
   * > You can call the [CreateAccount](https://help.aliyun.com/document_detail/2361789.html) operation to create an account.
   * 
   * This parameter is required.
   * 
   * @example
   * testaccount
   */
  managerAccount?: string;
  /**
   * @remarks
   * The password of the management account.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  managerAccountPassword?: string;
  /**
   * @remarks
   * A JSON string that defines the metadata schema as a map. The keys are field names, and the values are their corresponding data types.
   * 
   * > Supported data types
   * >
   * > - For a list of supported data types, see [Data types](https://help.aliyun.com/document_detail/424383.html).
   * >
   * > - The `money` data type is not supported.
   * 
   * >Warning: 
   * 
   * The field names `id`, `vector`, `to_tsvector`, and `source` are reserved and cannot be used.
   * 
   * This parameter is required.
   * 
   * @example
   * {"title":"text","content":"text","response":"int"}
   */
  metadata?: string;
  /**
   * @remarks
   * The scalar index fields. Separate multiple fields with commas (`,`). The fields must be keys that are defined in `Metadata`.
   * 
   * @example
   * title
   */
  metadataIndices?: string;
  /**
   * @remarks
   * The distance metric used to build the vector index. Valid values:
   * 
   * - `l2`: Euclidean distance.
   * 
   * - `ip`: dot product.
   * 
   * - `cosine`: cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * > You can call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation to create a namespace or the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to list existing namespaces.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  ownerId?: number;
  /**
   * @remarks
   * The parser for full-text search. The default is `zh_cn`.
   * 
   * @example
   * zh_cn
   */
  parser?: string;
  /**
   * @remarks
   * Specifies whether to enable Product Quantization (PQ) for index acceleration. This is recommended for datasets with more than 500,000 entries. Valid values:
   * 
   * - `0`: Disabled.
   * 
   * - `1`: (Default) Enabled.
   * 
   * @example
   * 1
   */
  pqEnable?: number;
  /**
   * @remarks
   * The ID of the region where the instance is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The configuration for the sparse vector index. If specified, a sparse vector index is created.
   */
  sparseVectorIndexConfig?: CreateCollectionRequestSparseVectorIndexConfig;
  /**
   * @remarks
   * Specifies whether to enable support for sparse vectors. The default value is `false`.
   * 
   * @example
   * true
   */
  supportSparse?: boolean;
  /**
   * @remarks
   * The configuration for the dense vector index.
   */
  vectorIndexConfig?: CreateCollectionRequestVectorIndexConfig;
  /**
   * @remarks
   * The ID of the workspace, which contains multiple database instances. You must specify either `WorkspaceId` or `DBInstanceId`. If both are specified, `WorkspaceId` takes precedence.
   * 
   * @example
   * gp-ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      dimension: 'Dimension',
      externalStorage: 'ExternalStorage',
      fullTextRetrievalFields: 'FullTextRetrievalFields',
      hnswEfConstruction: 'HnswEfConstruction',
      hnswM: 'HnswM',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      metadata: 'Metadata',
      metadataIndices: 'MetadataIndices',
      metrics: 'Metrics',
      namespace: 'Namespace',
      ownerId: 'OwnerId',
      parser: 'Parser',
      pqEnable: 'PqEnable',
      regionId: 'RegionId',
      sparseVectorIndexConfig: 'SparseVectorIndexConfig',
      supportSparse: 'SupportSparse',
      vectorIndexConfig: 'VectorIndexConfig',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      collection: 'string',
      DBInstanceId: 'string',
      dimension: 'number',
      externalStorage: 'number',
      fullTextRetrievalFields: 'string',
      hnswEfConstruction: 'string',
      hnswM: 'number',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      metadata: 'string',
      metadataIndices: 'string',
      metrics: 'string',
      namespace: 'string',
      ownerId: 'number',
      parser: 'string',
      pqEnable: 'number',
      regionId: 'string',
      sparseVectorIndexConfig: CreateCollectionRequestSparseVectorIndexConfig,
      supportSparse: 'boolean',
      vectorIndexConfig: CreateCollectionRequestVectorIndexConfig,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.sparseVectorIndexConfig && typeof (this.sparseVectorIndexConfig as any).validate === 'function') {
      (this.sparseVectorIndexConfig as any).validate();
    }
    if(this.vectorIndexConfig && typeof (this.vectorIndexConfig as any).validate === 'function') {
      (this.vectorIndexConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

