// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AppUseTimeReportRequestDeviceInfo extends $dara.Model {
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

export class AppUseTimeReportRequestPayload extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * start
   */
  action?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  isPrivilege?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  stepCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  vipType?: number;
  /**
   * @example
   * 731D5F********DC3B
   */
  originUuid?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      isPrivilege: 'IsPrivilege',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      stepCode: 'StepCode',
      vipType: 'VipType',
      originUuid: 'originUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      isPrivilege: 'number',
      resourceId: 'string',
      resourceType: 'number',
      stepCode: 'string',
      vipType: 'number',
      originUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppUseTimeReportRequestUserInfo extends $dara.Model {
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

export class AppUseTimeReportRequest extends $dara.Model {
  deviceInfo?: AppUseTimeReportRequestDeviceInfo;
  payload?: AppUseTimeReportRequestPayload;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: AppUseTimeReportRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: AppUseTimeReportRequestDeviceInfo,
      payload: AppUseTimeReportRequestPayload,
      userInfo: AppUseTimeReportRequestUserInfo,
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

