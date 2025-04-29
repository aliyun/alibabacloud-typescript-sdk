// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelStaticInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hotelIds?: string[];
  static names(): { [key: string]: string } {
    return {
      hotelIds: 'hotel_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.hotelIds)) {
      $dara.Model.validateArray(this.hotelIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

