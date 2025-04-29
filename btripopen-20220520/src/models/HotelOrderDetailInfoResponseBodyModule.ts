// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTO } from "./HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDto";
import { HotelOrderDetailInfoResponseBodyModuleCancelInfo } from "./HotelOrderDetailInfoResponseBodyModuleCancelInfo";
import { HotelOrderDetailInfoResponseBodyModuleHotelDetailInfo } from "./HotelOrderDetailInfoResponseBodyModuleHotelDetailInfo";
import { HotelOrderDetailInfoResponseBodyModuleHotelSaleOrderRoomInfos } from "./HotelOrderDetailInfoResponseBodyModuleHotelSaleOrderRoomInfos";
import { HotelOrderDetailInfoResponseBodyModuleInvoiceInfo } from "./HotelOrderDetailInfoResponseBodyModuleInvoiceInfo";
import { HotelOrderDetailInfoResponseBodyModuleOccupantInfoList } from "./HotelOrderDetailInfoResponseBodyModuleOccupantInfoList";
import { HotelOrderDetailInfoResponseBodyModuleRoomNightPriceInfoList } from "./HotelOrderDetailInfoResponseBodyModuleRoomNightPriceInfoList";


export class HotelOrderDetailInfoResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2022-01-29
   */
  actualCheckInTime?: string;
  /**
   * @example
   * 2022-01-29
   */
  actualCheckOutTime?: string;
  btripHotelCancelPolicyDTO?: HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTO;
  /**
   * @example
   * 123
   */
  btripOrderId?: string;
  /**
   * @example
   * 100
   */
  cancelFine?: number;
  cancelInfo?: HotelOrderDetailInfoResponseBodyModuleCancelInfo;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  checkIn?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  checkOut?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  confirmOrderTime?: string;
  contractName?: string;
  /**
   * @example
   * 12316261873
   */
  contractTel?: string;
  /**
   * @example
   * 2020-01-21
   */
  createOrderTime?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  earlyArrivalTime?: string;
  /**
   * @example
   * true
   */
  earlyDeparture?: boolean;
  /**
   * @example
   * 2
   */
  guestCount?: number;
  hotelDetailInfo?: HotelOrderDetailInfoResponseBodyModuleHotelDetailInfo;
  hotelSaleOrderRoomInfos?: HotelOrderDetailInfoResponseBodyModuleHotelSaleOrderRoomInfos[];
  invoiceInfo?: HotelOrderDetailInfoResponseBodyModuleInvoiceInfo;
  /**
   * @example
   * 1289918
   */
  itemId?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  lastArrivalTime?: string;
  occupantInfoList?: HotelOrderDetailInfoResponseBodyModuleOccupantInfoList[];
  /**
   * @example
   * 1
   */
  orderStatus?: number;
  orderStatusDesc?: string;
  outConfirmCode?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  payTime?: string;
  /**
   * @example
   * 1
   */
  productType?: number;
  /**
   * @example
   * 100328718728171
   */
  purchaseOrderId?: string;
  /**
   * @example
   * 100
   */
  refundPrice?: number;
  /**
   * @example
   * demo
   */
  refundReason?: string;
  /**
   * @example
   * 100
   */
  refundServiceFee?: number;
  roomNightPriceInfoList?: HotelOrderDetailInfoResponseBodyModuleRoomNightPriceInfoList[];
  /**
   * @example
   * 1
   */
  roomNumber?: number;
  roomTypeName?: string;
  /**
   * @example
   * 2088441675613762
   */
  sellerId?: string;
  /**
   * @example
   * taobao
   */
  sellerName?: string;
  /**
   * @example
   * 1.02
   */
  serviceFee?: number;
  /**
   * @example
   * 0
   */
  settleType?: string;
  /**
   * @example
   * dis123
   */
  supplierOrderId?: string;
  /**
   * @example
   * 100
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      actualCheckInTime: 'actual_check_in_time',
      actualCheckOutTime: 'actual_check_out_time',
      btripHotelCancelPolicyDTO: 'btrip_hotel_cancel_policy_d_t_o',
      btripOrderId: 'btrip_order_id',
      cancelFine: 'cancel_fine',
      cancelInfo: 'cancel_info',
      checkIn: 'check_in',
      checkOut: 'check_out',
      confirmOrderTime: 'confirm_order_time',
      contractName: 'contract_name',
      contractTel: 'contract_tel',
      createOrderTime: 'create_order_time',
      earlyArrivalTime: 'early_arrival_time',
      earlyDeparture: 'early_departure',
      guestCount: 'guest_count',
      hotelDetailInfo: 'hotel_detail_info',
      hotelSaleOrderRoomInfos: 'hotel_sale_order_room_infos',
      invoiceInfo: 'invoice_info',
      itemId: 'item_id',
      lastArrivalTime: 'last_arrival_time',
      occupantInfoList: 'occupant_info_list',
      orderStatus: 'order_status',
      orderStatusDesc: 'order_status_desc',
      outConfirmCode: 'out_confirm_code',
      payTime: 'pay_time',
      productType: 'product_type',
      purchaseOrderId: 'purchase_order_id',
      refundPrice: 'refund_price',
      refundReason: 'refund_reason',
      refundServiceFee: 'refund_service_fee',
      roomNightPriceInfoList: 'room_night_price_info_list',
      roomNumber: 'room_number',
      roomTypeName: 'room_type_name',
      sellerId: 'seller_id',
      sellerName: 'seller_name',
      serviceFee: 'service_fee',
      settleType: 'settle_type',
      supplierOrderId: 'supplier_order_id',
      totalPrice: 'total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualCheckInTime: 'string',
      actualCheckOutTime: 'string',
      btripHotelCancelPolicyDTO: HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTO,
      btripOrderId: 'string',
      cancelFine: 'number',
      cancelInfo: HotelOrderDetailInfoResponseBodyModuleCancelInfo,
      checkIn: 'string',
      checkOut: 'string',
      confirmOrderTime: 'string',
      contractName: 'string',
      contractTel: 'string',
      createOrderTime: 'string',
      earlyArrivalTime: 'string',
      earlyDeparture: 'boolean',
      guestCount: 'number',
      hotelDetailInfo: HotelOrderDetailInfoResponseBodyModuleHotelDetailInfo,
      hotelSaleOrderRoomInfos: { 'type': 'array', 'itemType': HotelOrderDetailInfoResponseBodyModuleHotelSaleOrderRoomInfos },
      invoiceInfo: HotelOrderDetailInfoResponseBodyModuleInvoiceInfo,
      itemId: 'string',
      lastArrivalTime: 'string',
      occupantInfoList: { 'type': 'array', 'itemType': HotelOrderDetailInfoResponseBodyModuleOccupantInfoList },
      orderStatus: 'number',
      orderStatusDesc: 'string',
      outConfirmCode: 'string',
      payTime: 'string',
      productType: 'number',
      purchaseOrderId: 'string',
      refundPrice: 'number',
      refundReason: 'string',
      refundServiceFee: 'number',
      roomNightPriceInfoList: { 'type': 'array', 'itemType': HotelOrderDetailInfoResponseBodyModuleRoomNightPriceInfoList },
      roomNumber: 'number',
      roomTypeName: 'string',
      sellerId: 'string',
      sellerName: 'string',
      serviceFee: 'number',
      settleType: 'string',
      supplierOrderId: 'string',
      totalPrice: 'number',
    };
  }

  validate() {
    if(this.btripHotelCancelPolicyDTO && typeof (this.btripHotelCancelPolicyDTO as any).validate === 'function') {
      (this.btripHotelCancelPolicyDTO as any).validate();
    }
    if(this.cancelInfo && typeof (this.cancelInfo as any).validate === 'function') {
      (this.cancelInfo as any).validate();
    }
    if(this.hotelDetailInfo && typeof (this.hotelDetailInfo as any).validate === 'function') {
      (this.hotelDetailInfo as any).validate();
    }
    if(Array.isArray(this.hotelSaleOrderRoomInfos)) {
      $dara.Model.validateArray(this.hotelSaleOrderRoomInfos);
    }
    if(this.invoiceInfo && typeof (this.invoiceInfo as any).validate === 'function') {
      (this.invoiceInfo as any).validate();
    }
    if(Array.isArray(this.occupantInfoList)) {
      $dara.Model.validateArray(this.occupantInfoList);
    }
    if(Array.isArray(this.roomNightPriceInfoList)) {
      $dara.Model.validateArray(this.roomNightPriceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

