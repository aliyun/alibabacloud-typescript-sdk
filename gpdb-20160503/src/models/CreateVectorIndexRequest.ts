// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVectorIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The vector indexing algorithm.
   * 
   * Valid values:
   * 
   * - `hnswflat`: (Default) An HNSW index that does not use quantization compression.
   * 
   * - `novam`: A graph-based index that does not use quantization compression. This algorithm is suitable for high-performance scenarios, such as real-time recommendations.
   * 
   * - `novad`: A partitioned index that uses rabitq quantization. This algorithm is suitable for large-scale, cost-effective retrieval scenarios.
   * 
   * @example
   * hnswflat
   */
  algorithm?: string;
  /**
   * @remarks
   * The collection name.
   * 
   * > You can call the [ListCollections](https://help.aliyun.com/document_detail/2401503.html) operation to list all collections.
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
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to view the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The vector dimension.
   * 
   * > - This parameter is required for dense vectors.
   * >
   * > - This value must match the length of the `Rows.Vector` data provided when calling the [UpsertCollectionData](https://help.aliyun.com/document_detail/2401493.html) operation.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * Specifies whether to use `mmap` to build the HNSW index. The default value is 0. Set this to 1 for high-performance data uploads in scenarios where data deletion is not required.
   * 
   * Valid values:
   * 
   * - `0`: (Default) Builds the index by using segmented page storage. This mode uses the `shared_buffer` in PostgreSQL for caching and supports delete and update operations.
   * 
   * - `1`: Builds the index by using `mmap`. This mode does not support delete and update operations.
   * 
   * >Notice: 
   * 
   * The `ExternalStorage` parameter is supported only by AnalyticDB for PostgreSQL V6.0.
   * 
   * @example
   * 0
   */
  externalStorage?: number;
  /**
   * @remarks
   * The size of the candidate set for the HNSW algorithm during index construction. The value must be in the range of 4 to 1,000. The default value is 64.
   * 
   * > This parameter applies only to AnalyticDB for PostgreSQL V7.0 instances, and its value must be greater than or equal to `2 * HnswM`.
   * 
   * @example
   * 128
   */
  hnswEfConstruction?: number;
  /**
   * @remarks
   * The maximum number of neighbors for the Hierarchical Navigable Small World (HNSW) algorithm. The system automatically sets this value based on the vector dimension. You do not typically need to configure this parameter manually.
   * 
   * > Valid values:
   * >
   * > - For AnalyticDB for PostgreSQL V6.0 instances: 1 to 1,000.
   * >
   * > - For AnalyticDB for PostgreSQL V7.0 instances: 2 to 100. The default value is 16.
   * 
   * > We recommend the following values based on the vector dimension:
   * >
   * > - For dimensions of 384 or less: 16
   * >
   * > - For dimensions from 385 to 768: 32
   * >
   * > - For dimensions from 769 to 1,024: 64
   * >
   * > - For dimensions greater than 1,024: 128
   * 
   * @example
   * 64
   */
  hnswM?: number;
  /**
   * @remarks
   * The name of the management account that has `rds_superuser` permissions.
   * 
   * > You can create an account on the \\*\\*account management\\*\\* page in the console or by calling the [CreateAccount](https://help.aliyun.com/document_detail/2361789.html) operation.
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
   * The distance metric used to build the vector index. Valid values:
   * 
   * - `l2`: euclidean distance
   * 
   * - `ip`: dot product (inner product)
   * 
   * - `cosine`: cosine similarity
   * 
   * > Sparse vectors support only `ip`.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The namespace. The default value is `public`.
   * 
   * > You can call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to list all namespaces.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The number of lists (partitions) for the Novad algorithm. The value must be in the range of 2 to 1,073,741,824. The default value is 256.
   * 
   * @example
   * 256
   */
  nlist?: number;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to enable Product Quantization (PQ) to accelerate indexing. Recommended for collections with over 500,000 vectors. Valid values:
   * 
   * - `0`: Disabled.
   * 
   * - `1`: Enabled. (Default)
   * 
   * @example
   * 1
   */
  pqEnable?: number;
  /**
   * @remarks
   * The number of bits for rabitq compression. The valid range is 1 to 8. The default value is 3.
   * 
   * @example
   * 3
   */
  rabitqBits?: number;
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
   * The vector type. Valid values:
   * 
   * - `Dense`: (Default) a dense vector
   * 
   * - `Sparse`: a sparse vector
   * 
   * @example
   * Dense
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      dimension: 'Dimension',
      externalStorage: 'ExternalStorage',
      hnswEfConstruction: 'HnswEfConstruction',
      hnswM: 'HnswM',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      metrics: 'Metrics',
      namespace: 'Namespace',
      nlist: 'Nlist',
      ownerId: 'OwnerId',
      pqEnable: 'PqEnable',
      rabitqBits: 'RabitqBits',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      collection: 'string',
      DBInstanceId: 'string',
      dimension: 'number',
      externalStorage: 'number',
      hnswEfConstruction: 'number',
      hnswM: 'number',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      metrics: 'string',
      namespace: 'string',
      nlist: 'number',
      ownerId: 'number',
      pqEnable: 'number',
      rabitqBits: 'number',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

