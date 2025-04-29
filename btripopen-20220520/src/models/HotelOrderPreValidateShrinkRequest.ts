// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderPreValidateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23141
   */
  btripUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-05-15
   */
  checkIn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-05-15
   */
  checkOut?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dailyListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 612673015638
   */
  itemId?: number;
  /**
   * @example
   * 1
   */
  numberOfAdultsPerRoom?: number;
  occupantInfoListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 239872781
   */
  ratePlanId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 71652158
   */
  roomId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  roomNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  searchRoomPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2088441675613762
   */
  sellerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 52302073
   */
  shid?: number;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      checkIn: 'check_in',
      checkOut: 'check_out',
      dailyListShrink: 'daily_list',
      itemId: 'item_id',
      numberOfAdultsPerRoom: 'number_of_adults_per_room',
      occupantInfoListShrink: 'occupant_info_list',
      ratePlanId: 'rate_plan_id',
      roomId: 'room_id',
      roomNum: 'room_num',
      searchRoomPrice: 'search_room_price',
      sellerId: 'seller_id',
      shid: 'shid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      checkIn: 'string',
      checkOut: 'string',
      dailyListShrink: 'string',
      itemId: 'number',
      numberOfAdultsPerRoom: 'number',
      occupantInfoListShrink: 'string',
      ratePlanId: 'number',
      roomId: 'number',
      roomNum: 'number',
      searchRoomPrice: 'number',
      sellerId: 'number',
      shid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

