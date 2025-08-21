// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAndRemoveFavoriteContentRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ouRjKOX95tn1a0kwb2+Ao6Q1CAxASJUZDWtlk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
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
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2105818057
   */
  rawId?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * ADD
   */
  favoriteCmd?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  openSourceRawIdPair?: AddAndRemoveFavoriteContentRequestOpenAddAndRemoveFavoriteContentRequestOpenSourceRawIdPair;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ouRjKOX95tn1a0kwb2+Ao6Q1CAxASJUZDWtlk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
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
   * This parameter is required.
   */
  deviceInfo?: AddAndRemoveFavoriteContentRequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  openAddAndRemoveFavoriteContentRequest?: AddAndRemoveFavoriteContentRequestOpenAddAndRemoveFavoriteContentRequest;
  /**
   * @remarks
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

