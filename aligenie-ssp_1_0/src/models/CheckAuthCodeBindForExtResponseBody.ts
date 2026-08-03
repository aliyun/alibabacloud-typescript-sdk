// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAuthCodeBindForExtResponseBodyResultDeviceOpenInfo extends $dara.Model {
  /**
   * @remarks
   * External device ID
   * 
   * @example
   * A963*0158
   */
  id?: string;
  /**
   * @remarks
   * DEVICE_ID
   * 
   * @example
   * DEVICE_ID
   */
  idType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      idType: 'IdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      idType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthCodeBindForExtResponseBodyResultUserOpenInfo extends $dara.Model {
  /**
   * @remarks
   * External user ID
   * 
   * @example
   * 0963*0158
   */
  id?: string;
  /**
   * @remarks
   * USER_ID
   * 
   * @example
   * USER_ID
   */
  idType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      idType: 'IdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      idType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthCodeBindForExtResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Device open information
   */
  deviceOpenInfo?: CheckAuthCodeBindForExtResponseBodyResultDeviceOpenInfo;
  /**
   * @remarks
   * User open information
   */
  userOpenInfo?: CheckAuthCodeBindForExtResponseBodyResultUserOpenInfo;
  static names(): { [key: string]: string } {
    return {
      deviceOpenInfo: 'DeviceOpenInfo',
      userOpenInfo: 'UserOpenInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceOpenInfo: CheckAuthCodeBindForExtResponseBodyResultDeviceOpenInfo,
      userOpenInfo: CheckAuthCodeBindForExtResponseBodyResultUserOpenInfo,
    };
  }

  validate() {
    if(this.deviceOpenInfo && typeof (this.deviceOpenInfo as any).validate === 'function') {
      (this.deviceOpenInfo as any).validate();
    }
    if(this.userOpenInfo && typeof (this.userOpenInfo as any).validate === 'function') {
      (this.userOpenInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthCodeBindForExtResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned error code. The value 200 indicates that the invocation succeeded.
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
   * Request ID
   * 
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @remarks
   * Detailed information
   */
  result?: CheckAuthCodeBindForExtResponseBodyResult;
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
      result: CheckAuthCodeBindForExtResponseBodyResult,
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

