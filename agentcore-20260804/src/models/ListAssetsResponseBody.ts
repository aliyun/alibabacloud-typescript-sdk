// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetsResponseBodyItemsChunkConfigurationPreprocessRules extends $dara.Model {
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

export class ListAssetsResponseBodyItemsChunkConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is required when the strategy is BY_HEADING, and the value ranges from 1 to 6. Headings at or above this level are used as boundaries. Deeper headings are retained in the body text. Overlong sections fall back to paragraph or sentence splitting. Documents without headings fall back to intelligent splitting. This parameter is ignored for other strategies and is validated by the backend based on the strategy.
   * 
   * @example
   * 2
   */
  headingLevel?: number;
  /**
   * @remarks
   * The value ranges from 1 to 6000 characters, following the character length standard of EB, not the number of tokens. If this parameter is omitted, the server-side default value is used.
   * 
   * @example
   * 512
   */
  maxChunkSize?: number;
  /**
   * @remarks
   * This parameter takes effect only when the strategy is BY_LENGTH. The unit is characters, and the default value is 0. The valid value must be greater than or equal to 0 and less than the valid maxChunkSize, ensuring that the length does not exceed the maximum chunk length after overlapping. This parameter is ignored for other strategies and is validated by the backend based on the strategy.
   * 
   * @example
   * 40
   */
  overlapSize?: number;
  /**
   * @remarks
   * The text preprocessing rules applied before splitting.
   */
  preprocessRules?: ListAssetsResponseBodyItemsChunkConfigurationPreprocessRules;
  /**
   * @remarks
   * This parameter is required and cannot be empty when the strategy is BY_SEPARATOR. It matches the entire literal string without using regular expressions. This parameter is ignored for other strategies.
   * 
   * @example
   * \n\n
   */
  separator?: string;
  /**
   * @remarks
   * The saved chunking strategy. AUTO indicates automatic chunking, and BY_SEPARATOR indicates chunking by separator. BY_LENGTH and BY_HEADING are returned only for backward compatibility with historical configurations. Only AUTO and BY_SEPARATOR are accepted when creating or updating configurations in the first phase.
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
      preprocessRules: ListAssetsResponseBodyItemsChunkConfigurationPreprocessRules,
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

export class ListAssetsResponseBodyItemsLastError extends $dara.Model {
  /**
   * @remarks
   * The stable product error code. This code does not return internal task IDs, stacks, or storage addresses.
   * 
   * @example
   * ProcessingFailed
   */
  code?: string;
  /**
   * @remarks
   * The masked error summary that can be displayed to users.
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

export class ListAssetsResponseBodyItemsMetadata extends $dara.Model {
  /**
   * @remarks
   * The field name declared in metadataSchema. It must not be duplicated within the same request. Fixed values and system variable fields are generated by the server and cannot be overwritten by the client.
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * The string parsed according to the schema type. If omitted or left empty during upload, it indicates that no value is assigned and the schema populates the value. In UpdateAsset, omitting the field, setting it to null, or providing an empty string deletes the key, while unsubmitted keys remain unchanged. For DATETIME, ISO 8601 with a time zone, yyyy-MM-dd HH:mm:ss, or yyyy-MM-dd is accepted.
   * 
   * @example
   * engineering
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The stable ID of the asset. You can specify this ID when creating an asset. If assetId is not specified but clientToken is provided, the platform stably derives the ID based on the resource scope and clientToken. If neither is provided, a new asset is created for each request. Setting overwrite=true allows you to register a new upload session for the same asset, and the previously published version continues to be used until the new result is published.
   * 
   * @example
   * asset-001
   */
  assetId?: string;
  /**
   * @remarks
   * The effective chunk configuration used for the current asset processing. Explicitly uploaded configurations take precedence over the default values of the knowledge base. Subsequent modifications to the knowledge base configuration do not change this snapshot.
   */
  chunkConfiguration?: ListAssetsResponseBodyItemsChunkConfiguration;
  /**
   * @remarks
   * The total number of chunks in the currently published result. This value is 0 before the first publication. During re-chunking or editing, the count still reflects the published result.
   * 
   * @example
   * 20
   */
  chunkCount?: number;
  /**
   * @remarks
   * The MIME type of the uploaded original file for the asset.
   * 
   * @example
   * application/pdf
   */
  contentType?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 UTC format.
   * 
   * @example
   * 2026-10-27T02:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * If disabled, the asset does not participate in regular viewing, retrieval, and downloading. Management APIs are still subject to administrative permissions.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The file name of the currently uploaded original file. Modifying the display name does not change this value.
   * 
   * @example
   * guide.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The knowledge base to which the asset belongs.
   * 
   * @example
   * kb-001
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The masked error of the current upload or processing. This error does not contain internal credentials, paths, or run IDs.
   */
  lastError?: ListAssetsResponseBodyItemsLastError;
  /**
   * @remarks
   * The complete list of effective metadata key-value pairs, including constants and system variable results. Patches involving retrieval projections do not overwrite previous effective values until new results are published.
   * 
   * @example
   * [{"key":"department","value":"engineering"}]
   */
  metadata?: ListAssetsResponseBodyItemsMetadata[];
  /**
   * @remarks
   * The default value is the uploaded file name. You can call the UpdateAsset operation to modify the display name.
   * 
   * @example
   * guide.pdf
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the published result is available. The value is true if a published version exists and the asset is neither disabled nor deleted. The value may still be true if re-chunking or editing fails, and is false if the first processing fails.
   * 
   * @example
   * true
   */
  publishedResultAvailable?: boolean;
  /**
   * @remarks
   * The size of the current original file in bytes. This value is not returned before the upload is confirmed. After confirmation, the actual size verified by the OSS HEAD request is returned.
   * 
   * @example
   * 102400
   */
  sizeBytes?: number;
  /**
   * @remarks
   * The last modification time of the source file in UTC epoch milliseconds. This value is not returned if it is not provided.
   * 
   * @example
   * 1793066400000
   */
  sourceModifiedTime?: number;
  /**
   * @remarks
   * The import channel of the asset, such as UPLOAD or OSS. This value is recorded by the platform based on the trusted access path and is not used to grant access permissions.
   * 
   * @example
   * UPLOAD
   */
  sourceType?: string;
  /**
   * @remarks
   * The URI of the original file source. This value is used only for tracing, does not authorize downloads, and does not trigger server-side fetching.
   * 
   * @example
   * oss://source-bucket/path/guide.pdf
   */
  sourceUri?: string;
  /**
   * @remarks
   * The current upload or processing status of the document. Uploads, rebuilds, and chunk body edits are polled by using the GetAsset operation. PENDING indicates waiting for processing, PROCESSING indicates processing, COMPLETED indicates that the publication is complete, and FAILED indicates a final failure and returns lastError. This status does not represent the result of a specific historical request. No readable result is available if the first processing fails. During overwrite uploads, rebuilds, or edits, and after failures, the published result remains readable if the enabled and deletion statuses allow it.
   * 
   * @example
   * PROCESSING
   */
  status?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 UTC format.
   * 
   * @example
   * 2026-10-27T02:05:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The workspace to which the asset belongs.
   * 
   * @example
   * ws-001
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      assetId: 'assetId',
      chunkConfiguration: 'chunkConfiguration',
      chunkCount: 'chunkCount',
      contentType: 'contentType',
      createdAt: 'createdAt',
      enabled: 'enabled',
      fileName: 'fileName',
      knowledgeBaseId: 'knowledgeBaseId',
      lastError: 'lastError',
      metadata: 'metadata',
      name: 'name',
      publishedResultAvailable: 'publishedResultAvailable',
      sizeBytes: 'sizeBytes',
      sourceModifiedTime: 'sourceModifiedTime',
      sourceType: 'sourceType',
      sourceUri: 'sourceUri',
      status: 'status',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'string',
      chunkConfiguration: ListAssetsResponseBodyItemsChunkConfiguration,
      chunkCount: 'number',
      contentType: 'string',
      createdAt: 'string',
      enabled: 'boolean',
      fileName: 'string',
      knowledgeBaseId: 'string',
      lastError: ListAssetsResponseBodyItemsLastError,
      metadata: { 'type': 'array', 'itemType': ListAssetsResponseBodyItemsMetadata },
      name: 'string',
      publishedResultAvailable: 'boolean',
      sizeBytes: 'number',
      sourceModifiedTime: 'number',
      sourceType: 'string',
      sourceUri: 'string',
      status: 'string',
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
    if(Array.isArray(this.metadata)) {
      $dara.Model.validateArray(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetsResponseBody extends $dara.Model {
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
   * The asset details on the current page, sorted in descending order by the latest upload acceptance time and assetId. Asynchronous index updates may cause brief sorting delays after new uploads or overwrites.
   */
  items?: ListAssetsResponseBodyItems[];
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
   * The description of the masked result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Pass this value as is to continue pagination. If this value is empty, pagination ends. Do not use totalCount to determine the next page. Cross-page snapshots are not guaranteed during concurrent uploads, overwrites, deletions, or status changes.
   * 
   * @example
   * opaque-next-token
   */
  nextToken?: string;
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
  /**
   * @remarks
   * The count of undeleted assets that meet the file name prefix and status filter conditions of the current request. This count is cached for 60 seconds based on the resource scope and filter conditions, and may be briefly stale. The first request after a cold cache or expiration synchronously scans the count. Concurrent scans do not guarantee transactional snapshots or exact consistency with the current page, and cannot be used for quota verification or determining the next page.
   * 
   * @example
   * 120
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
      items: { 'type': 'array', 'itemType': ListAssetsResponseBodyItems },
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

