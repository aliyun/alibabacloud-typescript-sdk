// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeviceControlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code returned. A value of 200 indicates that the call Succeeded.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Return Result of invoking this API.
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
   * Detailed Result returned.
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

