// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlbumIsAddedShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Album ID list
   */
  albumIdListShrink?: string;
  /**
   * @remarks
   * Device Information
   */
  deviceInfoShrink?: string;
  /**
   * @remarks
   * User information
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      albumIdListShrink: 'AlbumIdList',
      deviceInfoShrink: 'DeviceInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumIdListShrink: 'string',
      deviceInfoShrink: 'string',
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

