// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderCreateShrinkRequest extends $dara.Model {
  arrivalTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123122
   */
  btripUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-10-20
   */
  checkIn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-10-20
   */
  checkOut?: string;
  /**
   * @example
   * demo
   */
  contractEmail?: string;
  /**
   * @example
   * 张三
   */
  contractName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 19281772123
   */
  contractPhone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  corpPayPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dis123
   */
  disOrderId?: string;
  /**
   * @example
   * （特定企业需要传递）
   * 1.企业支付金额：DisCorpPayPrice
   * 2.个人支付金额：
   * DisPersonPayPrice
   */
  extra?: string;
  invoiceInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 671570615157
   */
  itemId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fb5e1abf33924b6c912bd6d80deec0eb-1
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
   * 
   * @example
   * 1000
   */
  personPayPrice?: number;
  promotionInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1399417428510
   */
  ratePlanId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 187211
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
  rpType?: number;
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
   * 2198781
   */
  shid?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  totalOrderPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nonUltron_1673575241156_d91ea8ad16735752359161037bf6cf_c54d3768312a4b249b719f126377bf82
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

