// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachKVCacheStoreResponseBodyDetachResults extends $dara.Model {
  /**
   * @remarks
   * The error code when the operation fails. This value is null when the operation succeeds.
   * 
   * @example
   * KVCacheInstance.NotAttached
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message when the operation fails. This value is null when the operation succeeds.
   * 
   * @example
   * The KVCacheInstance is not in ATTACHED status.
   */
  errorMessage?: string;
  /**
   * @remarks
   * KVCacheStore KvcsId
   * 
   * @example
   * kvcs-xxxxx
   */
  kvcsId?: string;
  /**
   * @remarks
   * The operation result. Valid values:
   * 
   * - DETACHING: The request has been accepted and the asynchronous unmount is in progress. This value is also returned for idempotent calls.
   * - Success: The synchronous validation passed and the asynchronous operation completed.
   * - Failed: The operation failed.
   * 
   * @example
   * DETACHING
   */
  status?: string;
  /**
   * @remarks
   * The VSC ID on the compute side.
   * 
   * @example
   * vsc-001
   */
  vscId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      kvcsId: 'KvcsId',
      status: 'Status',
      vscId: 'VscId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      kvcsId: 'string',
      status: 'string',
      vscId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKVCacheStoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of unmount results.
   */
  detachResults?: DetachKVCacheStoreResponseBodyDetachResults[];
  /**
   * @remarks
   * The request ID. A request ID is returned regardless of whether the API call succeeds.
   * 
   * @example
   * B127704C-ECB1-5B0A-AA9C-8F394A6F179F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detachResults: 'DetachResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detachResults: { 'type': 'array', 'itemType': DetachKVCacheStoreResponseBodyDetachResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detachResults)) {
      $dara.Model.validateArray(this.detachResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

