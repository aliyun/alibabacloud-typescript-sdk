// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightListingSearchResponseBodyModuleFlightListFlightRuleListBaggageItemTips extends $dara.Model {
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i1/O1CN019zl3WZ22fNLxzx2cR_!!6000000007147-2-tps-125-45.png
   */
  logo?: string;
  tipsDesc?: string;
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i3/O1CN01rJxjw61f3bXNHAmlk_!!6000000003951-2-tps-1050-675.png
   */
  tipsImage?: string;
  static names(): { [key: string]: string } {
    return {
      logo: 'logo',
      tipsDesc: 'tips_desc',
      tipsImage: 'tips_image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logo: 'string',
      tipsDesc: 'string',
      tipsImage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

