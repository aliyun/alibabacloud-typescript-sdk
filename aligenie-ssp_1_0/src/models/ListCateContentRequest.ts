// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCateContentRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type
   * 
   * When the encoding type is SKILL_ID, the value is the application\\"s Skill ID.  
   * When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device identifier for Tmall Genie, and each method corresponds to a different encoding type.
   * 
   * PACKAGE_NAME: APK package name, used for the Android application customer link.
   * SKILL_ID: Skill ID, used for the cloud-based link.
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * Device identifier, set to deviceOpenId or deviceUnionId.
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
   * OPEN_ID: Default device ID identifier.  
   * UNION_ID: Organization-level device ID identifier. This value is available only after an organization has been registered on the Tmall Genie Skill Application Open Platform.
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

export class ListCateContentRequestRequest extends $dara.Model {
  /**
   * @remarks
   * Category ID
   * 
   * This parameter is required.
   * 
   * @example
   * 80010
   */
  cateId?: number;
  /**
   * @remarks
   * Indicates whether to query albums
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  isAlbum?: boolean;
  /**
   * @remarks
   * Page number
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of records per page
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Sorting field
   * 
   * @example
   * hot_score
   */
  sortBy?: string;
  /**
   * @remarks
   * Sorting order
   * 
   * This parameter is required.
   * 
   * @example
   * DESC
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      isAlbum: 'IsAlbum',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      isAlbum: 'boolean',
      pageNum: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type.
   * 
   * When the encoding type is SKILL_ID, the value is the Skill ID of the application.  
   * When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
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
   * 
   * PACKAGE_NAME: APK package name, used for the Android application customer link.  
   * SKILL_ID: Skill ID, used for the cloud-based link.
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * User Identifier, set to userOpenId or userUnionId.
   * 
   * This parameter is required.
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
   * UNION_ID: The organization-dimension User ID identifier. This value is available only after an organization has been registered on the Tmall Genie Skills Application Open Platform.
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

export class ListCateContentRequest extends $dara.Model {
  /**
   * @remarks
   * Device identifier information
   * 
   * This parameter is required.
   */
  deviceInfo?: ListCateContentRequestDeviceInfo;
  /**
   * @remarks
   * Request Parameters
   * 
   * This parameter is required.
   */
  request?: ListCateContentRequestRequest;
  /**
   * @remarks
   * User identifier information
   * 
   * This parameter is required.
   */
  userInfo?: ListCateContentRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      request: 'Request',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ListCateContentRequestDeviceInfo,
      request: ListCateContentRequestRequest,
      userInfo: ListCateContentRequestUserInfo,
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

