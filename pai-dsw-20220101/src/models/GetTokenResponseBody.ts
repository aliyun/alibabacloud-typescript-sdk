// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: All errors, except for parameter validation errors, are internal errors.
   * *   ValidationError: A parameter validation error.
   * 
   * @example
   * ValidationError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
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
  /**
   * @remarks
   * The temporary authentication information of the DSW instance.
   * 
   * @example
   * *******
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

