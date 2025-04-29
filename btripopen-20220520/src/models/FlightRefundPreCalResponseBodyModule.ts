// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightRefundPreCalResponseBodyModuleMultiRefundCalList } from "./FlightRefundPreCalResponseBodyModuleMultiRefundCalList";
import { FlightRefundPreCalResponseBodyModuleReturnReason } from "./FlightRefundPreCalResponseBodyModuleReturnReason";


export class FlightRefundPreCalResponseBodyModule extends $dara.Model {
  /**
   * @example
   * false
   */
  flightChange?: boolean;
  /**
   * @example
   * FlightItem_996677504
   */
  itemUnitId?: string;
  multiRefundCalList?: FlightRefundPreCalResponseBodyModuleMultiRefundCalList[];
  /**
   * @example
   * 1000
   */
  preRefundMoney?: number;
  /**
   * @example
   * 1000
   */
  refundFee?: number;
  returnReason?: FlightRefundPreCalResponseBodyModuleReturnReason[];
  /**
   * @example
   * 882sudu23s923j9d2
   */
  sessionId?: string;
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      flightChange: 'flight_change',
      itemUnitId: 'item_unit_id',
      multiRefundCalList: 'multi_refund_cal_list',
      preRefundMoney: 'pre_refund_money',
      refundFee: 'refund_fee',
      returnReason: 'return_reason',
      sessionId: 'session_id',
      tips: 'tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightChange: 'boolean',
      itemUnitId: 'string',
      multiRefundCalList: { 'type': 'array', 'itemType': FlightRefundPreCalResponseBodyModuleMultiRefundCalList },
      preRefundMoney: 'number',
      refundFee: 'number',
      returnReason: { 'type': 'array', 'itemType': FlightRefundPreCalResponseBodyModuleReturnReason },
      sessionId: 'string',
      tips: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multiRefundCalList)) {
      $dara.Model.validateArray(this.multiRefundCalList);
    }
    if(Array.isArray(this.returnReason)) {
      $dara.Model.validateArray(this.returnReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

