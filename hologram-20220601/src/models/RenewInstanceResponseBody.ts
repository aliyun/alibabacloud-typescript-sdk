// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidChargeType.UnRenewable
   */
  code?: string;
  /**
   * @remarks
   * The detailed error message.
   * 
   * @example
   * Invalid charge type
   */
  message?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 221625608580893
   */
  orderId?: string;
  /**
   * @remarks
   * Indicates whether the renewal was successful. Valid values:  
   * - true: The renewal was successful.
   * - false: The renewal failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      orderId: 'string',
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

export class RenewInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: RenewInstanceResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D3AE84AB-0873-5FC7-A4C4-8CF869D2FA70
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. This parameter indicates whether an exception occurred during the request and is unrelated to the business logic.
   * 
   * @example
   * false
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RenewInstanceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
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

