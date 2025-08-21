// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePlayingListRequestDeviceInfo extends $dara.Model {
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

export class CreatePlayingListRequestOpenCreatePlayingListRequestContentList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
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
      rawId: 'RawId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rawId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListRequestOpenCreatePlayingListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contentList?: CreatePlayingListRequestOpenCreatePlayingListRequestContentList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * content
   */
  contentType?: string;
  extendInfo?: { [key: string]: any };
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * true
   */
  needAlbumContinued?: boolean;
  /**
   * @example
   * default
   */
  playFrom?: string;
  /**
   * @example
   * Repeat
   */
  playMode?: string;
  static names(): { [key: string]: string } {
    return {
      contentList: 'ContentList',
      contentType: 'ContentType',
      extendInfo: 'ExtendInfo',
      index: 'Index',
      needAlbumContinued: 'NeedAlbumContinued',
      playFrom: 'PlayFrom',
      playMode: 'PlayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentList: { 'type': 'array', 'itemType': CreatePlayingListRequestOpenCreatePlayingListRequestContentList },
      contentType: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      index: 'number',
      needAlbumContinued: 'boolean',
      playFrom: 'string',
      playMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contentList)) {
      $dara.Model.validateArray(this.contentList);
    }
    if(this.extendInfo) {
      $dara.Model.validateMap(this.extendInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListRequestUserInfo extends $dara.Model {
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

export class CreatePlayingListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: CreatePlayingListRequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  openCreatePlayingListRequest?: CreatePlayingListRequestOpenCreatePlayingListRequest;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: CreatePlayingListRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openCreatePlayingListRequest: 'OpenCreatePlayingListRequest',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: CreatePlayingListRequestDeviceInfo,
      openCreatePlayingListRequest: CreatePlayingListRequestOpenCreatePlayingListRequest,
      userInfo: CreatePlayingListRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.openCreatePlayingListRequest && typeof (this.openCreatePlayingListRequest as any).validate === 'function') {
      (this.openCreatePlayingListRequest as any).validate();
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

