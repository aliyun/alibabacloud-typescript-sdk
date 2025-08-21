// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePlayingListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  openCreatePlayingListRequestShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      openCreatePlayingListRequestShrink: 'OpenCreatePlayingListRequest',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      openCreatePlayingListRequestShrink: 'string',
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

