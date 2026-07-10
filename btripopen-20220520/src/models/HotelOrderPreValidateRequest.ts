// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderPreValidateRequestDailyList extends $dara.Model {
  board?: string;
  price?: number;
  rateStartTime?: string;
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

export class HotelOrderPreValidateRequestOccupantInfoList extends $dara.Model {
  cardNo?: string;
  cardType?: number;
  name?: string;
  phone?: string;
  staffNo?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      cardNo: 'card_no',
      cardType: 'card_type',
      name: 'name',
      phone: 'phone',
      staffNo: 'staff_no',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardNo: 'string',
      cardType: 'number',
      name: 'string',
      phone: 'string',
      staffNo: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderPreValidateRequest extends $dara.Model {
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
  dailyList?: HotelOrderPreValidateRequestDailyList[];
  /**
   * @remarks
   * This parameter is required.
   */
  itemId?: number;
  numberOfAdultsPerRoom?: number;
  occupantInfoList?: HotelOrderPreValidateRequestOccupantInfoList[];
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
      dailyList: 'daily_list',
      itemId: 'item_id',
      numberOfAdultsPerRoom: 'number_of_adults_per_room',
      occupantInfoList: 'occupant_info_list',
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
      dailyList: { 'type': 'array', 'itemType': HotelOrderPreValidateRequestDailyList },
      itemId: 'number',
      numberOfAdultsPerRoom: 'number',
      occupantInfoList: { 'type': 'array', 'itemType': HotelOrderPreValidateRequestOccupantInfoList },
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
    if(Array.isArray(this.dailyList)) {
      $dara.Model.validateArray(this.dailyList);
    }
    if(Array.isArray(this.occupantInfoList)) {
      $dara.Model.validateArray(this.occupantInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

