// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCollectionRequestSparseVectorIndexConfig extends $dara.Model {
  /**
   * @remarks
   * The vector index algorithm.
   * 
   * Valid values:
   * - hnswflat: HNSW index without quantization compression (default).
   * - novam: Graph index without quantization compression, suitable for high-performance scenarios such as real-time recommendation.
   * 
   * @example
   * hnswflat
   */
  algorithm?: string;
  /**
   * @remarks
   * The size of the candidate set when building the index by using the HNSW algorithm. Valid values: 4 to 1000. Default value: 64.
   * 
   * > This value is required only for AnalyticDB for PostgreSQL V7.0 instances, and the value must be greater than or equal to 2 × HNSW_M.
   * 
   * @example
   * 128
   */
  hnswEfConstruction?: number;
  /**
   * @remarks
   * The maximum number of neighbors in the HNSW algorithm. The operation automatically sets this value based on the vector dimensions. Typically, you do not need to manually set this value.
   * 
   * > Valid values:
   * >- AnalyticDB for PostgreSQL V6.0 instances: 1 to 1000.
   * >- AnalyticDB for PostgreSQL V7.0 instances: 2 to 100. Default value: 16.
   * 
   * > Recommended settings based on vector dimensions:
   * >- Less than or equal to 384: 16.
   * >- Greater than 384 and less than or equal to 768: 32.
   * >- Greater than 768 and less than or equal to 1024: 64.
   * >- Greater than 1024: 128.
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
   * The number of Novad lists (partitions). Valid values: [2, 1073741824]. Default value: 256.
   * 
   * @example
   * 256
   */
  nlist?: number;
  /**
   * @remarks
   * The number of rabitq compression bits. Valid values: [1, 8]. Default value: 3.
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
   * - hnswflat: HNSW index without quantization compression (default).
   * - novam: Graph index without quantization compression, suitable for high-performance scenarios such as real-time recommendation.
   * - novad: Partitioned index with rabitq quantization, suitable for large-scale, low-cost retrieval scenarios.
   * 
   * @example
   * hnswflat
   */
  algorithm?: string;
  /**
   * @remarks
   * The name of the collection to be created.
   * 
   * > The name must comply with the PostgreSQL object naming conventions.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * Instance ID of the instance.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query instance IDs of all AnalyticDB for PostgreSQL instances in the target region.
   * 
   * @example
   * gp-bp152460513z****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The vector dimensions.
   * 
   * > If you specify this value, an index is built, and the length of Rows.Vector in the subsequent [UpsertCollectionData](https://help.aliyun.com/document_detail/2401493.html) operation for uploading vector data must be consistent with this value. If you do not specify this value, you can call the [CreateVectorIndex](https://help.aliyun.com/document_detail/2401499.html) operation later to build an index.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * Specifies whether to use mmap to build the HNSW index. Default value: 0. If the data does not need to be deleted and you have high requirements for the data upload speed, set this parameter to 1.
   * 
   * Valid values:
   * - 0: Build the index by using segment-page storage. This is the default value. In this mode, shared_buffers in PostgreSQL can be used for caching, and operations such as deletion and update are supported.
   * - 1: Build the index by using mmap. This mode does not support operations such as deletion and update.
   * 
   * >Notice: The ExternalStorage parameter is supported only in V6.0. It is not supported in V7.0.</notice>
   * 
   * @example
   * 0
   */
  externalStorage?: number;
  /**
   * @remarks
   * The fields used to retrieve data via full-text index. Separate multiple fields with commas (,). The fields must be keys defined in Metadata.
   * 
   * @example
   * title,content
   */
  fullTextRetrievalFields?: string;
  /**
   * @remarks
   * The size of the candidate set when building the index by using the HNSW algorithm. The value must be greater than or equal to 2 × HNSW_M.
   * 
   * > Valid values:
   * >- AnalyticDB for PostgreSQL V6.0 instances: 40 to 4000.
   * >- AnalyticDB for PostgreSQL V7.0 instances: 4 to 1000. Default value: 64.
   * 
   * @example
   * 128
   */
  hnswEfConstruction?: string;
  /**
   * @remarks
   * The maximum number of neighbors in the HNSW algorithm. The operation automatically sets this value based on the vector dimensions. Typically, you do not need to manually set this value.
   * 
   * > Valid values:
   * >- AnalyticDB for PostgreSQL V6.0 instances: 1 to 1000.
   * >- AnalyticDB for PostgreSQL V7.0 instances: 2 to 100. Default value: 16.
   * 
   * > Recommended settings based on vector dimensions:
   * >- Less than or equal to 384: 16.
   * >- Greater than 384 and less than or equal to 768: 32.
   * >- Greater than 768 and less than or equal to 1024: 64.
   * >- Greater than 1024: 128.
   * 
   * @example
   * 64
   */
  hnswM?: number;
  /**
   * @remarks
   * The name of the administrator account that has the rds_superuser permission.
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
   * The password of the administrator account.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  managerAccountPassword?: string;
  /**
   * @remarks
   * The metadata of the vector data, which is a JSON string in MAP format. The key represents the field name, and the value represents the data type.
   * 
   * > Supported data types:
   * > - For the list of data types, see [Data types](https://help.aliyun.com/document_detail/424383.html).
   * > - The money data type is not supported.
   * 
   * >Warning: The id, vector, to_tsvector, and source fields are reserved fields and cannot be used.</warning>
   * 
   * This parameter is required.
   * 
   * @example
   * {"title":"text","content":"text","response":"int"}
   */
  metadata?: string;
  /**
   * @remarks
   * The scalar index fields. Separate multiple fields with commas (,). The fields must be keys defined in Metadata.
   * 
   * @example
   * title
   */
  metadataIndices?: string;
  /**
   * @remarks
   * The distance metric used to build the vector index. Valid values:
   * - l2: Euclidean distance.
   * - ip: Inner product.
   * - cosine: Cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * > You can call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation to create a namespace, and call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to view the namespace list.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  ownerId?: number;
  /**
   * @remarks
   * The tokenizer used to retrieve data via full-text index. Default value: zh_cn.
   * 
   * @example
   * zh_cn
   */
  parser?: string;
  /**
   * @remarks
   * Specifies whether to enable the Product Quantization (PQ) algorithm to accelerate the index. Enable this feature when the data volume exceeds 500,000. Valid values:
   * - 0: Disable.
   * - 1: Enable (default).
   * 
   * @example
   * 1
   */
  pqEnable?: number;
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
   * The sparse vector index configuration. If this parameter is passed, a sparse vector index is created.
   */
  sparseVectorIndexConfig?: CreateCollectionRequestSparseVectorIndexConfig;
  /**
   * @remarks
   * Specifies whether to support sparse vectors. Default value: false.
   * 
   * @example
   * true
   */
  supportSparse?: boolean;
  /**
   * @remarks
   * The dense vector index configuration.
   */
  vectorIndexConfig?: CreateCollectionRequestVectorIndexConfig;
  /**
   * @remarks
   * The ID of the workspace that consists of multiple database instances. This parameter and the DBInstanceId parameter cannot be empty at the same time. If both parameters are specified, this parameter takes precedence.
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

