// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVectorIndexRequest extends $dara.Model {
  /**
   * @remarks
   * Collection name.
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
   * Instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) API to view details of all AnalyticDB PostgreSQL instances in the target region, including the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Vector dimension.
   * > This value must be consistent with the length of the vector data (Rows. Vector) uploaded via the [UpsertCollectionData](https://help.aliyun.com/document_detail/2401493.html) API.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * Whether to use mmap to build the HNSW index, default is 0. If the data does not need to be deleted and there are performance requirements for uploading data, it is recommended to set this to 1.
   * 
   * > 
   * > - When set to 0, the segment-page storage mode is used to build the index, which can use the shared_buffer in PostgreSQL for caching and supports deletion and update operations.
   * > - When set to 1, the index is built using mmap, which does not support deletion and update operations.
   * 
   * @example
   * 0
   */
  externalStorage?: number;
  hnswEfConstruction?: number;
  /**
   * @remarks
   * The maximum number of neighbors in the HNSW algorithm, ranging from 1 to 1000. The API will automatically set this value based on the vector dimension, and it generally does not need to be manually set.
   * 
   * > It is suggested to set this based on the vector dimension as follows:
   * > - Less than or equal to 384: 16
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
   * Name of the management account with rds_superuser permissions.
   * 
   * > You can create an account through the console -> Account Management, or by using the [CreateAccount](https://help.aliyun.com/document_detail/2361789.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * testaccount
   */
  managerAccount?: string;
  /**
   * @remarks
   * Management account password.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  managerAccountPassword?: string;
  /**
   * @remarks
   * Method used for building the vector index. Value description:
   * - l2: Euclidean distance.
   * - ip: Inner product (dot product) distance.
   * - cosine: Cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * Namespace, default is public.
   * 
   * > You can use the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) API to view the list.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  ownerId?: number;
  /**
   * @remarks
   * Whether to enable PQ (Product Quantization) algorithm acceleration for the index. It is recommended to enable this when the data volume exceeds 500,000. Value description:
   * - 0: Disabled.
   * - 1: Enabled (default).
   * 
   * @example
   * 1
   */
  pqEnable?: number;
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
  type?: string;
  static names(): { [key: string]: string } {
    return {
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
      ownerId: 'OwnerId',
      pqEnable: 'PqEnable',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      ownerId: 'number',
      pqEnable: 'number',
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

