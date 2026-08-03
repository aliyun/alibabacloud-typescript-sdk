// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWeatherRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. When the encoding type is SKILL_ID, the value is the application\\"s SkillID. When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device ID of Maojing, and each way corresponds to a different encoding type: PACKAGE_NAME refers to the APK package name, which is the encoding type for the Android application customer link; SKILL_ID refers to the skill ID, which is the encoding type for the cloud link.
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
   * Type of the device ID: OPEN_ID is the default device ID identity; UNION_ID is the organization-dimension device ID identity, which is available only after an organization has been requested on the Maojing Skill Application Open Platform.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. This field is required when IdType is UNION_ID.
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

export class GetWeatherRequestPayload extends $dara.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type. When the encoding type is SKILL_ID, the value is the application\\"s SkillID. When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the user identifier for Maojing, and each method corresponds to a different encoding type: PACKAGE_NAME: APK package name, used for Android application customer links; SKILL_ID: skill ID, used for cloud-based links.
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
   * Type of user ID: OPEN_ID: default user ID identifier; UNION_ID: organization-dimension user ID identifier, available only after an organization has been requested on the Maojing Skill Application Open Platform.
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

export class GetWeatherRequest extends $dara.Model {
  /**
   * @remarks
   * Device ID information
   * 
   * This parameter is required.
   */
  deviceInfo?: GetWeatherRequestDeviceInfo;
  /**
   * @remarks
   * Input parameters for the service request
   * 
   * **if can be null:**
   * false
   */
  payload?: GetWeatherRequestPayload;
  /**
   * @remarks
   * User identifier information
   * 
   * This parameter is required.
   */
  userInfo?: GetWeatherRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetWeatherRequestDeviceInfo,
      payload: GetWeatherRequestPayload,
      userInfo: GetWeatherRequestUserInfo,
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

