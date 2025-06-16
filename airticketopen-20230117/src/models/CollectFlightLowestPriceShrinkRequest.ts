// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CollectFlightLowestPriceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  lowestPriceFlightInfoListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      lowestPriceFlightInfoListShrink: 'lowest_price_flight_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lowestPriceFlightInfoListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

