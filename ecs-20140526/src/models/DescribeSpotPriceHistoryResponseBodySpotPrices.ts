// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSpotPriceHistoryResponseBodySpotPricesSpotPriceType } from "./DescribeSpotPriceHistoryResponseBodySpotPricesSpotPriceType";


export class DescribeSpotPriceHistoryResponseBodySpotPrices extends $dara.Model {
  spotPriceType?: DescribeSpotPriceHistoryResponseBodySpotPricesSpotPriceType[];
  static names(): { [key: string]: string } {
    return {
      spotPriceType: 'SpotPriceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotPriceType: { 'type': 'array', 'itemType': DescribeSpotPriceHistoryResponseBodySpotPricesSpotPriceType },
    };
  }

  validate() {
    if(Array.isArray(this.spotPriceType)) {
      $dara.Model.validateArray(this.spotPriceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

