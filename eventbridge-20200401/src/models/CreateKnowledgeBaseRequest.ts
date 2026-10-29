// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseRequestChunkConfigurationPreprocessRules extends $dara.Model {
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
   * Specifies whether to replace consecutive whitespace characters, such as spaces, line breaks, and tabs, with a single space.
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

export class CreateKnowledgeBaseRequestChunkConfiguration extends $dara.Model {
  /**
   * @remarks
   * Required for the BY_HEADING strategy. Valid values: 1 to 6. This parameter is ignored for other strategies. Headings at or above the specified level are used as chunking boundaries. For example, if you set this parameter to 2, both H1 and H2 headings are used as boundaries. Lower-level headings are not used as boundaries and are retained in the chunk text. If the section content exceeds MaxChunkSize, the system falls back to chunking by paragraph or sentence. For documents without headings, the system falls back to intelligent chunking.
   * 
   * @example
   * 2
   */
  headingLevel?: number;
  /**
   * @remarks
   * The maximum number of characters in a single chunk. Valid values: 1 to 6000. An error is reported if the limit is exceeded.
   * 
   * @example
   * 512
   */
  maxChunkSize?: number;
  /**
   * @remarks
   * Applies only to the BY_LENGTH strategy. This parameter is ignored for other strategies. The overlap size between adjacent chunks, in characters. If the value is greater than 0, the beginning of the next chunk repeats the content at the end of the previous chunk within this window. The overlap does not cause the chunk to exceed MaxChunkSize. Default value: 0, which indicates no overlap.
   * 
   * @example
   * 40
   */
  overlapSize?: number;
  /**
   * @remarks
   * The preprocessing rules.
   */
  preprocessRules?: CreateKnowledgeBaseRequestChunkConfigurationPreprocessRules;
  /**
   * @remarks
   * Required for the BY_SEPARATOR strategy. This parameter is ignored for other strategies. The literal string used to split the text. Regular expressions are not supported. The maximum length is 32 characters. Example: \\
   * \\
   *  for paragraph breaks.
   * 
   * @example
   * \\\\n\\\\n
   */
  separator?: string;
  /**
   * @remarks
   * The chunking strategy. AUTO indicates intelligent chunking, which is heading-aware and groups paragraphs. BY_LENGTH indicates sliding window chunking by length, where you can specify OverlapSize. BY_SEPARATOR indicates chunking by separator, where you must specify Separator. BY_HEADING indicates chunking by heading level, where you must specify HeadingLevel. Valid values: AUTO, BY_LENGTH, BY_SEPARATOR, and BY_HEADING.
   * 
   * This parameter is required.
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
      preprocessRules: CreateKnowledgeBaseRequestChunkConfigurationPreprocessRules,
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

export class CreateKnowledgeBaseRequestMetadataSchema extends $dara.Model {
  /**
   * @remarks
   * The name of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  name?: string;
  /**
   * @remarks
   * The type of the field. Valid values: STRING, LONG, DOUBLE, BOOLEAN, and DATETIME.
   * 
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  type?: string;
  /**
   * @remarks
   * The value configuration. If ValueMode is set to CONSTANT, this parameter specifies a fixed value. If it is left empty, you can assign a value during upload. If ValueMode is set to SYSTEM_VARIABLE, this parameter specifies a system variable name, such as DOCUMENT_NAME, FILE_TYPE, FILE_SIZE, DOCUMENT_UPLOAD_TIME, SOURCE_TYPE, SOURCE_URI, or SOURCE_MODIFIED_TIME.
   * 
   * @example
   * EventHouse
   */
  value?: string;
  /**
   * @remarks
   * The value mode. CONSTANT indicates a constant. If Value is not empty, all documents use the fixed value. If Value is empty, you can assign a value during upload. SYSTEM_VARIABLE indicates a system variable. Value specifies the variable name, which is automatically generated by the system and cannot be overwritten during upload.
   * 
   * This parameter is required.
   * 
   * @example
   * CONSTANT
   */
  valueMode?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
      valueMode: 'ValueMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'string',
      valueMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseRequestSearchConfiguration extends $dara.Model {
  /**
   * @remarks
   * The search mode. KEYWORD indicates keyword retrieve. VECTOR indicates AISearch. HYBRID indicates hybrid retrieve. Valid values: KEYWORD, VECTOR, and HYBRID.
   * 
   * @example
   * HYBRID
   */
  mode?: string;
  /**
   * @remarks
   * Applies only to the hybrid search mode. RRF indicates reciprocal rank fusion. WEIGHTED indicates weighted normalization fusion, which is used together with VectorWeight. Default value: RRF.
   * 
   * @example
   * RRF
   */
  rankAlgorithm?: string;
  /**
   * @remarks
   * Applies only to the hybrid search mode. Specifies whether to enable reranking by default when a search request does not specify the Rerank parameter.
   * 
   * @example
   * false
   */
  rerankEnabled?: boolean;
  /**
   * @remarks
   * The default rerank model used when a search request does not specify the RerankModel parameter. Valid value: qwen3-rerank. Default value: qwen3-rerank.
   * 
   * @example
   * qwen3-rerank
   */
  rerankModel?: string;
  /**
   * @remarks
   * The k parameter for the RRF fusion algorithm. The value must be greater than 0. Default value: 60.
   * 
   * @example
   * 60
   */
  rrfK?: number;
  /**
   * @remarks
   * The default number of results to return.
   * 
   * @example
   * 20
   */
  topK?: number;
  /**
   * @remarks
   * The vector weight for the WEIGHTED fusion algorithm. Valid values: 0 to 1. The keyword weight is 1 minus this value. Default value: 0.7.
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

export class CreateKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The EventHouse catalog to which the knowledge base belongs. This parameter, together with Namespace and KnowledgeBaseName, uniquely identifies the knowledge base. This parameter cannot be modified after the knowledge base is created. You cannot bind a system catalog.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * Optional. The default chunking strategy for the knowledge base. This strategy applies only to documents uploaded after the configuration. If this parameter is not specified, the system default chunking strategy is used.
   */
  chunkConfiguration?: CreateKnowledgeBaseRequestChunkConfiguration;
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
   * Optional. The vector dimensions. This parameter is attached to the embedding model for validation. Valid values for text-embedding-v3: 64, 128, 256, 512, 768, and 1024. Valid values for text-embedding-v4: 64, 128, 256, 512, 768, 1024, 1536, and 2048. Valid values for qwen3.7-text-embedding: 256, 512, 768, 1024, 1536, 2048, and 2560. Valid values for qwen3.7-text-embedding-flash: 256, 512, 768, and 1024. If this parameter is not specified, the default dimension of the model, 1024, is used. This parameter cannot be modified after the knowledge base is created. To change the model, you must rebuild the knowledge base, even if the dimensions remain the same.
   * 
   * @example
   * 1024
   */
  embeddingDimension?: number;
  /**
   * @remarks
   * Optional. The embedding model. This parameter cannot be modified after the knowledge base is created. Valid values: text-embedding-v3, text-embedding-v4, qwen3.7-text-embedding, and qwen3.7-text-embedding-flash. Only Qwen models provided by Model Studio are supported. Third-party models are not supported. Default value: text-embedding-v4.
   * 
   * @example
   * text-embedding-v4
   */
  embeddingModel?: string;
  /**
   * @remarks
   * The name of the knowledge base. The name must be unique within the same namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * product-docs
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * Declares the metadata fields for the knowledge base. When you upload documents, the metadata can only contain the fields declared here. This parameter cannot be modified after the knowledge base is created.
   * 
   * @example
   * [{"Name":"department","Type":"STRING"}]
   */
  metadataSchema?: CreateKnowledgeBaseRequestMetadataSchema[];
  /**
   * @remarks
   * The EventHouse namespace to which the knowledge base belongs. The namespace must belong to the specified catalog. This parameter, together with Catalog and KnowledgeBaseName, uniquely identifies the knowledge base. This parameter cannot be modified after the knowledge base is created.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * Optional. The default search configuration at the knowledge base level. This configuration takes effect when the corresponding parameters are not specified in a search request. You can modify this configuration by calling UpdateKnowledgeBase after the knowledge base is created.
   */
  searchConfiguration?: CreateKnowledgeBaseRequestSearchConfiguration;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      chunkConfiguration: 'ChunkConfiguration',
      description: 'Description',
      embeddingDimension: 'EmbeddingDimension',
      embeddingModel: 'EmbeddingModel',
      knowledgeBaseName: 'KnowledgeBaseName',
      metadataSchema: 'MetadataSchema',
      namespace: 'Namespace',
      searchConfiguration: 'SearchConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      chunkConfiguration: CreateKnowledgeBaseRequestChunkConfiguration,
      description: 'string',
      embeddingDimension: 'number',
      embeddingModel: 'string',
      knowledgeBaseName: 'string',
      metadataSchema: { 'type': 'array', 'itemType': CreateKnowledgeBaseRequestMetadataSchema },
      namespace: 'string',
      searchConfiguration: CreateKnowledgeBaseRequestSearchConfiguration,
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

