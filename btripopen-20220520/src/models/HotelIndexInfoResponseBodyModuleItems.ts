// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelIndexInfoResponseBodyModuleItems extends $dara.Model {
  /**
   * @example
   * 182873
   */
  hotelId?: string;
  /**
   * @example
   * 0
   */
  hotelStatus?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'hotel_id',
      hotelStatus: 'hotel_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      hotelStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

