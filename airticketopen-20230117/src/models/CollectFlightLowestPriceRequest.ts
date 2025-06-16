// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CollectFlightLowestPriceRequestLowestPriceFlightInfoList } from "./CollectFlightLowestPriceRequestLowestPriceFlightInfoList";


export class CollectFlightLowestPriceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  lowestPriceFlightInfoList?: CollectFlightLowestPriceRequestLowestPriceFlightInfoList[];
  static names(): { [key: string]: string } {
    return {
      lowestPriceFlightInfoList: 'lowest_price_flight_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lowestPriceFlightInfoList: { 'type': 'array', 'itemType': CollectFlightLowestPriceRequestLowestPriceFlightInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.lowestPriceFlightInfoList)) {
      $dara.Model.validateArray(this.lowestPriceFlightInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

