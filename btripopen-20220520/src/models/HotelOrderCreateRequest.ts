// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderCreateRequestInvoiceInfo } from "./HotelOrderCreateRequestInvoiceInfo";
import { HotelOrderCreateRequestOccupantInfoList } from "./HotelOrderCreateRequestOccupantInfoList";
import { HotelOrderCreateRequestPromotionInfo } from "./HotelOrderCreateRequestPromotionInfo";


export class HotelOrderCreateRequest extends $dara.Model {
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
  extra?: string;
  invoiceInfo?: HotelOrderCreateRequestInvoiceInfo;
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
  /**
   * @remarks
   * This parameter is required.
   */
  occupantInfoList?: HotelOrderCreateRequestOccupantInfoList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  personPayPrice?: number;
  promotionInfo?: HotelOrderCreateRequestPromotionInfo;
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
      btripUserId: 'btrip_user_id',
      checkIn: 'check_in',
      checkOut: 'check_out',
      contractEmail: 'contract_email',
      contractName: 'contract_name',
      contractPhone: 'contract_phone',
      corpPayPrice: 'corp_pay_price',
      disOrderId: 'dis_order_id',
      extra: 'extra',
      invoiceInfo: 'invoice_info',
      itemId: 'item_id',
      itineraryNo: 'itinerary_no',
      occupantInfoList: 'occupant_info_list',
      personPayPrice: 'person_pay_price',
      promotionInfo: 'promotion_info',
      ratePlanId: 'rate_plan_id',
      roomId: 'room_id',
      roomNum: 'room_num',
      sellerId: 'seller_id',
      shid: 'shid',
      totalOrderPrice: 'total_order_price',
      validateResKey: 'validate_res_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      checkIn: 'string',
      checkOut: 'string',
      contractEmail: 'string',
      contractName: 'string',
      contractPhone: 'string',
      corpPayPrice: 'number',
      disOrderId: 'string',
      extra: 'string',
      invoiceInfo: HotelOrderCreateRequestInvoiceInfo,
      itemId: 'number',
      itineraryNo: 'string',
      occupantInfoList: { 'type': 'array', 'itemType': HotelOrderCreateRequestOccupantInfoList },
      personPayPrice: 'number',
      promotionInfo: HotelOrderCreateRequestPromotionInfo,
      ratePlanId: 'number',
      roomId: 'number',
      roomNum: 'number',
      sellerId: 'number',
      shid: 'number',
      totalOrderPrice: 'number',
      validateResKey: 'string',
    };
  }

  validate() {
    if(this.invoiceInfo && typeof (this.invoiceInfo as any).validate === 'function') {
      (this.invoiceInfo as any).validate();
    }
    if(Array.isArray(this.occupantInfoList)) {
      $dara.Model.validateArray(this.occupantInfoList);
    }
    if(this.promotionInfo && typeof (this.promotionInfo as any).validate === 'function') {
      (this.promotionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

