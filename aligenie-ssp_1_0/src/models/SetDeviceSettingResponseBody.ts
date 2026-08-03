// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDeviceSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code returned. A value of 200 indicates that the call succeeded.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Return result of invoking this API.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @remarks
   * Execution result of the settings.
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

