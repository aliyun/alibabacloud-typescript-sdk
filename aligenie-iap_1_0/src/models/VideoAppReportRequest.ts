// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoAppReportRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * 编码类型对应的值
   * 
   * - 编码类型是SKILL_ID时，其值为应用的Skill ID。
   * - 编码类型是PACKAGE_NAME时，其值为对应客户端App的packageName。
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device ID from Tmall Genie, and each method corresponds to a different encoding type.
   * - PACKAGE_NAME: APK package name, used for Android application customer flows.
   * - SKILL_ID: Skill ID, used for cloud-based flows.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID, set to either deviceOpenId or deviceUnionId.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Type of the device ID.
   * - OPEN_ID: The default device ID.
   * - UNION_ID: Organization-level device ID. This value is available only after an organization has been registered on the Tmall Genie Skill Application Open Platform.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required when IdType is UNION_ID.
   * 
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
   * 会员的结束时间。
   * 
   * This parameter is required.
   * 
   * @example
   * 1652337963097
   */
  endTime?: number;
  /**
   * @remarks
   * 会员是否登录。
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isLogin?: boolean;
  /**
   * @remarks
   * 该账号是否为会员。
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isVip?: boolean;
  /**
   * @remarks
   * 账号的昵称。
   * 
   * @example
   * test
   */
  loginNick?: string;
  /**
   * @remarks
   * 明文uuid
   * 
   * @example
   * 731D5F********DC3B
   */
  originUuid?: string;
  /**
   * @remarks
   * 账户的手机号码。
   * 
   * @example
   * 188*777
   */
  phone?: string;
  /**
   * @remarks
   * 应用包名。
   * 
   * This parameter is required.
   * 
   * @example
   * com.***.test
   */
  pkgName?: string;
  /**
   * @remarks
   * 会员的开始时间。
   * 
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
   * 编码类型对应的值
   * 
   * - 编码类型是SKILL_ID时，其值为应用的Skill ID。
   * - 编码类型是PACKAGE_NAME时，其值为对应客户端App的packageName。
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * 编码类型，获取天猫精灵的用户标识的途径有多种，不同途径对应不同的编码类型。
   * - PACKAGE_NAME：apk包名，Android应用客户链路的编码类型。
   * - SKILL_ID：技能ID，云端链路的编码类型。
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * 用户标识，设置为userOpenId或userUnionId。
   * 
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * 用户Id的类型  
   * - OPEN_ID：默认的用户ID标识。
   * - UNION_ID: 组织维度的用户ID标识，在天猫精灵技能应用开放平台申请过组织后才会有该值。
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * 组织ID，如果IdType为UNION_ID时必填。
   * 
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
  /**
   * @remarks
   * Device identity information
   */
  deviceInfo?: VideoAppReportRequestDeviceInfo;
  /**
   * @remarks
   * 业务参数
   */
  payload?: VideoAppReportRequestPayload;
  /**
   * @remarks
   * 用户标识信息
   * 
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

