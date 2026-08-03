// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePlayingListOAuth2RequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. Enter the Project ID of the project to which the product belongs. You can view it in the Tmall Genie AI Platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. Enter PROJECT_ID here.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID. Enter the value of deviceOpenId or deviceUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The type of device ID:  
   * OPEN_ID: The default device ID.  
   * UNION_ID: The organization-level device ID. You must request an organization in advance on the Open Platform.
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
   * Third-party ID.  
   * 
   * If the item is content, this is the content ID; if it is an album, this is the album ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
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
   * Playback objects
   * 
   * This parameter is required.
   */
  contentList?: CreatePlayingListOAuth2RequestOpenCreatePlayingListRequestContentList[];
  /**
   * @remarks
   * Content type for playback
   * 
   * Content: content; Album: album; Playlist: collect
   * 
   * This parameter is required.
   * 
   * @example
   * content
   */
  contentType?: string;
  /**
   * @remarks
   * Extension information
   */
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * Index of the item to play
   * 
   * Can be empty. Default is 0, which means playback starts from the beginning.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * Indicates whether album playback should continue from the last played episode. For example, if the last playback stopped at episode 5, whether to resume from episode 5. Default is true.
   * 
   * @example
   * true
   */
  needAlbumContinued?: boolean;
  /**
   * @remarks
   * Playback source, the unique identifier for configuring playback control capabilities.  
   * 
   * Optional. Default value is "default".
   * 
   * @example
   * default
   */
  playFrom?: string;
  /**
   * @remarks
   * Playback pattern
   * 
   * Repeat all: Repeat; Shuffle: Shuffle; Repeat one: RepeatOne; Play in order: Normal.
   * 
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
   * Device identification information
   * 
   * This parameter is required.
   */
  deviceInfo?: CreatePlayingListOAuth2RequestDeviceInfo;
  /**
   * @remarks
   * Business parameters
   * 
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

