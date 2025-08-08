// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductsResponseBodyProductItemsProductItem extends $dara.Model {
  /**
   * @example
   * 53398003
   */
  categoryId?: number;
  /**
   * @example
   * cmjj02****
   */
  code?: string;
  deliveryDate?: string;
  deliveryWay?: string;
  /**
   * @example
   * https://oss.aliyuncs.com/photogallery/photo/1904996544835414/7549/767d6d07-8366-4822-b84e-61f6ea10d146.png
   */
  imageUrl?: string;
  name?: string;
  /**
   * @example
   * windows
   */
  operationSystem?: string;
  /**
   * @example
   * {\\"DiscountPrice\\": 0.0, \\"TradePrice\\": 15750.0, \\"Currency\\": \\"CNY\\", \\"OriginalPrice\\": 15750.0, \\"RuleIds\\": {\\"RuleId\\": []}, \\"Coupons\\": {\\"Coupon\\": []}}
   */
  priceInfo?: string;
  /**
   * @example
   * 5.0
   */
  score?: string;
  shortDescription?: string;
  suggestedPrice?: string;
  /**
   * @example
   * 228399
   */
  supplierId?: number;
  supplierName?: string;
  tags?: string;
  /**
   * @example
   * /products/53616009/cmjj02****.html
   */
  targetUrl?: string;
  warrantyDate?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      code: 'Code',
      deliveryDate: 'DeliveryDate',
      deliveryWay: 'DeliveryWay',
      imageUrl: 'ImageUrl',
      name: 'Name',
      operationSystem: 'OperationSystem',
      priceInfo: 'PriceInfo',
      score: 'Score',
      shortDescription: 'ShortDescription',
      suggestedPrice: 'SuggestedPrice',
      supplierId: 'SupplierId',
      supplierName: 'SupplierName',
      tags: 'Tags',
      targetUrl: 'TargetUrl',
      warrantyDate: 'WarrantyDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      code: 'string',
      deliveryDate: 'string',
      deliveryWay: 'string',
      imageUrl: 'string',
      name: 'string',
      operationSystem: 'string',
      priceInfo: 'string',
      score: 'string',
      shortDescription: 'string',
      suggestedPrice: 'string',
      supplierId: 'number',
      supplierName: 'string',
      tags: 'string',
      targetUrl: 'string',
      warrantyDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBodyProductItems extends $dara.Model {
  productItem?: DescribeProductsResponseBodyProductItemsProductItem[];
  static names(): { [key: string]: string } {
    return {
      productItem: 'ProductItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productItem: { 'type': 'array', 'itemType': DescribeProductsResponseBodyProductItemsProductItem },
    };
  }

  validate() {
    if(Array.isArray(this.productItem)) {
      $dara.Model.validateArray(this.productItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  productItems?: DescribeProductsResponseBodyProductItems;
  /**
   * @example
   * A077D99E-0C4D-421E-A5D4-F533F6657817
   */
  requestId?: string;
  /**
   * @example
   * 75
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productItems: 'ProductItems',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      productItems: DescribeProductsResponseBodyProductItems,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.productItems && typeof (this.productItems as any).validate === 'function') {
      (this.productItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

