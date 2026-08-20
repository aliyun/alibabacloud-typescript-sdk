// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDistributionProductsLinkResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The code of the promoted product.
   * 
   * @example
   * cmapi000****
   */
  code?: string;
  /**
   * @remarks
   * The name of the promoted product.
   * 
   * @example
   * 测试商品
   */
  name?: string;
  /**
   * @remarks
   * The promotion link for the product. Note: The sample link is a test product link.
   * 
   * @example
   * https://market.aliyun.com/ad/adClick?param=QN%2BgAHA8mY%2BV1vSDtkNqyWG9G5uUX2Q8%2BJrC8wTzBo5YK7tTmm4Zdiz6nmmyLHMC5REAsq2viyeJYjBjVHno1HydPvHrVarNXQTMEzEmR8TRZaG2FsnzpszXKK2cMA69CUmF9qQpHqU%3D
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5BD09171-BF4D-18D8-890E-C70C067527BE
   */
  requestId?: string;
  /**
   * @remarks
   * The promotion link information for the promoted products.
   */
  result?: DescribeDistributionProductsLinkResponseBodyResult[];
  /**
   * @remarks
   * The success status indicator.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of promoted products.
   * 
   * @example
   * 51
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeDistributionProductsLinkResponseBodyResult },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

