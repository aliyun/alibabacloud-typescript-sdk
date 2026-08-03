// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceTagResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Tag information of the device.
   * 
   * @example
   * {       "antest1": "antest1",       "antest": "a"     }
   */
  deviceTags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      deviceTags: 'DeviceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.deviceTags) {
      $dara.Model.validateMap(this.deviceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceTagResponseBody extends $dara.Model {
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
   * Detailed information returned.
   */
  result?: GetDeviceTagResponseBodyResult;
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
      result: GetDeviceTagResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

