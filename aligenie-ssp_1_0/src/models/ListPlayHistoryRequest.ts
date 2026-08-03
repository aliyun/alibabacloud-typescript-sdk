// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPlayHistoryRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type  
   * 
   * When the encoding type is SKILL_ID, this value is the application\\"s Skill ID.  
   * When the encoding type is PACKAGE_NAME, this value is the packageName of the corresponding client app.
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
   * 
   * PACKAGE_NAME: APK package name, used for Android application client-side identification.  
   * SKILL_ID: Skill ID, used for cloud-based identification.
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
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
   * Type of device ID  
   * 
   * OPEN_ID: Default device ID identity.  
   * UNION_ID: Organization-dimension device ID identity. This value is available only after an organization has been registered on the Tmall Genie Skill Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required when IdType is UNION_ID.
   * 
   * This parameter is required.
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

export class ListPlayHistoryRequestRequest extends $dara.Model {
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of records per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Type of content: music, program (audiobook), story, children_song, or radio
   * 
   * @example
   * music
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
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

export class ListPlayHistoryRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type.
   * 
   * When the encoding type is SKILL_ID, the value is the Skill ID of the application.
   * When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client application.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * The encoding type. There are multiple ways to obtain the User Identifier for Tmall Genie, and each method corresponds to a different encoding type.
   * 
   * PACKAGE_NAME: The APK package name. This is the encoding type for the Android application customer link.
   * SKILL_ID: The skill ID. This is the encoding type for the cloud-based link.
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * The User Identifier, which can be set to userOpenId or userUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * The type of User ID.
   * 
   * OPEN_ID: The default User ID identity.
   * UNION_ID: The organization-dimension User ID identity. This value is available only after an organization has been requested on the Tmall Genie Skill Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * The organization ID. This field is required when IdType is set to UNION_ID.
   * 
   * This parameter is required.
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

export class ListPlayHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * Device identification information
   * 
   * This parameter is required.
   */
  deviceInfo?: ListPlayHistoryRequestDeviceInfo;
  /**
   * @remarks
   * Request Parameters
   * 
   * This parameter is required.
   */
  request?: ListPlayHistoryRequestRequest;
  /**
   * @remarks
   * User identification information
   * 
   * This parameter is required.
   */
  userInfo?: ListPlayHistoryRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      request: 'Request',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ListPlayHistoryRequestDeviceInfo,
      request: ListPlayHistoryRequestRequest,
      userInfo: ListPlayHistoryRequestUserInfo,
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

