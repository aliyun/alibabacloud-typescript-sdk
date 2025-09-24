// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProductListResponseBodyDataProductListProduct extends $dara.Model {
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * cdn
   */
  productCode?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * CDN (Pay-as-you-go)
   */
  productName?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * CDN
   */
  productType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      productName: 'ProductName',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      productName: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBodyDataProductList extends $dara.Model {
  product?: QueryProductListResponseBodyDataProductListProduct[];
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: { 'type': 'array', 'itemType': QueryProductListResponseBodyDataProductListProduct },
    };
  }

  validate() {
    if(Array.isArray(this.product)) {
      $dara.Model.validateArray(this.product);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The service definitions.
   */
  productList?: QueryProductListResponseBodyDataProductList;
  /**
   * @remarks
   * The total number of services.
   * 
   * @example
   * 449
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productList: 'ProductList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      productList: QueryProductListResponseBodyDataProductList,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.productList && typeof (this.productList as any).validate === 'function') {
      (this.productList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The information about all Alibaba Cloud services.
   */
  data?: QueryProductListResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * This API is not applicable for caller.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 94858229-2758-4663-A7D0-99490D541F15
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryProductListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

