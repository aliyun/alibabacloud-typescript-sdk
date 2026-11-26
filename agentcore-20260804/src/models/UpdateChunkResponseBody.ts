// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChunkResponseBodyDataChunkUpdateResults extends $dara.Model {
  /**
   * @remarks
   * The target sequence number for this modification.
   * 
   * @example
   * 1
   */
  chunkSeq?: number;
  /**
   * @remarks
   * The desensitized reason for the failure. It does not contain internal task, execution, or physical storage identifiers.
   * 
   * @example
   * The target chunk does not exist
   */
  failureReason?: string;
  /**
   * @remarks
   * ACCEPTED indicates that the content edit is accepted but not completed. SUCCEEDED indicates that the pure enable or disable operation has been written to the target determined at the beginning of the request, or the content edit has been published. It is not guaranteed that concurrently published new results will inherit the enable or disable operations. FAILED indicates that the item is not completed.
   * 
   * @example
   * ACCEPTED
   */
  status?: string;
  /**
   * @remarks
   * Returned only in the final state. The value is true for SUCCEEDED and false for FAILED. This parameter is not returned for ACCEPTED. An accepted state cannot be treated as a successful write. This parameter is independent of the top-level success parameter, which indicates request acceptance or query success.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      chunkSeq: 'chunkSeq',
      failureReason: 'failureReason',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkSeq: 'number',
      failureReason: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChunkResponseBodyDataChunkUpdate extends $dara.Model {
  /**
   * @remarks
   * Only asynchronous content edits return the clientToken of the original UpdateChunk for idempotent retries. GetAsset does not accept or return the clientToken. Pure enable or disable operations do not create asynchronous receipts. If the same token is reused with different parameters within the same asset, IdempotencyConflict is returned.
   * 
   * @example
   * chunk-update-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The reserved expiration time for idempotent result retention. This field is not currently outputted and is not used as a basis for document status queries or automatic retries.
   * 
   * @example
   * 2026-11-03T02:05:00Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The number of FAILED items in this request. When asynchronous content edits are still in the ACCEPTED state, a value of 0 does not indicate a successful modification.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * The itemized results of the current UpdateChunk or UpdateChunks request. Synchronous enable or disable operations return SUCCEEDED or FAILED, and batch operations allow partial success. Content edits first return ACCEPTED, and idempotent replays may return recorded processing results. You can determine whether the current document is completed by checking the status returned by GetAsset. The itemized results are independent of the top-level success parameter.
   */
  results?: UpdateChunkResponseBodyDataChunkUpdateResults[];
  /**
   * @remarks
   * The number of chunks submitted in this request. The value is 1 for UpdateChunk, and 1 to 100 for UpdateChunks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      expiresAt: 'expiresAt',
      failedCount: 'failedCount',
      results: 'results',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      expiresAt: 'string',
      failedCount: 'number',
      results: { 'type': 'array', 'itemType': UpdateChunkResponseBodyDataChunkUpdateResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChunkResponseBodyDataLastError extends $dara.Model {
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

export class UpdateChunkResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The target asset for processing.
   * 
   * @example
   * asset-001
   */
  assetId?: string;
  /**
   * @remarks
   * The itemized results returned by UpdateChunk or UpdateChunks. Synchronous enable or disable operations directly return the final results. Asynchronous content edits return the acceptance results, and idempotent replays return the recorded request results. You can query the current status of the document by calling GetAsset. GetAsset does not return this field. The itemized results are not represented by the top-level success parameter of the API operation.
   */
  chunkUpdate?: UpdateChunkResponseBodyDataChunkUpdate;
  /**
   * @remarks
   * The target knowledge base.
   * 
   * @example
   * kb-001
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The desensitized error summary of the current processing.
   */
  lastError?: UpdateChunkResponseBodyDataLastError;
  /**
   * @remarks
   * The availability of the published result, considering disabled states and tombstones.
   * 
   * @example
   * true
   */
  publishedResultAvailable?: boolean;
  /**
   * @remarks
   * The acceptance or execution result of UpdateChunk or UpdateChunks. The COMPLETED status in the synchronous chunk enable or disable response only indicates that the current write operation is complete, and does not change the original processing status of the asset. The acceptance and idempotent replay results of asynchronous content edits do not represent the current status of the document. You can query the document status by calling GetAsset.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The update time in ISO 8601 UTC format.
   * 
   * @example
   * 2026-10-27T02:05:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The target workspace.
   * 
   * @example
   * ws-001
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      assetId: 'assetId',
      chunkUpdate: 'chunkUpdate',
      knowledgeBaseId: 'knowledgeBaseId',
      lastError: 'lastError',
      publishedResultAvailable: 'publishedResultAvailable',
      status: 'status',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'string',
      chunkUpdate: UpdateChunkResponseBodyDataChunkUpdate,
      knowledgeBaseId: 'string',
      lastError: UpdateChunkResponseBodyDataLastError,
      publishedResultAvailable: 'boolean',
      status: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.chunkUpdate && typeof (this.chunkUpdate as any).validate === 'function') {
      (this.chunkUpdate as any).validate();
    }
    if(this.lastError && typeof (this.lastError as any).validate === 'function') {
      (this.lastError as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChunkResponseBody extends $dara.Model {
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
   * For pure enable or disable operations, COMPLETED and the final state of each item are synchronously returned, indicating that the current write operation is complete. This does not change the original processing status of the asset or guarantee that concurrently published new results inherit the modifications. Polling is not required. When content is included, poll the current status of GetAsset until it reaches COMPLETED or FAILED. For failure reasons, see lastError. GetAsset does not accept clientToken or return chunkUpdate. ACCEPTED does not indicate completion.
   */
  data?: UpdateChunkResponseBodyData;
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
   * The desensitized result description.
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
   * Specifies whether the request is successful. Valid values:
   * - true: The request is successfully processed or accepted. For pure enable or disable operations, the final result of each item is checked. For content edits, you must wait for the asynchronous final state.
   * - false: The entire request is rejected due to token expiration, authentication failure, or resource status issues.
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
      data: UpdateChunkResponseBodyData,
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

