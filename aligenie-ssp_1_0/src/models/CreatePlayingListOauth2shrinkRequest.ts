// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePlayingListOAuth2ShrinkRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      openCreatePlayingListRequestShrink: 'OpenCreatePlayingListRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      openCreatePlayingListRequestShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

