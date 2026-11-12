// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVectorIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The vector index algorithm. Valid values:
   * - hnswflat: HNSW index without quantization compression (default).
   * - novam: graph index without quantization compression, suitable for high-performance scenarios such as real-time recommendation.
   * - novad: partitioned index with RaBitQ quantization, suitable for large-scale, low-cost retrieval scenarios.
   * 
   * @example
   * hnswflat
   */
  algorithm?: string;
  /**
   * @remarks
   * The collection name.
   * > You can call the [ListCollections](https://help.aliyun.com/document_detail/2401503.html) operation to query the list.
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
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The vector dimensions.
   * 
   * > - This parameter is required for dense vectors.
   * > - The value must be the same as the length of the vector data Rows.Vector in the [UpsertCollectionData](https://help.aliyun.com/document_detail/2401493.html) operation.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * Specifies whether to use mmap to build the HNSW index. Default value: 0. If data does not need to be deleted and you have high requirements for data upload speed, we recommend that you set this parameter to 1.
   * 
   * Valid values:
   * - 0: uses the default segment-page storage to build the index. In this mode, shared_buffer in PostgreSQL can be used for caching, and operations such as deletion and update are supported.
   * - 1: uses mmap to build the index. This mode does not support operations such as deletion and update.
   * 
   * >Notice: The ExternalStorage parameter is supported only in V6.0. It is not supported in V7.0.</notice>
   * 
   * @example
   * 0
   */
  externalStorage?: number;
  /**
   * @remarks
   * The size of the candidate set when the HNSW algorithm builds the index. Valid values: 4 to 1000. Default value: 64.
   * 
   * > This parameter is required only for AnalyticDB for PostgreSQL V7.0 instances, and the value must be greater than or equal to 2 × HNSW_M.
   * 
   * @example
   * 128
   */
  hnswEfConstruction?: number;
  /**
   * @remarks
   * The maximum number of neighbors in the HNSW algorithm. The operation automatically sets this value based on the vector dimensions. You do not need to manually set this value in most cases.
   * 
   * > Valid values:
   * >- AnalyticDB for PostgreSQL V6.0 instances: 1 to 1000.
   * >- AnalyticDB for PostgreSQL V7.0 instances: 2 to 100. Default value: 16.
   * 
   * > Recommended settings based on vector dimensions:
   * > - 384 or less: 16
   * > - Greater than 384 and less than or equal to 768: 32
   * > - Greater than 768 and less than or equal to 1024: 64
   * > - Greater than 1024: 128
   * 
   * @example
   * 64
   */
  hnswM?: number;
  /**
   * @remarks
   * The name of the management account that has the rds_superuser permission.
   * 
   * > You can create an account in the console by navigating to Account Management, or call the [CreateAccount](https://help.aliyun.com/document_detail/2361789.html) operation.
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
   * - l2: Euclidean distance.
   * - ip: inner product.
   * - cosine: cosine similarity.
   * 
   * > Only ip is supported for sparse vectors.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The namespace. Default value: public.
   * 
   * > You can call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to query the list.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The number of lists (partitions) for Novad. Valid values: 2 to 1073741824. Default value: 256.
   * 
   * @example
   * 256
   */
  nlist?: number;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to enable product quantization (PQ) algorithm acceleration for the index. We recommend that you enable this feature when the data volume exceeds 500,000. Valid values:
   * - 0: disabled.
   * - 1: enabled (default).
   * 
   * @example
   * 1
   */
  pqEnable?: number;
  /**
   * @remarks
   * The number of bits for RaBitQ compression. Valid values: 1 to 8. Default value: 3.
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
   * - Dense: dense vector (default).
   * - Sparse: sparse vector.
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

