// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupPriceResponseBodyPriceInfoSpotPricesSpotPrice } from "./DescribeContainerGroupPriceResponseBodyPriceInfoSpotPricesSpotPrice";


export class DescribeContainerGroupPriceResponseBodyPriceInfoSpotPrices extends $dara.Model {
  spotPrice?: DescribeContainerGroupPriceResponseBodyPriceInfoSpotPricesSpotPrice[];
  static names(): { [key: string]: string } {
    return {
      spotPrice: 'SpotPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotPrice: { 'type': 'array', 'itemType': DescribeContainerGroupPriceResponseBodyPriceInfoSpotPricesSpotPrice },
    };
  }

  validate() {
    if(Array.isArray(this.spotPrice)) {
      $dara.Model.validateArray(this.spotPrice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

