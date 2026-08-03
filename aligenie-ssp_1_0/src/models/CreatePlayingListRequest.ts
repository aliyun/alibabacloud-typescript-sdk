// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePlayingListRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type.
   * 
   * When the encoding type is `SKILL_ID`, the value is the application\\"s Skill ID.  
   * When the encoding type is `PACKAGE_NAME`, the value is the packageName of the corresponding client app.
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
   * `PACKAGE_NAME`: APK package name, used as the encoding type for the Android application customer link.  
   * `SKILL_ID`: Skill ID, used as the encoding type for the cloud-based link.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID, set to either deviceOpenId or deviceUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ouRjKOX95tn1a0kwb2+Ao6Q1CAxASJUZDWtlk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * Type of device ID.
   * 
   * `OPEN_ID`: Default device ID identity.  
   * `UNION_ID`: Organization-dimension device ID identity. This value is available only after an organization has been requested on the Tmall Genie skill application Open Platform.
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

export class CreatePlayingListRequestOpenCreatePlayingListRequestContentList extends $dara.Model {
  /**
   * @remarks
   * Third-party ID.
   * 
   * If the content type is "content", this is the content ID. If it is "album", this is the album ID.
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

export class CreatePlayingListRequestOpenCreatePlayingListRequest extends $dara.Model {
  /**
   * @remarks
   * Playback content list.
   * 
   * If the content type is "content", multiple entries are supported. If it is "album", only the first entry takes effect.
   * 
   * This parameter is required.
   */
  contentList?: CreatePlayingListRequestOpenCreatePlayingListRequestContentList[];
  /**
   * @remarks
   * Content type for playback.
   * 
   * Values: "content" for content, "album" for album, and "collect" for playlist.
   * 
   * This parameter is required.
   * 
   * @example
   * content
   */
  contentType?: string;
  /**
   * @remarks
   * extension information
   */
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * Playback index.
   * 
   * Can be empty. Default is 0, indicating playback starts from the beginning.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * Whether to resume album playback. For example, if the user previously listened up to episode 5 of an album, whether to continue from episode 5. Default is true.
   * 
   * @example
   * true
   */
  needAlbumContinued?: boolean;
  /**
   * @remarks
   * Playback source, the UUID for configuring playback control capabilities.
   * 
   * Can be empty. Default is "default".
   * 
   * @example
   * default
   */
  playFrom?: string;
  /**
   * @remarks
   * Playback pattern.
   * 
   * Repeat: list loop; Shuffle: random; RepeatOne: single track loop; Normal: sequential playback.
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
   * Value corresponding to the encoding type.
   * 
   * When the encoding type is `SKILL_ID`, the value is the application\\"s Skill ID.  
   * When the encoding type is `PACKAGE_NAME`, the value is the packageName of the corresponding client app.
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
   * `PACKAGE_NAME`: APK package name, used as the encoding type for the Android application customer link.  
   * `SKILL_ID`: Skill ID, used as the encoding type for the cloud-based link.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * User identifier, set to either userOpenId or userUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ouRjKOX95tn1a0kwb2+Ao6Q1CAxASJUZDWtlk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * Type of User ID.
   * 
   * `OPEN_ID`: Default User ID identity.  
   * `UNION_ID`: Organization-dimension User ID identity. This value is available only after an organization has been requested on the Tmall Genie skill application Open Platform.
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

export class CreatePlayingListRequest extends $dara.Model {
  /**
   * @remarks
   * Device ID information
   * 
   * This parameter is required.
   */
  deviceInfo?: CreatePlayingListRequestDeviceInfo;
  /**
   * @remarks
   * Business parameters
   * 
   * This parameter is required.
   */
  openCreatePlayingListRequest?: CreatePlayingListRequestOpenCreatePlayingListRequest;
  /**
   * @remarks
   * User identity information
   * 
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

