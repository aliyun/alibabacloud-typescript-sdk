// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStructSyncOrderDetailResponseBodyStructSyncOrderDetail } from "./GetStructSyncOrderDetailResponseBodyStructSyncOrderDetail";


export class GetStructSyncOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4E1D2B4D-3E53-4ABC-999D-1D2520B3471A
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the schema synchronization ticket.
   */
  structSyncOrderDetail?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetail;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      structSyncOrderDetail: 'StructSyncOrderDetail',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      structSyncOrderDetail: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetail,
      success: 'boolean',
    };
  }

  validate() {
    if(this.structSyncOrderDetail && typeof (this.structSyncOrderDetail as any).validate === 'function') {
      (this.structSyncOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

