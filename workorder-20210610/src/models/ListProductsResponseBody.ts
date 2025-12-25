// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsResponseBodyDataProductList extends $dara.Model {
  /**
   * @remarks
   * Alibaba Cloud product ID
   * 
   * @example
   * 7160
   */
  productId?: number;
  /**
   * @remarks
   * Alibaba Cloud product name
   * 
   * @example
   * ECS
   */
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'number',
      productName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the product catalog, which represents the product category, such as elastic computing
   * 
   * @example
   * 1
   */
  directoryId?: number;
  /**
   * @remarks
   * The name of the product catalog, which represents the product category, such as elastic computing
   * 
   * @example
   * ECS
   */
  directoryName?: string;
  /**
   * @remarks
   * List of Alibaba Cloud products
   */
  productList?: ListProductsResponseBodyDataProductList[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      productList: 'ProductList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'number',
      directoryName: 'string',
      productList: { 'type': 'array', 'itemType': ListProductsResponseBodyDataProductList },
    };
  }

  validate() {
    if(Array.isArray(this.productList)) {
      $dara.Model.validateArray(this.productList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code of the request result.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Return value, that is, product list
   */
  data?: ListProductsResponseBodyData[];
  /**
   * @remarks
   * The error message. If success is set to false, the message is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the API request. The requestID is unique for each call.
   * 
   * @example
   * AC0AB2EC-AFBC-44BA-AE77-132A5A1EC0AD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is normal.
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
      code: 'number',
      data: { 'type': 'array', 'itemType': ListProductsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

