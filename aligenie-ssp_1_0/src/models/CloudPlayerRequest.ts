// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudPlayerRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Encoding key
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Open ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: string;
  /**
   * @remarks
   * ID Type
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID (can be empty)
   * 
   * @example
   * 为空
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

export class CloudPlayerRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Encoding key
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Open ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: string;
  /**
   * @remarks
   * ID Type
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID (can be empty)
   * 
   * @example
   * 为空
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

export class CloudPlayerRequest extends $dara.Model {
  /**
   * @remarks
   * Index of the currently playing song. Starts from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  curPlayIndex?: number;
  /**
   * @remarks
   * Device identity information
   * 
   * This parameter is required.
   */
  deviceInfo?: CloudPlayerRequestDeviceInfo;
  /**
   * @remarks
   * Playback pattern
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  playMode?: string;
  /**
   * @remarks
   * Song ID (used to recompute the index when the index is invalid)
   * 
   * @example
   * 123
   */
  songId?: string;
  /**
   * @remarks
   * List of song IDs (1–200 songs)
   * 
   * This parameter is required.
   */
  songIdList?: string[];
  /**
   * @remarks
   * Source of cloud-recommended songs
   * 
   * This parameter is required.
   * 
   * @example
   * KG
   */
  source?: string;
  /**
   * @remarks
   * Open user information
   * 
   * This parameter is required.
   */
  userInfo?: CloudPlayerRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      curPlayIndex: 'CurPlayIndex',
      deviceInfo: 'DeviceInfo',
      playMode: 'PlayMode',
      songId: 'SongId',
      songIdList: 'SongIdList',
      source: 'Source',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curPlayIndex: 'number',
      deviceInfo: CloudPlayerRequestDeviceInfo,
      playMode: 'string',
      songId: 'string',
      songIdList: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      userInfo: CloudPlayerRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(Array.isArray(this.songIdList)) {
      $dara.Model.validateArray(this.songIdList);
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

