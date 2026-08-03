// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubAlbumShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Device Information
   */
  deviceInfoShrink?: string;
  /**
   * @remarks
   * request
   */
  querySubscriptionAlbumRequestShrink?: string;
  /**
   * @remarks
   * User information
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      querySubscriptionAlbumRequestShrink: 'QuerySubscriptionAlbumRequest',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      querySubscriptionAlbumRequestShrink: 'string',
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

