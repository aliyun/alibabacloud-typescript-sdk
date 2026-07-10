// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderCreateShrinkRequest extends $dara.Model {
  arrivalTime?: string;
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
  contractEmail?: string;
  contractName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contractPhone?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  corpPayPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  disOrderId?: string;
  extra?: string;
  invoiceInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  itemId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  itineraryNo?: string;
  leaveTime?: string;
  memberInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  occupantInfoListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  personPayPrice?: number;
  promotionInfoShrink?: string;
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
  sellerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  shid?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  totalOrderPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  validateResKey?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalTime: 'arrival_time',
      btripUserId: 'btrip_user_id',
      checkIn: 'check_in',
      checkOut: 'check_out',
      contractEmail: 'contract_email',
      contractName: 'contract_name',
      contractPhone: 'contract_phone',
      corpPayPrice: 'corp_pay_price',
      disOrderId: 'dis_order_id',
      extra: 'extra',
      invoiceInfoShrink: 'invoice_info',
      itemId: 'item_id',
      itineraryNo: 'itinerary_no',
      leaveTime: 'leave_time',
      memberInfoShrink: 'member_info',
      occupantInfoListShrink: 'occupant_info_list',
      personPayPrice: 'person_pay_price',
      promotionInfoShrink: 'promotion_info',
      ratePlanId: 'rate_plan_id',
      roomId: 'room_id',
      roomNum: 'room_num',
      rpType: 'rp_type',
      sellerId: 'seller_id',
      shid: 'shid',
      totalOrderPrice: 'total_order_price',
      validateResKey: 'validate_res_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalTime: 'string',
      btripUserId: 'string',
      checkIn: 'string',
      checkOut: 'string',
      contractEmail: 'string',
      contractName: 'string',
      contractPhone: 'string',
      corpPayPrice: 'number',
      disOrderId: 'string',
      extra: 'string',
      invoiceInfoShrink: 'string',
      itemId: 'number',
      itineraryNo: 'string',
      leaveTime: 'string',
      memberInfoShrink: 'string',
      occupantInfoListShrink: 'string',
      personPayPrice: 'number',
      promotionInfoShrink: 'string',
      ratePlanId: 'number',
      roomId: 'number',
      roomNum: 'number',
      rpType: 'number',
      sellerId: 'number',
      shid: 'number',
      totalOrderPrice: 'number',
      validateResKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

