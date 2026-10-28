// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWarningThresholdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. Valid values:
   * - 200: OK.
   * - 1109: System error.
   * - 3040: The sub-account is frozen and the operation cannot be completed.
   * - 3044: The alert percentage value is not a number.
   * - 3045: The alert percentage value must be from 1 to 100.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that corresponds to the Code parameter value.
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
   * Indicates whether the current API call was successful. Valid values: True and False. This does not indicate whether the subsequent business operation was successful.
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

