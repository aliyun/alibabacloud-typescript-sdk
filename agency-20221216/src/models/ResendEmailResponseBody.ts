// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResendEmailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code.
   * Error code. Valid values:
   * - 200: OK.
   * - 1109: System error.
   * - 3058: Emails are sent too frequently. A maximum of 10 emails can be sent within 5 minutes.
   * - 3057: InviteId is empty.
   * - 3060: No sending record found for the specified InviteId.
   * - 3061: The registration URL has expired and the email cannot be resent.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result message.
   * 
   * @example
   * 成功
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
   * Valid values: True/False. Indicates whether the current API call itself is successful. This does not indicate the success of subsequent business operations.
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

