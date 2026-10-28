// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAccountInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. Valid values:
   * - 200: OK.
   * - 1109: A system error occurred.
   * - 3030: The account nickname exceeds the maximum length of 150 bytes.
   * - 3031: The remark exceeds the maximum length of 3000 bytes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud uses this ID for error tracking.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Valid values: True and False. Indicates whether the current API call itself is successful. This does not indicate the success of subsequent business operations.
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

