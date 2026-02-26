// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProductSaleInfo } from "./ProductSaleInfo";


export class ProductSaleInfoListResult extends $dara.Model {
  productSaleInfos?: ProductSaleInfo[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productSaleInfos: 'productSaleInfos',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productSaleInfos: { 'type': 'array', 'itemType': ProductSaleInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.productSaleInfos)) {
      $dara.Model.validateArray(this.productSaleInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

