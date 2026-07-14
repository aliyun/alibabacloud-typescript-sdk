// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDocumentCollectionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The vector index algorithm.
   * 
   * Valid values:
   * - hnswflat: HNSW index without quantization compression (default).
   * - novam: graph index without quantization compression, suitable for high-performance scenarios such as real-time recommendations.
   * - novad: partitioned index with RaBitQ quantization, suitable for large-scale low-cost retrieval scenarios.
   * 
   * @example
   * hnswflat
   */
  algorithm?: string;
  /**
   * @remarks
   * The name of the knowledge base to create.
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
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The vector dimensions. The default value is the dimension supported by the embedding model.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * The embedding model. Default value: text-embedding-v3.
   * 
   * > Supported models:
   * > - text-embedding-v3 (recommended, default): 1024, 768, or 512 dimensions
   * > - multimodal-embedding-v1 (recommended): 1024 dimensions, multimodal embedding model
   * > - text-embedding-v1: 1536 dimensions
   * > - text-embedding-v2: 1536 dimensions
   * > - text2vec (not recommended): 1024 dimensions
   * > - m3e-base (not recommended): 768 dimensions
   * > - m3e-small (not recommended): 512 dimensions
   * > - clip-vit-b-32 (not recommended): CLIP ViT-B/32 model, 512 dimensions, image embedding model
   * > - clip-vit-b-16 (not recommended): CLIP ViT-B/16 model, 512 dimensions, image embedding model
   * > - clip-vit-l-14 (not recommended): CLIP ViT-L/14 model, 768 dimensions, image embedding model
   * > - clip-vit-l-14-336px (not recommended): CLIP ViT-L/14@336px model, 768 dimensions, image embedding model
   * > - clip-rn50 (not recommended): CLIP RN50 model, 1024 dimensions, image embedding model
   * > - clip-rn101 (not recommended): CLIP RN101 model, 512 dimensions, image embedding model
   * > - clip-rn50x4 (not recommended): CLIP RN50x4 model, 640 dimensions, image embedding model
   * > - clip-rn50x16 (not recommended): CLIP RN50x16 model, 768 dimensions, image embedding model
   * > - clip-rn50x64 (not recommended): CLIP RN50x64 model, 1024 dimensions, image embedding model
   * 
   * @example
   * text-embedding-v1
   */
  embeddingModel?: string;
  /**
   * @remarks
   * Specifies whether to enable knowledge graph construction. Default value: false.
   * 
   * > Before using this parameter, upgrade the instance to a version that supports the graph engine. (During the public preview, submit a ticket to upgrade the version.)
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
   * Specifies whether to use mmap to build the HNSW index. Default value: 0. If data does not need to be deleted and you require high upload performance, set this parameter to 1.
   * 
   * Valid values:
   * - 0: uses segment-page storage to build the index. This mode uses shared_buffer in PostgreSQL as cache and supports delete and update operations.
   * - 1: uses mmap to build the index. This mode does not support delete or update operations.
   * 
   * >Notice: Only version 6.0 supports the ExternalStorage parameter. Version 7.0 does not support this parameter.
   * 
   * @example
   * 0
   */
  externalStorage?: number;
  /**
   * @remarks
   * The fields used for full-text retrieval. Separate multiple fields with commas (,). The fields must be keys defined in Metadata.
   * 
   * @example
   * title,page
   */
  fullTextRetrievalFields?: string;
  /**
   * @remarks
   * The candidate set size when building an index with the HNSW algorithm. The value must be >= 2*HNSW_M.
   * 
   * > Valid values:
   * >- AnalyticDB for PostgreSQL 6.0 instances: 40 to 4000.
   * >- AnalyticDB for PostgreSQL 7.0 instances: 4 to 1000. Default value: 64.
   * 
   * @example
   * 128
   */
  hnswEfConstruction?: string;
  /**
   * @remarks
   * The maximum number of neighbors in the HNSW algorithm. This value is automatically set based on the vector dimensions. Manual configuration is generally not required.
   * 
   * > Valid values:
   * >- AnalyticDB for PostgreSQL 6.0 instances: 1 to 1000.
   * >- AnalyticDB for PostgreSQL 7.0 instances: 2 to 100. Default value: 16.
   * 
   * > Recommended values based on vector dimensions:
   * >- 384 or fewer: 16
   * >- Greater than 384 and up to 768: 32
   * >- Greater than 768 and up to 1024: 64
   * >- Greater than 1024: 128
   * 
   * @example
   * 64
   */
  hnswM?: number;
  /**
   * @remarks
   * The LLM model name. Valid values:
   * - knowledge-extract-standard: default value.
   * - knowledge-extract-mini
   * > This parameter takes effect only when knowledge graph construction is enabled.
   * 
   * @example
   * knowledge-extract-standard
   */
  LLMModel?: string;
  /**
   * @remarks
   * The language used for knowledge graph construction. Valid values:
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
   * The metadata of vector data, in the format of a JSON string representing a MAP. The key represents the field name, and the value represents the data type.
   * 
   * > Supported data types:
   * > - For the list of data types, see [Data types](https://help.aliyun.com/document_detail/424383.html).
   * > - The money type is not supported.
   * 
   * >Warning: The following fields are reserved and cannot be used: id, vector, doc_name, content, loader_metadata, source, and to_tsvector.
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
   * The distance metric used for building vector indexes.
   * 
   * Valid values:
   * - **l2**: Euclidean distance.
   * - **ip**: inner product distance.
   * - **cosine** (default): cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The namespace. Default value: public.
   * 
   * > You can create a namespace by calling the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation and query the list of namespaces by calling the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  ownerId?: number;
  /**
   * @remarks
   * The tokenizer used for full-text retrieval. Default value: zh_cn.
   * 
   * @example
   * zh_cn
   */
  parser?: string;
  /**
   * @remarks
   * Specifies whether to enable Product Quantization (PQ) algorithm acceleration for the index. We recommend enabling this feature when the data volume exceeds 500,000. Valid values:
   * - 0: disabled.
   * - 1: enabled (default).
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
   * The metadata fields used for building sparse vectors. Separate multiple fields with commas (,). The fields must be keys defined in Metadata.
   * 
   * @example
   * title,abstract
   */
  sparseRetrievalFields?: string;
  /**
   * @remarks
   * The sparse vector index configuration. If specified, a sparse vector index is created.
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

