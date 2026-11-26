// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseRequestBodyChunkConfigurationPreprocessRules extends $dara.Model {
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
   * Specifies whether to replace consecutive spaces, line breaks, and tabs with a single space.
   * 
   * @example
   * true
   */
  replaceConsecutiveWhitespace?: boolean;
  static names(): { [key: string]: string } {
    return {
      removeUrlsAndEmails: 'removeUrlsAndEmails',
      replaceConsecutiveWhitespace: 'replaceConsecutiveWhitespace',
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

export class CreateKnowledgeBaseRequestBodyChunkConfiguration extends $dara.Model {
  /**
   * @remarks
   * Required when the strategy is BY_HEADING, and the value ranges from 1 to 6. Headings at or below this level are used as boundaries. Deeper headings are retained in the body text. Overlong sections fall back to paragraphs or sentences, and documents without headings fall back to intelligent chunking. Ignored for other strategies and verified by the backend according to the strategy.
   * 
   * @example
   * 2
   */
  headingLevel?: number;
  /**
   * @remarks
   * 1 to 6000 characters. It follows the character length metric of EB and is not the number of tokens. If omitted, the server-side default value is used.
   * 
   * @example
   * 512
   */
  maxChunkSize?: number;
  /**
   * @remarks
   * Takes effect only when the strategy is BY_LENGTH. The unit is characters, and the default value is 0. The valid value must be greater than or equal to 0 and less than the valid maxChunkSize, and the length after overlapping must not exceed the maximum chunk size. Ignored for other strategies and verified by the backend according to the strategy.
   * 
   * @example
   * 40
   */
  overlapSize?: number;
  /**
   * @remarks
   * The text preprocessing rules before chunking.
   */
  preprocessRules?: CreateKnowledgeBaseRequestBodyChunkConfigurationPreprocessRules;
  /**
   * @remarks
   * Required and non-empty when the strategy is BY_SEPARATOR. It matches the literal string as a whole and does not use regular expressions. Ignored for other strategies.
   * 
   * @example
   * \n\n
   */
  separator?: string;
  /**
   * @remarks
   * Returns the saved chunking strategy. AUTO indicates automatic chunking, and BY_SEPARATOR indicates chunking by separator. BY_LENGTH and BY_HEADING are returned only for compatibility with historical configurations. When creating or updating a configuration, only AUTO and BY_SEPARATOR are accepted in the first phase.
   * 
   * This parameter is required.
   * 
   * @example
   * AUTO
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      headingLevel: 'headingLevel',
      maxChunkSize: 'maxChunkSize',
      overlapSize: 'overlapSize',
      preprocessRules: 'preprocessRules',
      separator: 'separator',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headingLevel: 'number',
      maxChunkSize: 'number',
      overlapSize: 'number',
      preprocessRules: CreateKnowledgeBaseRequestBodyChunkConfigurationPreprocessRules,
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

export class CreateKnowledgeBaseRequestBodyMetadataSchema extends $dara.Model {
  /**
   * @remarks
   * The metadata field name of the knowledge base within the workspace. It must be unique within the same schema and cannot occupy system control fields.
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  name?: string;
  /**
   * @remarks
   * STRING, LONG, DOUBLE, BOOLEAN, or DATETIME. Uploaded and updated string values are parsed by the backend according to this type. Nested objects are not accepted.
   * 
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  type?: string;
  /**
   * @remarks
   * The fixed value or system variable name. The following variables are retained: DOCUMENT_NAME, FILE_TYPE, FILE_SIZE, DOCUMENT_UPLOAD_TIME, SOURCE_TYPE, SOURCE_URI, and SOURCE_MODIFIED_TIME. DOCUMENT_* refers to the original asset in this operation, and the variable names retain EB compatibility.
   * 
   * @example
   * engineering
   */
  value?: string;
  /**
   * @remarks
   * CONSTANT indicates a constant. If the value is not empty, the system uses a fixed value. If no value is configured, the system assigns the value during upload. SYSTEM_VARIABLE indicates that the system generates the value and customers cannot overwrite it. You cannot modify the schema after creation.
   * 
   * This parameter is required.
   * 
   * @example
   * CONSTANT
   */
  valueMode?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
      valueMode: 'valueMode',
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

export class CreateKnowledgeBaseRequestBodySearchConfiguration extends $dara.Model {
  /**
   * @remarks
   * The retrieve mode. KEYWORD indicates keyword retrieve, VECTOR indicates AISearch, and HYBRID indicates hybrid retrieve. The request parameter takes precedence over the knowledge base configuration. If neither is configured, HYBRID is used.
   * 
   * @example
   * HYBRID
   */
  mode?: string;
  /**
   * @remarks
   * The rank fusion algorithm. RRF indicates reciprocal rank fusion, and WEIGHTED indicates weighted normalization fusion. This parameter takes effect only when the search mode is HYBRID. The default value is RRF.
   * 
   * @example
   * RRF
   */
  rankAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to enable reranking by default. This parameter applies to all three search modes. The request parameter takes precedence over this configuration. If neither is configured, the default value is false.
   * 
   * @example
   * false
   */
  rerankEnabled?: boolean;
  /**
   * @remarks
   * The reranking model. Supported models include qwen3-rerank, qwen3.7-text-rerank, gte-rerank-v2, and qwen3-vl-rerank. The request parameter takes precedence over this configuration. If neither is configured, qwen3-rerank is used.
   * 
   * @example
   * qwen3-rerank
   */
  rerankModel?: string;
  /**
   * @remarks
   * The k parameter for RRF. The default value is 60. The value must be greater than 0.
   * 
   * @example
   * 60
   */
  rrfK?: number;
  /**
   * @remarks
   * The default number of results to return. A maximum of 100 results can be returned. The request parameter takes precedence over the knowledge base configuration. If neither is configured, 10 is used. The actual number of returned results may be less than this value after filtering by permissions and published versions.
   * 
   * @example
   * 20
   */
  topK?: number;
  /**
   * @remarks
   * The vector path weight for WEIGHTED. The default value is 0.7. The keyword path weight is 1 minus this value.
   * 
   * @example
   * 0.7
   */
  vectorWeight?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      rankAlgorithm: 'rankAlgorithm',
      rerankEnabled: 'rerankEnabled',
      rerankModel: 'rerankModel',
      rrfK: 'rrfK',
      topK: 'topK',
      vectorWeight: 'vectorWeight',
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

export class CreateKnowledgeBaseRequestBody extends $dara.Model {
  /**
   * @remarks
   * The valid configuration with parsed default values. It only affects subsequently newly uploaded or explicitly reprocessed assets.
   */
  chunkConfiguration?: CreateKnowledgeBaseRequestBodyChunkConfiguration;
  /**
   * @remarks
   * The description of the knowledge base.
   * 
   * @example
   * Product documentation knowledge base
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * If omitted, the default model dimension of 1024 is used. text-embedding-v3 supports 64, 128, 256, 512, 768, and 1024. text-embedding-v4 supports 64, 128, 256, 512, 768, 1024, 1536, and 2048. qwen3.7-text-embedding supports 256, 512, 768, 1024, 1536, 2048, and 2560. qwen3.7-text-embedding-flash supports 256, 512, 768, and 1024. This cannot be modified after creation.
   * 
   * @example
   * 1024
   */
  embeddingDimension?: number;
  /**
   * @remarks
   * Only the listed Model Studio Qwen series models are supported. If omitted, the default value is text-embedding-v4. This cannot be modified after creation. To change the model, you must rebuild the knowledge base.
   * 
   * @example
   * text-embedding-v4
   */
  embeddingModel?: string;
  /**
   * @remarks
   * Declares the metadata fields that can be used by assets. This cannot be modified after creation. If omitted, user metadata is not used.
   */
  metadataSchema?: CreateKnowledgeBaseRequestBodyMetadataSchema[];
  /**
   * @remarks
   * The name of the knowledge base within the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * product-docs
   */
  name?: string;
  /**
   * @remarks
   * The default search configuration at the knowledge base level. This configuration takes effect when the corresponding parameters are not provided in the search request. You can modify it by calling UpdateKnowledgeBase.
   */
  searchConfiguration?: CreateKnowledgeBaseRequestBodySearchConfiguration;
  static names(): { [key: string]: string } {
    return {
      chunkConfiguration: 'chunkConfiguration',
      description: 'description',
      embeddingDimension: 'embeddingDimension',
      embeddingModel: 'embeddingModel',
      metadataSchema: 'metadataSchema',
      name: 'name',
      searchConfiguration: 'searchConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkConfiguration: CreateKnowledgeBaseRequestBodyChunkConfiguration,
      description: 'string',
      embeddingDimension: 'number',
      embeddingModel: 'string',
      metadataSchema: { 'type': 'array', 'itemType': CreateKnowledgeBaseRequestBodyMetadataSchema },
      name: 'string',
      searchConfiguration: CreateKnowledgeBaseRequestBodySearchConfiguration,
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

export class CreateKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameters for creating a knowledge base.
   * 
   * This parameter is required.
   */
  body?: CreateKnowledgeBaseRequestBody;
  /**
   * @remarks
   * The optional idempotency token for the creation request. If provided, it must be a non-blank string with a maximum length of 128 characters. Within the same workspace, the same token and the same request return the original result, while different requests return IdempotencyConflict. If not provided, each request is processed as a new request, and idempotency across request retries is not guaranteed. Creation with the same name is still subject to the name uniqueness constraint.
   * 
   * @example
   * kb-create-001
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateKnowledgeBaseRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

