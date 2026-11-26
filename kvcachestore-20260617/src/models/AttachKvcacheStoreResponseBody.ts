// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachKVCacheStoreResponseBodyAttachResults extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the operation fails. This parameter is null when the operation succeeds.
   * 
   * @example
   * InvalidStatus.OperationDenied
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the operation fails. This parameter is null when the operation succeeds.
   * 
   * @example
   * The operation is not allowed for instance in ATTACHED status.
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
   * The operation result. Valid values: ATTACHING (the request is accepted and the asynchronous mounting is in progress), ATTACHED (idempotent: the mounting is complete), Success (synchronous verification passed and asynchronous mounting is complete), and Failed (the operation failed).
   * 
   * @example
   * ATTACHING
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VSC on the compute side.
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

export class AttachKVCacheStoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of mount results.
   */
  attachResults?: AttachKVCacheStoreResponseBodyAttachResults[];
  /**
   * @remarks
   * The request ID. This ID is returned regardless of whether the API call is successful.
   * 
   * @example
   * F7BEF1E2-7E56-5BF1-8E36-77A51C5812F1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attachResults: 'AttachResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResults: { 'type': 'array', 'itemType': AttachKVCacheStoreResponseBodyAttachResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachResults)) {
      $dara.Model.validateArray(this.attachResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

