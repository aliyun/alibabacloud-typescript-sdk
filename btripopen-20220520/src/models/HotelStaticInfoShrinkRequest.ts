// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelStaticInfoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hotelIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelIdsShrink: 'hotel_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

