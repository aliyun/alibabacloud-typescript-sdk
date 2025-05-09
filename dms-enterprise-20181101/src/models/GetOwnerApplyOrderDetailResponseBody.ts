// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetail } from "./GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetail";


export class GetOwnerApplyOrderDetailResponseBody extends $dara.Model {
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
   * The details of the ticket.
   */
  ownerApplyOrderDetail?: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB784055-E8CB-4461-AB0B-483A1DA32BB5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      ownerApplyOrderDetail: 'OwnerApplyOrderDetail',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      ownerApplyOrderDetail: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetail,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.ownerApplyOrderDetail && typeof (this.ownerApplyOrderDetail as any).validate === 'function') {
      (this.ownerApplyOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

