// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceStatusInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the device is online. A value of 0 means offline, and 1 means online.
   * 
   * @example
   * 1
   */
  online?: number;
  static names(): { [key: string]: string } {
    return {
      online: 'Online',
    };
  }

  static types(): { [key: string]: any } {
    return {
      online: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusInfoResponseBody extends $dara.Model {
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
  result?: GetDeviceStatusInfoResponseBodyResult;
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
      result: GetDeviceStatusInfoResponseBodyResult,
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

