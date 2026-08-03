// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned error code. The value 200 indicates that the call Succeeded.
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
   * Returns specific device Settings information.
   */
  result?: { [key: string]: any };
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
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

