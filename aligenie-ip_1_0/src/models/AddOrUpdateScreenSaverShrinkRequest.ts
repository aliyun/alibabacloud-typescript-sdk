// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddOrUpdateScreenSaverShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelScreenSaverShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      hotelScreenSaverShrink: 'HotelScreenSaver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      hotelScreenSaverShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

