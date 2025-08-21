// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAuthCodeBindForExtResponseBodyResultDeviceOpenInfo extends $dara.Model {
  /**
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
  deviceOpenInfo?: CheckAuthCodeBindForExtResponseBodyResultDeviceOpenInfo;
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
   * 0EC7*726E
   */
  requestId?: string;
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

