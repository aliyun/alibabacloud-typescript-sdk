// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TicketChangingApplyRequestModifyFlightInfoList } from "./TicketChangingApplyRequestModifyFlightInfoList";


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

