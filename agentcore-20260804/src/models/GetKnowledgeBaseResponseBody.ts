// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeBaseResponseBodyDataChunkConfigurationPreprocessRules extends $dara.Model {
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

export class GetKnowledgeBaseResponseBodyDataChunkConfiguration extends $dara.Model {
  /**
   * @remarks
   * Required when the strategy is BY_HEADING. Valid values: 1 to 6. Headings at or above this level are used as boundaries. Deeper headings are retained in the body text. Overlong sections fall back to paragraph or sentence splitting. Documents without headings fall back to intelligent splitting. Ignored for other strategies and validated by the backend based on the strategy.
   * 
   * @example
   * 2
   */
  headingLevel?: number;
  /**
   * @remarks
   * Ranges from 1 to 6,000 characters. It follows the character length metric of EB and is not the number of tokens. If omitted, the server-side default value is used.
   * 
   * @example
   * 512
   */
  maxChunkSize?: number;
  /**
   * @remarks
   * Takes effect only when the strategy is BY_LENGTH. The unit is characters. Default value: 0. The valid value must be greater than or equal to 0 and less than the valid maxChunkSize. The total length after overlapping must not exceed the maximum chunk size. Ignored for other strategies and validated by the backend based on the strategy.
   * 
   * @example
   * 40
   */
  overlapSize?: number;
  /**
   * @remarks
   * The text preprocessing rules before splitting.
   */
  preprocessRules?: GetKnowledgeBaseResponseBodyDataChunkConfigurationPreprocessRules;
  /**
   * @remarks
   * Required and non-empty when the strategy is BY_SEPARATOR. It matches the entire literal string without using regular expressions. Ignored for other strategies.
   * 
   * @example
   * \n\n
   */
  separator?: string;
  /**
   * @remarks
   * Returns the saved chunking strategy. AUTO indicates automatic chunking. BY_SEPARATOR indicates chunking by separator. BY_LENGTH and BY_HEADING are returned only for backward compatibility with historical configurations. Only AUTO and BY_SEPARATOR are accepted when you create or update a configuration in the first phase.
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
      preprocessRules: GetKnowledgeBaseResponseBodyDataChunkConfigurationPreprocessRules,
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

export class GetKnowledgeBaseResponseBodyDataLastError extends $dara.Model {
  /**
   * @remarks
   * A stable product error code. Internal task identifiers, stack traces, or storage addresses are not returned.
   * 
   * @example
   * ProcessingFailed
   */
  code?: string;
  /**
   * @remarks
   * A sanitized error summary that can be displayed to users.
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

export class GetKnowledgeBaseResponseBodyDataMetadataSchema extends $dara.Model {
  /**
   * @remarks
   * The name of the metadata field for the knowledge base in the workspace. It must be unique within the same schema and cannot use reserved system control fields.
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  name?: string;
  /**
   * @remarks
   * STRING, LONG, DOUBLE, BOOLEAN, or DATETIME. Uploaded and updated string values are parsed by the backend based on this type. Nested objects are not accepted.
   * 
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  type?: string;
  /**
   * @remarks
   * A fixed value or system variable name. The following variables are supported: DOCUMENT_NAME, FILE_TYPE, FILE_SIZE, DOCUMENT_UPLOAD_TIME, SOURCE_TYPE, SOURCE_URI, and SOURCE_MODIFIED_TIME. In this API operation, DOCUMENT_* refers to the original asset. The variable names are retained for EB compatibility.
   * 
   * @example
   * engineering
   */
  value?: string;
  /**
   * @remarks
   * CONSTANT indicates a constant. If the value is not empty, a fixed value is used. If no value is configured, the value is assigned during upload. SYSTEM_VARIABLE indicates that the value is generated by the system and cannot be overwritten by customers. The schema cannot be modified after creation.
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

export class GetKnowledgeBaseResponseBodyDataSearchConfiguration extends $dara.Model {
  /**
   * @remarks
   * KEYWORD indicates keyword retrieval. VECTOR indicates vector retrieval. HYBRID indicates hybrid retrieval. The request configuration takes precedence over the knowledge base configuration. If neither is configured, HYBRID is used.
   * 
   * @example
   * HYBRID
   */
  mode?: string;
  /**
   * @remarks
   * RRF indicates reciprocal rank fusion. WEIGHTED indicates weighted normalization fusion. Takes effect only for HYBRID. Default value: RRF.
   * 
   * @example
   * RRF
   */
  rankAlgorithm?: string;
  /**
   * @remarks
   * Applies to all three search modes. The request configuration overrides this setting when explicitly specified. If neither is configured, the value is false.
   * 
   * @example
   * false
   */
  rerankEnabled?: boolean;
  /**
   * @remarks
   * Supports qwen3-rerank, qwen3.7-text-rerank, gte-rerank-v2, and qwen3-vl-rerank. The request configuration takes precedence over this configuration. If neither is configured, qwen3-rerank is used.
   * 
   * @example
   * qwen3-rerank
   */
  rerankModel?: string;
  /**
   * @remarks
   * The k parameter for RRF. Default value: 60. The value must be greater than 0.
   * 
   * @example
   * 60
   */
  rrfK?: number;
  /**
   * @remarks
   * Returns a maximum of 100 results. The request configuration takes precedence over the knowledge base configuration. If neither is configured, 10 is used. The actual number of results may be less than this value after permission and release version filtering.
   * 
   * @example
   * 20
   */
  topK?: number;
  /**
   * @remarks
   * The vector path weight for WEIGHTED. Default value: 0.7. The keyword path weight is 1 minus this value.
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

export class GetKnowledgeBaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The valid configuration with parsed default values. It only affects subsequently uploaded or explicitly reprocessed assets.
   */
  chunkConfiguration?: GetKnowledgeBaseResponseBodyDataChunkConfiguration;
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
   * The vector dimensions that actually take effect. Default value: 1024. It cannot be modified after creation.
   * 
   * @example
   * 1024
   */
  embeddingDimension?: number;
  /**
   * @remarks
   * The name of the model that actually takes effect. It cannot be modified after creation. Default value: text-embedding-v4.
   * 
   * @example
   * text-embedding-v4
   */
  embeddingModel?: string;
  /**
   * @remarks
   * The stable knowledge base ID generated by the platform. It is persistently bound to the tenantId and workspaceId. Queries and modifications must verify all three identifiers simultaneously. Access based solely on the ID is not allowed.
   * 
   * @example
   * kb-001
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The sanitized error summary returned when a lifecycle operation fails.
   * 
   * **if can be null:**
   * true
   */
  lastError?: GetKnowledgeBaseResponseBodyDataLastError;
  /**
   * @remarks
   * The metadata schema is determined during creation and cannot be modified afterward. It includes constant or system variable configurations.
   */
  metadataSchema?: GetKnowledgeBaseResponseBodyDataMetadataSchema[];
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
   * The valid search configuration with parsed platform default values. It can be overridden by a single search request.
   */
  searchConfiguration?: GetKnowledgeBaseResponseBodyDataSearchConfiguration;
  /**
   * @remarks
   * You can call GetKnowledgeBase and ListKnowledgeBases to query the creation progress. Creating indicates that the knowledge base is being created. Active indicates that the creation is successful. CreateFailed indicates that the creation failed. The deletion acceptance response may return Deleting, DeleteFailed, or Deleted. After a deletion request is accepted, GetKnowledgeBase returns that the resource does not exist, and ListKnowledgeBases no longer displays the resource while the backend continues cleanup. For the cause of a creation failure, see lastError.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The read-only tenant ownership. It is resolved by Magic based on the trusted gateway call identity and bound during creation. It is consistent with the tenant of the workspace to which it belongs. Client-specified or modified values are not accepted.
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
      chunkConfiguration: GetKnowledgeBaseResponseBodyDataChunkConfiguration,
      createdAt: 'string',
      description: 'string',
      embeddingDimension: 'number',
      embeddingModel: 'string',
      knowledgeBaseId: 'string',
      lastError: GetKnowledgeBaseResponseBodyDataLastError,
      metadataSchema: { 'type': 'array', 'itemType': GetKnowledgeBaseResponseBodyDataMetadataSchema },
      name: 'string',
      regionId: 'string',
      searchConfiguration: GetKnowledgeBaseResponseBodyDataSearchConfiguration,
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

export class GetKnowledgeBaseResponseBody extends $dara.Model {
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
   * The details of the specified knowledge base.
   */
  data?: GetKnowledgeBaseResponseBodyData;
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
      data: GetKnowledgeBaseResponseBodyData,
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

