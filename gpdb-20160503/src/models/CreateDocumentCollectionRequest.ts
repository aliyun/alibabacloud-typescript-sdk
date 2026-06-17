// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDocumentCollectionRequestSparseVectorIndexConfig extends $dara.Model {
  /**
   * @remarks
   * The vector index algorithm.
   * 
   * Valid values:
   * 
   * - `hnswflat`: An HNSW index without quantization compression. This is the default value.
   * 
   * - `novam`: A graph index without quantization compression. This algorithm is suitable for high-performance scenarios such as real-time recommendation.
   * 
   * @example
   * hnswflat
   */
  algorithm?: string;
  /**
   * @remarks
   * The size of the candidate set (`ef_construction`) for HNSW index construction. Valid values: 4 to 1,000. The default value is 64.
   * 
   * > This parameter is applicable only to AnalyticDB for PostgreSQL V7.0 instances, and its value must be greater than or equal to `2 * HnswM`.
   * 
   * @example
   * 128
   */
  hnswEfConstruction?: number;
  /**
   * @remarks
   * The maximum number of neighbors (M) for the HNSW algorithm. You do not typically need to set this parameter, as the system automatically sets it based on the vector dimension.
   * 
   * > Value range:
   * >
   * > - For AnalyticDB for PostgreSQL V6.0 instances: 1 to 1,000.
   * >
   * > - For AnalyticDB for PostgreSQL V7.0 instances: 2 to 100. The default value is 16.
   * 
   * > We recommend that you set this parameter based on the vector dimension:
   * >
   * > - If the dimension is 384 or less: 16
   * >
   * > - If the dimension is greater than 384 and less than or equal to 768: 32
   * >
   * > - If the dimension is greater than 768 and less than or equal to 1,024: 64
   * >
   * > - If the dimension is greater than 1,024: 128
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

export class CreateDocumentCollectionRequestVectorIndexConfig extends $dara.Model {
  /**
   * @remarks
   * The number of lists (partitions) for the novad algorithm. Valid values: [2, 1073741824]. The default value is 256.
   * 
   * @example
   * 256
   */
  nlist?: number;
  /**
   * @remarks
   * The number of bits used for rabitq compression. Valid values: [1, 8]. The default value is 3.
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

export class CreateDocumentCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The vector index algorithm.
   * 
   * Valid values:
   * 
   * - `hnswflat`: An HNSW index without quantization compression. This is the default value.
   * 
   * - `novam`: A graph index without quantization compression. This algorithm is suitable for high-performance scenarios such as real-time recommendation.
   * 
   * - `novad`: A partitioned index with rabitq quantization. This algorithm is suitable for large-scale, low-cost retrieval scenarios.
   * 
   * @example
   * hnswflat
   */
  algorithm?: string;
  /**
   * @remarks
   * The name of the document collection to create.
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
   * The ID of the instance.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in the target region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The vector dimension. If you omit this parameter, the system uses a default dimension for the selected `EmbeddingModel`.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * The embedding model. The default value is `text-embedding-v3`.
   * 
   * > Supported models:
   * >
   * > - `text-embedding-v3` (Recommended, Default): 1,024, 768, or 512 dimensions
   * >
   * > - `multimodal-embedding-v1` (Recommended): 1,024 dimensions, a multimodal embedding model
   * >
   * > - `text-embedding-v1`: 1,536 dimensions
   * >
   * > - `text-embedding-v2`: 1,536 dimensions
   * >
   * > - `text2vec` (Not recommended): 1,024 dimensions
   * >
   * > - `m3e-base` (Not recommended): 768 dimensions
   * >
   * > - `m3e-small` (Not recommended): 512 dimensions
   * >
   * > - `clip-vit-b-32` (Not recommended): CLIP ViT-B/32 model, 512 dimensions, an image embedding model
   * >
   * > - `clip-vit-b-16` (Not recommended): CLIP ViT-B/16 model, 512 dimensions, an image embedding model
   * >
   * > - `clip-vit-l-14` (Not recommended): CLIP ViT-L/14 model, 768 dimensions, an image embedding model
   * >
   * > - `clip-vit-l-14-336px` (Not recommended): CLIP ViT-L/14\\@336px model, 768 dimensions, an image embedding model
   * >
   * > - `clip-rn50` (Not recommended): CLIP RN50 model, 1,024 dimensions, an image embedding model
   * >
   * > - `clip-rn101` (Not recommended): CLIP RN101 model, 512 dimensions, an image embedding model
   * >
   * > - `clip-rn50x4` (Not recommended): CLIP RN50x4 model, 640 dimensions, an image embedding model
   * >
   * > - `clip-rn50x16` (Not recommended): CLIP RN50x16 model, 768 dimensions, an image embedding model
   * >
   * > - `clip-rn50x64` (Not recommended): CLIP RN50x64 model, 1,024 dimensions, an image embedding model
   * 
   * @example
   * text-embedding-v1
   */
  embeddingModel?: string;
  /**
   * @remarks
   * Specifies whether to build a knowledge graph. The default value is `false`.
   * 
   * > To use this parameter, you must first upgrade your instance to a version that supports the graph engine. During the public preview period, submit a ticket to request an upgrade.
   * 
   * @example
   * true
   */
  enableGraph?: boolean;
  /**
   * @remarks
   * A list of entity types.
   * 
   * > This parameter is required when `EnableGraph` is set to `true`.
   * 
   * @example
   * Location
   */
  entityTypes?: string[];
  /**
   * @remarks
   * Specifies whether to use memory-mapped files (mmap) to build the HNSW index. The default value is 0. Setting this to `1` is recommended if you do not need to delete data and require high upload performance.
   * 
   * Valid values:
   * 
   * - `0`: Builds the index by using segmented page storage. This mode supports delete and update operations and can use the `shared_buffer` in PostgreSQL for caching. This is the default value.
   * 
   * - `1`: Builds the index by using mmap. This mode does not support delete or update operations.
   * 
   * >Notice: 
   * 
   * The `ExternalStorage` parameter is supported only by AnalyticDB for PostgreSQL V6.0 instances. It is not supported by V7.0 instances.
   * 
   * @example
   * 0
   */
  externalStorage?: number;
  /**
   * @remarks
   * The metadata fields to use for full-text search. These fields must be keys defined in `Metadata`. Separate multiple fields with a comma (,).
   * 
   * @example
   * title,page
   */
  fullTextRetrievalFields?: string;
  /**
   * @remarks
   * The size of the candidate set (`ef_construction`) for HNSW index construction. The value must be greater than or equal to `2 * HnswM`.
   * 
   * > Value range:
   * >
   * > - For AnalyticDB for PostgreSQL V6.0 instances: 40 to 4,000.
   * >
   * > - For AnalyticDB for PostgreSQL V7.0 instances: 4 to 1,000. The default value is 64.
   * 
   * @example
   * 128
   */
  hnswEfConstruction?: string;
  /**
   * @remarks
   * The maximum number of neighbors (M) for the HNSW algorithm. You do not typically need to set this parameter, as the system automatically sets it based on the vector dimension.
   * 
   * > Value range:
   * >
   * > - For AnalyticDB for PostgreSQL V6.0 instances: 1 to 1,000.
   * >
   * > - For AnalyticDB for PostgreSQL V7.0 instances: 2 to 100. The default value is 16.
   * 
   * > We recommend that you set this parameter based on the vector dimension:
   * >
   * > - If the dimension is 384 or less: 16
   * >
   * > - If the dimension is greater than 384 and less than or equal to 768: 32
   * >
   * > - If the dimension is greater than 768 and less than or equal to 1,024: 64
   * >
   * > - If the dimension is greater than 1,024: 128
   * 
   * @example
   * 64
   */
  hnswM?: number;
  /**
   * @remarks
   * The name of the LLM model. Valid values:
   * 
   * - `knowledge-extract-standard`: The default value.
   * 
   * - `knowledge-extract-mini`
   * 
   * > This parameter takes effect only when `EnableGraph` is set to `true`.
   * 
   * @example
   * knowledge-extract-standard
   */
  LLMModel?: string;
  /**
   * @remarks
   * The language used to build the knowledge graph. Valid values:
   * 
   * - `Simplified Chinese`: The default value.
   * 
   * - `English`
   * 
   * > This parameter takes effect only when `EnableGraph` is set to `true`.
   * 
   * @example
   * Simplified Chinese
   */
  language?: string;
  /**
   * @remarks
   * The name of the manager account that has `rds_superuser` permissions.
   * 
   * > You can create an account in the console on the \\*\\*Account Management\\*\\* page or by calling the [CreateAccount](https://help.aliyun.com/document_detail/2361789.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * testaccount
   */
  managerAccount?: string;
  /**
   * @remarks
   * The password for the manager account.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  managerAccountPassword?: string;
  /**
   * @remarks
   * The metadata schema for the vector data, specified as a JSON map where keys are field names and values are data types.
   * 
   * > Supported data types
   * >
   * > - For a list of supported data types, see [Data types](https://help.aliyun.com/document_detail/424383.html).
   * >
   * > - The `money` data type is not supported.
   * 
   * >Warning: 
   * 
   * The following fields are reserved and cannot be used: `id`, `vector`, `doc_name`, `content`, `loader_metadata`, `source`, and `to_tsvector`.
   * 
   * @example
   * {"title":"text","page":"int"}
   */
  metadata?: string;
  /**
   * @remarks
   * The metadata fields on which to create scalar indexes. These fields must be keys defined in `Metadata`. Separate multiple fields with a comma (,).
   * 
   * @example
   * title
   */
  metadataIndices?: string;
  /**
   * @remarks
   * The distance metric for the vector index.
   * 
   * Valid values:
   * 
   * - **`l2`**: Euclidean distance.
   * 
   * - **`ip`**: dot product (inner product) distance.
   * 
   * - **`cosine`** (Default): cosine similarity.
   * 
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @remarks
   * The namespace. The default value is `public`.
   * 
   * > You can call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation to create a namespace and the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to list namespaces.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  ownerId?: number;
  /**
   * @remarks
   * The tokenizer for full-text search. The default value is `zh_cn`.
   * 
   * @example
   * zh_cn
   */
  parser?: string;
  /**
   * @remarks
   * Specifies whether to enable the PQ (product quantization) algorithm to accelerate indexing. This is recommended for datasets with over 500,000 entries. Valid values:
   * 
   * - `0`: Disables the feature.
   * 
   * - `1`: Enables the feature. This is the default value.
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
   * A list of relationship types.
   * 
   * > This parameter is required when `EnableGraph` is set to `true`.
   * 
   * @example
   * Occurred
   */
  relationshipTypes?: string[];
  /**
   * @remarks
   * The metadata fields used to build the sparse vector. These fields must be keys defined in `Metadata`. Separate multiple fields with a comma (,).
   * 
   * @example
   * title,abstract
   */
  sparseRetrievalFields?: string;
  /**
   * @remarks
   * Configuration for the sparse vector index. Specifying this parameter creates the index.
   */
  sparseVectorIndexConfig?: CreateDocumentCollectionRequestSparseVectorIndexConfig;
  /**
   * @remarks
   * Specifies whether to support sparse vectors. The default value is `false`.
   * 
   * @example
   * true
   */
  supportSparse?: boolean;
  /**
   * @remarks
   * Configuration for the dense vector index.
   */
  vectorIndexConfig?: CreateDocumentCollectionRequestVectorIndexConfig;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      dimension: 'Dimension',
      embeddingModel: 'EmbeddingModel',
      enableGraph: 'EnableGraph',
      entityTypes: 'EntityTypes',
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
      relationshipTypes: 'RelationshipTypes',
      sparseRetrievalFields: 'SparseRetrievalFields',
      sparseVectorIndexConfig: 'SparseVectorIndexConfig',
      supportSparse: 'SupportSparse',
      vectorIndexConfig: 'VectorIndexConfig',
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
      entityTypes: { 'type': 'array', 'itemType': 'string' },
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
      relationshipTypes: { 'type': 'array', 'itemType': 'string' },
      sparseRetrievalFields: 'string',
      sparseVectorIndexConfig: CreateDocumentCollectionRequestSparseVectorIndexConfig,
      supportSparse: 'boolean',
      vectorIndexConfig: CreateDocumentCollectionRequestVectorIndexConfig,
    };
  }

  validate() {
    if(Array.isArray(this.entityTypes)) {
      $dara.Model.validateArray(this.entityTypes);
    }
    if(Array.isArray(this.relationshipTypes)) {
      $dara.Model.validateArray(this.relationshipTypes);
    }
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

