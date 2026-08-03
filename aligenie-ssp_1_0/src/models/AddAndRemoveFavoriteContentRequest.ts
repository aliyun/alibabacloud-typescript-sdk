// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAndRemoveFavoriteContentRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type
   * 
   * When the encoding type is `SKILL_ID`, the value is the Skill ID of the application. When the encoding type is `PACKAGE_NAME`, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device ID for Tmall Genie, and each method corresponds to a different encoding type.
   * 
   * `PACKAGE_NAME`: APK package name, used for the Android application customer link. `SKILL_ID`: Skill ID, used for the cloud-based link.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID, set to deviceOpenId or deviceUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ouRjKOX95tn1a0kwb2+Ao6Q1CAxASJUZDWtlk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * Type of device ID
   * 
   * `OPEN_ID`: Default device ID identifier. `UNION_ID`: Device ID identifier at the organization dimension. This value is available only after an organization has been registered on the Tmall Genie Skill Application Open Platform.
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
   * 123
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

export class AddAndRemoveFavoriteContentRequestOpenAddAndRemoveFavoriteContentRequestOpenSourceRawIdPair extends $dara.Model {
  /**
   * @remarks
   * Extension information
   */
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * Third-party ID
   * 
   * This parameter is required.
   * 
   * @example
   * 2105818057
   */
  rawId?: string;
  /**
   * @remarks
   * Source
   * 
   * This parameter is required.
   * 
   * @example
   * xiami
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'ExtendInfo',
      rawId: 'RawId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rawId: 'string',
      source: 'string',
    };
  }

  validate() {
    if(this.extendInfo) {
      $dara.Model.validateMap(this.extendInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAndRemoveFavoriteContentRequestOpenAddAndRemoveFavoriteContentRequest extends $dara.Model {
  /**
   * @remarks
   * Operation Type
   * 
   * ADD for collect; REMOVE for remove from favorites
   * 
   * This parameter is required.
   * 
   * @example
   * ADD
   */
  favoriteCmd?: string;
  /**
   * @remarks
   * Object to collect or remove from favorites
   * 
   * This parameter is required.
   */
  openSourceRawIdPair?: AddAndRemoveFavoriteContentRequestOpenAddAndRemoveFavoriteContentRequestOpenSourceRawIdPair;
  /**
   * @remarks
   * Content type
   * 
   * Content: CONTENT; Album: ALBUM; Playlist: COLLECT.
   * 
   * This parameter is required.
   * 
   * @example
   * CONTENT
   */
  packageType?: string;
  static names(): { [key: string]: string } {
    return {
      favoriteCmd: 'FavoriteCmd',
      openSourceRawIdPair: 'OpenSourceRawIdPair',
      packageType: 'PackageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      favoriteCmd: 'string',
      openSourceRawIdPair: AddAndRemoveFavoriteContentRequestOpenAddAndRemoveFavoriteContentRequestOpenSourceRawIdPair,
      packageType: 'string',
    };
  }

  validate() {
    if(this.openSourceRawIdPair && typeof (this.openSourceRawIdPair as any).validate === 'function') {
      (this.openSourceRawIdPair as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAndRemoveFavoriteContentRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type.
   * 
   * When the encoding type is `SKILL_ID`, the value is the Skill ID of the application. When the encoding type is `PACKAGE_NAME`, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the user identifier for Tmall Genie, and each method corresponds to a different encoding type.
   * 
   * `PACKAGE_NAME`: APK package name, used for the Android application customer link. `SKILL_ID`: Skill ID, used for the cloud-based link.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * User Identifier, set to userOpenId or userUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ouRjKOX95tn1a0kwb2+Ao6Q1CAxASJUZDWtlk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * The type of User ID.
   * 
   * `OPEN_ID`: The default User ID identity. `UNION_ID`: The organization-dimension User ID identity. This value is available only after an organization has been requested on the Tmall Genie Skills Open Platform.
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
   * 123
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

export class AddAndRemoveFavoriteContentRequest extends $dara.Model {
  /**
   * @remarks
   * Device identification information
   * 
   * This parameter is required.
   */
  deviceInfo?: AddAndRemoveFavoriteContentRequestDeviceInfo;
  /**
   * @remarks
   * Business parameters
   * 
   * This parameter is required.
   */
  openAddAndRemoveFavoriteContentRequest?: AddAndRemoveFavoriteContentRequestOpenAddAndRemoveFavoriteContentRequest;
  /**
   * @remarks
   * User identification information
   * 
   * This parameter is required.
   */
  userInfo?: AddAndRemoveFavoriteContentRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openAddAndRemoveFavoriteContentRequest: 'OpenAddAndRemoveFavoriteContentRequest',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: AddAndRemoveFavoriteContentRequestDeviceInfo,
      openAddAndRemoveFavoriteContentRequest: AddAndRemoveFavoriteContentRequestOpenAddAndRemoveFavoriteContentRequest,
      userInfo: AddAndRemoveFavoriteContentRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.openAddAndRemoveFavoriteContentRequest && typeof (this.openAddAndRemoveFavoriteContentRequest as any).validate === 'function') {
      (this.openAddAndRemoveFavoriteContentRequest as any).validate();
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

