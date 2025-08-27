// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundApplyRequestPassengerSegmentInfoList extends $dara.Model {
  flightNo?: string;
  passengerName?: string;
  /**
   * @example
   * 1245
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      flightNo: 'flight_no',
      passengerName: 'passenger_name',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightNo: 'string',
      passengerName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundApplyRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  corpRefundPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dis123
   */
  disOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * refu123
   */
  disSubOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  displayRefundMoney?: string;
  extra?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  isVoluntary?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FlightItem_9966772382
   */
  itemUnitIds?: string;
  passengerSegmentInfoList?: FlightRefundApplyRequestPassengerSegmentInfoList[];
  /**
   * @example
   * 100
   */
  personalRefundPrice?: number;
  reasonDetail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reasonType?: number;
  refundVoucherInfo?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0f9418cd2ce34af49ab0de16fea166d1
   */
  sessionId?: string;
  /**
   * @example
   * 100
   */
  totalRefundPrice?: number;
  static names(): { [key: string]: string } {
    return {
      corpRefundPrice: 'corp_refund_price',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      displayRefundMoney: 'display_refund_money',
      extra: 'extra',
      isVoluntary: 'is_voluntary',
      itemUnitIds: 'item_unit_ids',
      passengerSegmentInfoList: 'passenger_segment_info_list',
      personalRefundPrice: 'personal_refund_price',
      reasonDetail: 'reason_detail',
      reasonType: 'reason_type',
      refundVoucherInfo: 'refund_voucher_info',
      sessionId: 'session_id',
      totalRefundPrice: 'total_refund_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpRefundPrice: 'number',
      disOrderId: 'string',
      disSubOrderId: 'string',
      displayRefundMoney: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isVoluntary: 'number',
      itemUnitIds: 'string',
      passengerSegmentInfoList: { 'type': 'array', 'itemType': FlightRefundApplyRequestPassengerSegmentInfoList },
      personalRefundPrice: 'number',
      reasonDetail: 'string',
      reasonType: 'number',
      refundVoucherInfo: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
      totalRefundPrice: 'number',
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    if(Array.isArray(this.passengerSegmentInfoList)) {
      $dara.Model.validateArray(this.passengerSegmentInfoList);
    }
    if(Array.isArray(this.refundVoucherInfo)) {
      $dara.Model.validateArray(this.refundVoucherInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

