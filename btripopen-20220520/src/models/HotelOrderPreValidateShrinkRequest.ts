// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderPreValidateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  btripUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  checkIn?: string;
  /**
   * @remarks
   * This parameter is required.
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
   */
  itemId?: number;
  numberOfAdultsPerRoom?: number;
  occupantInfoListShrink?: string;
  rateKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ratePlanId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  roomId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNum?: number;
  rpType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  searchRoomPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sellerId?: number;
  /**
   * @remarks
   * This parameter is required.
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
      rateKey: 'rate_key',
      ratePlanId: 'rate_plan_id',
      roomId: 'room_id',
      roomNum: 'room_num',
      rpType: 'rp_type',
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
      rateKey: 'string',
      ratePlanId: 'number',
      roomId: 'number',
      roomNum: 'number',
      rpType: 'number',
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

