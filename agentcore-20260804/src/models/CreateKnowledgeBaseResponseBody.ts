// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseResponseBodyDataChunkConfigurationPreprocessRules extends $dara.Model {
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

export class CreateKnowledgeBaseResponseBodyDataChunkConfiguration extends $dara.Model {
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
  preprocessRules?: CreateKnowledgeBaseResponseBodyDataChunkConfigurationPreprocessRules;
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
      preprocessRules: CreateKnowledgeBaseResponseBodyDataChunkConfigurationPreprocessRules,
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

export class CreateKnowledgeBaseResponseBodyDataLastError extends $dara.Model {
  /**
   * @remarks
   * The stable product error code. It does not include internal task identifiers, stack traces, or storage addresses.
   * 
   * @example
   * ProcessingFailed
   */
  code?: string;
  /**
   * @remarks
   * The sanitized error summary that can be displayed to users.
   * 
   * @example
   * File parsing failed
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseResponseBodyDataMetadataSchema extends $dara.Model {
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

export class CreateKnowledgeBaseResponseBodyDataSearchConfiguration extends $dara.Model {
  /**
   * @remarks
   * KEYWORD indicates keyword retrieve, VECTOR indicates AISearch, and HYBRID indicates hybrid retrieve. The request configuration takes precedence over the knowledge base configuration. If neither is configured, HYBRID is used.
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

export class CreateKnowledgeBaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The valid configuration with parsed default values. It only affects subsequently newly uploaded or explicitly reprocessed assets.
   */
  chunkConfiguration?: CreateKnowledgeBaseResponseBodyDataChunkConfiguration;
  /**
   * @remarks
   * The time in ISO 8601 UTC format.
   * 
   * @example
   * 2026-10-27T02:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Product documentation
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The actual effective vector dimensions. Default value: 1024. It cannot be modified after creation.
   * 
   * @example
   * 1024
   */
  embeddingDimension?: number;
  /**
   * @remarks
   * The actual effective model name. It cannot be modified after creation. Default value: text-embedding-v4.
   * 
   * @example
   * text-embedding-v4
   */
  embeddingModel?: string;
  /**
   * @remarks
   * The stable knowledge base ID generated by the platform, which is persistently bound to the tenantId and workspaceId. Queries and modifications must verify all three identifiers simultaneously. Access based solely on the ID is not allowed.
   * 
   * @example
   * kb-001
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The sanitized error summary when a lifecycle operation fails.
   * 
   * **if can be null:**
   * true
   */
  lastError?: CreateKnowledgeBaseResponseBodyDataLastError;
  /**
   * @remarks
   * The metadata schema is determined during creation and cannot be modified afterward. It contains configurations for constants or system variables.
   */
  metadataSchema?: CreateKnowledgeBaseResponseBodyDataMetadataSchema[];
  /**
   * @remarks
   * The display name of the knowledge base.
   * 
   * @example
   * product-docs
   */
  name?: string;
  /**
   * @remarks
   * The region where the knowledge base is located. This region is the same as that of the associated workspace and is maintained by the server.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The valid search configuration with parsed platform default values, which can be overridden by a single search request.
   */
  searchConfiguration?: CreateKnowledgeBaseResponseBodyDataSearchConfiguration;
  /**
   * @remarks
   * You can call the GetKnowledgeBase and ListKnowledgeBases operations to query the creation progress. Creating indicates that the creation is in progress, Active indicates that the creation is successful, and CreateFailed indicates that the creation failed. The deletion acceptance response may return Deleting, DeleteFailed, or Deleted. After the deletion is accepted, GetKnowledgeBase returns that the resource does not exist, and ListKnowledgeBases no longer displays the resource while the backend continues to clean it up. For the cause of a creation failure, see lastError.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The read-only tenant ownership. It is resolved by Magic based on the trusted gateway call identity and bound during creation, which is consistent with the tenant of the workspace to which it belongs. Client-specified or modified values are not accepted.
   * 
   * @example
   * 1234567890123456
   */
  tenantId?: string;
  /**
   * @remarks
   * The time in ISO 8601 UTC format.
   * 
   * @example
   * 2026-10-27T02:05:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The AgentCore workspace to which the resource belongs.
   * 
   * @example
   * ws-001
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      chunkConfiguration: 'chunkConfiguration',
      createdAt: 'createdAt',
      description: 'description',
      embeddingDimension: 'embeddingDimension',
      embeddingModel: 'embeddingModel',
      knowledgeBaseId: 'knowledgeBaseId',
      lastError: 'lastError',
      metadataSchema: 'metadataSchema',
      name: 'name',
      regionId: 'regionId',
      searchConfiguration: 'searchConfiguration',
      status: 'status',
      tenantId: 'tenantId',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkConfiguration: CreateKnowledgeBaseResponseBodyDataChunkConfiguration,
      createdAt: 'string',
      description: 'string',
      embeddingDimension: 'number',
      embeddingModel: 'string',
      knowledgeBaseId: 'string',
      lastError: CreateKnowledgeBaseResponseBodyDataLastError,
      metadataSchema: { 'type': 'array', 'itemType': CreateKnowledgeBaseResponseBodyDataMetadataSchema },
      name: 'string',
      regionId: 'string',
      searchConfiguration: CreateKnowledgeBaseResponseBodyDataSearchConfiguration,
      status: 'string',
      tenantId: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.chunkConfiguration && typeof (this.chunkConfiguration as any).validate === 'function') {
      (this.chunkConfiguration as any).validate();
    }
    if(this.lastError && typeof (this.lastError as any).validate === 'function') {
      (this.lastError as any).validate();
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

export class CreateKnowledgeBaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The stable result code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The details of the knowledge base that has entered the creation process, including the tenant ownership, status, and lastError. You can call the GetKnowledgeBase or ListKnowledgeBases operation to query the creation result.
   */
  data?: CreateKnowledgeBaseResponseBodyData;
  /**
   * @remarks
   * The actual HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The description of the data masking result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 01A00000-0000-0000-0000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateKnowledgeBaseResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

