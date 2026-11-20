// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidScaleType.Unsupported
   */
  code?: string;
  /**
   * @remarks
   * The detailed error message.
   * 
   * @example
   * Invalid scale type
   */
  message?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 219183853450000
   */
  orderId?: string;
  /**
   * @remarks
   * Indicates whether the specification change was successful.
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

export class ScaleInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: ScaleInstanceResponseBodyData;
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
   * The ID of the request.
   * 
   * @example
   * D3AE84AB-0873-5FC7-A4C4-8CF869D2FA70
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ScaleInstanceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
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

