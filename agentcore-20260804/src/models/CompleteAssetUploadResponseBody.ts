// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteAssetUploadResponseBodyDataChunkConfigurationPreprocessRules extends $dara.Model {
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

export class CompleteAssetUploadResponseBodyDataChunkConfiguration extends $dara.Model {
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
   * The value ranges from 1 to 6,000 characters. This follows the character length metric of EB and is not the number of tokens. If omitted, the server-side default value is used.
   * 
   * @example
   * 512
   */
  maxChunkSize?: number;
  /**
   * @remarks
   * This parameter takes effect only when the strategy is BY_LENGTH. The unit is characters, and the default value is 0. The valid value must be greater than or equal to 0 and less than the valid maxChunkSize. The length after overlapping must not exceed the maximum chunk length. This parameter is ignored for other strategies and is validated by the backend based on the strategy.
   * 
   * @example
   * 40
   */
  overlapSize?: number;
  /**
   * @remarks
   * The text preprocessing rules applied before splitting.
   */
  preprocessRules?: CompleteAssetUploadResponseBodyDataChunkConfigurationPreprocessRules;
  /**
   * @remarks
   * This parameter is required and cannot be empty when the strategy is BY_SEPARATOR. It matches the literal string as a whole without using regular expressions. This parameter is ignored for other strategies.
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
      preprocessRules: CompleteAssetUploadResponseBodyDataChunkConfigurationPreprocessRules,
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

export class CompleteAssetUploadResponseBodyDataLastError extends $dara.Model {
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

export class CompleteAssetUploadResponseBodyDataMetadata extends $dara.Model {
  /**
   * @remarks
   * The field name declared in metadataSchema. It must not be duplicated in the same request. Fixed value and system variable fields are generated by the server and cannot be overwritten by customers.
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * The string parsed based on the schema type. If omitted or set to null during upload, no value is assigned and the value is populated by the schema. In the UpdateAsset operation, omitting the field, setting it to null, or passing an empty string deletes the key. Unsubmitted keys remain unchanged. For the DATETIME type, accepted formats include ISO 8601 with time zone, yyyy-MM-dd HH:mm:ss, and yyyy-MM-dd.
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

export class CompleteAssetUploadResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The stable ID of the asset. You can specify this ID when creating an asset. If assetId is not specified but clientToken is provided, the platform stably derives the ID based on the resource scope and clientToken. If neither is provided, a new asset is created for each request. Setting overwrite=true allows you to register a new upload session for the same asset, and the previously published version continues to be used until new results are published.
   * 
   * @example
   * asset-001
   */
  assetId?: string;
  /**
   * @remarks
   * The effective chunking configuration used for the current asset processing. Explicitly uploaded configurations take precedence over the default knowledge base values. Subsequent modifications to the knowledge base configuration do not change this snapshot.
   */
  chunkConfiguration?: CompleteAssetUploadResponseBodyDataChunkConfiguration;
  /**
   * @remarks
   * The total number of chunks in the currently published results. The value is 0 before the first publication. During re-chunking or editing, the count still reflects the published results.
   * 
   * @example
   * 20
   */
  chunkCount?: number;
  /**
   * @remarks
   * The MIME type of the uploaded original file for this asset.
   * 
   * @example
   * application/pdf
   */
  contentType?: string;
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
   * If disabled, the asset does not participate in regular viewing, retrieval, and downloading. Management APIs are still controlled by management permissions.
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
   * The masked error of the current upload or processing. It does not contain internal credentials, paths, or run identifiers.
   */
  lastError?: CompleteAssetUploadResponseBodyDataLastError;
  /**
   * @remarks
   * The complete list of effective metadata key-value pairs, including constants and system variable results. Patches involving retrieval projection do not overwrite old effective values until new results are published.
   * 
   * @example
   * [{"key":"department","value":"engineering"}]
   */
  metadata?: CompleteAssetUploadResponseBodyDataMetadata[];
  /**
   * @remarks
   * The default value is the uploaded file name. You can modify the display name by calling UpdateAsset.
   * 
   * @example
   * guide.pdf
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the published result is available. The value is true if a published version exists and the asset is neither disabled nor deleted. The value may still be true if re-chunking or editing fails, and is false if the initial processing fails.
   * 
   * @example
   * true
   */
  publishedResultAvailable?: boolean;
  /**
   * @remarks
   * The size of the current original file in bytes. This parameter is not returned before the upload is confirmed. After confirmation, the actual size verified by the OSS HEAD request is returned.
   * 
   * @example
   * 102400
   */
  sizeBytes?: number;
  /**
   * @remarks
   * The last modification time of the source file in UTC epoch milliseconds. This parameter is not returned if the time is not provided.
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
   * The URI of the original source. This value is used only for tracing. It does not grant download authorization or trigger server-side fetching.
   * 
   * @example
   * oss://source-bucket/path/guide.pdf
   */
  sourceUri?: string;
  /**
   * @remarks
   * The current upload or processing status of the document. Upload, rebuild, and chunk body editing are all polled through GetAsset. PENDING indicates waiting for processing, PROCESSING indicates processing in progress, COMPLETED indicates that publication is finished, and FAILED indicates final failure with lastError returned. This does not represent the result of a specific historical request. No readable results are available if the first processing fails. During overwrite upload, rebuild, or editing, and after failure, published results remain readable if the enabled and deleted statuses allow.
   * 
   * @example
   * PROCESSING
   */
  status?: string;
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
      chunkConfiguration: CompleteAssetUploadResponseBodyDataChunkConfiguration,
      chunkCount: 'number',
      contentType: 'string',
      createdAt: 'string',
      enabled: 'boolean',
      fileName: 'string',
      knowledgeBaseId: 'string',
      lastError: CompleteAssetUploadResponseBodyDataLastError,
      metadata: { 'type': 'array', 'itemType': CompleteAssetUploadResponseBodyDataMetadata },
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

export class CompleteAssetUploadResponseBody extends $dara.Model {
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
   * The asset management properties, actual file size, source, metadata, chunking configuration, and processing status after the upload is confirmed. Acceptance does not mean that new results are published. Poll the status of GetAsset until it reaches COMPLETED or FAILED. For the cause of failure, see lastError.
   */
  data?: CompleteAssetUploadResponseBodyData;
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
   * The description of the masked result.
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
      data: CompleteAssetUploadResponseBodyData,
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

