// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReminderRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type.
   * 
   * - When the encoding type is SKILLID, the value is the application\\"s Skill ID.
   * - When the encoding type is PACKAGENAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device ID for Tmall Genie, and each method corresponds to a different encoding type.  
   * - PACKAGE_NAME: APK package name, used for the Android application customer link.  
   * - SKILL_ID: Skill ID, used for the cloud-based link.
   * 
   * This parameter is required.
   * 
   * @example
   * SKILL_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID, set to either deviceOpenId or deviceUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Type of device ID.  
   * - OPEN_ID: The default device ID.  
   * - UNION_ID: Organization-level device ID, available only after an organization has been requested on the Tmall Genie Skill Application Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required when **IdType** is set to **UNION_ID**.
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

export class GetReminderRequestPayload extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the reminder.
   * 
   * This parameter is required.
   * 
   * @example
   * 20****34
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether this invocation is for debug purposes.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isDebug?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      isDebug: 'IsDebug',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      isDebug: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReminderRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type.  
   * 
   * - When the encoding type is SKILLID, the value is the application\\"s Skill ID.  
   * - When the encoding type is PACKAGENAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the user identifier for Tmall Genie, and each method corresponds to a different encoding type.
   * - PACKAGE_NAME: APK package name, used for the Android application customer ingest endpoint.
   * - SKILL_ID: Skill ID, used for the cloud-based ingest endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * SKILL_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * User identifier, set to either userOpenId or userUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * Type of the User ID  
   * - OPEN_ID: The default User ID identifier.  
   * - UNION_ID: The organization-dimension User ID identifier. This value is available only after an organization has been requested on the Tmall Genie Skills Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required when **IdType** is set to **UNION_ID**.
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

export class GetReminderRequest extends $dara.Model {
  /**
   * @remarks
   * List of device identity information.
   * 
   * This parameter is required.
   */
  deviceInfo?: GetReminderRequestDeviceInfo;
  /**
   * @remarks
   * Input parameters for the service request.
   * 
   * This parameter is required.
   */
  payload?: GetReminderRequestPayload;
  /**
   * @remarks
   * List of user identity information.
   * 
   * This parameter is required.
   */
  userInfo?: GetReminderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetReminderRequestDeviceInfo,
      payload: GetReminderRequestPayload,
      userInfo: GetReminderRequestUserInfo,
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

