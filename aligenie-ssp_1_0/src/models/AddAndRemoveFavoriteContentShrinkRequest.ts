// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAndRemoveFavoriteContentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  openAddAndRemoveFavoriteContentRequestShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      openAddAndRemoveFavoriteContentRequestShrink: 'OpenAddAndRemoveFavoriteContentRequest',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      openAddAndRemoveFavoriteContentRequestShrink: 'string',
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

