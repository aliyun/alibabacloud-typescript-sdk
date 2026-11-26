// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseResponseBodyDataChunkConfigurationPreprocessRules extends $dara.Model {
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

export class UpdateKnowledgeBaseResponseBodyDataChunkConfiguration extends $dara.Model {
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
  preprocessRules?: UpdateKnowledgeBaseResponseBodyDataChunkConfigurationPreprocessRules;
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
      preprocessRules: UpdateKnowledgeBaseResponseBodyDataChunkConfigurationPreprocessRules,
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

export class UpdateKnowledgeBaseResponseBodyDataLastError extends $dara.Model {
  /**
   * @remarks
   * The stable product error code. It does not return internal task identifiers, stack traces, or storage addresses.
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

export class UpdateKnowledgeBaseResponseBodyDataMetadataSchema extends $dara.Model {
  /**
   * @remarks
   * The metadata field name of the knowledge base in the workspace. It must be unique within the same schema and cannot occupy system control fields.
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  name?: string;
  /**
   * @remarks
   * The field type, such as STRING, LONG, DOUBLE, BOOLEAN, or DATETIME. Uploaded and updated string values are parsed by the backend based on this type. Nested objects are not accepted.
   * 
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  type?: string;
  /**
   * @remarks
   * The fixed value or system variable name. It uses DOCUMENT_NAME, FILE_TYPE, FILE_SIZE, DOCUMENT_UPLOAD_TIME, SOURCE_TYPE, SOURCE_URI, and SOURCE_MODIFIED_TIME. DOCUMENT_* refers to the original asset in this operation, and the variable names retain EB compatibility.
   * 
   * @example
   * engineering
   */
  value?: string;
  /**
   * @remarks
   * The value mode. CONSTANT indicates a constant: a fixed value is used when the value is not empty, and the value is assigned during upload if not configured. SYSTEM_VARIABLE indicates that the value is generated by the system and cannot be overwritten by customers. The schema cannot be modified after creation.
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

export class UpdateKnowledgeBaseResponseBodyDataSearchConfiguration extends $dara.Model {
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

export class UpdateKnowledgeBaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The valid configuration with resolved default values. This configuration affects only subsequently uploaded or explicitly reprocessed assets.
   */
  chunkConfiguration?: UpdateKnowledgeBaseResponseBodyDataChunkConfiguration;
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
   * The actual vector dimensions that take effect. Default value: 1024. It cannot be modified after creation.
   * 
   * @example
   * 1024
   */
  embeddingDimension?: number;
  /**
   * @remarks
   * The actual model name that takes effect. It cannot be modified after creation. Default value: text-embedding-v4.
   * 
   * @example
   * text-embedding-v4
   */
  embeddingModel?: string;
  /**
   * @remarks
   * The stable knowledge base ID generated by the platform. It is persistently bound to the tenant ID and workspace ID. Queries and modifications must verify all three identifiers simultaneously, and access based solely on the ID is not allowed.
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
  lastError?: UpdateKnowledgeBaseResponseBodyDataLastError;
  /**
   * @remarks
   * The metadata field definitions determined during creation. They cannot be modified after creation and include constant or system variable configurations.
   */
  metadataSchema?: UpdateKnowledgeBaseResponseBodyDataMetadataSchema[];
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
   * The region where the knowledge base is located. It is consistent with the associated workspace and maintained by the server.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The valid search configuration with parsed platform default values. It can be overridden by a single search request.
   */
  searchConfiguration?: UpdateKnowledgeBaseResponseBodyDataSearchConfiguration;
  /**
   * @remarks
   * You can call the GetKnowledgeBase and ListKnowledgeBases operations to query the creation progress. Creating indicates that the knowledge base is being created, Active indicates that the creation succeeded, and CreateFailed indicates that the creation failed. A deletion acceptance response may return Deleting, DeleteFailed, or Deleted. After a deletion is accepted, GetKnowledgeBase returns a resource not found error, ListKnowledgeBases no longer displays the resource, and the system continues to clean up the resource in the background. For the cause of a creation failure, see lastError.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The read-only tenant to which the resource belongs. It is resolved by Magic based on the trusted gateway call identity and bound during creation. It must match the tenant of the associated workspace and cannot be specified or modified by the client.
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
      chunkConfiguration: UpdateKnowledgeBaseResponseBodyDataChunkConfiguration,
      createdAt: 'string',
      description: 'string',
      embeddingDimension: 'number',
      embeddingModel: 'string',
      knowledgeBaseId: 'string',
      lastError: UpdateKnowledgeBaseResponseBodyDataLastError,
      metadataSchema: { 'type': 'array', 'itemType': UpdateKnowledgeBaseResponseBodyDataMetadataSchema },
      name: 'string',
      regionId: 'string',
      searchConfiguration: UpdateKnowledgeBaseResponseBodyDataSearchConfiguration,
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

export class UpdateKnowledgeBaseResponseBody extends $dara.Model {
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
   * The updated knowledge base details.
   */
  data?: UpdateKnowledgeBaseResponseBodyData;
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
   * The request tracking ID.
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
      data: UpdateKnowledgeBaseResponseBodyData,
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

