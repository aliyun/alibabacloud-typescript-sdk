// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderPreValidateRequestDailyList extends $dara.Model {
  /**
   * @example
   * 1
   */
  board?: string;
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @example
   * 2022-05-15
   */
  rateStartTime?: string;
  /**
   * @example
   * 10
   */
  roomCount?: number;
  static names(): { [key: string]: string } {
    return {
      board: 'board',
      price: 'price',
      rateStartTime: 'rate_start_time',
      roomCount: 'room_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      board: 'string',
      price: 'number',
      rateStartTime: 'string',
      roomCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

