// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayAuthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code synchronized with the Success parameter. If Success is true, Code is 200.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The ID of the created authentication.
   * 
   * @example
   * 333
   */
  data?: number;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
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
   * 4279C00F-A5E1-53C6-A43B-751C1C524D0B
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * - `true`: The request is successful.
   * - `false`: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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

