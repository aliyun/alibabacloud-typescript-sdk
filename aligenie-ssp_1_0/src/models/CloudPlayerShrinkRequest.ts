// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudPlayerShrinkRequest extends $dara.Model {
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
  deviceInfoShrink?: string;
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
  songIdListShrink?: string;
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
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      curPlayIndex: 'CurPlayIndex',
      deviceInfoShrink: 'DeviceInfo',
      playMode: 'PlayMode',
      songId: 'SongId',
      songIdListShrink: 'SongIdList',
      source: 'Source',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curPlayIndex: 'number',
      deviceInfoShrink: 'string',
      playMode: 'string',
      songId: 'string',
      songIdListShrink: 'string',
      source: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

