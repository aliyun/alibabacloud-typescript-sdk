// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelQrBindResponseBodyResultOpenDeviceInfo extends $dara.Model {
  /**
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @example
   * xxxxxxx
   */
  id?: string;
  /**
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * aaaaaaaa
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindResponseBodyResultOpenUserInfo extends $dara.Model {
  /**
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @example
   * xxxxxx
   */
  id?: string;
  /**
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * aaaaaaaa
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindResponseBodyResult extends $dara.Model {
  openDeviceInfo?: HotelQrBindResponseBodyResultOpenDeviceInfo;
  openUserInfo?: HotelQrBindResponseBodyResultOpenUserInfo;
  static names(): { [key: string]: string } {
    return {
      openDeviceInfo: 'OpenDeviceInfo',
      openUserInfo: 'OpenUserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openDeviceInfo: HotelQrBindResponseBodyResultOpenDeviceInfo,
      openUserInfo: HotelQrBindResponseBodyResultOpenUserInfo,
    };
  }

  validate() {
    if(this.openDeviceInfo && typeof (this.openDeviceInfo as any).validate === 'function') {
      (this.openDeviceInfo as any).validate();
    }
    if(this.openUserInfo && typeof (this.openUserInfo as any).validate === 'function') {
      (this.openUserInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73****9-175A-1324-8202-9FAAB*****A
   */
  requestId?: string;
  result?: HotelQrBindResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: HotelQrBindResponseBodyResult,
      statusCode: 'number',
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

