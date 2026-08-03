// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlarmRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type: when the encoding type is SKILL_ID, the value is the application\\"s SkillID; when the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding Type. There are multiple ways to obtain the device ID for Maojing, and each method corresponds to a different encoding Type: PACKAGE_NAME: APK package name, used for the Android application Customer link; SKILL_ID: Skill ID, used for the cloud link.
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID (deviceOpenId or deviceUnionId)
   * 
   * This parameter is required.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Type of Device ID:  
   * - OPEN_ID: default device ID identity  
   * - UNION_ID: organization-dimension device ID identity, available only after an organization has been requested on the Maojing Skill Application Open Platform
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required if IdType is UNION_ID.
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

export class GetAlarmRequestPayload extends $dara.Model {
  /**
   * @remarks
   * Alarm ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  alarmId?: number;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type. If the encoding type is SKILL_ID, the value is the application\\"s SkillID. If the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the Maojing User Identifier, and each corresponds to a different encoding type:  
   * - PACKAGE_NAME: APK package name, used for Android application customer-side flows  
   * - SKILL_ID: Skill ID, used for cloud-side flows
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * User Identifier (userOpenId or userUnionId)
   * 
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * Type of User ID: OPEN_ID: default User ID identifier; UNION_ID: organization-dimension User ID identifier, available only after an organization has been requested on the Maojing Skill Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required if IdType is UNION_ID.
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

export class GetAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * Device identity information
   * 
   * This parameter is required.
   */
  deviceInfo?: GetAlarmRequestDeviceInfo;
  /**
   * @remarks
   * Input parameters for the service request
   * 
   * This parameter is required.
   */
  payload?: GetAlarmRequestPayload;
  /**
   * @remarks
   * User identifier information
   * 
   * This parameter is required.
   */
  userInfo?: GetAlarmRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetAlarmRequestDeviceInfo,
      payload: GetAlarmRequestPayload,
      userInfo: GetAlarmRequestUserInfo,
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

