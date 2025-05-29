// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDocumentCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the document collection that you want to create.
   * 
   * > The name must comply with PostgreSQL object naming restrictions.
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
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) API to view details of all AnalyticDB for PostgreSQL instances in the target region, including the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  dimension?: number;
  /**
   * @remarks
   * The vectorization algorithm.
   * 
   * >  Supported algorithms:
   * 
   * *   text-embedding-v1: the algorithm that produces 1536-dimensional vectors.
   * 
   * *   text-embedding-v2: the algorithm that produces 1536-dimensional vectors.
   * 
   * *   text2vec: the algorithm that produces 1024-dimensional vectors.
   * 
   * *   m3e-base: the algorithm that produces 768-dimensional vectors.
   * 
   * *   m3e-small: the algorithm that produces 512-dimensional vectors.
   * 
   * *   clip-vit-b-32: the image vectorization algorithm that uses the Contrastive Language-Image Pre-Training (CLIP) ViT-B/32 model and produces 512-dimensional vectors.
   * 
   * *   clip-vit-b-16: the image vectorization algorithm that uses the CLIP ViT-B/16 model and produces 512-dimensional vectors.
   * 
   * *   clip-vit-l-14: the image vectorization algorithm that uses the CLIP ViT-L/14 model and produces 768-dimensional vectors.
   * 
   * *   clip-vit-l-14-336px: the image vectorization algorithm that uses the CLIP ViT-L/14@336px model and produces 768-dimensional vectors.
   * 
   * *   clip-rn50: the image vectorization algorithm that uses the CLIP RN50 model and produces 1024-dimensional vectors.
   * 
   * *   clip-rn101: the image vectorization algorithm that uses the CLIP RN101 model and produces 512-dimensional vectors.
   * 
   * *   clip-rn50x4: the image vectorization algorithm that uses the CLIP RN50x4 model and produces 640-dimensional vectors.
   * 
   * *   clip-rn50x16: the image vectorization algorithm that uses the CLIP RN50x16 model and produces 768-dimensional vectors.
   * 
   * *   clip-rn50x64: the image vectorization algorithm that uses the CLIP RN50x64 model and produces 1024-dimensional vectors.
   * 
   * @example
   * text-embedding-v1
   */
  embeddingModel?: string;
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
   * title,page
   */
  fullTextRetrievalFields?: string;
  hnswEfConstruction?: string;
  /**
   * @remarks
   * The maximum number of neighbors for the Hierarchical Navigable Small World (HNSW) algorithm. Valid values: 1 to 1000. In most cases, this parameter is automatically configured based on the value of the Dimension parameter. You do not need to configure this parameter.
   * 
   * >  We recommend that you configure this parameter based on the value of the Dimension parameter.
   * 
   * *   If you set Dimension to a value less than or equal to 384, set the value of HnswM to 16.
   * 
   * *   If you set Dimension to a value greater than 384 and less than or equal to 768, set the value of HnswM to 32.
   * 
   * *   If you set Dimension to a value greater than 768 and less than or equal to 1024, set the value of HnswM to 64.
   * 
   * *   If you set Dimension to a value greater than 1024, set the value of HnswM to 128.
   * 
   * @example
   * 64
   */
  hnswM?: number;
  /**
   * @remarks
   * The name of the manager account that has the rds_superuser permission.
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
   * The metadata of the vector data, which is a JSON string in the MAP format. The key specifies the field name, and the value specifies the data type.
   * 
   * > Supported data types:
   * > - For information about data types, see: [Data Types](https://www.alibabacloud.com/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/data-types-1/).
   * > - The money type is not supported.
   * 
   * >Warning: The fields id, vector, doc_name, content, loader_metadata, source, and to_tsvector are reserved and should not be used.
   * 
   * @example
   * {"title":"text","page":"int"}
   */
  metadata?: string;
  /**
   * @example
   * title
   */
  metadataIndices?: string;
  /**
   * @remarks
   * The method that is used to create vector indexes.
   * 
   * Valid values:
   * 
   * *   **l2**: Euclidean distance.
   * *   **ip**: inner product distance.
   * *   **cosine** (default): cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The name of the namespace. Default value: public.
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
   * The analyzer that is used for full-text search. Default value: zh_cn.
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
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      dimension: 'Dimension',
      embeddingModel: 'EmbeddingModel',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      dimension: 'number',
      embeddingModel: 'string',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

