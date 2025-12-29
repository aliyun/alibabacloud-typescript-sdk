// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelScreenSaverStyleRequest extends $dara.Model {
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

