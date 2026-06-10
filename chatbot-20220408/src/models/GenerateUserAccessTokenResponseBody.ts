// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUserAccessTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. 200 indicates a successful request.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The generated token value.
   * 
   * @example
   * DDEXEDAFWAGASDFWAEFFAWEFAWFWEAFWAFWAEF
   */
  data?: string;
  /**
   * @remarks
   * The error message for a failed request.
   * 
   * @example
   * Parameter.Invalid
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * E6988CE6-41CF-1103-9BEC-2B20D26C0B51
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: `true` and `false`.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
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

