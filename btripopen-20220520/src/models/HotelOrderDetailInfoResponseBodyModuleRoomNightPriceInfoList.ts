// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderDetailInfoResponseBodyModuleRoomNightPriceInfoList extends $dara.Model {
  board?: string;
  /**
   * @example
   * 2
   */
  boardNum?: number;
  /**
   * @example
   * 1677600000000
   */
  checkIn?: string;
  /**
   * @example
   * 1399417428510
   */
  ratePlanId?: string;
  ratePlanName?: string;
  /**
   * @example
   * 545993154510
   */
  roomId?: string;
  roomName?: string;
  /**
   * @example
   * 50000
   */
  roomPrice?: number;
  static names(): { [key: string]: string } {
    return {
      board: 'board',
      boardNum: 'board_num',
      checkIn: 'check_in',
      ratePlanId: 'rate_plan_id',
      ratePlanName: 'rate_plan_name',
      roomId: 'room_id',
      roomName: 'room_name',
      roomPrice: 'room_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      board: 'string',
      boardNum: 'number',
      checkIn: 'string',
      ratePlanId: 'string',
      ratePlanName: 'string',
      roomId: 'string',
      roomName: 'string',
      roomPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

