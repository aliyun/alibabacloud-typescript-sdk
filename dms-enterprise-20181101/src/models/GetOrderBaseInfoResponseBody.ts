// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOrderBaseInfoResponseBodyOrderBaseInfo } from "./GetOrderBaseInfoResponseBodyOrderBaseInfo";


export class GetOrderBaseInfoResponseBody extends $dara.Model {
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
   * The basic information about the ticket.
   */
  orderBaseInfo?: GetOrderBaseInfoResponseBodyOrderBaseInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7133DF67-5B25-460F-8285-C4CC93472C2F
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
      orderBaseInfo: 'OrderBaseInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      orderBaseInfo: GetOrderBaseInfoResponseBodyOrderBaseInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.orderBaseInfo && typeof (this.orderBaseInfo as any).validate === 'function') {
      (this.orderBaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

