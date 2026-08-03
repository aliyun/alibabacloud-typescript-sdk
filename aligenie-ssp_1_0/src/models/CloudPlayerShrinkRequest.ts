// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudPlayerShrinkRequest extends $dara.Model {
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
  deviceInfoShrink?: string;
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
  songIdListShrink?: string;
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

