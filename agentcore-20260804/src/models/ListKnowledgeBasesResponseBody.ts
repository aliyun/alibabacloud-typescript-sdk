// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBasesResponseBodyItemsChunkConfigurationPreprocessRules extends $dara.Model {
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

export class ListKnowledgeBasesResponseBodyItemsChunkConfiguration extends $dara.Model {
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
   * The maximum chunk size, ranging from 1 to 6,000 characters. It follows the character length metric of EB and is not the token count. If omitted, the server-side default value is used.
   * 
   * @example
   * 512
   */
  maxChunkSize?: number;
  /**
   * @remarks
   * The overlap size in characters. It takes effect only when the strategy is BY_LENGTH. Default value: 0. The valid value must be greater than or equal to 0 and less than the valid maxChunkSize. The total length after overlapping must not exceed the maximum chunk size. Ignored for other strategies and validated by the backend based on the strategy.
   * 
   * @example
   * 40
   */
  overlapSize?: number;
  /**
   * @remarks
   * The text preprocessing rules applied before splitting.
   */
  preprocessRules?: ListKnowledgeBasesResponseBodyItemsChunkConfigurationPreprocessRules;
  /**
   * @remarks
   * Required and non-empty when the strategy is BY_SEPARATOR. It matches the literal string as a whole without using regular expressions. Ignored for other strategies.
   * 
   * @example
   * \n\n
   */
  separator?: string;
  /**
   * @remarks
   * The saved chunking strategy. Valid values: AUTO (automatic chunking) and BY_SEPARATOR (separator-based chunking). BY_LENGTH and BY_HEADING are returned only for backward compatibility with historical configurations. Only AUTO and BY_SEPARATOR are accepted when you create or update a configuration in the first phase.
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
      preprocessRules: ListKnowledgeBasesResponseBodyItemsChunkConfigurationPreprocessRules,
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

export class ListKnowledgeBasesResponseBodyItemsLastError extends $dara.Model {
  /**
   * @remarks
   * The stable product error code. Internal task identifiers, stacks, or storage addresses are not returned.
   * 
   * @example
   * ProcessingFailed
   */
  code?: string;
  /**
   * @remarks
   * The desensitized error summary that can be displayed to users.
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

export class ListKnowledgeBasesResponseBodyItemsMetadataSchema extends $dara.Model {
  /**
   * @remarks
   * The name of the metadata field for the knowledge base in the workspace. It must be unique within the same schema and cannot occupy system control fields.
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  name?: string;
  /**
   * @remarks
   * The field type. Valid values: STRING, LONG, DOUBLE, BOOLEAN, and DATETIME. Uploaded and updated string values are parsed by the backend according to this type. Nested objects are not accepted.
   * 
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  type?: string;
  /**
   * @remarks
   * The fixed value or system variable name. The following variables are retained: DOCUMENT_NAME, FILE_TYPE, FILE_SIZE, DOCUMENT_UPLOAD_TIME, SOURCE_TYPE, SOURCE_URI, and SOURCE_MODIFIED_TIME. DOCUMENT_* refers to the original asset in this operation, and the variable names are retained for EB compatibility.
   * 
   * @example
   * engineering
   */
  value?: string;
  /**
   * @remarks
   * The value mode. CONSTANT indicates a constant: a fixed value is used if the value is not empty, and the value is assigned during upload if not configured. SYSTEM_VARIABLE indicates a system-generated value that cannot be overwritten by customers. The mode cannot be modified after the schema is created.
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

export class ListKnowledgeBasesResponseBodyItemsSearchConfiguration extends $dara.Model {
  /**
   * @remarks
   * The retrieve mode. Valid values: KEYWORD (keyword retrieve), VECTOR (vector retrieve), and HYBRID (hybrid retrieve). The request configuration takes precedence over the knowledge base configuration. If neither is configured, HYBRID is used.
   * 
   * @example
   * HYBRID
   */
  mode?: string;
  /**
   * @remarks
   * The ranking algorithm. Valid values: RRF (reciprocal rank fusion) and WEIGHTED (weighted normalization fusion). It takes effect only in HYBRID mode. Default value: RRF.
   * 
   * @example
   * RRF
   */
  rankAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether reranking is enabled by default. It applies to all three search modes. An explicit specification in the request overrides this configuration. If neither is configured, the value is false.
   * 
   * @example
   * false
   */
  rerankEnabled?: boolean;
  /**
   * @remarks
   * Specifies the rerank model. Valid values: qwen3-rerank, qwen3.7-text-rerank, gte-rerank-v2, and qwen3-vl-rerank. The request parameter takes precedence over this configuration. If neither is specified, qwen3-rerank is used.
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
   * The maximum number of results to return. Maximum value: 100. The request configuration takes precedence over the knowledge base configuration. If neither is configured, 10 is used. The actual number of results may be less than this value after permission and release version filtering.
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

export class ListKnowledgeBasesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The valid configuration with parsed default values. It only affects subsequently uploaded or explicitly reprocessed assets.
   */
  chunkConfiguration?: ListKnowledgeBasesResponseBodyItemsChunkConfiguration;
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
   * The effective vector dimensions. Default value: 1024. It cannot be modified after creation.
   * 
   * @example
   * 1024
   */
  embeddingDimension?: number;
  /**
   * @remarks
   * The effective model name. It cannot be modified after creation. Default value: text-embedding-v4.
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
   * The desensitized error summary when a lifecycle operation fails.
   * 
   * **if can be null:**
   * true
   */
  lastError?: ListKnowledgeBasesResponseBodyItemsLastError;
  /**
   * @remarks
   * The metadata schema. It is determined upon creation and cannot be modified afterward. It includes constant or system variable configurations.
   */
  metadataSchema?: ListKnowledgeBasesResponseBodyItemsMetadataSchema[];
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
   * The region where the knowledge base is located. It is consistent with the workspace to which it belongs and is maintained by the server.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The valid search configuration with parsed platform default values. It can be overridden by a single search request.
   */
  searchConfiguration?: ListKnowledgeBasesResponseBodyItemsSearchConfiguration;
  /**
   * @remarks
   * The lifecycle status. You can query the creation progress by using GetKnowledgeBase and ListKnowledgeBases. Valid values: Creating (creation in progress), Active (creation successful), and CreateFailed (creation failed). A deletion acceptance response may return Deleting, DeleteFailed, or Deleted. After deletion is accepted, GetKnowledgeBase indicates that the resource does not exist, ListKnowledgeBases no longer displays the resource, and the backend continues cleanup. For the cause of a creation failure, refer to lastError.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The read-only tenant ownership. It is resolved by Magic based on the trusted gateway call identity and bound during creation. It matches the tenant of the associated workspace. Client-specified values or modifications are not accepted.
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
      chunkConfiguration: ListKnowledgeBasesResponseBodyItemsChunkConfiguration,
      createdAt: 'string',
      description: 'string',
      embeddingDimension: 'number',
      embeddingModel: 'string',
      knowledgeBaseId: 'string',
      lastError: ListKnowledgeBasesResponseBodyItemsLastError,
      metadataSchema: { 'type': 'array', 'itemType': ListKnowledgeBasesResponseBodyItemsMetadataSchema },
      name: 'string',
      regionId: 'string',
      searchConfiguration: ListKnowledgeBasesResponseBodyItemsSearchConfiguration,
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

export class ListKnowledgeBasesResponseBody extends $dara.Model {
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
   * The actual HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of knowledge bases returned on the current page.
   */
  items?: ListKnowledgeBasesResponseBodyItems[];
  /**
   * @remarks
   * The page size used for the current request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
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
   * The token used to retrieve the next page of results. Pass the nextToken value from the previous response as is to continue pagination. If the value is empty, no more results are available.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
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
  /**
   * @remarks
   * The total number of knowledge bases in the current workspace. Pagination ends when nextToken is empty.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListKnowledgeBasesResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

