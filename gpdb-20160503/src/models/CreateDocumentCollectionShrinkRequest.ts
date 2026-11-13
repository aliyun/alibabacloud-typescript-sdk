// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDocumentCollectionShrinkRequest extends $dara.Model {
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
   * The name of the document library to create.
   * 
   * > The name must comply with the object naming conventions of PostgreSQL.
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
   * The vector dimensions. The default value is the dimension supported by the embedding algorithm.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * The embedding algorithm. Default value: text-embedding-v3.
   * 
   * > Supported algorithms:
   * > - text-embedding-v3 (recommended, default): 1024, 768, or 512 dimensions
   * > - multimodal-embedding-v1 (recommended): 1024 dimensions, multimodal embedding algorithm
   * > - text-embedding-v1: 1536 dimensions
   * > - text-embedding-v2: 1536 dimensions
   * > - text2vec (not recommended): 1024 dimensions
   * > - m3e-base (not recommended): 768 dimensions
   * > - m3e-small (not recommended): 512 dimensions
   * > - clip-vit-b-32 (not recommended): CLIP ViT-B/32 model, 512 dimensions, image embedding algorithm
   * > - clip-vit-b-16 (not recommended): CLIP ViT-B/16 model, 512 dimensions, image embedding algorithm
   * > - clip-vit-l-14 (not recommended): CLIP ViT-L/14 model, 768 dimensions, image embedding algorithm
   * > - clip-vit-l-14-336px (not recommended): CLIP ViT-L/14@336px model, 768 dimensions, image embedding algorithm
   * > - clip-rn50 (not recommended): CLIP RN50 model, 1024 dimensions, image embedding algorithm
   * > - clip-rn101 (not recommended): CLIP RN101 model, 512 dimensions, image embedding algorithm
   * > - clip-rn50x4 (not recommended): CLIP RN50x4 model, 640 dimensions, image embedding algorithm
   * > - clip-rn50x16 (not recommended): CLIP RN50x16 model, 768 dimensions, image embedding algorithm
   * > - clip-rn50x64 (not recommended): CLIP RN50x64 model, 1024 dimensions, image embedding algorithm
   * 
   * @example
   * text-embedding-v1
   */
  embeddingModel?: string;
  /**
   * @remarks
   * Specifies whether to enable knowledge graph construction. Default value: false.
   * 
   * > Before you use this parameter, the instance must be upgraded to a version that supports the graph engine. (During the public preview, submit a ticket to upgrade the version.)
   * 
   * @example
   * true
   */
  enableGraph?: boolean;
  /**
   * @remarks
   * The list of entity types.
   * 
   * > This parameter is required when knowledge graph construction is enabled.
   * 
   * @example
   * Location
   */
  entityTypesShrink?: string;
  /**
   * @remarks
   * Specifies whether to use mmap to build the HNSW index. Default value: 0. If data deletion is not required and high data upload speed is needed, we recommend that you set this parameter to 1.
   * 
   * Valid values:
   * - 0: Uses the default segment-page storage to build the index. In this mode, shared_buffer in PostgreSQL can be used for caching, and operations such as deletion and update are supported.
   * - 1: Uses mmap to build the index. In this mode, operations such as deletion and update are not supported.
   * 
   * >Notice: The ExternalStorage parameter is supported only in V6.0. It is not supported in V7.0.
   * 
   * @example
   * 0
   */
  externalStorage?: number;
  /**
   * @remarks
   * The fields used to retrieve data from the full-text index. Separate multiple fields with commas (,). The fields must be keys defined in Metadata.
   * 
   * @example
   * title,page
   */
  fullTextRetrievalFields?: string;
  /**
   * @remarks
   * The size of the candidate set when building the index with the HNSW algorithm. The value must be greater than or equal to 2 × HNSW_M.
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
   * The maximum number of neighbors in the HNSW algorithm. The operation automatically sets this value based on the vector dimensions. Manual configuration is generally not required.
   * 
   * > Valid values:
   * >- AnalyticDB for PostgreSQL V6.0 instances: 1 to 1000.
   * >- AnalyticDB for PostgreSQL V7.0 instances: 2 to 100. Default value: 16.
   * 
   * > Recommended values based on vector dimensions:
   * >- Less than or equal to 384: 16
   * >- Greater than 384 and less than or equal to 768: 32
   * >- Greater than 768 and less than or equal to 1024: 64
   * >- Greater than 1024: 128
   * 
   * @example
   * 64
   */
  hnswM?: number;
  /**
   * @remarks
   * The name of the LLM. Valid values:
   * - knowledge-extract-standard: Default value.
   * - knowledge-extract-mini
   * > This parameter takes effect only when knowledge graph construction is enabled.
   * 
   * @example
   * knowledge-extract-standard
   */
  LLMModel?: string;
  /**
   * @remarks
   * The language used to construct the knowledge graph. Valid values:
   * - Simplified Chinese: Simplified Chinese. Default value.
   * - English: English.
   * > This parameter takes effect only when knowledge graph construction is enabled.
   * 
   * @example
   * Simplified Chinese
   */
  language?: string;
  /**
   * @remarks
   * The name of the management account that has the rds_superuser permission.
   * 
   * > You can create an account in the console by navigating to Account Management, or by calling the [CreateAccount](https://help.aliyun.com/document_detail/2361789.html) operation.
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
   * The metadata of the vector data, which is a JSON string in MAP format. The key represents the field name, and the value represents the data type.
   * 
   * > Supported data types:
   * > - For a list of data types, see [Data types](https://help.aliyun.com/document_detail/424383.html).
   * > - The money type is not supported.
   * 
   * >Warning: The id, vector, doc_name, content, loader_metadata, source, and to_tsvector fields are reserved and cannot be used.
   * 
   * @example
   * {"title":"text","page":"int"}
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
   * The distance metric used when building the vector index.
   * 
   * Valid values:
   * - **l2**: Euclidean distance.
   * - **ip**: Dot product (inner product) distance.
   * - **cosine** (default): Cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The namespace. Default value: public.
   * 
   * > You can call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation to create a namespace, or call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to view the namespace list.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  ownerId?: number;
  /**
   * @remarks
   * The tokenizer used to retrieve data from the full-text index. Default value: zh_cn.
   * 
   * @example
   * zh_cn
   */
  parser?: string;
  /**
   * @remarks
   * Specifies whether to enable the Product Quantization (PQ) algorithm to accelerate index building. It is recommended to enable this feature when the data volume exceeds 500,000. Valid values:
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
   * The list of relationship edge types.
   * 
   * > This parameter is required when knowledge graph construction is enabled.
   * 
   * @example
   * Occurred
   */
  relationshipTypesShrink?: string;
  /**
   * @remarks
   * The metadata fields used to build sparse vectors. Separate multiple fields with commas (,). The fields must be keys defined in Metadata.
   * 
   * @example
   * title,abstract
   */
  sparseRetrievalFields?: string;
  /**
   * @remarks
   * The sparse vector index configuration. If this parameter is specified, a sparse vector index is created.
   */
  sparseVectorIndexConfigShrink?: string;
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
  vectorIndexConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      dimension: 'Dimension',
      embeddingModel: 'EmbeddingModel',
      enableGraph: 'EnableGraph',
      entityTypesShrink: 'EntityTypes',
      externalStorage: 'ExternalStorage',
      fullTextRetrievalFields: 'FullTextRetrievalFields',
      hnswEfConstruction: 'HnswEfConstruction',
      hnswM: 'HnswM',
      LLMModel: 'LLMModel',
      language: 'Language',
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
      relationshipTypesShrink: 'RelationshipTypes',
      sparseRetrievalFields: 'SparseRetrievalFields',
      sparseVectorIndexConfigShrink: 'SparseVectorIndexConfig',
      supportSparse: 'SupportSparse',
      vectorIndexConfigShrink: 'VectorIndexConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      collection: 'string',
      DBInstanceId: 'string',
      dimension: 'number',
      embeddingModel: 'string',
      enableGraph: 'boolean',
      entityTypesShrink: 'string',
      externalStorage: 'number',
      fullTextRetrievalFields: 'string',
      hnswEfConstruction: 'string',
      hnswM: 'number',
      LLMModel: 'string',
      language: 'string',
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
      relationshipTypesShrink: 'string',
      sparseRetrievalFields: 'string',
      sparseVectorIndexConfigShrink: 'string',
      supportSparse: 'boolean',
      vectorIndexConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

