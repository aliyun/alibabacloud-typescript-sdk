// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoList } from "./IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoList";


export class IntlFlightInventoryPriceCheckResponseBodyModule extends $dara.Model {
  /**
   * @example
   * true
   */
  checkSuccess?: boolean;
  /**
   * @example
   * 0
   */
  failType?: number;
  passengerChangedPriceInfoList?: IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoList[];
  /**
   * @example
   * fcoid_deb6372db8194f1c94c23bc4fadc508d
   */
  renderKey?: string;
  static names(): { [key: string]: string } {
    return {
      checkSuccess: 'check_success',
      failType: 'fail_type',
      passengerChangedPriceInfoList: 'passenger_changed_price_info_list',
      renderKey: 'render_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkSuccess: 'boolean',
      failType: 'number',
      passengerChangedPriceInfoList: { 'type': 'array', 'itemType': IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoList },
      renderKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.passengerChangedPriceInfoList)) {
      $dara.Model.validateArray(this.passengerChangedPriceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

