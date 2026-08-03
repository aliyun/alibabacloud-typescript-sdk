// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduleTaskRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. If the encoding type is SKILL_ID, the value is the application\\"s SkillID. If the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device ID for Maojing, and each method corresponds to a different encoding type: PACKAGE_NAME: APK package name, used in the Android application customer link; SKILL_ID: skill ID, used in the cloud link.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID (deviceOpenId or deviceUnionId)
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Device ID type: OPEN_ID: default device ID; UNION_ID: organization-level device ID, available only after an organization has been requested on the Maojing Skill Application Open Platform.
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

export class GetScheduleTaskRequestPayload extends $dara.Model {
  /**
   * @remarks
   * ID of the job to query
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTaskRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. When the encoding type is SKILLID, the value is the application\\"s SkillID. When the encoding type is PACKAGENAME, the value is the packageName of the corresponding client app.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the user identifier for Maojing, and each method corresponds to a different encoding type: PACKAGE_NAME indicates the APK package name, used in the Android application customer flow; SKILL_ID indicates the skill ID, used in the cloud-based flow.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * User Identifier (userOpenId or userUnionId)
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * Type of the User ID: OPENID—the default User ID identity; UNIONID—the organization-dimension User ID identity, available only after an organization has been requested on the Maojing Skill Application Open Platform.
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

export class GetScheduleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Device ID information
   * 
   * This parameter is required.
   */
  deviceInfo?: GetScheduleTaskRequestDeviceInfo;
  /**
   * @remarks
   * Input parameters for the service request
   * 
   * This parameter is required.
   */
  payload?: GetScheduleTaskRequestPayload;
  /**
   * @remarks
   * User identifier information
   * 
   * This parameter is required.
   */
  userInfo?: GetScheduleTaskRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetScheduleTaskRequestDeviceInfo,
      payload: GetScheduleTaskRequestPayload,
      userInfo: GetScheduleTaskRequestUserInfo,
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

