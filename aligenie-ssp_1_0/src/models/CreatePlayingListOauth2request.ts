// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePlayingListOAuth2RequestDeviceInfo extends $dara.Model {
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
   * 123
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
   * 1
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

export class CreatePlayingListOAuth2RequestOpenCreatePlayingListRequestContentList extends $dara.Model {
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

export class CreatePlayingListOAuth2RequestOpenCreatePlayingListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contentList?: CreatePlayingListOAuth2RequestOpenCreatePlayingListRequestContentList[];
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
      contentList: { 'type': 'array', 'itemType': CreatePlayingListOAuth2RequestOpenCreatePlayingListRequestContentList },
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

export class CreatePlayingListOAuth2Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: CreatePlayingListOAuth2RequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  openCreatePlayingListRequest?: CreatePlayingListOAuth2RequestOpenCreatePlayingListRequest;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openCreatePlayingListRequest: 'OpenCreatePlayingListRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: CreatePlayingListOAuth2RequestDeviceInfo,
      openCreatePlayingListRequest: CreatePlayingListOAuth2RequestOpenCreatePlayingListRequest,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.openCreatePlayingListRequest && typeof (this.openCreatePlayingListRequest as any).validate === 'function') {
      (this.openCreatePlayingListRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

