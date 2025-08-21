// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanCodeBindResponseBodyResult extends $dara.Model {
  /**
   * @example
   * X1
   */
  bizGroup?: string;
  /**
   * @example
   * AILABS
   */
  bizType?: string;
  /**
   * @remarks
   * A963*0158
   * 
   * @example
   * 设备OpenId
   */
  deviceOpenId?: string;
  /**
   * @remarks
   * DAFE****ce3ej=
   * 
   * @example
   * 用户opneId
   */
  userOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      bizGroup: 'BizGroup',
      bizType: 'BizType',
      deviceOpenId: 'DeviceOpenId',
      userOpenId: 'UserOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizGroup: 'string',
      bizType: 'string',
      deviceOpenId: 'string',
      userOpenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanCodeBindResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 686DF82F-45C4-7DF7-8B67-27B91CFD63A9
   */
  requestId?: string;
  result?: ScanCodeBindResponseBodyResult;
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
      result: ScanCodeBindResponseBodyResult,
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

