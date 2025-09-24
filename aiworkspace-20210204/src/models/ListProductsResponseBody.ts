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
  productId?: string;
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
      productId: 'ProductId',
      purchaseUrl: 'PurchaseUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPermissionToPurchase: 'boolean',
      isPurchased: 'boolean',
      productCode: 'string',
      productId: 'string',
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

export class ListProductsResponseBodyServices extends $dara.Model {
  /**
   * @example
   * true
   */
  isOpen?: boolean;
  openUrl?: string;
  /**
   * @example
   * oss
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      isOpen: 'IsOpen',
      openUrl: 'OpenUrl',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isOpen: 'boolean',
      openUrl: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $dara.Model {
  products?: ListProductsResponseBodyProducts[];
  /**
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  services?: ListProductsResponseBodyServices[];
  static names(): { [key: string]: string } {
    return {
      products: 'Products',
      requestId: 'RequestId',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      products: { 'type': 'array', 'itemType': ListProductsResponseBodyProducts },
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListProductsResponseBodyServices },
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

