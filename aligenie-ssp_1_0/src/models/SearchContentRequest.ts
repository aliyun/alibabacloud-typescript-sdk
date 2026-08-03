// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchContentRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type.  
   * 
   * When the encoding type is `SKILL_ID`, the value is the application\\"s Skill ID.  
   * When the encoding type is `PACKAGE_NAME`, the value is the `packageName` of the corresponding client app.
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
   * `PACKAGE_NAME`: APK package name, used for the Android application customer link.  
   * `SKILL_ID`: Skill ID, used for the cloud-based link.
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID, set to either `deviceOpenId` or `deviceUnionId`.
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
   * 
   * `OPEN_ID`: Default device ID identity.  
   * `UNION_ID`: Organization-dimension device ID identity. This value is available only after an organization has been registered on the Tmall Genie Skill Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required when `IdType` is `UNION_ID`.
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

export class SearchContentRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The search scope: music or audio.  
   * Input parameter enumeration: music | program
   * 
   * @example
   * music
   */
  cate?: string;
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
   * Query keyword
   * 
   * @example
   * 周杰伦
   */
  query?: string;
  /**
   * @remarks
   * Whether to query albums
   * 
   * @example
   * false
   */
  queryAlbum?: boolean;
  /**
   * @remarks
   * When `cate` is `music`, `subCate` can be omitted.  
   * If `subCate` is provided, it can be one of the following:  
   * `song` (Song), `singer` (Artist), `album` (Album).  
   * 
   * When `cate` is `program`, `subCate` can be omitted.  
   * If `subCate` is provided, it can be one of the following:  
   * `album` (Album), `audio` (Program Audio), `radio` (Radio Station).
   * 
   * @example
   * singer
   */
  subCate?: string;
  static names(): { [key: string]: string } {
    return {
      cate: 'Cate',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      query: 'Query',
      queryAlbum: 'QueryAlbum',
      subCate: 'SubCate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cate: 'string',
      pageNum: 'number',
      pageSize: 'number',
      query: 'string',
      queryAlbum: 'boolean',
      subCate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchContentRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type.
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
   * `PACKAGE_NAME`: APK package name, used for the Android application customer link.  
   * `SKILL_ID`: Skill ID, used for the cloud-based link.
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * User identifier, set to either `userOpenId` or `userUnionId`.
   * 
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * The Type of the User ID.
   * 
   * OPEN_ID: The default User ID identity.  
   * UNION_ID: The organization-dimension User ID identity. This value is available only after an organization has been requested on the Tmall Genie Skills Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required when `IdType` is `UNION_ID`.
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

export class SearchContentRequest extends $dara.Model {
  /**
   * @remarks
   * Device identification information
   * 
   * This parameter is required.
   */
  deviceInfo?: SearchContentRequestDeviceInfo;
  /**
   * @remarks
   * Request Parameters
   * 
   * This parameter is required.
   */
  request?: SearchContentRequestRequest;
  /**
   * @remarks
   * User identification information
   * 
   * This parameter is required.
   */
  userInfo?: SearchContentRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      request: 'Request',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: SearchContentRequestDeviceInfo,
      request: SearchContentRequestRequest,
      userInfo: SearchContentRequestUserInfo,
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

