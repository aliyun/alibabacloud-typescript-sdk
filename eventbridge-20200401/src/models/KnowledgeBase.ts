// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetadataSchemaField } from "./MetadataSchemaField";


export class KnowledgeBaseChunkConfigurationPreprocessRules extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove URLs and email addresses during parsing.
   * 
   * @example
   * false
   */
  removeUrlsAndEmails?: boolean;
  /**
   * @remarks
   * Specifies whether to replace consecutive whitespace characters (spaces, line breaks, and tab characters) with a single space.
   * 
   * @example
   * true
   */
  replaceConsecutiveWhitespace?: boolean;
  static names(): { [key: string]: string } {
    return {
      removeUrlsAndEmails: 'RemoveUrlsAndEmails',
      replaceConsecutiveWhitespace: 'ReplaceConsecutiveWhitespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removeUrlsAndEmails: 'boolean',
      replaceConsecutiveWhitespace: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBaseChunkConfiguration extends $dara.Model {
  /**
   * @remarks
   * The heading level (1 to 6) used for splitting in the BY_HEADING strategy. Headings at or above this level serve as split boundaries. Deeper-level headings are retained in the chunk body.
   * 
   * @example
   * 2
   */
  headingLevel?: number;
  /**
   * @remarks
   * The maximum character length of a single chunk. Starting from revision 22, this value is character-based. Valid values: 1 to 6000.
   * 
   * @example
   * 600
   */
  maxChunkSize?: number;
  /**
   * @remarks
   * The overlap character length between adjacent chunks. This parameter takes effect only for the BY_LENGTH strategy. When the value is greater than 0, the beginning of the next chunk repeats the content from the end of the previous chunk within this window. The overlap does not cause a chunk to exceed MaxChunkSize. A value of 0 indicates no overlap.
   * 
   * @example
   * 40
   */
  overlapSize?: number;
  /**
   * @remarks
   * The preprocessing rules that take effect during document parsing.
   */
  preprocessRules?: KnowledgeBaseChunkConfigurationPreprocessRules;
  /**
   * @remarks
   * The separator used in the BY_SEPARATOR strategy. The separator is matched as a literal string (not a regular expression). The maximum length is 32 characters.
   * 
   * @example
   * \\\\n\\\\n
   */
  separator?: string;
  /**
   * @remarks
   * The chunking strategy. Valid values:
   * - AUTO: intelligent splitting (heading-aware + paragraph packing).
   * - BY_LENGTH: sliding window splitting by length. You can specify OverlapSize.
   * - BY_SEPARATOR: splitting by separator. You must specify Separator.
   * - BY_HEADING: splitting by heading level. You must specify HeadingLevel.
   * 
   * @example
   * BY_SEPARATOR
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      headingLevel: 'HeadingLevel',
      maxChunkSize: 'MaxChunkSize',
      overlapSize: 'OverlapSize',
      preprocessRules: 'PreprocessRules',
      separator: 'Separator',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headingLevel: 'number',
      maxChunkSize: 'number',
      overlapSize: 'number',
      preprocessRules: KnowledgeBaseChunkConfigurationPreprocessRules,
      separator: 'string',
      strategy: 'string',
    };
  }

  validate() {
    if(this.preprocessRules && typeof (this.preprocessRules as any).validate === 'function') {
      (this.preprocessRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBaseSearchConfiguration extends $dara.Model {
  /**
   * @remarks
   * The retrieval mode. Valid values:
   * - KEYWORD: keyword retrieval.
   * - VECTOR: vector retrieval.
   * - HYBRID: hybrid retrieval.
   * 
   * @example
   * HYBRID
   */
  mode?: string;
  /**
   * @remarks
   * The fusion algorithm for hybrid search. This parameter takes effect only in hybrid search mode. Valid values:
   * - RRF: reciprocal rank fusion.
   * - WEIGHTED: weighted normalization fusion. Use this value together with VectorWeight.
   * 
   * Default value: RRF.
   * 
   * @example
   * RRF
   */
  rankAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether reranking is enabled by default. This parameter takes effect for all search modes (KEYWORD, VECTOR, and HYBRID). This default value is used when the Rerank parameter is not specified in a search request.
   * 
   * @example
   * false
   */
  rerankEnabled?: boolean;
  /**
   * @remarks
   * The default reranking model used when the RerankModel parameter is not specified in a search request. Valid values: qwen3-rerank, gte-rerank-v2, and qwen3-vl-rerank. Default value: qwen3-rerank. Score distributions vary across models and cannot be compared. Use the same model consistently within a knowledge base.
   * 
   * @example
   * qwen3-rerank
   */
  rerankModel?: string;
  /**
   * @remarks
   * The k parameter of the RRF fusion algorithm. The value must be greater than 0. Default value: 60.
   * 
   * @example
   * 60
   */
  rrfK?: number;
  /**
   * @remarks
   * The maximum number of results returned by default for a search request.
   * 
   * @example
   * 20
   */
  topK?: number;
  /**
   * @remarks
   * The weight of the vector path in the WEIGHTED fusion algorithm. Valid values: 0 to 1. The keyword path weight equals 1 minus this value. Default value: 0.7.
   * 
   * @example
   * 0.7
   */
  vectorWeight?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      rankAlgorithm: 'RankAlgorithm',
      rerankEnabled: 'RerankEnabled',
      rerankModel: 'RerankModel',
      rrfK: 'RrfK',
      topK: 'TopK',
      vectorWeight: 'VectorWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      rankAlgorithm: 'string',
      rerankEnabled: 'boolean',
      rerankModel: 'string',
      rrfK: 'number',
      topK: 'number',
      vectorWeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBase extends $dara.Model {
  /**
   * @remarks
   * The EventHouse data catalog to which the knowledge base belongs. This value cannot be modified after the knowledge base is created.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The default chunking strategy of the knowledge base. This configuration takes effect only for documents uploaded after the configuration is updated. Existing documents are not re-chunked.
   */
  chunkConfiguration?: KnowledgeBaseChunkConfiguration;
  /**
   * @remarks
   * The time when the knowledge base was created.
   * 
   * @example
   * 2026-08-24T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The description of the knowledge base.
   * 
   * @example
   * Product documentation knowledge base
   */
  description?: string;
  /**
   * @remarks
   * The embedding vector dimension specified during creation or the default dimension of the model. This value cannot be modified after the knowledge base is created.
   * 
   * @example
   * 1024
   */
  embeddingDimension?: number;
  /**
   * @remarks
   * The embedding model specified during creation. This value cannot be modified after the knowledge base is created.
   * 
   * @example
   * text-embedding-v4
   */
  embeddingModel?: string;
  /**
   * @remarks
   * The brief reason for the most recent creation or deletion failure. This parameter is returned only when the status is CREATE_FAILED or DELETE_FAILED.
   * 
   * @example
   * OssException: BucketAlreadyExists ...
   */
  failureReason?: string;
  /**
   * @remarks
   * The name of the knowledge base, which is unique within the namespace.
   * 
   * @example
   * product-docs
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * The metadata fields declared when the knowledge base was created. These fields cannot be modified after the knowledge base is created.
   * 
   * @example
   * [{"Name":"department","Type":"STRING"}]
   */
  metadataSchema?: MetadataSchemaField[];
  /**
   * @remarks
   * The EventHouse namespace to which the knowledge base belongs. This value cannot be modified after the knowledge base is created.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The default search configuration at the knowledge base level. This configuration takes effect when the corresponding parameters are not specified in a search request. You can modify this configuration by calling the UpdateKnowledgeBase operation.
   */
  searchConfiguration?: KnowledgeBaseSearchConfiguration;
  /**
   * @remarks
   * The current status of the knowledge base. Valid values:
   * - CREATING: The knowledge base is being created.
   * - ACTIVE: The knowledge base is available.
   * - CREATE_FAILED: The knowledge base failed to be created.
   * - DELETING: The knowledge base is being deleted.
   * - DELETE_FAILED: The knowledge base failed to be deleted.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The time when the knowledge base was last updated.
   * 
   * @example
   * 2026-08-24T10:00:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      chunkConfiguration: 'ChunkConfiguration',
      createdAt: 'CreatedAt',
      description: 'Description',
      embeddingDimension: 'EmbeddingDimension',
      embeddingModel: 'EmbeddingModel',
      failureReason: 'FailureReason',
      knowledgeBaseName: 'KnowledgeBaseName',
      metadataSchema: 'MetadataSchema',
      namespace: 'Namespace',
      searchConfiguration: 'SearchConfiguration',
      status: 'Status',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      chunkConfiguration: KnowledgeBaseChunkConfiguration,
      createdAt: 'string',
      description: 'string',
      embeddingDimension: 'number',
      embeddingModel: 'string',
      failureReason: 'string',
      knowledgeBaseName: 'string',
      metadataSchema: { 'type': 'array', 'itemType': MetadataSchemaField },
      namespace: 'string',
      searchConfiguration: KnowledgeBaseSearchConfiguration,
      status: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.chunkConfiguration && typeof (this.chunkConfiguration as any).validate === 'function') {
      (this.chunkConfiguration as any).validate();
    }
    if(Array.isArray(this.metadataSchema)) {
      $dara.Model.validateArray(this.metadataSchema);
    }
    if(this.searchConfiguration && typeof (this.searchConfiguration as any).validate === 'function') {
      (this.searchConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

