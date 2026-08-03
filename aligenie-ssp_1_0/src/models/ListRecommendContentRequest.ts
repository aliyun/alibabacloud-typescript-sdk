// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecommendContentRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type
   * 
   * When the encoding type is SKILL_ID, the value is the application\\"s Skill ID.
   * When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device ID for Tmall Genie, and each method corresponds to a different encoding type.
   * 
   * PACKAGE_NAME: APK package name, used for the Android application client path.
   * SKILL_ID: Skill ID, used for the cloud-based path.
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
   * Type of device ID
   * 
   * OPEN_ID: Default device ID identity.
   * UNION_ID: Organization-dimension device ID identity. This value is available only after an organization has been registered on the Tmall Genie Skill Application Open Platform.
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

export class ListRecommendContentRequestRequest extends $dara.Model {
  /**
   * @remarks
   * Quantity of recommendations
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * Default value: song (currently, the extension field supports only song)
   * 
   * @example
   * song
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecommendContentRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type.
   * 
   * When the encoding type is SKILL_ID, the value is the Skill ID of the application.  
   * When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the user identifier for Tmall Genie, and each method corresponds to a different encoding type.
   * 
   * PACKAGE_NAME: APK package name, used for the Android application client path.
   * SKILL_ID: Skill ID, used for the cloud-based path.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * User Identifier, set to userOpenId or userUnionId.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * Type of User ID.
   * 
   * OPEN_ID: The default User ID identifier.  
   * UNION_ID: The organization-dimension User ID identifier. This value is available only after an organization has been requested on the Tmall Genie Skills Application Open Platform.
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

export class ListRecommendContentRequest extends $dara.Model {
  /**
   * @remarks
   * Device identification information
   * 
   * This parameter is required.
   */
  deviceInfo?: ListRecommendContentRequestDeviceInfo;
  /**
   * @remarks
   * Request Parameters
   * 
   * This parameter is required.
   */
  request?: ListRecommendContentRequestRequest;
  /**
   * @remarks
   * User identification information
   * 
   * This parameter is required.
   */
  userInfo?: ListRecommendContentRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      request: 'Request',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ListRecommendContentRequestDeviceInfo,
      request: ListRecommendContentRequestRequest,
      userInfo: ListRecommendContentRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.request && typeof (this.request as any).validate === 'function') {
      (this.request as any).validate();
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

