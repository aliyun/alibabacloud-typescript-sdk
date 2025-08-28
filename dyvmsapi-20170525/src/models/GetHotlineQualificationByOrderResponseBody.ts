// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetHotlineQualificationByOrderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the qualification application ticket.
   * 
   * @example
   * 22456****
   */
  orderId?: string;
  /**
   * @remarks
   * The qualification ID.
   * 
   * @example
   * 1478*****
   */
  qualificationId?: string;
  /**
   * @remarks
   * The qualification state. Valid values:
   * 
   * *   **NORMAL**
   * *   **OTHER**
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      qualificationId: 'QualificationId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      qualificationId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineQualificationByOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetHotlineQualificationByOrderResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6086693B-2250-17CE-A41F-06259AB6DB1B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotlineQualificationByOrderResponseBodyData,
      message: 'string',
      requestId: 'string',
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

