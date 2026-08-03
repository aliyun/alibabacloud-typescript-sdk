// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindDeviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned. A value of 200 indicates that the call succeeded.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The return result of invoking this API.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the device was detached successfully.
   * 
   * @example
   * true
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

