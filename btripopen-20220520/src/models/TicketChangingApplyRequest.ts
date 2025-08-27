// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingApplyRequestModifyFlightInfoListPassengerInfoList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CA1703
   */
  originFlightNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  outUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerName?: string;
  static names(): { [key: string]: string } {
    return {
      originFlightNo: 'origin_flight_no',
      outUserId: 'out_user_id',
      passengerName: 'passenger_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originFlightNo: 'string',
      outUserId: 'string',
      passengerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingApplyRequestModifyFlightInfoList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BJS
   */
  arrCity?: string;
  /**
   * @example
   * Y
   */
  cabin?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HGH
   */
  depCity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0000-00-00 00:00:00
   */
  depDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CA1704
   */
  flightNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerInfoList?: TicketChangingApplyRequestModifyFlightInfoListPassengerInfoList[];
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      cabin: 'cabin',
      depCity: 'dep_city',
      depDate: 'dep_date',
      flightNo: 'flight_no',
      passengerInfoList: 'passenger_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      cabin: 'string',
      depCity: 'string',
      depDate: 'string',
      flightNo: 'string',
      passengerInfoList: { 'type': 'array', 'itemType': TicketChangingApplyRequestModifyFlightInfoListPassengerInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.passengerInfoList)) {
      $dara.Model.validateArray(this.passengerInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingApplyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dis1234
   */
  disOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mid1243
   */
  disSubOrderId?: string;
  isVoluntary?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  modifyFlightInfoList?: TicketChangingApplyRequestModifyFlightInfoList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1s8837sh991hsj92h
   */
  otaItemId?: string;
  reason?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * us88s2bsbin22hjusd8i
   */
  sessionId?: string;
  /**
   * @example
   * true
   */
  whetherRetry?: boolean;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      isVoluntary: 'is_voluntary',
      modifyFlightInfoList: 'modify_flight_info_list',
      otaItemId: 'ota_item_id',
      reason: 'reason',
      sessionId: 'session_id',
      whetherRetry: 'whether_retry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
      disSubOrderId: 'string',
      isVoluntary: 'number',
      modifyFlightInfoList: { 'type': 'array', 'itemType': TicketChangingApplyRequestModifyFlightInfoList },
      otaItemId: 'string',
      reason: 'string',
      sessionId: 'string',
      whetherRetry: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.modifyFlightInfoList)) {
      $dara.Model.validateArray(this.modifyFlightInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

