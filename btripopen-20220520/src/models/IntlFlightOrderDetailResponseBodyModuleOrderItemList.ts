// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOrderDetailResponseBodyModuleOrderItemListBaggageRule } from "./IntlFlightOrderDetailResponseBodyModuleOrderItemListBaggageRule";
import { IntlFlightOrderDetailResponseBodyModuleOrderItemListPassengerPriceList } from "./IntlFlightOrderDetailResponseBodyModuleOrderItemListPassengerPriceList";
import { IntlFlightOrderDetailResponseBodyModuleOrderItemListRefundChangeRule } from "./IntlFlightOrderDetailResponseBodyModuleOrderItemListRefundChangeRule";


export class IntlFlightOrderDetailResponseBodyModuleOrderItemList extends $dara.Model {
  baggageRule?: IntlFlightOrderDetailResponseBodyModuleOrderItemListBaggageRule;
  passengerPriceList?: IntlFlightOrderDetailResponseBodyModuleOrderItemListPassengerPriceList[];
  refundChangeRule?: IntlFlightOrderDetailResponseBodyModuleOrderItemListRefundChangeRule;
  segmentKeyList?: string[];
  static names(): { [key: string]: string } {
    return {
      baggageRule: 'baggage_rule',
      passengerPriceList: 'passenger_price_list',
      refundChangeRule: 'refund_change_rule',
      segmentKeyList: 'segment_key_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageRule: IntlFlightOrderDetailResponseBodyModuleOrderItemListBaggageRule,
      passengerPriceList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModuleOrderItemListPassengerPriceList },
      refundChangeRule: IntlFlightOrderDetailResponseBodyModuleOrderItemListRefundChangeRule,
      segmentKeyList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.baggageRule && typeof (this.baggageRule as any).validate === 'function') {
      (this.baggageRule as any).validate();
    }
    if(Array.isArray(this.passengerPriceList)) {
      $dara.Model.validateArray(this.passengerPriceList);
    }
    if(this.refundChangeRule && typeof (this.refundChangeRule as any).validate === 'function') {
      (this.refundChangeRule as any).validate();
    }
    if(Array.isArray(this.segmentKeyList)) {
      $dara.Model.validateArray(this.segmentKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

