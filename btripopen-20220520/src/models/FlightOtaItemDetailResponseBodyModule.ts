// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaItemDetailResponseBodyModuleBaggageRule } from "./FlightOtaItemDetailResponseBodyModuleBaggageRule";
import { FlightOtaItemDetailResponseBodyModuleChangeRule } from "./FlightOtaItemDetailResponseBodyModuleChangeRule";
import { FlightOtaItemDetailResponseBodyModuleRefundRule } from "./FlightOtaItemDetailResponseBodyModuleRefundRule";


export class FlightOtaItemDetailResponseBodyModule extends $dara.Model {
  baggageRule?: FlightOtaItemDetailResponseBodyModuleBaggageRule[];
  changeRule?: FlightOtaItemDetailResponseBodyModuleChangeRule[];
  refundRule?: FlightOtaItemDetailResponseBodyModuleRefundRule[];
  /**
   * @example
   * 1830
   */
  sellPrice?: number;
  sellPriceList?: number[];
  /**
   * @example
   * 1
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      baggageRule: 'baggage_rule',
      changeRule: 'change_rule',
      refundRule: 'refund_rule',
      sellPrice: 'sell_price',
      sellPriceList: 'sell_price_list',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageRule: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleBaggageRule },
      changeRule: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleChangeRule },
      refundRule: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleRefundRule },
      sellPrice: 'number',
      sellPriceList: { 'type': 'array', 'itemType': 'number' },
      tripType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.baggageRule)) {
      $dara.Model.validateArray(this.baggageRule);
    }
    if(Array.isArray(this.changeRule)) {
      $dara.Model.validateArray(this.changeRule);
    }
    if(Array.isArray(this.refundRule)) {
      $dara.Model.validateArray(this.refundRule);
    }
    if(Array.isArray(this.sellPriceList)) {
      $dara.Model.validateArray(this.sellPriceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

