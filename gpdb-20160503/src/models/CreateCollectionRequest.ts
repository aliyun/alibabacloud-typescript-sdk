// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateCollectionRequestSparseVectorIndexConfig extends $dara.Model {
  hnswEfConstruction?: number;
  hnswM?: number;
  static names(): { [key: string]: string } {
    return {
      hnswEfConstruction: 'HnswEfConstruction',
      hnswM: 'HnswM',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the collection that you want to create.
   * 
   * >  The name must comply with the naming conventions of PostgreSQL objects.
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
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in a specific region.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The number of vector dimensions.
   * 
   * >  If you specify this parameter, an index is created. When you call the [UpsertCollectionData](https://help.aliyun.com/document_detail/2401493.html) operation, make sure that the length of the Rows.Vector parameter is the same as the value of this parameter. If you do not specify this parameter, you can call the [CreateVectorIndex](https://help.aliyun.com/document_detail/2401499.html) operation to create an index.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * Specifies whether to use the memory mapping technology to create HNSW indexes. Valid values: 0 and 1. Default value: 0. We recommend that you set the value to 1 in scenarios that require upload speed but not data deletion.
   * 
   * > 
   * 
   * *   0: uses segmented paging storage to create indexes. This method uses the shared buffer of PostgreSQL for caching and supports the delete and update operations.
   * 
   * *   1: uses the memory mapping technology to create indexes. This method does not support the delete or update operation.
   * 
   * @example
   * 0
   */
  externalStorage?: number;
  /**
   * @remarks
   * The fields used for full-text search. Separate multiple fields with commas (,). These fields must be keys defined in Metadata.
   * 
   * @example
   * title,content
   */
  fullTextRetrievalFields?: string;
  hnswEfConstruction?: string;
  /**
   * @remarks
   * The maximum number of neighbors for the Hierarchical Navigable Small World (HNSW) algorithm. Valid values: 1 to 1000. In most cases, this parameter is automatically configured based on the value of the Dimension parameter. You do not need to configure this parameter.
   * 
   * >  We recommend that you configure this parameter based on the value of the Dimension parameter.
   * 
   * *If you set Dimension to a value less than or equal to 384, set the value of HnswM to 16.
   * 
   * *If you set Dimension to a value greater than 384 and less than or equal to 768, set the value of HnswM to 32.
   * 
   * *If you set Dimension to a value greater than 768 and less than or equal to 1024, set the value of HnswM to 64.
   * 
   * *If you set Dimension to a value greater than 1024, set the value of HnswM to 128.
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
   * The password of the manager account.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  managerAccountPassword?: string;
  /**
   * @remarks
   * The metadata of the vector data, which is a JSON string in the MAP format. The key specifies the field name, and the value specifies the data type.
   * 
   * >  Supported data types:
   * 
   * *   For information about the supported data types, see [Data types](https://www.alibabacloud.com/help/zh/analyticdb/analyticdb-for-postgresql/developer-reference/data-types-1/).
   * 
   * *   The money data type is not supported.
   * 
   * **
   * 
   * **Warning** Reserved fields such as id, vector, to_tsvector, and source cannot be used.
   * 
   * This parameter is required.
   * 
   * @example
   * {"title":"text","content":"text","response":"int"}
   */
  metadata?: string;
  /**
   * @remarks
   * The scalar index fields. Separate multiple fields with commas (,). These fields must be keys defined in Metadata.
   * 
   * @example
   * title
   */
  metadataIndices?: string;
  /**
   * @remarks
   * The method that is used to create vector indexes. Valid values:
   * 
   * *   l2: Euclidean distance.
   * *   ip: inner product distance.
   * *   cosine: cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * >  You can call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation to create a namespace and call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to query a list of namespaces.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  ownerId?: number;
  /**
   * @remarks
   * The analyzer that is used for full-text search.
   * 
   * @example
   * zh_cn
   */
  parser?: string;
  /**
   * @remarks
   * Specifies whether to enable the product quantization (PQ) feature for index acceleration. We recommend that you enable this feature for more than 500,000 rows of data. Valid values:
   * 
   * *   0: no.
   * *   1 (default): yes.
   * 
   * @example
   * 0
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
  sparseVectorIndexConfig?: CreateCollectionRequestSparseVectorIndexConfig;
  supportSparse?: boolean;
  /**
   * @remarks
   * The ID of the workspace that consists of multiple AnalyticDB for PostgreSQL instances. You must specify one of the WorkspaceId and DBInstanceId parameters. If you specify both parameters, the WorkspaceId parameter takes effect.
   * 
   * @example
   * gp-ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
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
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.sparseVectorIndexConfig && typeof (this.sparseVectorIndexConfig as any).validate === 'function') {
      (this.sparseVectorIndexConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

