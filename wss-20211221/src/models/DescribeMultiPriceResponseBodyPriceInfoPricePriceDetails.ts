// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails } from "./DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails";
import { DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail } from "./DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail";


export class DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails extends $dara.Model {
  moduleDetails?: DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails[];
  /**
   * @example
   * 1
   */
  orderItem?: number;
  priceDetail?: DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail;
  static names(): { [key: string]: string } {
    return {
      moduleDetails: 'ModuleDetails',
      orderItem: 'OrderItem',
      priceDetail: 'PriceDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleDetails: { 'type': 'array', 'itemType': DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails },
      orderItem: 'number',
      priceDetail: DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail,
    };
  }

  validate() {
    if(Array.isArray(this.moduleDetails)) {
      $dara.Model.validateArray(this.moduleDetails);
    }
    if(this.priceDetail && typeof (this.priceDetail as any).validate === 'function') {
      (this.priceDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

