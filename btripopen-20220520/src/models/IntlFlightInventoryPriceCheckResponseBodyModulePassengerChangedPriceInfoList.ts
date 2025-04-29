// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListChangedPrice } from "./IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListChangedPrice";
import { IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListOriginalPrice } from "./IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListOriginalPrice";


export class IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoList extends $dara.Model {
  /**
   * @example
   * false
   */
  changed?: boolean;
  changedPrice?: IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListChangedPrice;
  originalPrice?: IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListOriginalPrice;
  /**
   * @example
   * 0
   */
  passengerType?: number;
  static names(): { [key: string]: string } {
    return {
      changed: 'changed',
      changedPrice: 'changed_price',
      originalPrice: 'original_price',
      passengerType: 'passenger_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changed: 'boolean',
      changedPrice: IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListChangedPrice,
      originalPrice: IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListOriginalPrice,
      passengerType: 'number',
    };
  }

  validate() {
    if(this.changedPrice && typeof (this.changedPrice as any).validate === 'function') {
      (this.changedPrice as any).validate();
    }
    if(this.originalPrice && typeof (this.originalPrice as any).validate === 'function') {
      (this.originalPrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

