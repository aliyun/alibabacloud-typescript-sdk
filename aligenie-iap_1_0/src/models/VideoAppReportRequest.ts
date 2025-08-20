// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoAppReportRequestDeviceInfo extends $dara.Model {
  /**
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 1**2
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

export class VideoAppReportRequestPayload extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1652337963097
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  isLogin?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  isVip?: boolean;
  /**
   * @example
   * test
   */
  loginNick?: string;
  /**
   * @example
   * 731D5F********DC3B
   */
  originUuid?: string;
  /**
   * @example
   * 188*777
   */
  phone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * com.***.test
   */
  pkgName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1652337963097
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      isLogin: 'isLogin',
      isVip: 'isVip',
      loginNick: 'loginNick',
      originUuid: 'originUuid',
      phone: 'phone',
      pkgName: 'pkgName',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      isLogin: 'boolean',
      isVip: 'boolean',
      loginNick: 'string',
      originUuid: 'string',
      phone: 'string',
      pkgName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoAppReportRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 1**2
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

export class VideoAppReportRequest extends $dara.Model {
  deviceInfo?: VideoAppReportRequestDeviceInfo;
  payload?: VideoAppReportRequestPayload;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: VideoAppReportRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: VideoAppReportRequestDeviceInfo,
      payload: VideoAppReportRequestPayload,
      userInfo: VideoAppReportRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

