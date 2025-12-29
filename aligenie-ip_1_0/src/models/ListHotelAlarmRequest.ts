// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelAlarmRequest extends $dara.Model {
  /**
   * @example
   * a7a3***013
   */
  hotelId?: string;
  rooms?: string[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      rooms: 'Rooms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      rooms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.rooms)) {
      $dara.Model.validateArray(this.rooms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

