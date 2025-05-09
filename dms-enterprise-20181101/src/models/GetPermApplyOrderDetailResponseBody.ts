// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPermApplyOrderDetailResponseBodyPermApplyOrderDetail } from "./GetPermApplyOrderDetailResponseBodyPermApplyOrderDetail";


export class GetPermApplyOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The details of the permission application ticket.
   */
  permApplyOrderDetail?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetail;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * A4C4499E-5AC2-4318-9FCF-03E426781A04
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      permApplyOrderDetail: 'PermApplyOrderDetail',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      permApplyOrderDetail: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetail,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.permApplyOrderDetail && typeof (this.permApplyOrderDetail as any).validate === 'function') {
      (this.permApplyOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

