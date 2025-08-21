// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlbumIsAddedShrinkRequest extends $dara.Model {
  albumIdListShrink?: string;
  deviceInfoShrink?: string;
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

