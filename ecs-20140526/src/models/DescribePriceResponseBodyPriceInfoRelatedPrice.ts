// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePriceResponseBodyPriceInfoRelatedPriceMarketplaceImagePrice } from "./DescribePriceResponseBodyPriceInfoRelatedPriceMarketplaceImagePrice";


export class DescribePriceResponseBodyPriceInfoRelatedPrice extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Marketplace image price.
   */
  marketplaceImagePrice?: DescribePriceResponseBodyPriceInfoRelatedPriceMarketplaceImagePrice;
  static names(): { [key: string]: string } {
    return {
      marketplaceImagePrice: 'MarketplaceImagePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marketplaceImagePrice: DescribePriceResponseBodyPriceInfoRelatedPriceMarketplaceImagePrice,
    };
  }

  validate() {
    if(this.marketplaceImagePrice && typeof (this.marketplaceImagePrice as any).validate === 'function') {
      (this.marketplaceImagePrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

