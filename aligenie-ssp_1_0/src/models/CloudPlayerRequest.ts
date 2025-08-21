// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudPlayerRequestDeviceInfo extends $dara.Model {
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
   * 1234
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
   * 1234
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
   * This parameter is required.
   * 
   * @example
   * 1
   */
  curPlayIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: CloudPlayerRequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  playMode?: string;
  /**
   * @example
   * 123
   */
  songId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  songIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * KG
   */
  source?: string;
  /**
   * @remarks
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

