// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteReminderRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. When the encoding type is `SKILL_ID`, the value is the application\\"s Skill ID. When the encoding type is `PACKAGE_NAME`, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * encoding type; there are multiple ways to obtain the Tmall Genie device ID, and each method corresponds to a different encoding type  
   * - PACKAGE_NAME: APK package name, used in the Android application customer flow  
   * - SKILL_ID: skill ID, used in the cloud-based flow
   * 
   * This parameter is required.
   * 
   * @example
   * SKILL_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * device ID (deviceOpenId or deviceUnionId)
   * 
   * This parameter is required.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * type of device ID  
   * - OPEN_ID: default device ID  
   * - UNION_ID: organization-level device ID; available only after an organization has been requested on the Tmall Genie Skill Application Open Platform
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * organization ID; required if IdType is `UNION_ID`
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

export class DeleteReminderRequestPayload extends $dara.Model {
  /**
   * @remarks
   * Unique ID of the reminder
   * 
   * This parameter is required.
   * 
   * @example
   * 20****34
   */
  id?: number;
  /**
   * @remarks
   * Debug flag
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

export class DeleteReminderRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. When the encoding type is `SKILL_ID`, the value is the application\\"s Skill ID. When the encoding type is `PACKAGE_NAME`, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the user identifier for Maojing, and each method corresponds to a different encoding type:  
   * - PACKAGE_NAME: APK package name, used for the Android application customer ingest endpoint  
   * - SKILL_ID: Skill ID, used for the cloud service ingest endpoint
   * 
   * This parameter is required.
   * 
   * @example
   * SKILL_ID
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
   * Type of the User ID:
   * - OPEN_ID: The default User ID identity.
   * - UNION_ID: The User ID identity at the organization dimension. This is available only after an organization has been requested on the Maojing Skill Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required when IdType is `UNION_ID`.
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

export class DeleteReminderRequest extends $dara.Model {
  /**
   * @remarks
   * device identity information
   * 
   * This parameter is required.
   */
  deviceInfo?: DeleteReminderRequestDeviceInfo;
  /**
   * @remarks
   * Input parameters for the service request
   * 
   * This parameter is required.
   */
  payload?: DeleteReminderRequestPayload;
  /**
   * @remarks
   * User identifier information
   * 
   * This parameter is required.
   */
  userInfo?: DeleteReminderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: DeleteReminderRequestDeviceInfo,
      payload: DeleteReminderRequestPayload,
      userInfo: DeleteReminderRequestUserInfo,
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

