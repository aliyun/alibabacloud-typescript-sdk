// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseRequestBodyChunkConfigurationPreprocessRules extends $dara.Model {
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

export class UpdateKnowledgeBaseRequestBodyChunkConfiguration extends $dara.Model {
  /**
   * @remarks
   * Required when the strategy is BY_HEADING, with a valid range of 1 to 6. Headings at or above this level are used as boundaries. Deeper headings are retained in the body text. Overlong sections fall back to paragraph or sentence splitting. Documents without headings fall back to intelligent splitting. This parameter is ignored for other strategies and is validated by the backend based on the strategy.
   * 
   * @example
   * 2
   */
  headingLevel?: number;
  /**
   * @remarks
   * The maximum chunk size ranges from 1 to 6,000 characters. This follows the character length metric of EB, not the token count. If omitted, the server-side default value is used.
   * 
   * @example
   * 512
   */
  maxChunkSize?: number;
  /**
   * @remarks
   * Takes effect only when the strategy is BY_LENGTH. The unit is characters, and the default value is 0. The valid value must be greater than or equal to 0 and less than the valid maxChunkSize, ensuring that the chunk size with overlap does not exceed the maximum chunk size. This parameter is ignored for other strategies and is validated by the backend based on the strategy.
   * 
   * @example
   * 40
   */
  overlapSize?: number;
  /**
   * @remarks
   * The text preprocessing rules applied before chunking.
   */
  preprocessRules?: UpdateKnowledgeBaseRequestBodyChunkConfigurationPreprocessRules;
  /**
   * @remarks
   * Required and non-empty when the strategy is BY_SEPARATOR. The delimiter is matched as a whole literal string without using regular expressions. This parameter is ignored for other strategies.
   * 
   * @example
   * \n\n
   */
  separator?: string;
  /**
   * @remarks
   * The saved chunking strategy. AUTO indicates automatic chunking, and BY_SEPARATOR indicates delimiter-based chunking. BY_LENGTH and BY_HEADING are returned only for backward compatibility with historical configurations. Only AUTO and BY_SEPARATOR are accepted when creating or updating configurations in the current phase.
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
      preprocessRules: UpdateKnowledgeBaseRequestBodyChunkConfigurationPreprocessRules,
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

export class UpdateKnowledgeBaseRequestBodySearchConfiguration extends $dara.Model {
  /**
   * @remarks
   * KEYWORD indicates keyword retrieval, VECTOR indicates vector retrieval, and HYBRID indicates hybrid retrieval. The request configuration takes precedence over the knowledge base configuration. If neither is configured, HYBRID is used.
   * 
   * @example
   * HYBRID
   */
  mode?: string;
  /**
   * @remarks
   * RRF indicates reciprocal rank fusion, and WEIGHTED indicates weighted normalized fusion. This parameter takes effect only in HYBRID mode. The system default is RRF.
   * 
   * @example
   * RRF
   */
  rankAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to enable reranking. This applies to all three search modes. An explicit specification in the request overrides this configuration. If neither is configured, the value is false.
   * 
   * @example
   * false
   */
  rerankEnabled?: boolean;
  /**
   * @remarks
   * Supported models include qwen3-rerank, qwen3.7-text-rerank, gte-rerank-v2, and qwen3-vl-rerank. The request configuration takes precedence over this configuration. If neither is configured, qwen3-rerank is used.
   * 
   * @example
   * qwen3-rerank
   */
  rerankModel?: string;
  /**
   * @remarks
   * The k parameter for RRF. The system default is 60, and the value must be greater than 0.
   * 
   * @example
   * 60
   */
  rrfK?: number;
  /**
   * @remarks
   * The maximum number of results to return is 100. The request configuration takes precedence over the knowledge base configuration. If neither is configured, 10 is used. The actual number of results may be less than this value after permission and release version filtering.
   * 
   * @example
   * 20
   */
  topK?: number;
  /**
   * @remarks
   * The vector path weight for WEIGHTED fusion. The system default is 0.7. The keyword path weight is 1 minus this value.
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

export class UpdateKnowledgeBaseRequestBody extends $dara.Model {
  /**
   * @remarks
   * The valid configuration with resolved default values. This configuration affects only subsequently uploaded or explicitly reprocessed assets.
   */
  chunkConfiguration?: UpdateKnowledgeBaseRequestBodyChunkConfiguration;
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
   * The updated name of the knowledge base.
   * 
   * @example
   * product-docs-v2
   */
  name?: string;
  /**
   * @remarks
   * Updates the default search configuration at the knowledge base level, which takes effect immediately for subsequent search requests. If omitted, the configuration is not modified.
   */
  searchConfiguration?: UpdateKnowledgeBaseRequestBodySearchConfiguration;
  static names(): { [key: string]: string } {
    return {
      chunkConfiguration: 'chunkConfiguration',
      description: 'description',
      name: 'name',
      searchConfiguration: 'searchConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkConfiguration: UpdateKnowledgeBaseRequestBodyChunkConfiguration,
      description: 'string',
      name: 'string',
      searchConfiguration: UpdateKnowledgeBaseRequestBodySearchConfiguration,
    };
  }

  validate() {
    if(this.chunkConfiguration && typeof (this.chunkConfiguration as any).validate === 'function') {
      (this.chunkConfiguration as any).validate();
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

export class UpdateKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * Provide at least one field to be updated. Unprovided fields remain unchanged. You can pass an empty string for the description field to clear the description, or omit it to keep the description unchanged.
   * 
   * This parameter is required.
   */
  body?: UpdateKnowledgeBaseRequestBody;
  /**
   * @remarks
   * Optional. For retries on the same knowledge base with the same client token and identical update content, the accepted result is returned without further modifications. If the content differs, an IdempotencyConflict error is returned.
   * 
   * @example
   * kb-update-001
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
      body: UpdateKnowledgeBaseRequestBody,
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

