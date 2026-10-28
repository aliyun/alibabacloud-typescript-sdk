// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeductOutstandingBalanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. Valid values:
   * 200: OK.
   * 1109: System error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message. The value is the same as the Code parameter value.
   * 
   * @example
   * 200
   */
  message?: string;
  /**
   * @remarks
   * The request ID. A unique identifier that Alibaba Cloud generates for the request.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current API call itself is successful. Valid values: True and False. This does not indicate the success of subsequent business operations.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

