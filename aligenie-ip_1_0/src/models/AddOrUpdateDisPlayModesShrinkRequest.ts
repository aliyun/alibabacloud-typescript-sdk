// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddOrUpdateDisPlayModesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hotelDeviceModeListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelDeviceModeListShrink: 'HotelDeviceModeList',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelDeviceModeListShrink: 'string',
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

