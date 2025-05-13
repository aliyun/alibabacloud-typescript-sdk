// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsResponseBodyProducts extends $dara.Model {
  hasPermissionToPurchase?: boolean;
  /**
   * @example
   * true
   */
  isPurchased?: boolean;
  /**
   * @example
   * DataWorks_isolate
   */
  productCode?: string;
  productInstanceId?: string;
  /**
   * @example
   * https://common-buy.aliy
   */
  purchaseUrl?: string;
  static names(): { [key: string]: string } {
    return {
      hasPermissionToPurchase: 'HasPermissionToPurchase',
      isPurchased: 'IsPurchased',
      productCode: 'ProductCode',
      productInstanceId: 'ProductInstanceId',
      purchaseUrl: 'PurchaseUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPermissionToPurchase: 'boolean',
      isPurchased: 'boolean',
      productCode: 'string',
      productInstanceId: 'string',
      purchaseUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

