// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetail } from "./GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetail";


export class GetDataCorrectOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the data change ticket.
   */
  dataCorrectOrderDetail?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetail;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
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
   * 427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataCorrectOrderDetail: 'DataCorrectOrderDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCorrectOrderDetail: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataCorrectOrderDetail && typeof (this.dataCorrectOrderDetail as any).validate === 'function') {
      (this.dataCorrectOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

