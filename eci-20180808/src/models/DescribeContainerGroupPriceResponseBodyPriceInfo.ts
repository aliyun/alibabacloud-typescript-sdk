// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupPriceResponseBodyPriceInfoPrice } from "./DescribeContainerGroupPriceResponseBodyPriceInfoPrice";
import { DescribeContainerGroupPriceResponseBodyPriceInfoRules } from "./DescribeContainerGroupPriceResponseBodyPriceInfoRules";
import { DescribeContainerGroupPriceResponseBodyPriceInfoSpotPrices } from "./DescribeContainerGroupPriceResponseBodyPriceInfoSpotPrices";


export class DescribeContainerGroupPriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The price.
   */
  price?: DescribeContainerGroupPriceResponseBodyPriceInfoPrice;
  /**
   * @remarks
   * Details about the promotion rules.
   */
  rules?: DescribeContainerGroupPriceResponseBodyPriceInfoRules;
  /**
   * @remarks
   * The information about the prices of preemptible elastic container instances.
   */
  spotPrices?: DescribeContainerGroupPriceResponseBodyPriceInfoSpotPrices;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
      spotPrices: 'SpotPrices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeContainerGroupPriceResponseBodyPriceInfoPrice,
      rules: DescribeContainerGroupPriceResponseBodyPriceInfoRules,
      spotPrices: DescribeContainerGroupPriceResponseBodyPriceInfoSpotPrices,
    };
  }

  validate() {
    if(this.price && typeof (this.price as any).validate === 'function') {
      (this.price as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    if(this.spotPrices && typeof (this.spotPrices as any).validate === 'function') {
      (this.spotPrices as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

