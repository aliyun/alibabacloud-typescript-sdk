// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductsResponseBodyProductItemsProductItem extends $dara.Model {
  categoryId?: number;
  code?: string;
  deliveryDate?: string;
  deliveryWay?: string;
  imageUrl?: string;
  name?: string;
  operationSystem?: string;
  priceInfo?: string;
  score?: string;
  shortDescription?: string;
  suggestedPrice?: string;
  supplierId?: number;
  supplierName?: string;
  tags?: string;
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

