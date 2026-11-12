// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountForAppRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type:  
   * - When the encoding type is SKILL_ID, the value is the application\\"s Skill ID.  
   * - When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device ID for Tmall Genie, and each method corresponds to a different encoding type.
   * - PACKAGE_NAME: APK package name, used in the Android application customer flow.
   * - SKILL_ID: Skill ID, used in the cloud-based flow.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID, set to deviceOpenId or deviceUnionId.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Type of the device ID:  
   * - OPEN_ID: Default device ID identifier  
   * - UNION_ID: Device ID identifier at the organization dimension. This value is available only after an organization has been requested on the Tmall Genie Skill Application Open Platform.
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

export class GetAccountForAppRequestPayload extends $dara.Model {
  /**
   * @remarks
   * Phone number of the authorized membership user.
   * 
   * @example
   * 188*777
   */
  phone?: string;
  /**
   * @remarks
   * Plaintext UUID
   * 
   * @example
   * 731D5F********DC3B
   */
  originUuid?: string;
  static names(): { [key: string]: string } {
    return {
      phone: 'Phone',
      originUuid: 'originUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phone: 'string',
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

export class GetAccountForAppRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type:  
   * - When the encoding type is SKILL_ID, the value is the application\\"s Skill ID.  
   * - When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the user identifier for Tmall Genie, and each way corresponds to a different encoding type:  
   * - PACKAGE_NAME: APK package name, used for the Android application customer link.  
   * - SKILL_ID: Skill ID, used for the cloud-based link.
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * User identifier, which can be set to userOpenId or userUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * Type of User ID:  
   * - OPEN_ID: The default user ID identity.  
   * - UNION_ID: Organization-dimension user ID identity. This value is available only after an organization has been requested on the Tmall Genie Skill Application Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. This field is required if IdType is set to UNION_ID.
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

export class GetAccountForAppRequest extends $dara.Model {
  /**
   * @remarks
   * Device ID information
   */
  deviceInfo?: GetAccountForAppRequestDeviceInfo;
  /**
   * @remarks
   * Business parameters
   */
  payload?: GetAccountForAppRequestPayload;
  /**
   * @remarks
   * User identifier information
   * 
   * This parameter is required.
   */
  userInfo?: GetAccountForAppRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetAccountForAppRequestDeviceInfo,
      payload: GetAccountForAppRequestPayload,
      userInfo: GetAccountForAppRequestUserInfo,
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

